import "./app.css";
import { useEffect, useRef } from "react";
import riskPreview from "./riskPreview";

export default function App() {
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    el.innerHTML = riskPreview;
    el.querySelectorAll("script").forEach(old => {
      const s = document.createElement("script");
      s.textContent = old.textContent;
      old.replaceWith(s);
    });
  }, []);

  useEffect(() => {
    const trigger = () => {
      document.querySelectorAll(".compare-card").forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          card.classList.add("animated");
        }
      });
    };
    trigger();
    window.addEventListener("scroll", trigger, { passive: true });
    return () => window.removeEventListener("scroll", trigger);
  }, []);

  useEffect(() => {
    const countUp = (id: string, target: number, duration: number, delay: number) => {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (!el) return;
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target).toString();
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }, delay);
    };
    countUp("pitch-six", 6, 1000, 400);
    countUp("pitch-thirty", 30, 1400, 600);
  }, []);

  return (
    <div className="summit-root">

      {/* ── HERO + PREVIEW ── */}
      <section className="summit-hero">
        <div className="summit-hero-grid">

          {/* LEFT — Brand + Pitch */}
          <div className="summit-hero-left">
            <div className="summit-hero-content">
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                ServiceNow CoE Summit 2026 · UK Hackathon
              </div>

              <h1>
                Change Risk <span className="title-accent">Analyzer</span>
              </h1>

              <p className="hero-tagline">Know your risk before you deploy.</p>

              <div className="hero-ai-text">Smarter with<br />AI</div>

              <a href="/x_488299_change_ri_dashboard.do" className="hero-cta">
                Open the App →
              </a>
            </div>

            <div className="hero-pitch-row">
              <div className="hero-pitch-card">
                <div className="hero-pitch-num" id="pitch-six">0</div>
                <div className="hero-pitch-label">Automated checks</div>
              </div>
              <div className="hero-pitch-card">
                <div className="hero-pitch-num">&lt;<span id="pitch-thirty">0</span>s</div>
                <div className="hero-pitch-label">Per analysis</div>
              </div>
              <div className="hero-pitch-card">
                <div className="hero-pitch-num">0</div>
                <div className="hero-pitch-label">Manual steps</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Live preview */}
          <div className="summit-hero-preview">
            <div className="preview-stats">
              <div className="preview-stat risk-stat">
                <span className="preview-stat-value">78</span>
                <span className="preview-stat-label">Risk Score</span>
              </div>
              <div className="preview-stat">
                <span className="preview-stat-value">6</span>
                <span className="preview-stat-label">Analysis Stages</span>
              </div>
              <div className="preview-stat">
                <span className="preview-stat-value">3</span>
                <span className="preview-stat-label">Risk Levels</span>
              </div>
              <div className="preview-stat ai-stat">
                <span className="preview-stat-value">AI</span>
                <span className="preview-stat-label">Powered</span>
              </div>
            </div>

            <div
              ref={previewRef}
              className="risk-preview-wrapper"
              style={{ pointerEvents: "none" }}
            />
          </div>

        </div>
      </section>

      {/* ── WITHOUT / WITH ── */}
      <section className="summit-section compare-section">
        <div className="compare-grid">
          <div className="compare-card compare-card--bad">
            <div className="compare-header">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e5534b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <span>Without CRA</span>
            </div>
            {[
              "Deployments go out with no risk review",
              "Guesswork instead of data",
              "One bad ACL can silently break production",
              "No audit trail on what changed or why",
              "Reviewing Update Sets is slow and manual",
            ].map(t => (
              <div className="compare-row" key={t}>
                <div className="compare-icon compare-icon--bad">✕</div>
                <span>{t}</span>
              </div>
            ))}
          </div>

          <div className="compare-card compare-card--good">
            <div className="compare-header">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2da44e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>With CRA</span>
            </div>
            {[
              "Every Update Set scored before it ships",
              "One clear risk score, no interpretation needed",
              "Six checks catch what humans miss every time",
              "Full audit trail on every analysis, automatically",
              "AI recommends the right reviewer in seconds",
            ].map(t => (
              <div className="compare-row" key={t}>
                <div className="compare-icon compare-icon--good">✓</div>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IT DOES ── */}
      <section className="summit-section features-section">
        <div className="section-label">What it does</div>
        <h2 className="features-heading">
          Risk analysis, built for <span className="title-accent">ServiceNow</span>.
        </h2>

        <div className="feature-list">

          <div className="feature-item">
            <div className="feature-icon feature-icon-risk">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="#e5534b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <div className="feature-title">Automated Risk Scoring</div>
            <div className="feature-desc">
              Scans every record in an Update Set and scores it across six dimensions:
              sensitive tables, ACL changes, business rules, record volume, and more.
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon feature-icon-ai">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="#9b6dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div className="feature-title">AI-Powered Explanations</div>
            <div className="feature-desc">
              A plain-English explanation of why a change is risky, plus a recommended
              reviewer based on the change profile and history.
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon feature-icon-code">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="#2da44e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <div className="feature-title">Code-First on ServiceNow</div>
            <div className="feature-desc">
              Built entirely with the ServiceNow SDK in TypeScript. No Studio, no clicks.
              Code lives in Git and deploys in one command.
            </div>
          </div>

        </div>

        <div className="section-label" style={{ marginTop: "2.5rem" }}>How It Works</div>
        <div className="value-grid">
          <div className="value-card">
            <div className="value-step-row">
              <div className="value-step-num">1</div>
              <strong>Open an Update Set</strong>
            </div>
            <p>Select any Update Set from the dropdown! all records are pulled in automatically, no manual input needed.</p>
          </div>
          <div className="value-card">
            <div className="value-step-row">
              <div className="value-step-num">2</div>
              <strong>Click "Analyze Risk"</strong>
            </div>
            <p>One click triggers 6 automated checks! sensitive tables, ACLs, business rules, record volume, and more.</p>
          </div>
          <div className="value-card">
            <div className="value-step-row">
              <div className="value-step-num">3</div>
              <strong>Review the Result</strong>
            </div>
            <p>Get a risk score, a plain English AI explanation, and a recommended reviewer! before you deploy.</p>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="summit-section team-section">
        <div className="section-label">Built by</div>
        <h3>Hackathon Team</h3>

        <div className="team-grid">
          <div className="team-member">
            <img src="ahmad.jpg" className="team-avatar" />
            <div className="team-name">Ahmad Khdeir</div>
            <div className="team-role">ServiceNow Developer</div>
            <a href="https://www.linkedin.com/in/ahmadkhdeir" target="_blank" rel="noreferrer" className="team-linkedin">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>
          <div className="team-member">
            <img src="karl.jpg" className="team-avatar" />
            <div className="team-name">Karl Gatzemeier</div>
            <div className="team-role">ServiceNow Developer</div>
            <a href="https://www.linkedin.com/in/karl-m-gatzemeier" target="_blank" rel="noreferrer" className="team-linkedin">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>
          <div className="team-member">
            <img src="leo.jpg" className="team-avatar" />
            <div className="team-name">Leonard Haus</div>
            <div className="team-role">Senior ServiceNow Consultant</div>
            <a href="https://www.linkedin.com/in/leonard-haus-98b6322b7" target="_blank" rel="noreferrer" className="team-linkedin">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="summit-footer">
        <button
          className="cta-secondary"
          onClick={() => (window.location.href = "/x_488299_change_ri_dashboard.do")}
        >
          Explore the App
        </button>
      </section>

    </div>
  );
}
