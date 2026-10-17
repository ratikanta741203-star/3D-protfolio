import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about" aria-label="About Ratikanta Sahoo">
      <div className="section-header">
        <div className="clay-badge">
          <span>ORIGIN & PROFILE</span>
        </div>
        <h2 className="section-title">ABOUT RATIKANTA SAHOO</h2>
        <p className="section-subtitle">
          B.Tech student passionate about building clean web experiences, foundational programming, and practical software.
        </p>
      </div>

      <div className="about-grid">
        {/* Real Portrait Photograph Card */}
        <div className="about-portrait-card clay-card">
          <div className="portrait-image-wrapper clay-inset">
            <img
              src="/images/ratikanta-sahoo.webp"
              alt="Ratikanta Sahoo, Full-Stack Developer"
              className="portrait-real-img"
            />
          </div>
          <div className="portrait-meta">
            <span className="mono-tag portrait-badge-tag">AUTHENTIC PROFILE // 2026</span>
            <h3 className="portrait-name">Ratikanta Sahoo</h3>
            <p className="portrait-role">Full-Stack & Java Developer</p>
            <div className="portrait-loc-pill clay-badge">
              <span>JAGATSINGHPUR, ODISHA, INDIA</span>
            </div>
          </div>
        </div>

        {/* Main Bio & Exact Quote Card */}
        <div className="about-main-card clay-card">
          <div className="card-tag mono-tag">PROFILE // 2026</div>
          <h3 className="about-card-title">Curious Mind, Engineering Discipline</h3>

          {/* Prompt specified exact description */}
          <p className="about-card-p lead-p">
            “I am a B.Tech student and aspiring Full-Stack Developer who enjoys building websites, learning programming languages, and developing practical technology solutions. I am improving my skills through personal projects, technical learning, and collaboration with teammates.”
          </p>

          <div className="about-key-details clay-inset">
            <div className="detail-row">
              <span className="detail-label mono-tag">FULL NAME</span>
              <span className="detail-value">Ratikanta Sahoo</span>
            </div>
            <div className="detail-row">
              <span className="detail-label mono-tag">LOCATION</span>
              <span className="detail-value">Chakradharpur, Kujang, Jagatsinghpur, Odisha, India</span>
            </div>
            <div className="detail-row">
              <span className="detail-label mono-tag">CURRENT STATUS</span>
              <span className="detail-value highlight">B.Tech student, currently in second year</span>
            </div>
            <div className="detail-row">
              <span className="detail-label mono-tag">CAREER GOAL</span>
              <span className="detail-value highlight-sienna">Seeking web-development internships and entry-level opportunities</span>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Approach & Principles Card */}
      <div className="about-principles-wrapper">
        <div className="about-highlights-card clay-card">
          <div className="card-tag mono-tag">ENGINEERING APPROACH</div>
          <h4 className="highlights-title">Core Disciplines</h4>

          <div className="highlight-points-grid">
            <div className="highlight-point-item clay-inset">
              <div className="point-icon clay-badge">01</div>
              <div>
                <h5 className="point-heading">Continuous Learning</h5>
                <p className="point-desc">
                  Actively honing core computer science foundations in Java, Python, and modern web frameworks through daily project building.
                </p>
              </div>
            </div>

            <div className="highlight-point-item clay-inset">
              <div className="point-icon clay-badge">02</div>
              <div>
                <h5 className="point-heading">Practical Problem Solving</h5>
                <p className="point-desc">
                  Translating theoretical algorithms and classroom concepts into tangible web platforms, disaster management concepts, and tools.
                </p>
              </div>
            </div>

            <div className="highlight-point-item clay-inset">
              <div className="point-icon clay-badge">03</div>
              <div>
                <h5 className="point-heading">Team Spirit & Hackathons</h5>
                <p className="point-desc">
                  Thriving in high-pressure collaborative environments, brainstorm sessions, and student team leadership at Smart India Hackathon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
