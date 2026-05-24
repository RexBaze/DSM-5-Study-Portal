// ============================================================
// FLASHCARD DECK BUILDER
// Generates a comprehensive deck from criteria + curated extras.
// ============================================================
function buildDeck(disorder) {
  const cards = [];
  const dn = disorder.name;

  // Overview card
  cards.push({
    front: `What disorder has DSM-5 code ${disorder.code} in the ${disorder.chapterName || ''} chapter?`,
    back: dn,
    tag: 'overview'
  });

  // Criterion cards + subcriteria enumeration cards
  for (const cr of disorder.criteria) {
    cards.push({
      front: `${dn} — Criterion ${cr.label}: ${cr.title}`,
      back: cr.text,
      tag: 'criterion'
    });
    if (cr.subcriteria && cr.subcriteria.length) {
      const list = cr.subcriteria.map(s =>
        `<span class="fcb-sub"><span class="fcb-num">${s.label}.</span> ${s.text}</span>`
      ).join('');
      cards.push({
        front: `${dn} — Criterion ${cr.label} requires which ${cr.subcriteria.length} items?`,
        back: list,
        tag: 'list',
        isHtml: true
      });
    }
  }

  // Duration
  if (disorder.duration) {
    cards.push({
      front: `Duration / timeframe for ${dn}?`,
      back: disorder.duration,
      tag: 'duration'
    });
  }

  // Exclusions / differentials
  if (disorder.exclusions) {
    cards.push({
      front: `Key exclusions and differentials for ${dn}?`,
      back: disorder.exclusions,
      tag: 'differential'
    });
  }

  // Specifiers
  if (disorder.specifiers && disorder.specifiers.length) {
    const list = disorder.specifiers.map(s => `<span class="fcb-sub">• ${s}</span>`).join('');
    cards.push({
      front: `Specifiers available for ${dn}?`,
      back: list,
      tag: 'specifier',
      isHtml: true
    });
  }

  // Curated extras (mnemonics, pearls, differentials)
  const extras = FLASHCARDS_EXTRA[disorder.id] || [];
  for (const ex of extras) {
    cards.push({
      front: ex.front,
      back: ex.back,
      tag: ex.tag || 'pearl'
    });
  }

  return cards;
}

// ============================================================
// FLASHCARD ENGINE
// ============================================================
function startFlashcards(disorderId) {
  const d = findDisorder(disorderId);
  if (!d) return;
  const deck = buildDeck(d);
  if (!deck.length) return;
  state.flashState = {
    disorder: d,
    deck,
    index: 0,
    revealed: false,
    marks: {},          // index -> 'knew' | 'review'
    reviewOnly: false,
    done: false
  };
  renderFlashcard();
  document.getElementById('flashcardModal').style.display = 'flex';
}

function renderFlashcard() {
  const fs = state.flashState;
  if (!fs) return;
  const modal = document.getElementById('flashcardContent');

  if (fs.done) {
    const knew = Object.values(fs.marks).filter(m => m === 'knew').length;
    const review = Object.values(fs.marks).filter(m => m === 'review').length;
    const unrated = fs.deck.length - knew - review;
    const pct = fs.deck.length ? Math.round((knew / fs.deck.length) * 100) : 0;

    // Record best score on full-deck runs only. Review-only sessions cover a
    // biased subset and would inflate the best, so they don't count.
    const prevFlash = Progress.getFlash(fs.disorder.id);
    const prevBestPct = prevFlash ? Math.round(prevFlash.bestScore * 100) : null;
    if (!fs.reviewOnly && !fs.scoreSaved && fs.deck.length > 0) {
      Progress.recordFlashcard(fs.disorder.id, knew, fs.deck.length);
      fs.scoreSaved = true;
    }
    const flashAfter = Progress.getFlash(fs.disorder.id);
    const bestPct = flashAfter ? Math.round(flashAfter.bestScore * 100) : null;
    const isNewBest = !fs.reviewOnly && fs.scoreSaved && bestPct !== null && (prevBestPct === null || pct > prevBestPct);

    let bestLine = '';
    if (fs.reviewOnly) {
      bestLine = `<div style="font-size:12px;color:var(--muted);margin-top:6px">Review session — best score not updated</div>`;
    } else if (isNewBest) {
      bestLine = `<div style="font-size:13px;color:var(--green);margin-top:6px;font-weight:600">&#9733; New best score!</div>`;
    } else if (bestPct !== null) {
      bestLine = `<div style="font-size:12px;color:var(--muted);margin-top:6px">Best: ${bestPct}%</div>`;
    }

    modal.innerHTML = `
      <div class="modal-hdr">
        <div class="modal-title">Deck Complete</div>
        <button class="modal-close" onclick="closeFlashcards()">&#10005;</button>
      </div>
      <div class="fc-summary">
        <div class="fc-sum-num">${pct}%</div>
        <div style="font-size:12px;color:var(--muted);margin-top:4px">${fs.disorder.name}</div>
        ${bestLine}
        <div class="fc-sum-row">
          <div class="fc-sum-item"><div class="n" style="color:var(--green)">${knew}</div><div class="l">Knew</div></div>
          <div class="fc-sum-item"><div class="n" style="color:var(--red)">${review}</div><div class="l">Review</div></div>
          <div class="fc-sum-item"><div class="n" style="color:var(--muted)">${unrated}</div><div class="l">Unrated</div></div>
        </div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${review > 0 ? `<button class="btn btn-primary" onclick="reviewMissed()" style="flex:1;min-width:140px">Review ${review} Missed</button>` : ''}
        <button class="btn" onclick="restartFlashcards()" style="flex:1;min-width:120px">Restart Full Deck</button>
        <button class="btn" onclick="closeFlashcards()" style="flex:1;min-width:80px">Done</button>
      </div>`;
    return;
  }

  const card = fs.deck[fs.index];
  const pct = ((fs.index + 1) / fs.deck.length) * 100;
  const mark = fs.marks[fs.index];
  const backHtml = card.isHtml ? card.back : escapeHtml(card.back);
  const front = escapeHtml(card.front);

  modal.innerHTML = `
    <div class="modal-hdr">
      <div class="modal-title">Flash Cards &nbsp;<span style="font-size:12px;color:var(--muted);font-weight:400">· ${fs.disorder.name}</span></div>
      <button class="modal-close" onclick="closeFlashcards()">&#10005;</button>
    </div>
    <div class="fc-hdr-row">
      <span class="fc-counter">${fs.index + 1} / ${fs.deck.length}${fs.reviewOnly ? ' (review)' : ''}</span>
      <span class="fc-tag ${card.tag}">${card.tag}</span>
      <div class="fc-progress"><div class="fc-progress-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="fc-card" onclick="${fs.revealed ? '' : 'flipFlashcard()'}">
      <div class="fc-front">${front}</div>
      ${fs.revealed
        ? `<hr class="fc-divider"><div class="fc-back">${backHtml}</div>`
        : `<div class="fc-reveal-wrap"><button class="fc-reveal-btn" onclick="event.stopPropagation();flipFlashcard()">&#9678; Click card or press Space to reveal</button></div>`}
    </div>
    ${fs.revealed ? `
      <div class="fc-mark-row">
        <button class="fc-mark-btn review${mark === 'review' ? ' marked' : ''}" onclick="markFlashcard('review')">&#10005; Review Again</button>
        <button class="fc-mark-btn knew${mark === 'knew' ? ' marked' : ''}" onclick="markFlashcard('knew')">&#10003; Knew It</button>
      </div>` : ''}
    <div class="fc-nav-row">
      <button class="btn" onclick="navFlashcard(-1)"${fs.index === 0 ? ' disabled' : ''}>&#9664; Prev</button>
      <button class="btn" onclick="shuffleFlashcards()">&#8645; Shuffle</button>
      <button class="btn ${fs.index === fs.deck.length - 1 ? 'btn-primary' : ''}" onclick="navFlashcard(1)">${fs.index === fs.deck.length - 1 ? 'Finish' : 'Next &#9654;'}</button>
    </div>
    <div class="fc-hint">Keyboard: Space = flip · &#8592;/&#8594; = prev/next · 1 = review · 2 = knew · Esc = close</div>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function flipFlashcard() {
  if (!state.flashState) return;
  state.flashState.revealed = !state.flashState.revealed;
  renderFlashcard();
}

function navFlashcard(delta) {
  const fs = state.flashState;
  if (!fs) return;
  const next = fs.index + delta;
  if (next < 0) return;
  if (next >= fs.deck.length) {
    fs.done = true;
    renderFlashcard();
    return;
  }
  fs.index = next;
  fs.revealed = false;
  renderFlashcard();
}

function markFlashcard(kind) {
  const fs = state.flashState;
  if (!fs) return;
  fs.marks[fs.index] = fs.marks[fs.index] === kind ? undefined : kind;
  renderFlashcard();
}

function shuffleFlashcards() {
  const fs = state.flashState;
  if (!fs) return;
  // Fisher-Yates shuffle; marks are tied to indices, so reset them
  for (let i = fs.deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fs.deck[i], fs.deck[j]] = [fs.deck[j], fs.deck[i]];
  }
  fs.marks = {};
  fs.index = 0;
  fs.revealed = false;
  renderFlashcard();
}

function reviewMissed() {
  const fs = state.flashState;
  if (!fs) return;
  const review = fs.deck.filter((_, i) => fs.marks[i] === 'review');
  if (!review.length) return;
  fs.deck = review;
  fs.index = 0;
  fs.revealed = false;
  fs.marks = {};
  fs.done = false;
  fs.reviewOnly = true;
  renderFlashcard();
}

function restartFlashcards() {
  const fs = state.flashState;
  if (!fs) return;
  startFlashcards(fs.disorder.id);
}

function closeFlashcards() {
  document.getElementById('flashcardModal').style.display = 'none';
  state.flashState = null;
}

function handleFlashcardKey(e) {
  if (!state.flashState) return;
  const overlay = document.getElementById('flashcardModal');
  if (overlay.style.display === 'none') return;
  if (e.key === 'Escape') { closeFlashcards(); e.preventDefault(); return; }
  if (state.flashState.done) return;
  if (e.key === ' ') { flipFlashcard(); e.preventDefault(); }
  else if (e.key === 'ArrowRight') { navFlashcard(1); e.preventDefault(); }
  else if (e.key === 'ArrowLeft') { navFlashcard(-1); e.preventDefault(); }
  else if (state.flashState.revealed && e.key === '1') { markFlashcard('review'); e.preventDefault(); }
  else if (state.flashState.revealed && e.key === '2') { markFlashcard('knew'); e.preventDefault(); }
}
