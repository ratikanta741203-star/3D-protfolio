import React, { lazy, Suspense, useEffect, useState } from 'react';
import './Hero.css';

const Avatar3D = lazy(() => import('./Avatar3D/Avatar3D'));

const SPECIALTIES = [
  'FULL-STACK DEVELOPMENT',
  'INTERACTIVE WEB EXPERIENCES',
  'JAVA & PYTHON DEVELOPMENT',
];

export default function Hero() {
  const [specialtyIndex, setSpecialtyIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const intervalId = window.setInterval(() => {
      setSpecialtyIndex((currentIndex) => (currentIndex + 1) % SPECIALTIES.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleExploreClick = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <section className="hero-section" id="hero" aria-label="Hero Section">
      <div className="hero-container">
        {/* Left Column: Editorial Typography & Bio */}
        <div className="hero-content">
          {/* Small label: PORTFOLIO / 2026 */}
          <div className="hero-label-badge clay-badge">
            <span>PORTFOLIO / 2026</span>
          </div>

          {/* Main heading: RATIKANTA SAHOO */}
          <h1 className="hero-main-heading">RATIKANTA SAHOO</h1>

          {/* Supporting heading: I BUILD DIGITAL EXPERIENCES. */}
          <h2 className="hero-sub-heading">WEB DEVELOPMENT WITH JAVA AND PYTHON</h2>

          {/* Automatic animated professional-role display */}
          <div className="hero-role-wrapper clay-card">
            <span className="hero-role-prefix">SPECIALIZATION:</span>
            <div className="hero-role-viewport" aria-label={SPECIALTIES[specialtyIndex]}>
              <span key={SPECIALTIES[specialtyIndex]} className="hero-role-item">
                {SPECIALTIES[specialtyIndex]}
              </span>
            </div>
          </div>

          {/* Specified Description */}
          <p className="hero-description">
            B.Tech student and aspiring Full-Stack Developer passionate about web development, Java, Python, and building practical digital solutions.
          </p>

          <div className="hero-branding-tagline mono-tag">
            <span>FULL-STACK DEVELOPER</span> • <span>WEB DEVELOPER</span> • <span>JAVA & PYTHON DEVELOPER</span>
          </div>
          <div className="hero-motto-badge clay-badge">
            <span>BUILD. LEARN. SOLVE. CREATE.</span>
          </div>

          {/* Two Functional Action Buttons */}
          <div className="hero-actions">
            <a
              href="#projects"
              onClick={handleExploreClick}
              className="clay-btn clay-btn-sienna"
              id="explore-work-btn"
            >
              <span>EXPLORE MY WORK</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a
              href="/Ratikanta_Sahoo_Resume_OnePage_Enhanced.pdf"
              download="Ratikanta_Sahoo_Resume_OnePage_Enhanced.pdf"
              className="clay-btn clay-btn-secondary"
              id="download-resume-btn"
              aria-label="Download Ratikanta Sahoo Resume PDF"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>

        </div>

        {/* Right Column: Prominent Interactive 3D Avatar */}
        <div className="hero-avatar-column">
          <Suspense
            fallback={(
              <div className="hero-avatar-loading" role="status" aria-label="Loading interactive portrait">
                <span className="hero-avatar-loading-orbit" />
                <span className="hero-avatar-loading-core" />
              </div>
            )}
          >
            <Avatar3D />
          </Suspense>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        className="hero-scroll-indicator"
        aria-label="About Ratikanta Sahoo"
      >
        <span className="scroll-text">ABOUT</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 5v14m-7-7 7 7 7-7" /></svg>
      </a>

    </section>
  );
}
