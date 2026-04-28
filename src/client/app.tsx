import "./App.css";
import riskPreview from "./riskPreview";


export default function App() {
  return (
    <div className="summit-root">

      {/* HERO */}
          <section className="summit-hero">
              <div className="summit-hero-grid">

                  {/* LEFT: TEXT */}
                  <div className="summit-hero-content">
                      <span className="badge">ServiceNow Center of Excellence</span>

                      <h1>ServiceNow CoE Summit 2026</h1>
                      <h2>UK · Hackathon Showcase</h2>

                      <p>
                          This page introduces a Center of Excellence hackathon initiative,
                          built to demonstrate how ServiceNow can deliver real business value
                          through innovation, governance, and product thinking.
                      </p>
                  </div>

                  {/* RIGHT: LOGO */}
                  <div className="summit-hero-logo">
                      <img src="summit-logo.png" width="200px" height="auto"/>
                  </div>

              </div>
          </section>


          {/* IDEA */}

          <section className="summit-section">

              <div className="hackathon-stage">

                  {/* LEFT SIDE */}
                  <div className="hackathon-left">

                      <h3>The Hackathon Idea</h3>
                      <p>
                          <strong>Change & Risk Intelligence</strong> was developed during the
                          CoE Hackathon to address a common challenge:
                      </p>

                      <p className="highlight">
                          How can we proactively identify and manage risk introduced by changes
                          — before incidents occur?
                      </p>

                      <p>
                          The solution leverages ServiceNow as a platform to correlate change
                          activity, risk signals, and governance standards into a single,
                          scalable capability.
                      </p>

                      {/* ✅ THESE STAY SIDE‑BY‑SIDE */}
                      <div className="grid">
                          <div className="value-card">
                              <strong>Why this matters</strong>
                              <p>Reduces operational risk and increases confidence in change execution.</p>
                          </div>

                          <div className="value-card">
                              <strong>Why ServiceNow</strong>
                              <p>One platform for data, workflow, automation, and governance.</p>
                          </div>

                          <div className="value-card">
                              <strong>Why CoE</strong>
                              <p>Reusable patterns, shared ownership, and long-term scalability.</p>
                          </div>
                      </div>

                  </div>

                  {/* RIGHT SIDE */}
                  <div className="hackathon-right">
                      <div
                          className="risk-preview-wrapper"
                          dangerouslySetInnerHTML={{ __html: riskPreview }}
                      />

                      <a
                          href="/x_488299_change_ri_dashboard.do"
                          className="go-to-app-btn"
                      >
                          Open Risk App →
                      </a>
                  </div>

              </div>

          </section>

      {/* TEAM */}
          <section className="summit-section">
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

      {/* CTA */}
      <section className="summit-footer">
        <button
          className="cta-secondary"
          onClick={() =>
            (window.location.href =
              "/x_488299_change_ri_dashboard.do")
          }
        >
          Explore the Risk Application
        </button>
      </section>

    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function Value({ title, text }: { title: string; text: string }) {
  return (
    <div className="value-card">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

function Team({
  name,
  role,
  photoSysId,
}: {
  name: string;
  role: string;
  photoSysId?: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="team-card">
      {photoSysId ? (
        <img src="summit-logo.png" width="200px" height="auto"/>
      ) : (
        <div className="avatar-fallback">{initials}</div>
      )}

      <strong>{name}</strong>
      <span>{role}</span>
    </div>
  );
}
