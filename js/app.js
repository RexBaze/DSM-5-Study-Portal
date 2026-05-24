// ============================================================
// INTERACTIONS
// ============================================================
function selectDisorder(id) {
  state.activeId = id;
  state.searchQuery = '';
  state.revealed = new Set();
  document.getElementById('searchInput').value = '';
  saveView();

  // Auto-open chapter
  const ch = findChapterForDisorder(id);
  if (ch) {
    const el = document.querySelector(`.chapter-block[data-chid="${ch.id}"]`);
    if (el && !el.classList.contains('open')) el.classList.add('open');
  }
  renderSidebar();
  renderContent();

  // Auto-close drawer on mobile after selecting
  if (window.innerWidth <= 768) closeDrawer();
}

function resetDisorder(id) {
  if (confirm('Reset progress for this disorder?')) {
    Progress.reset(id);
    renderSidebar();
    renderContent();
  }
}

// ============================================================
// VIEW STATE PERSISTENCE (survives reload)
// ============================================================
// Stores `{activeId, studyMode}` in localStorage. Restored in init().
const VIEW_KEY = 'dsm5_view_state';
function saveView() {
  try {
    localStorage.setItem(VIEW_KEY, JSON.stringify({
      activeId: state.activeId,
      studyMode: state.studyMode
    }));
  } catch (e) {}
}
function loadView() {
  try {
    const raw = localStorage.getItem(VIEW_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) { return null; }
}

// ============================================================
// THEME
// ============================================================
function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  try { localStorage.setItem('dsm5_theme', theme); } catch (e) {}
}
function currentTheme() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

// ============================================================
// INIT
// ============================================================
function init() {
  // Restore last-viewed disorder + study mode BEFORE the first render
  const saved = loadView();
  if (saved && typeof saved === 'object') {
    if (saved.activeId && findDisorder(saved.activeId)) state.activeId = saved.activeId;
    if (typeof saved.studyMode === 'boolean') state.studyMode = saved.studyMode;
  }

  renderSidebar();
  renderContent();

  // Search
  const searchInput = document.getElementById('searchInput');
  let searchTimer;
  searchInput.addEventListener('input', function() {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.searchQuery = this.value.trim();
      if (state.searchQuery.length > 1) {
        state.activeId = null;
        renderSidebar();
      }
      renderContent();
    }, 200);
  });

  // Desktop study mode toggle
  const studyToggleEl = document.getElementById('studyToggle');
  studyToggleEl.checked = state.studyMode;
  studyToggleEl.addEventListener('change', function() {
    state.studyMode = this.checked;
    state.revealed = new Set();
    saveView();
    document.getElementById('modeLeft').classList.toggle('mode-label-active', !state.studyMode);
    document.getElementById('modeRight').classList.toggle('mode-label-active', state.studyMode);
    renderContent();
    renderSidebar(); // re-render so mobile toggle stays in sync
  });

  // Theme toggle (light <-> dark)
  const themeToggleEl = document.getElementById('themeToggle');
  themeToggleEl.checked = currentTheme() === 'dark';
  themeToggleEl.addEventListener('change', function() {
    applyTheme(this.checked ? 'dark' : 'light');
    // Re-render sidebar so the mobile drawer mirror checkbox stays in sync
    renderSidebar();
  });

  // Initialize mode label
  document.getElementById('modeLeft').classList.toggle('mode-label-active', !state.studyMode);
  document.getElementById('modeRight').classList.toggle('mode-label-active', state.studyMode);

  // Re-render sidebar on window resize so layout switches cleanly
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Close drawer if resizing to desktop
      if (window.innerWidth > 768) closeDrawer();
      renderSidebar();
    }, 150);
  });

  // Flashcard keyboard shortcuts
  document.addEventListener('keydown', handleFlashcardKey);

  // Tap-outside-to-close for flashcard modal
  document.getElementById('flashcardModal').addEventListener('click', function(e) {
    if (e.target === this) closeFlashcards();
  });

  // Drive sync (no-op if Client ID not configured).
  // `Drive` is declared with `const` in drive.js so it's in the global lexical
  // env but not on `window` — check with typeof instead of window.Drive.
  if (typeof Drive !== 'undefined') {
    Drive.init();
    window.addEventListener('beforeunload', () => Drive.flushOnUnload());
  }
}

init();
