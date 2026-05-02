const riskPreview = `
<style>
.cra-wrap{font-family:'Segoe UI',Inter,system-ui,sans-serif;background:#f0f4f8;border-radius:12px;width:100%;min-height:340px;padding:16px;box-sizing:border-box;margin:0 auto;overflow:hidden}
.cra-header{display:flex;align-items:center;gap:8px;margin-bottom:12px}
.cra-logo{width:28px;height:28px;flex-shrink:0}
.cra-logo svg{width:28px;height:28px}
.cra-title{font-size:13px;font-weight:600;color:#244991 !important}
.cra-subtitle{font-size:10px;color:#6b7280 !important}
.cra-card{background:#fff;border-radius:10px;border:1px solid #e5e7eb;padding:10px 12px;margin-bottom:10px}
.cra-update-set{display:flex;align-items:center;justify-content:space-between}
.cra-us-title{font-size:12px;font-weight:600;color:#111827 !important}
.cra-us-meta{display:flex;align-items:center;gap:6px;margin-top:3px}
.badge-ip{background:#fef3c7;color:#92400e !important;font-size:9px;font-weight:600;padding:2px 6px;border-radius:4px}
.cra-us-info{font-size:10px;color:#9ca3af !important}
.cra-steps{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.step{background:#fff;border-radius:8px;border:1px solid #e5e7eb;padding:7px 9px;display:flex;align-items:center;gap:7px;transition:border-color 0.3s}
.step.active{border-color:#2D9EDF;background:#f0f9ff}
.step.done{border-color:#d1fae5;background:#f0fdf4}
.step-icon{width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:10px}
.step-icon.pending{background:#f3f4f6;color:#9ca3af !important}
.step-icon.spinning{background:#dbeafe;animation:spin-bg 1s infinite}
.step-icon.done{background:#d1fae5;color:#2da44e !important}
.step-label{font-size:10px;font-weight:500;color:#374151 !important;line-height:1.3}
.step-sub{font-size:9px;color:#9ca3af !important;margin-top:1px}
.step.active .step-sub{color:#2D9EDF !important}
.step.done .step-sub{color:#2da44e !important}
.spinner{width:10px;height:10px;border:2px solid #bfdbfe;border-top-color:#2D9EDF;border-radius:50%;animation:spin 0.7s linear infinite}
.checkmark{font-size:11px;color:#2da44e !important;font-weight:700}
.dot-pending{width:8px;height:8px;border-radius:50%;background:#e5e7eb}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes spin-bg{0%,100%{background:#dbeafe}50%{background:#bfdbfe}}
.result-card{background:#fff;border-radius:10px;border:1.5px solid #fca5a5;padding:12px 14px;margin-top:4px;opacity:0;transform:translateY(16px);transition:opacity 0.5s,transform 0.5s}
.result-card.show{opacity:1;transform:translateY(0)}
.rc-layout{display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:start}
.rc-left{width:180px}
.rc-left{display:flex;flex-direction:column;gap:4px;min-width:0}
.rc-badge{background:#fee2e2;color:#b91c1c !important;font-size:9px;font-weight:700;padding:3px 8px;border-radius:4px;letter-spacing:0.4px;width:fit-content}
.rc-name{font-size:12px;font-weight:600;color:#111827 !important;margin:4px 0 2px;line-height:1.3}
.rc-meta{font-size:9px;color:#9ca3af !important;line-height:1.4}
.gauge-wrap{position:relative;width:64px;height:66px;flex-shrink:0;margin-top:8px}
.gauge-wrap svg{width:64px;height:66px}
.gauge-score{position:absolute;bottom:0;left:50%;transform:translateX(-50%);font-size:18px;font-weight:700;color:#e5534b !important;line-height:1}
.gauge-pts{font-size:8px;color:#9ca3af !important;text-align:center;margin-top:2px}
.rc-right{min-width:0}
.rf-title{font-size:9px;font-weight:600;color:#6b7280 !important;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:8px}
.rf-row{margin-bottom:8px}
.rf-label{display:flex;justify-content:space-between;gap:8px;font-size:10px;color:#374151 !important;margin-bottom:3px}
.rf-pts{color:#e5534b !important;font-weight:600;flex-shrink:0;white-space:nowrap}
.rf-bar-bg{background:#f3f4f6;border-radius:4px;height:5px;overflow:hidden}
.rf-bar{height:5px;border-radius:4px;width:0;transition:width 1.2s cubic-bezier(0.4,0,0.2,1)}
.scene{transition:opacity 0.4s}
.scene.hidden{opacity:0;pointer-events:none;position:absolute}
</style>

<div class="cra-wrap">
  <div class="cra-header">
    <div class="cra-logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><linearGradient id="gL3b" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#2BB673"/><stop offset="50%" stop-color="#F5A524"/><stop offset="100%" stop-color="#E5484D"/></linearGradient><linearGradient id="gL3bFill" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#2BB673" stop-opacity="0.18"/><stop offset="50%" stop-color="#F5A524" stop-opacity="0.18"/><stop offset="100%" stop-color="#E5484D" stop-opacity="0.18"/></linearGradient></defs><rect x="10" y="10" width="180" height="180" rx="36" fill="#ffffff"/><path d="M28 150 L70 105 L100 128 L140 58 L172 150 Z" fill="url(#gL3bFill)"/><path d="M28 150 L70 105 L100 128 L140 58 L172 150" fill="none" stroke="url(#gL3b)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <div><div class="cra-title">Change Risk Analyzer</div></div>
  </div>

  <div class="cra-card">
    <div class="cra-update-set">
      <div>
        <div class="cra-us-title">Incident form rebuild + business rules</div>
        <div class="cra-us-meta">
          <span class="badge-ip">IN PROGRESS</span>
          <span class="cra-us-info">14 changes · 5h ago</span>
        </div>
      </div>
      <div id="analyzeBtn" style="background:#2D9EDF;color:#fff;font-size:10px;font-weight:600;padding:5px 11px;border-radius:7px;cursor:pointer;white-space:nowrap" onclick="startScene1()">&#9654; Analyze</div>
    </div>
  </div>

  <div class="cra-steps" id="stepsGrid">
    <div class="step" id="s0"><div class="step-icon pending" id="ic0"><div class="dot-pending"></div></div><div><div class="step-label">Reading update set</div><div class="step-sub" id="sub0">pending</div></div></div>
    <div class="step" id="s1"><div class="step-icon pending" id="ic1"><div class="dot-pending"></div></div><div><div class="step-label">Scanning sensitive tables</div><div class="step-sub" id="sub1">pending</div></div></div>
    <div class="step" id="s2"><div class="step-icon pending" id="ic2"><div class="dot-pending"></div></div><div><div class="step-label">Evaluating business rules</div><div class="step-sub" id="sub2">pending</div></div></div>
    <div class="step" id="s3"><div class="step-icon pending" id="ic3"><div class="dot-pending"></div></div><div><div class="step-label">Checking ACL changes</div><div class="step-sub" id="sub3">pending</div></div></div>
    <div class="step" id="s4"><div class="step-icon pending" id="ic4"><div class="dot-pending"></div></div><div><div class="step-label">Calculating risk score</div><div class="step-sub" id="sub4">pending</div></div></div>
    <div class="step" id="s5"><div class="step-icon pending" id="ic5"><div class="dot-pending"></div></div><div><div class="step-label">Classifying risk level</div><div class="step-sub" id="sub5">pending</div></div></div>
  </div>

  <div class="result-card" id="resultCard">
    <div class="rc-layout">
      <div class="rc-left">
        <span class="rc-badge">HIGH RISK</span>
        <div class="rc-name">Incident form rebuild + business rules</div>
        <div class="rc-meta">14 records · 3 sensitive · 4 rule changes · 11 ACLs</div>
        <div style="display:flex;align-items:center;gap:10px;margin-top:10px">
          <div class="gauge-wrap">
            <svg viewBox="0 0 64 66"><path d="M6 44 A26 26 0 0 1 58 44" fill="none" stroke="#fee2e2" stroke-width="6" stroke-linecap="round"/><path id="gaugeFill" d="M6 44 A26 26 0 0 1 58 44" fill="none" stroke="#e5534b" stroke-width="6" stroke-linecap="round" stroke-dasharray="0 88"/></svg>
            <div class="gauge-score">78</div>
          </div>
          <div class="gauge-pts" style="font-size:9px;line-height:1.3;text-align:left">RISK<br>SCORE</div>
        </div>
      </div>
      <div class="rc-right">
        <div class="rf-title">Risk Factors</div>
        <div class="rf-row"><div class="rf-label"><span>Sensitive security table modified</span><span class="rf-pts">+30 pts</span></div><div class="rf-bar-bg"><div class="rf-bar" id="bar0" style="background:#e5534b;width:0%"></div></div></div>
        <div class="rf-row"><div class="rf-label"><span>Bulk ACL modifications (&gt;10)</span><span class="rf-pts">+22 pts</span></div><div class="rf-bar-bg"><div class="rf-bar" id="bar1" style="background:#f97316;width:0%"></div></div></div>
        <div class="rf-row"><div class="rf-label"><span>Business rules on core ITSM table</span><span class="rf-pts">+14 pts</span></div><div class="rf-bar-bg"><div class="rf-bar" id="bar2" style="background:#eab308;width:0%"></div></div></div>
      </div>
    </div>
  </div>
</div>

<script>
(function(){
const stepDone=["14 records found","3 sensitive tables matched","4 rules modified","11 ACL changes found","score 78 pts","HIGH RISK"];
const stepActive=["reading...","scanning...","evaluating...","checking...","calculating...","classifying..."];
let loopTimer=null;

function resetSteps(){
  for(let i=0;i<6;i++){
    const s=document.getElementById('s'+i);
    const ic=document.getElementById('ic'+i);
    const sub=document.getElementById('sub'+i);
    s.className='step';
    ic.className='step-icon pending';
    ic.innerHTML='<div class="dot-pending"></div>';
    sub.textContent='pending';
  }
  const rc=document.getElementById('resultCard');
  rc.classList.remove('show');
  document.getElementById('gaugeFill').setAttribute('stroke-dasharray','0 88');
  document.getElementById('bar0').style.width='0%';
  document.getElementById('bar1').style.width='0%';
  document.getElementById('bar2').style.width='0%';
  document.getElementById('analyzeBtn').style.display='';
}

function activateStep(i){
  const s=document.getElementById('s'+i);
  const ic=document.getElementById('ic'+i);
  const sub=document.getElementById('sub'+i);
  s.className='step active';
  ic.className='step-icon spinning';
  ic.innerHTML='<div class="spinner"></div>';
  sub.textContent=stepActive[i];
}

function doneStep(i){
  const s=document.getElementById('s'+i);
  const ic=document.getElementById('ic'+i);
  const sub=document.getElementById('sub'+i);
  s.className='step done';
  ic.className='step-icon done';
  ic.innerHTML='<span class="checkmark">&#10003;</span>';
  sub.textContent=stepDone[i];
}

function showResult(){
  const rc=document.getElementById('resultCard');
  rc.classList.add('show');
  setTimeout(function(){
    document.getElementById('gaugeFill').setAttribute('stroke-dasharray','63.6 82');
    document.getElementById('bar0').style.width='100%';
    document.getElementById('bar1').style.width='73%';
    document.getElementById('bar2').style.width='47%';
  },300);
}

function startScene1(){
  clearTimeout(loopTimer);
  resetSteps();
  document.getElementById('analyzeBtn').style.display='none';
  let delay=400;
  for(let i=0;i<6;i++){
    (function(ii){
      setTimeout(function(){activateStep(ii);}, delay);
      delay+=900;
      setTimeout(function(){doneStep(ii);}, delay-200);
    })(i);
  }
  setTimeout(showResult, delay+300);
  loopTimer=setTimeout(function(){resetSteps();setTimeout(startScene1,600);}, delay+5200);
}

setTimeout(startScene1, 800);
})();
<\/script>
`;

export default riskPreview;
