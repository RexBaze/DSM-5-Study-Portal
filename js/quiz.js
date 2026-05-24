// ============================================================
// QUIZ ENGINE
// ============================================================
function startQuiz(disorderId) {
  const d = findDisorder(disorderId);
  if (!d) return;
  state.quizState = {
    disorder: d,
    phase: 'intro',
    scores: {},
    total: d.criteria.length
  };
  renderQuiz();
  document.getElementById('quizModal').style.display = 'flex';
}

function renderQuiz() {
  const qs = state.quizState;
  if (!qs) return;
  const modal = document.getElementById('quizContent');
  if (qs.phase === 'intro') {
    modal.innerHTML = `
      <div class="modal-hdr">
        <div class="modal-title">Quiz</div>
        <button class="modal-close" onclick="closeQuiz()">&#10005;</button>
      </div>
      <div class="quiz-phase-intro">
        <div class="qintro-disorder">${qs.disorder.name}</div>
        <div class="qintro-sub">${qs.disorder.code} &nbsp;·&nbsp; ${qs.disorder.chapterName}</div>
        <p style="font-size:12px;color:var(--muted);margin-bottom:14px;line-height:1.6;">Take a moment to mentally recall the diagnostic criteria before revealing them. Use the space below to jot your recall, then work through each criterion to self-assess.</p>
        <textarea class="quiz-recall-area" placeholder="Optional: write out the criteria from memory before revealing..."></textarea>
        <div style="display:flex;gap:8px">
          <button class="btn btn-primary" onclick="quizShowCriteria()" style="flex:1">Show Criteria for Self-Assessment</button>
          <button class="btn" onclick="closeQuiz()">Cancel</button>
        </div>
      </div>`;
  } else if (qs.phase === 'review') {
    const allAssessed = qs.disorder.criteria.every((_, i) => qs.scores[i] !== undefined);
    let html = `
      <div class="modal-hdr">
        <div class="modal-title">Self-Assess: ${qs.disorder.name}</div>
        <button class="modal-close" onclick="closeQuiz()">&#10005;</button>
      </div>
      <p style="font-size:11px;color:var(--muted);margin-bottom:12px">For each criterion, rate your recall honestly.</p>`;
    qs.disorder.criteria.forEach((cr, i) => {
      const sel = qs.scores[i];
      html += `<div class="quiz-crit-card">
        <div class="qcc-lbl">Criterion ${cr.label}</div>
        <div class="qcc-title">${cr.title}</div>
        <div class="qcc-text">${cr.text}</div>`;
      if (cr.subcriteria && cr.subcriteria.length) {
        for (const s of cr.subcriteria) {
          html += `<div class="qcc-sub"><span class="snum">${s.label}.</span><span>${s.text}</span></div>`;
        }
      }
      html += `<div class="assess-row">
        <button class="assess-btn knew${sel === 1 ? ' sel-knew' : ''}" onclick="scoreQuiz(${i}, 1)">&#10003; Got It</button>
        <button class="assess-btn partial${sel === 0.5 ? ' sel-partial' : ''}" onclick="scoreQuiz(${i}, 0.5)">&#8776; Partial</button>
        <button class="assess-btn missed${sel === 0 ? ' sel-missed' : ''}" onclick="scoreQuiz(${i}, 0)">&#10005; Missed</button>
      </div></div>`;
    });
    html += `<div style="display:flex;gap:8px;margin-top:4px">
      <button class="btn btn-primary" onclick="submitQuiz()" style="flex:1"${!allAssessed ? ' disabled style="flex:1;opacity:0.5;cursor:not-allowed"' : ''}>Save Results</button>
      <button class="btn" onclick="closeQuiz()">Cancel</button>
    </div>`;
    modal.innerHTML = html;
  } else if (qs.phase === 'summary') {
    const total = qs.disorder.criteria.length;
    const raw = Object.values(qs.scores).reduce((a, b) => a + b, 0);
    const score = total ? raw / total : 0;
    const pct = Math.round(score * 100);
    const cls = pct >= 85 ? 'green' : pct >= 60 ? 'yellow' : 'red';
    const knew = Object.values(qs.scores).filter(s => s === 1).length;
    const partial = Object.values(qs.scores).filter(s => s === 0.5).length;
    const missed = Object.values(qs.scores).filter(s => s === 0).length;
    const label = pct >= 85 ? 'Mastered' : pct >= 60 ? 'Learning' : 'Needs Work';
    modal.innerHTML = `
      <div class="modal-hdr">
        <div class="modal-title">Results</div>
        <button class="modal-close" onclick="closeQuiz()">&#10005;</button>
      </div>
      <div class="quiz-summary-score">
        <div class="qs-num ${cls}">${pct}%</div>
        <div class="qs-label">${qs.disorder.name} &nbsp;·&nbsp; ${label}</div>
        <div class="qs-breakdown">
          <div class="qs-bd-item"><div class="qs-bd-num" style="color:var(--green)">${knew}</div><div class="qs-bd-lbl">Got It</div></div>
          <div class="qs-bd-item"><div class="qs-bd-num" style="color:var(--yellow)">${partial}</div><div class="qs-bd-lbl">Partial</div></div>
          <div class="qs-bd-item"><div class="qs-bd-num" style="color:var(--red)">${missed}</div><div class="qs-bd-lbl">Missed</div></div>
        </div>
      </div>
      <div style="display:flex;gap:8px;margin-top:8px">
        <button class="btn btn-primary" onclick="startQuiz('${qs.disorder.id}')" style="flex:1">Retry</button>
        <button class="btn" onclick="closeQuiz()" style="flex:1">Done</button>
      </div>`;
  }
}

function quizShowCriteria() {
  state.quizState.phase = 'review';
  renderQuiz();
}

function scoreQuiz(idx, val) {
  state.quizState.scores[idx] = val;
  renderQuiz();
}

function submitQuiz() {
  const qs = state.quizState;
  const total = qs.disorder.criteria.length;
  const raw = Object.values(qs.scores).reduce((a, b) => a + b, 0);
  const score = total ? raw / total : 0;
  Progress.record(qs.disorder.id, score, total);
  qs.phase = 'summary';
  renderQuiz();
  renderSidebar();
  renderContent();
}

function closeQuiz() {
  document.getElementById('quizModal').style.display = 'none';
  state.quizState = null;
}
