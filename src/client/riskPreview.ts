const riskPreview = `
<div class="widget">
  <div class="titlebar">
    <div class="titlebar-left">
      <div class="app-icon">
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
          <path d="M2 10L5 4L8 7L11 2" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div>
        <div class="app-title">Change Risk Analyzer</div>
        <div class="app-sub">Computacenter · ServiceNow</div>
      </div>
    </div>
    <div class="status-pill" id="statusPill">Analyzing…</div>
  </div>

  <div class="body">
    <div class="subject-card">
      <div class="subject-dot"></div>
      <div style="flex:1; min-width:0;">
        <div class="subject-name">Incident form layout + business rule rewrite</div>
        <div class="subject-meta">14 records · System Administrator · 2026-04-27</div>
      </div>
      <div class="analyzing-badge" id="analyzingBadge">
        <div class="spinner" id="badgeSpinner"></div>
        <span id="badgeText">Analyzing…</span>
      </div>
    </div>

    <div class="steps-grid" id="stepsGrid"></div>

    <div class="result-card" id="resultCard">
      <div class="result-info">
        <div class="result-badge" id="resultBadge">
          <div class="result-badge-dot"></div>
          <span id="resultBadgeText">PENDING</span>
        </div>
        <div class="result-title">Incident form layout + business rule rewrite</div>
        <div class="result-meta">
          <span>14 records</span>
          <span>3 sensitive tables</span>
          <span>11 ACL changes</span>
        </div>
      </div>
      <div class="gauge-wrap">
        <svg width="60" height="60" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="30" fill="none" stroke="#f0e8e8" stroke-width="7"
            stroke-dasharray="141 47" stroke-dashoffset="-23.5"
            style="transform:rotate(-180deg);transform-origin:40px 40px"/>
          <circle cx="40" cy="40" r="30" fill="none" stroke="#e5534b" stroke-width="7"
            stroke-dasharray="0 188" stroke-dashoffset="-23.5"
            style="transform:rotate(-180deg);transform-origin:40px 40px;transition:stroke-dasharray 0.8s ease"
            id="gaugeArc"/>
        </svg>
        <div class="gauge-score">
          <div class="gauge-number" id="gaugeNum">—</div>
          <div class="gauge-label">pts</div>
        </div>
      </div>
    </div>

    <div class="loop-bar" id="loopBar"></div>
  </div>
</div>

<script>
(function () {
  var STEPS = [
    { label: "Reading update set",        detail: "14 records found"     },
    { label: "Scanning sensitive tables", detail: "3 tables matched"     },
    { label: "Evaluating business rules", detail: "4 rules modified"     },
    { label: "Checking ACL changes",      detail: "11 ACL changes found" },
    { label: "Calculating risk score",    detail: "score: 78 pts"        },
    { label: "Classifying risk level",    detail: "HIGH RISK"            }
  ];

  var STEP_DURATION = 950;
  var RESULT_HOLD   = 3200;

  var grid    = document.getElementById("stepsGrid");
  var loopBar = document.getElementById("loopBar");

  STEPS.forEach(function(s, i) {
    var el = document.createElement("div");
    el.className = "step";
    el.id = "step-" + i;
    el.innerHTML =
      '<div class="step-icon" id="step-icon-' + i + '">' +
        '<span class="step-icon-inner" id="step-icon-inner-' + i + '">' + (i + 1) + '</span>' +
      '</div>' +
      '<div>' +
        '<div class="step-label">' + s.label + '</div>' +
        '<div class="step-detail" id="step-detail-' + i + '">pending</div>' +
      '</div>';
    grid.appendChild(el);

    var d = document.createElement("div");
    d.className = "loop-dot";
    d.id = "dot-" + i;
    loopBar.appendChild(d);
  });

  function setDot(idx) {
    document.querySelectorAll(".loop-dot").forEach(function(d, i) {
      d.classList.toggle("active", i === idx);
    });
  }

  function resetUI() {
    STEPS.forEach(function(s, i) {
      var el = document.getElementById("step-" + i);
      el.className = "step";
      document.getElementById("step-icon-inner-" + i).innerHTML = "" + (i + 1);
      document.getElementById("step-detail-" + i).textContent = "pending";
    });
    document.getElementById("resultCard").classList.remove("revealed");
    document.getElementById("resultBadgeText").textContent = "PENDING";
    document.getElementById("gaugeNum").textContent = "—";
    document.getElementById("gaugeArc").setAttribute("stroke-dasharray", "0 188");
    document.getElementById("statusPill").textContent = "Analyzing…";
    document.getElementById("badgeSpinner").style.display = "";
    document.getElementById("badgeText").textContent = "Analyzing…";
    var badge = document.getElementById("analyzingBadge");
    badge.style.background = "#f0eaff";
    badge.style.borderColor = "#d4c0ff";
    badge.style.color = "#7b4fe0";
    setDot(-1);
  }

  function activateStep(i) {
    var el = document.getElementById("step-" + i);
    el.className = "step active";
    document.getElementById("step-icon-inner-" + i).innerHTML = '<div class="mini-spinner"></div>';
    document.getElementById("step-detail-" + i).textContent = "in progress…";
    setDot(i);
  }

  function completeStep(i) {
    var el = document.getElementById("step-" + i);
    el.className = "step done";
    document.getElementById("step-icon-inner-" + i).innerHTML = "✓";
    document.getElementById("step-detail-" + i).textContent = STEPS[i].detail;
  }

  function revealResult() {
    document.getElementById("resultCard").classList.add("revealed");
    document.getElementById("resultBadgeText").textContent = "HIGH RISK";
    document.getElementById("gaugeNum").textContent = "78";
    document.getElementById("gaugeArc").setAttribute("stroke-dasharray", (78 / 100 * 141) + " 188");
    document.getElementById("statusPill").textContent = "Complete";
    document.getElementById("badgeSpinner").style.display = "none";
    document.getElementById("badgeText").textContent = "HIGH RISK · 78 pts";
    var badge = document.getElementById("analyzingBadge");
    badge.style.background = "#fff0ef";
    badge.style.borderColor = "#ffbab6";
    badge.style.color = "#e5534b";
    setDot(STEPS.length - 1);
  }

  function runCycle() {
    resetUI();
    STEPS.forEach(function(_, i) {
      setTimeout(function() { activateStep(i); }, i * STEP_DURATION);
      setTimeout(function() { completeStep(i); }, i * STEP_DURATION + STEP_DURATION - 80);
    });
    var revealAt = STEPS.length * STEP_DURATION + 100;
    setTimeout(revealResult, revealAt);
    setTimeout(runCycle, revealAt + RESULT_HOLD);
  }

  setTimeout(runCycle, 400);
})();
</script>
`;

export default riskPreview;
