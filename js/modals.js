// ============================================================
// STATS MODAL
// ============================================================
function showStats() {
  const prog = Progress.load();
  const all = allDisorders();
  const attempted = all.filter(d => prog[d.id]).length;
  const mastered = all.filter(d => Progress.badge(d.id) === 'mastered').length;
  const learning = all.filter(d => Progress.badge(d.id) === 'learning').length;
  const totalQuizAttempts = Object.values(prog).reduce((a, p) => a + (p.attempts || 0), 0);
  const totalFlashAttempts = Object.values(prog).reduce((a, p) => a + ((p.flash && p.flash.attempts) || 0), 0);
  const modal = document.getElementById('statsContent');
  let html = `
    <div class="modal-hdr">
      <div class="modal-title">Progress Overview</div>
      <button class="modal-close" onclick="closeModal('statsModal')">&#10005;</button>
    </div>
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-val green">${mastered}</div><div class="stat-lbl">Mastered</div></div>
      <div class="stat-card"><div class="stat-val yellow">${learning}</div><div class="stat-lbl">Learning</div></div>
      <div class="stat-card"><div class="stat-val">${all.length - attempted}</div><div class="stat-lbl">Not Started</div></div>
    </div>
    <div class="sec-label">By Chapter <span style="font-size:11px;color:var(--muted);font-weight:400;text-transform:none;letter-spacing:0">· tap a row to expand</span></div>`;
  for (const ch of DSM5_DATA.chapters) {
    const total = ch.disorders.length;
    const mCount = ch.disorders.filter(d => Progress.badge(d.id) === 'mastered').length;
    const lCount = ch.disorders.filter(d => Progress.badge(d.id) === 'learning').length;
    const aCount = ch.disorders.filter(d => Progress.badge(d.id) === 'attempted').length;
    const mPct = total ? (mCount / total) * 100 : 0;
    const lPct = total ? (lCount / total) * 100 : 0;
    const aPct = total ? (aCount / total) * 100 : 0;
    html += `<div class="stats-ch-block" data-chid="${ch.id}">
      <div class="stats-ch-row" onclick="toggleStatsChapter('${ch.id}')">
        <span class="stats-ch-arr">&#9656;</span>
        <span class="ch-prog-name" style="display:flex;align-items:center;gap:6px"><span style="width:7px;height:7px;border-radius:50%;background:${ch.color};display:inline-block"></span>${ch.name}</span>
        <div class="ch-prog-bar segmented" title="${mCount} mastered · ${lCount} learning · ${aCount} attempted · ${total - mCount - lCount - aCount} not started">
          <div class="ch-prog-seg mastered" style="width:${mPct}%"></div>
          <div class="ch-prog-seg learning" style="width:${lPct}%"></div>
          <div class="ch-prog-seg attempted" style="width:${aPct}%"></div>
        </div>
        <span class="ch-prog-pct">${mCount}/${total}</span>
      </div>
      <div class="stats-ch-detail">`;
    for (const d of ch.disorders) {
      const p = prog[d.id];
      const badge = Progress.badge(d.id);
      const quizBest = p && typeof p.bestScore === 'number' ? Math.round(p.bestScore * 100) + '%' : '—';
      const flashBest = p && p.flash && typeof p.flash.bestScore === 'number' ? Math.round(p.flash.bestScore * 100) + '%' : '—';
      html += `<div class="stats-d-row" onclick="selectDisorder('${d.id}');closeModal('statsModal');">
        <span class="mbadge${badge ? ' ' + badge : ''}"></span>
        <span class="stats-d-name">${d.name}</span>
        <span class="stats-d-score" title="Quiz best score"><span class="stats-d-lbl">Q</span>${quizBest}</span>
        <span class="stats-d-score" title="Flashcard best score"><span class="stats-d-lbl">F</span>${flashBest}</span>
      </div>`;
    }
    html += `</div></div>`;
  }
  html += `<div style="margin-top:14px;font-size:11px;color:var(--muted)">Total attempts — Quiz: ${totalQuizAttempts} · Flash: ${totalFlashAttempts}</div>
    <div style="margin-top:10px;display:flex;gap:8px">
      <button class="btn btn-danger" onclick="if(confirm('Reset all progress? This cannot be undone.')){Progress.resetAll();closeModal('statsModal');renderSidebar();renderContent();}">Reset All Progress</button>
    </div>`;
  modal.innerHTML = html;
  document.getElementById('statsModal').style.display = 'flex';
}

function toggleStatsChapter(chId) {
  const block = document.querySelector(`.stats-ch-block[data-chid="${chId}"]`);
  if (block) block.classList.toggle('open');
}

// ============================================================
// EXPORT / IMPORT
// ============================================================
function showExport() {
  const json = Progress.exportJSON();
  document.getElementById('exportContent').innerHTML = `
    <div class="modal-hdr">
      <div class="modal-title">Export Progress</div>
      <button class="modal-close" onclick="closeModal('exportModal')">&#10005;</button>
    </div>
    <p style="font-size:12px;color:var(--muted);margin-bottom:12px">Copy this JSON to back up or transfer your progress data.</p>
    <textarea class="import-area" readonly style="height:200px" onclick="this.select()">${json}</textarea>
    <button class="btn btn-primary" onclick="navigator.clipboard&&navigator.clipboard.writeText(document.querySelector('#exportContent textarea').value).then(()=>alert('Copied!'))">Copy to Clipboard</button>`;
  document.getElementById('exportModal').style.display = 'flex';
}

function showImport() {
  document.getElementById('importContent').innerHTML = `
    <div class="modal-hdr">
      <div class="modal-title">Import Progress</div>
      <button class="modal-close" onclick="closeModal('importModal')">&#10005;</button>
    </div>
    <p style="font-size:12px;color:var(--muted);margin-bottom:12px">Paste previously exported progress JSON below. This will merge with existing progress.</p>
    <textarea class="import-area" id="importJson" placeholder="Paste JSON here..."></textarea>
    <div style="display:flex;gap:8px">
      <button class="btn btn-primary" onclick="doImport()" style="flex:1">Import</button>
      <button class="btn" onclick="closeModal('importModal')" style="flex:1">Cancel</button>
    </div>`;
  document.getElementById('importModal').style.display = 'flex';
}

function doImport() {
  const json = document.getElementById('importJson').value.trim();
  if (Progress.importJSON(json)) {
    closeModal('importModal');
    renderSidebar();
    renderContent();
    alert('Progress imported successfully.');
  } else {
    alert('Invalid JSON. Please check your data and try again.');
  }
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// ============================================================
// MOBILE DRAWER
// ============================================================
function toggleDrawer() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const btn = document.getElementById('hamburger');
  const isOpen = sidebar.classList.contains('drawer-open');
  if (isOpen) {
    closeDrawer();
  } else {
    sidebar.classList.add('drawer-open');
    overlay.classList.add('visible');
    btn.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeDrawer() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const btn = document.getElementById('hamburger');
  sidebar.classList.remove('drawer-open');
  overlay.classList.remove('visible');
  btn.classList.remove('open');
  document.body.style.overflow = '';
}

function mobileToggleStudy(el) {
  state.studyMode = el.checked;
  state.revealed = new Set();
  if (typeof saveView === 'function') saveView();
  // Sync the desktop toggle too
  const desktopToggle = document.getElementById('studyToggle');
  if (desktopToggle) desktopToggle.checked = state.studyMode;
  document.getElementById('modeLeft').classList.toggle('mode-label-active', !state.studyMode);
  document.getElementById('modeRight').classList.toggle('mode-label-active', state.studyMode);
  renderContent();
}

function mobileToggleTheme(el) {
  if (typeof applyTheme === 'function') applyTheme(el.checked ? 'dark' : 'light');
  // Sync the desktop toggle if visible
  const desktopThemeToggle = document.getElementById('themeToggle');
  if (desktopThemeToggle) desktopThemeToggle.checked = el.checked;
}
