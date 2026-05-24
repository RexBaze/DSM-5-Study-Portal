// ============================================================
// INTERACTIONS
// ============================================================
function selectDisorder(id) {
  state.activeId = id;
  state.searchQuery = '';
  state.revealed = new Set();
  document.getElementById('searchInput').value = '';

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
// INIT
// ============================================================
function init() {
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
  document.getElementById('studyToggle').addEventListener('change', function() {
    state.studyMode = this.checked;
    state.revealed = new Set();
    document.getElementById('modeLeft').classList.toggle('mode-label-active', !state.studyMode);
    document.getElementById('modeRight').classList.toggle('mode-label-active', state.studyMode);
    renderContent();
    renderSidebar(); // re-render so mobile toggle stays in sync
  });

  // Initialize mode label
  document.getElementById('modeLeft').classList.add('mode-label-active');

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
