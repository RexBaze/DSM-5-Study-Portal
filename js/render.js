// Splits a multi-sentence string into individual sentences for bullet rendering.
// Lookahead on `period + whitespace + capital letter` avoids breaking on
// abbreviations like "e.g.," and "i.e.," which are followed by a comma.
function bulletize(text) {
  if (!text) return [];
  return text.split(/\.\s+(?=[A-Z])/)
    .map(s => s.trim())
    .filter(Boolean)
    .map(s => s.endsWith('.') ? s : s + '.');
}

// ============================================================
// SIDEBAR
// ============================================================
function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  const isMobile = window.innerWidth <= 768;

  let inner = '<div class="sidebar-header">Diagnostic Categories</div>';
  for (const ch of DSM5_DATA.chapters) {
    const total = ch.disorders.length;
    const mastered = ch.disorders.filter(d => Progress.badge(d.id) === 'mastered').length;
    const isOpen = ch.disorders.some(d => d.id === state.activeId);
    inner += `<div class="chapter-block${isOpen ? ' open' : ''}" data-chid="${ch.id}">
      <div class="chapter-hdr" onclick="toggleChapter('${ch.id}')">
        <span class="ch-dot" style="background:${ch.color}"></span>
        <span class="ch-name">${ch.name}</span>
        <span class="ch-pct">${mastered}/${total}</span>
        <span class="ch-arr">&#9656;</span>
      </div>
      <div class="disorder-list">`;
    for (const d of ch.disorders) {
      const badge = Progress.badge(d.id);
      inner += `<div class="d-item${d.id === state.activeId ? ' active' : ''}" onclick="selectDisorder('${d.id}')">
        <span class="mbadge${badge ? ' ' + badge : ''}"></span>
        <span class="d-name">${d.name}</span>
      </div>`;
    }
    inner += `</div></div>`;
  }

  if (isMobile) {
    const modeL = !state.studyMode ? 'color:var(--text);font-weight:500' : '';
    const modeR = state.studyMode ? 'color:var(--text);font-weight:500' : '';
    sidebar.innerHTML = `
      <div class="sidebar-scroll">${inner}</div>
      <div class="mobile-mode-wrap">
        <span>Study Mode</span>
        <div class="mobile-mode-inner">
          <span style="font-size:11px;${modeL}">Reference</span>
          <label class="toggle">
            <input type="checkbox" id="studyToggleMobile" ${state.studyMode ? 'checked' : ''} onchange="mobileToggleStudy(this)" />
            <span class="tslider"></span>
          </label>
          <span style="font-size:11px;${modeR}">Study</span>
        </div>
      </div>
      <div class="sidebar-footer">
        <div style="display:flex;align-items:center;gap:8px">
          <span class="drive-status" data-kind="loading" style="flex:1">Loading…</span>
          <button class="btn drive-sign-btn" disabled>Sign in</button>
        </div>
        <button class="btn" onclick="showStats();closeDrawer()">&#9723; Progress</button>
        <button class="btn" onclick="showExport();closeDrawer()">Export Progress</button>
        <button class="btn" onclick="showImport();closeDrawer()">Import Progress</button>
      </div>`;
  } else {
    sidebar.innerHTML = inner;
  }
  if (window.Drive && typeof Drive.refreshUI === 'function') Drive.refreshUI();
}

function toggleChapter(chId) {
  const el = document.querySelector(`.chapter-block[data-chid="${chId}"]`);
  if (el) el.classList.toggle('open');
}

// ============================================================
// DISORDER CARD
// ============================================================
function renderContent() {
  const content = document.getElementById('content');
  if (state.searchQuery.length > 1) {
    content.innerHTML = renderSearch(state.searchQuery);
    return;
  }
  if (!state.activeId) {
    content.innerHTML = `<div class="empty">
      <div class="empty-icon">&#9886;</div>
      <h2>DSM-5 Study Portal</h2>
      <p>Select a disorder from the left panel to view diagnostic criteria, or use search to find specific symptoms.</p>
    </div>`;
    return;
  }
  const d = findDisorder(state.activeId);
  if (!d) { content.innerHTML = '<div class="empty"><p>Disorder not found.</p></div>'; return; }
  const prog = Progress.get(d.id);
  const badge = Progress.badge(d.id);
  const scoreClass = badge === 'mastered' ? 'green' : badge === 'learning' ? 'yellow' : badge === 'attempted' ? 'red' : 'none';
  const scoreText = prog ? Math.round(prog.bestScore * 100) + '%' : '--';

  let html = `<div class="disorder-card">
    <div class="dcard-top">
      <div class="dcard-top-left">
        <div class="dcode">${d.code} &nbsp;·&nbsp; ${d.chapterName || ''}</div>
        <div class="dtitle">${d.name}</div>
        <div class="dtags">
          ${d.criteria.length} criteria
          ${d.specifiers && d.specifiers.length ? `<span class="tag">${d.specifiers.length} specifiers</span>` : ''}
          ${prog ? `<span class="tag">${prog.attempts} quiz attempt${prog.attempts !== 1 ? 's' : ''}</span>` : ''}
        </div>
      </div>
      <div class="dcard-actions">
        ${state.studyMode ? `<button class="btn" onclick="revealAll()">Reveal All</button>` : ''}
        <button class="btn" onclick="startFlashcards('${d.id}')">&#9783; Flash Cards</button>
        <button class="btn btn-primary" onclick="startQuiz('${d.id}')">Quiz Me</button>
        ${prog ? `<button class="btn btn-danger" onclick="resetDisorder('${d.id}')">Reset</button>` : ''}
      </div>
    </div>`;

  // Mastery bar
  html += `<div class="mastery-row">
    <span class="mastery-label">Best Score</span>
    <span class="mastery-score ${scoreClass}">${scoreText}</span>
    <span class="mastery-sep">|</span>
    <span class="mastery-detail">${prog ? `Last attempt: ${new Date(prog.lastDate).toLocaleDateString()}` : 'Not yet attempted'}</span>
    ${state.studyMode ? '<span class="mastery-sep">|</span><span class="mastery-detail" style="color:var(--accent)">&#9670; Study Mode Active</span>' : ''}
  </div>`;

  // Criteria
  html += `<div class="sec-label">Diagnostic Criteria</div>`;
  for (const cr of d.criteria) {
    const revKey = `${d.id}-${cr.label}`;
    const isRevealed = !state.studyMode || state.revealed.has(revKey);
    html += `<div class="crit-block">
      <div class="crit-hdr">
        <div class="clabel">${cr.label.length > 2 ? cr.label.substring(0,2) : cr.label}</div>
        <div class="crit-meta">
          <div class="ctitle">${cr.title}</div>`;
    if (!state.studyMode) {
      html += `<div class="ctext">${cr.text}</div>`;
      if (cr.subcriteria && cr.subcriteria.length) {
        html += `<div class="sub-list">`;
        for (const s of cr.subcriteria) {
          html += `<div class="sub-item"><span class="slabel">${s.label}.</span><span class="stext">${s.text}</span></div>`;
        }
        html += `</div>`;
      }
    }
    html += `</div></div>`;
    if (state.studyMode) {
      if (isRevealed) {
        html += `<div class="crit-reveal"><div class="ctext">${cr.text}</div>`;
        if (cr.subcriteria && cr.subcriteria.length) {
          html += `<div class="sub-list">`;
          for (const s of cr.subcriteria) {
            html += `<div class="sub-item"><span class="slabel">${s.label}.</span><span class="stext">${s.text}</span></div>`;
          }
          html += `</div>`;
        }
        html += `</div>`;
      } else {
        html += `<div class="reveal-row"><button class="reveal-btn" onclick="revealCriterion('${revKey}')">&#9679; Click to reveal criterion text</button></div>`;
      }
    }
    html += `</div>`;
  }

  // Duration & Exclusions — bullet-pointed
  if (d.duration || d.exclusions) {
    html += `<div class="sec-label">Clinical Notes</div><div class="info-grid">`;
    if (d.duration) {
      html += `<div class="info-block"><div class="ibtitle">Duration / Timeframe</div><ul class="iblist">`;
      for (const s of bulletize(d.duration)) html += `<li>${s}</li>`;
      html += `</ul></div>`;
    }
    if (d.exclusions) {
      html += `<div class="info-block${!d.duration ? ' full' : ''}"><div class="ibtitle">Exclusions / Differentials</div><ul class="iblist">`;
      for (const s of bulletize(d.exclusions)) html += `<li>${s}</li>`;
      html += `</ul></div>`;
    }
    html += `</div>`;
  }

  // Specifiers
  if (d.specifiers && d.specifiers.length) {
    html += `<div class="sec-label">Specifiers</div><div class="info-block full"><ul class="iblist">`;
    for (const s of d.specifiers) html += `<li>${s}</li>`;
    html += `</ul></div>`;
  }

  // Medications (FDA-approved per DailyMed)
  const meds = (typeof MEDICATIONS !== 'undefined') ? MEDICATIONS[d.id] : null;
  if (meds) {
    html += `<div class="sec-label">Common Medications</div>`;
    html += `<div class="info-block full">`;
    html += `<div class="med-disclaimer">Educational reference — FDA-approved indications only, per <a href="https://dailymed.nlm.nih.gov/dailymed/" target="_blank" rel="noopener">DailyMed</a>. Verify dosing and current labeling before clinical use.</div>`;
    if (meds.note) {
      html += `<div class="med-note">${meds.note}</div>`;
    }
    if (meds.classes && meds.classes.length) {
      for (const cls of meds.classes) {
        html += `<div class="med-class"><div class="med-class-name">${cls.name}</div><ul class="med-list">`;
        for (const drug of cls.drugs) {
          const brandStr = drug.brand && drug.brand.length
            ? ` <span class="med-brand">(${drug.brand.join(', ')})</span>` : '';
          const searchUrl = `https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=${encodeURIComponent(drug.generic)}&searchtype=all`;
          html += `<li><span class="med-generic">${drug.generic}</span>${brandStr} <a href="${searchUrl}" target="_blank" rel="noopener" class="med-link" title="Open DailyMed search for ${escapeHtml(drug.generic)}" aria-label="DailyMed label">↗</a></li>`;
        }
        html += `</ul></div>`;
      }
    }
    html += `</div>`;
  }

  html += `</div>`;
  content.innerHTML = html;
  content.scrollTop = 0;
}

// ============================================================
// SEARCH
// ============================================================
function renderSearch(query) {
  const q = query.toLowerCase();
  const results = [];
  for (const ch of DSM5_DATA.chapters) {
    for (const d of ch.disorders) {
      let snippet = '';
      let matches = false;
      if (d.name.toLowerCase().includes(q)) { matches = true; snippet = d.name; }
      for (const cr of d.criteria) {
        if (cr.title.toLowerCase().includes(q) || cr.text.toLowerCase().includes(q)) {
          matches = true;
          if (!snippet) snippet = cr.title;
        }
        if (cr.subcriteria) {
          for (const s of cr.subcriteria) {
            if (s.text.toLowerCase().includes(q)) {
              matches = true;
              if (!snippet) snippet = s.text.substring(0, 120) + '...';
            }
          }
        }
      }
      // Match generic and brand medication names too
      const meds = (typeof MEDICATIONS !== 'undefined') ? MEDICATIONS[d.id] : null;
      if (meds && meds.classes) {
        for (const cls of meds.classes) {
          for (const drug of cls.drugs) {
            const hit = drug.generic.toLowerCase().includes(q)
              || (drug.brand && drug.brand.some(b => b.toLowerCase().includes(q)));
            if (hit) {
              matches = true;
              if (!snippet) snippet = `${drug.generic}${drug.brand && drug.brand.length ? ' (' + drug.brand.join(', ') + ')' : ''} — ${cls.name}`;
            }
          }
        }
      }
      if (matches) {
        const hl = snippet.replace(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<span class="hl">$1</span>');
        results.push({ d, ch, snippet: hl });
      }
    }
  }
  if (!results.length) return `<div class="search-results"><div class="sr-empty">No results found for "<strong>${query}</strong>"</div></div>`;
  let html = `<div class="search-results"><div class="sec-label">${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"</div>`;
  for (const r of results) {
    html += `<div class="sr-item" onclick="selectDisorder('${r.d.id}')">
      <div class="sr-disorder">${r.d.name}</div>
      <div class="sr-chapter">${r.ch.name}</div>
      <div class="sr-snippet">${r.snippet}</div>
    </div>`;
  }
  return html + '</div>';
}

// ============================================================
// STUDY MODE HELPERS
// ============================================================
function revealCriterion(key) {
  state.revealed.add(key);
  renderContent();
}

function revealAll() {
  const d = findDisorder(state.activeId);
  if (!d) return;
  for (const cr of d.criteria) state.revealed.add(`${d.id}-${cr.label}`);
  renderContent();
}
