// ============================================================
// PROGRESS MANAGER
// ============================================================
// Data is the per-disorder map in localStorage[KEY].
// A separate meta entry tracks updatedAt for last-write-wins sync.
// Drive (or any external syncer) subscribes by assigning Progress.onSync.
const Progress = {
  KEY: 'dsm5_progress_v1',
  META_KEY: 'dsm5_progress_meta_v1',
  onSync: null, // assigned by drive.js once auth is ready
  load() {
    try { return JSON.parse(localStorage.getItem(this.KEY) || '{}'); } catch(e) { return {}; }
  },
  updatedAt() {
    try {
      const m = JSON.parse(localStorage.getItem(this.META_KEY) || '{}');
      return typeof m.updatedAt === 'number' ? m.updatedAt : 0;
    } catch(e) { return 0; }
  },
  save(data) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(data));
      localStorage.setItem(this.META_KEY, JSON.stringify({ updatedAt: Date.now() }));
    } catch(e) {}
    if (typeof this.onSync === 'function') {
      try { this.onSync(); } catch(e) {}
    }
  },
  // Used by Drive to apply a remote snapshot without re-triggering sync.
  replaceFromRemote(data, remoteUpdatedAt) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(data || {}));
      localStorage.setItem(this.META_KEY, JSON.stringify({ updatedAt: remoteUpdatedAt || Date.now() }));
    } catch(e) {}
  },
  get(disorderId) {
    return this.load()[disorderId] || null;
  },
  record(disorderId, score, total) {
    const data = this.load();
    const prev = data[disorderId] || { attempts: 0, bestScore: 0 };
    data[disorderId] = {
      attempts: prev.attempts + 1,
      lastScore: score,
      bestScore: Math.max(prev.bestScore || 0, score),
      total,
      lastDate: new Date().toISOString()
    };
    this.save(data);
  },
  reset(disorderId) {
    const data = this.load();
    delete data[disorderId];
    this.save(data);
  },
  resetAll() {
    this.save({});
  },
  exportJSON() {
    return JSON.stringify(this.load(), null, 2);
  },
  importJSON(json) {
    try {
      const data = JSON.parse(json);
      if (typeof data === 'object' && data !== null) { this.save(data); return true; }
    } catch(e) {}
    return false;
  },
  badge(disorderId) {
    const p = this.get(disorderId);
    if (!p) return '';
    if (p.bestScore >= 0.85) return 'mastered';
    if (p.bestScore >= 0.60) return 'learning';
    return 'attempted';
  }
};

// ============================================================
// STATE
// ============================================================
let state = {
  activeId: null,
  studyMode: false,
  revealed: new Set(),
  searchQuery: '',
  quizState: null,
  flashState: null
};
