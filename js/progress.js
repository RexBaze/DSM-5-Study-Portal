// ============================================================
// PROGRESS MANAGER
// ============================================================
const Progress = {
  KEY: 'dsm5_progress_v1',
  load() {
    try { return JSON.parse(localStorage.getItem(this.KEY) || '{}'); } catch(e) { return {}; }
  },
  save(data) {
    try { localStorage.setItem(this.KEY, JSON.stringify(data)); } catch(e) {}
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
