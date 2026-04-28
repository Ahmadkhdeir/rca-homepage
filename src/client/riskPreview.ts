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
  const STEPS = [
    { label: "Reading update set", detail: "14 records found" },
    { label: "Scanning sensitive tables", detail: "3 tables matched" },
    { label: "Evaluating business rules", detail: "4 rules modified" },
    { label: "Checking ACL changes", detail: "11 ACL changes found" },
    { label: "Calculating risk score", detail: "score: 78 pts" },
    { label: "Classifying risk level", detail: "HIGH RISK" }
  ];

  const STEP_DURATION = 900;
  const RESULT_HOLD = 2800;

  const grid = document.getElementById("stepsGrid");
  const loopBar = document.getElementById("loopBar");

  STEPS.forEach((s, i) => {
    const el = document.createElement("div");
    el.className = "step";
    el.innerHTML = \`
      <div class="step-icon"><span class="step-icon-inner">\${i + 1}</span></div>
      <div>
        <div class="step-label">\${s.label}</div>
        <div class="step-detail">pending</div>
      </div>
    \`;
    grid.appendChild(el);

    const dot = document.createElement("div");
    dot.className = "loop-dot";
    loopBar.appendChild(dot);
  });

  function reset() {
    document.querySelectorAll(".step").forEach((el, i) => {
      el.className = "step";
      el.querySelector(".step-icon-inner").textContent = i + 1;
      el.querySelector(".step-detail").textContent = "pending";
    });
    document.getElementById("resultCard").classList.remove("revealed");
    document.getElementById("gaugeNum").textContent = "—";
    document.getElementById("gaugeArc").setAttribute("stroke-dasharray", "0 188");
    document.getElementById("statusPill").textContent = "Analyzing…";
  }

  function run() {
    reset();
    STEPS.forEach((s, i) => {
      setTimeout(() => {
        const step = grid.children[i];
        step.classList.add("active");
        step.querySelector(".step-icon-inner").innerHTML = "<div class='mini-spinner'></div>";
        step.querySelector(".step-detail").textContent = "in progress…";
      }, i * STEP_DURATION);

      setTimeout(() => {
        const step = grid.children[i];
        step.classList.remove("active");
        step.classList.add("done");
        step.querySelector(".step-icon-inner").textContent = "✓";
        step.querySelector(".step-detail").textContent = s.detail;
      }, i * STEP_DURATION + STEP_DURATION - 100);
    });

    setTimeout(() => {
      document.getElementById("resultCard").classList.add("revealed");
      document.getElementById("gaugeNum").textContent = "78";
      document.getElementById("gaugeArc").setAttribute("stroke-dasharray", "110 188");
      document.getElementById("statusPill").textContent = "Complete";
    }, STEPS.length * STEP_DURATION + 200);

    setTimeout(run, STEPS.length * STEP_DURATION + RESULT_HOLD);
  }

  setTimeout(run, 400);
})();
</script>
`;

export default riskPreview;