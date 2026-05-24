// ============================================================
// GOOGLE DRIVE SYNC (drive.appdata, browser-only OAuth)
// ============================================================
// Stores a single JSON blob in the per-app hidden appDataFolder.
// Conflict policy: last-write-wins on whole blob, keyed by updatedAt.
// Sign-in is opt-in; without it, the app behaves exactly as before
// (localStorage only). Once signed in, every Progress.save() schedules
// a debounced push so we batch rapid edits into one PATCH.
//
// To activate: replace CLIENT_ID below with the OAuth 2.0 Client ID
// you create in Google Cloud Console (Web application type, with
// `https://<your-username>.github.io` listed as an authorized
// JavaScript origin). The Client ID is NOT a secret — it ships
// in the browser by design.
const Drive = {
  CLIENT_ID: 'PASTE_YOUR_OAUTH_CLIENT_ID_HERE.apps.googleusercontent.com',
  SCOPE: 'https://www.googleapis.com/auth/drive.appdata',
  FILE_NAME: 'progress.json',
  PUSH_DEBOUNCE_MS: 4000,

  // ---- internal state ----
  _tokenClient: null,
  _accessToken: null,
  _tokenExpiry: 0,          // epoch ms
  _fileId: null,            // cached Drive fileId for FILE_NAME
  _pushTimer: null,
  _ready: false,            // GIS library loaded?
  _initStarted: false,
  _status: { kind: 'loading', label: 'Loading…' },

  // ---- lifecycle ----
  init() {
    if (this._initStarted) return;
    this._initStarted = true;
    if (!this.CLIENT_ID || this.CLIENT_ID.startsWith('PASTE_')) {
      this._setStatus('disabled', 'Drive sync disabled — no Client ID configured');
      return;
    }
    this._waitForGis().then(() => {
      this._tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: this.CLIENT_ID,
        scope: this.SCOPE,
        prompt: '',                       // empty = silent if previously consented
        callback: (resp) => this._onToken(resp)
      });
      this._ready = true;
      this._setStatus('signed_out', 'Sign in to sync');
      // Hook Progress.onSync so every local change schedules a push.
      Progress.onSync = () => this._schedulePush();
      // If a token was cached in sessionStorage during this tab, try restoring.
      this._restoreSessionToken();
    }).catch((err) => {
      console.warn('GIS failed to load', err);
      this._setStatus('error', 'Drive library failed to load');
    });
  },

  // GIS script is loaded async via <script src="...gsi/client" async defer>.
  // Wait for window.google.accounts.oauth2 to appear.
  _waitForGis() {
    return new Promise((resolve, reject) => {
      const start = Date.now();
      const tick = () => {
        if (window.google && window.google.accounts && window.google.accounts.oauth2) {
          resolve();
        } else if (Date.now() - start > 8000) {
          reject(new Error('timeout'));
        } else {
          setTimeout(tick, 80);
        }
      };
      tick();
    });
  },

  // ---- auth ----
  signIn() {
    if (!this._ready) return;
    // Empty prompt = silent if cached consent, else shows account chooser.
    this._tokenClient.requestAccessToken({ prompt: 'consent' });
  },

  signOut() {
    if (this._accessToken) {
      try { google.accounts.oauth2.revoke(this._accessToken, () => {}); } catch(e) {}
    }
    this._accessToken = null;
    this._tokenExpiry = 0;
    this._fileId = null;
    try { sessionStorage.removeItem('dsm5_drive_token'); } catch(e) {}
    this._setStatus('signed_out', 'Sign in to sync');
  },

  isSignedIn() {
    return !!this._accessToken && Date.now() < this._tokenExpiry;
  },

  _onToken(resp) {
    if (resp && resp.access_token) {
      this._accessToken = resp.access_token;
      // GIS responses give expires_in in seconds, default ~3600
      const ttl = (resp.expires_in || 3600) * 1000;
      this._tokenExpiry = Date.now() + ttl - 60_000; // 1-min safety margin
      try {
        sessionStorage.setItem('dsm5_drive_token', JSON.stringify({
          t: this._accessToken, e: this._tokenExpiry
        }));
      } catch(e) {}
      this._setStatus('syncing', 'Syncing…');
      this._initialMerge().then(() => {
        this._setStatus('synced', 'Synced');
      }).catch((err) => {
        console.warn('initial merge failed', err);
        this._setStatus('error', 'Sync error');
      });
    } else {
      this._setStatus('error', 'Sign-in failed');
    }
  },

  _restoreSessionToken() {
    try {
      const raw = sessionStorage.getItem('dsm5_drive_token');
      if (!raw) return;
      const { t, e } = JSON.parse(raw);
      if (typeof t === 'string' && typeof e === 'number' && Date.now() < e) {
        this._accessToken = t;
        this._tokenExpiry = e;
        this._setStatus('synced', 'Signed in');
      }
    } catch(e) {}
  },

  // Re-request a token silently (no popup) when ours is about to expire.
  _refreshToken() {
    return new Promise((resolve) => {
      if (!this._tokenClient) return resolve(false);
      const original = this._tokenClient.callback;
      this._tokenClient.callback = (resp) => {
        this._tokenClient.callback = original;
        this._onToken(resp);
        resolve(!!resp.access_token);
      };
      try {
        this._tokenClient.requestAccessToken({ prompt: '' });
      } catch (e) {
        resolve(false);
      }
    });
  },

  async _ensureToken() {
    if (this.isSignedIn()) return true;
    if (this._accessToken) {
      // Have a stale token — try silent refresh.
      return await this._refreshToken();
    }
    return false;
  },

  // ---- conflict resolution on sign-in ----
  async _initialMerge() {
    const remote = await this._readRemote();
    const localUpdatedAt = Progress.updatedAt();
    const remoteUpdatedAt = remote ? (remote.updatedAt || 0) : 0;

    if (!remote) {
      // Drive has nothing yet → push local (even if empty, establishes the file)
      await this._writeRemote(Progress.load(), Date.now());
      return;
    }
    if (remoteUpdatedAt > localUpdatedAt) {
      // Remote is newer → adopt it locally. Skip onSync (don't loop).
      Progress.replaceFromRemote(remote.data || {}, remoteUpdatedAt);
      if (typeof renderSidebar === 'function') renderSidebar();
      if (typeof renderContent === 'function') renderContent();
    } else if (localUpdatedAt > remoteUpdatedAt) {
      // Local is newer → push.
      await this._writeRemote(Progress.load(), localUpdatedAt);
    }
    // If equal → no-op.
  },

  // ---- debounced push ----
  _schedulePush() {
    if (!this.isSignedIn()) return;
    if (this._pushTimer) clearTimeout(this._pushTimer);
    this._setStatus('pending', 'Pending sync…');
    this._pushTimer = setTimeout(() => {
      this._pushTimer = null;
      this._pushNow();
    }, this.PUSH_DEBOUNCE_MS);
  },

  async _pushNow() {
    if (!(await this._ensureToken())) {
      this._setStatus('signed_out', 'Sign in to sync');
      return;
    }
    this._setStatus('syncing', 'Syncing…');
    try {
      await this._writeRemote(Progress.load(), Progress.updatedAt() || Date.now());
      this._setStatus('synced', 'Synced');
    } catch (err) {
      console.warn('push failed', err);
      this._setStatus('error', 'Sync error');
    }
  },

  // Force a flush on tab close so a quick session doesn't lose its tail.
  flushOnUnload() {
    if (this._pushTimer && this.isSignedIn()) {
      clearTimeout(this._pushTimer);
      this._pushTimer = null;
      // Best-effort synchronous push using sendBeacon-style approach.
      // The Drive REST API needs a multipart upload, which doesn't fit
      // sendBeacon's blob contract cleanly; instead we do a sync XHR.
      this._writeRemoteSync(Progress.load(), Progress.updatedAt() || Date.now());
    }
  },

  // ---- Drive REST ----
  async _findFileId() {
    if (this._fileId) return this._fileId;
    const url = 'https://www.googleapis.com/drive/v3/files'
      + '?spaces=appDataFolder'
      + '&fields=files(id,name,modifiedTime)'
      + `&q=${encodeURIComponent(`name = '${this.FILE_NAME}'`)}`;
    const res = await fetch(url, {
      headers: { 'Authorization': 'Bearer ' + this._accessToken }
    });
    if (!res.ok) throw new Error('list files: ' + res.status);
    const json = await res.json();
    const f = (json.files || [])[0];
    this._fileId = f ? f.id : null;
    return this._fileId;
  },

  async _readRemote() {
    const id = await this._findFileId();
    if (!id) return null;
    const res = await fetch(
      `https://www.googleapis.com/drive/v3/files/${id}?alt=media`,
      { headers: { 'Authorization': 'Bearer ' + this._accessToken } }
    );
    if (res.status === 404) return null;
    if (!res.ok) throw new Error('read file: ' + res.status);
    return await res.json();
  },

  async _writeRemote(data, updatedAt) {
    const body = JSON.stringify({ data: data || {}, updatedAt: updatedAt || Date.now() });
    const id = await this._findFileId();
    if (id) {
      // Update existing file: PATCH /upload/.../files/{id}?uploadType=media
      const res = await fetch(
        `https://www.googleapis.com/upload/drive/v3/files/${id}?uploadType=media`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': 'Bearer ' + this._accessToken,
            'Content-Type': 'application/json'
          },
          body
        }
      );
      if (!res.ok) throw new Error('update file: ' + res.status);
      return;
    }
    // Create new file: multipart upload, parents = ['appDataFolder']
    const boundary = 'dsm5_boundary_' + Math.random().toString(36).slice(2);
    const metadata = { name: this.FILE_NAME, parents: ['appDataFolder'] };
    const multipart =
      `--${boundary}\r\n` +
      `Content-Type: application/json; charset=UTF-8\r\n\r\n` +
      JSON.stringify(metadata) + `\r\n` +
      `--${boundary}\r\n` +
      `Content-Type: application/json\r\n\r\n` +
      body + `\r\n` +
      `--${boundary}--`;
    const res = await fetch(
      'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id',
      {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + this._accessToken,
          'Content-Type': 'multipart/related; boundary=' + boundary
        },
        body: multipart
      }
    );
    if (!res.ok) throw new Error('create file: ' + res.status);
    const json = await res.json();
    this._fileId = json.id;
  },

  // Synchronous version used in beforeunload; best-effort.
  _writeRemoteSync(data, updatedAt) {
    if (!this._fileId || !this._accessToken) return;
    try {
      const xhr = new XMLHttpRequest();
      xhr.open(
        'PATCH',
        `https://www.googleapis.com/upload/drive/v3/files/${this._fileId}?uploadType=media`,
        false // synchronous
      );
      xhr.setRequestHeader('Authorization', 'Bearer ' + this._accessToken);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify({ data: data || {}, updatedAt: updatedAt || Date.now() }));
    } catch (e) {}
  },

  // ---- status indicator ----
  _setStatus(kind, label) {
    this._status = { kind, label };
    this.refreshUI();
  },

  // Re-apply current status to every matching element. Render code calls this
  // after rebuilding the sidebar so the mobile drawer mirror stays in sync.
  refreshUI() {
    const { kind, label } = this._status;
    document.querySelectorAll('.drive-status').forEach(el => {
      el.dataset.kind = kind;
      el.textContent = label;
    });
    const signedIn = kind === 'synced' || kind === 'syncing' || kind === 'pending';
    document.querySelectorAll('.drive-sign-btn').forEach(btn => {
      btn.textContent = signedIn ? 'Sign out' : 'Sign in';
      btn.onclick = signedIn ? () => this.signOut() : () => this.signIn();
      btn.disabled = (kind === 'disabled' || kind === 'loading');
      // Hide the button entirely when Drive is disabled (no Client ID) or still loading
      btn.style.display = (kind === 'disabled' || kind === 'loading') ? 'none' : '';
      if (kind === 'disabled') btn.title = 'Drive sync not configured';
      else btn.removeAttribute('title');
    });
  }
};
