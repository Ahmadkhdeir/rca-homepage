import "./app.css";
import riskPreview from "./riskPreview";

export default function App() {
  return (
    <div className="summit-root">

      {/* ── HERO + PREVIEW ── */}
      <section className="summit-hero">
        <div className="summit-hero-grid">

          {/* LEFT — Brand */}
          <div className="summit-hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              ServiceNow CoE Summit 2026 · UK Hackathon
            </div>

            <h1>
              Change Risk <span className="title-accent">Analyzer</span>
            </h1>

            <p className="hero-tagline">Know your risk before you deploy.</p>

            <p className="hero-desc">
              Automated risk analysis for every ServiceNow Update Set.
              Six checks, one risk score, and a clear explanation before you deploy.
            </p>

            <a href="/x_488299_change_ri_dashboard.do" className="hero-cta">
              Open the App →
            </a>
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
              className="risk-preview-wrapper"
              dangerouslySetInnerHTML={{ __html: riskPreview }}
            />
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

        <div className="value-grid">
          <div className="value-card">
            <strong>Why this matters</strong>
            <p>One unchecked deployment can break production. CRA flags risk before changes go live.</p>
          </div>
          <div className="value-card">
            <strong>Why ServiceNow</strong>
            <p>Native scoped app. No data leaves the platform. Integrates with Update Sets, Change Tickets, and Users.</p>
          </div>
          <div className="value-card">
            <strong>Why CoE</strong>
            <p>A reusable pattern any team can adopt, with governance built in from day one.</p>
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
          </div>
          <div className="team-member">
            <img src="karl.jpg" className="team-avatar" />
            <div className="team-name">Karl Gatzemeier</div>
            <div className="team-role">ServiceNow Developer</div>
          </div>
          <div className="team-member">
            <img src="leo.jpg" className="team-avatar" />
            <div className="team-name">Leonard Haus</div>
            <div className="team-role">Senior ServiceNow Consultant</div>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="summit-footer">
        <button
          className="cta-secondary"
          onClick={() => (window.location.href = "/x_488299_change_ri_dashboard.do")}
        >
          Explore the Risk Application
        </button>
      </section>

    </div>
  );
}
