import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Navbar() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize theme from LocalStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  // Active section scroll detection using IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.id);
    const observers = [];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.push(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Keyboard accessibility: Escape key closes mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'auto' });
    }
  };

  return (
    <header className="navbar-header" role="banner">
      <nav className="navbar-pill clay-card" aria-label="Main Navigation">
        {/* Brand: RATIKANTA SAHOO */}
        <a
          href="/#hero"
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="navbar-brand"
          aria-label="Ratikanta Sahoo Portfolio Home"
        >
          <span className="brand-badge" aria-hidden="true">
            <img src="/images/avatar-developer-3d.webp" alt="" />
          </span>
          <span className="brand-name">RATIKANTA SAHOO</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="navbar-links" role="menubar">
          {NAV_LINKS.map((link) => (
            <li key={link.id} className="nav-item" role="none">
              <a
                href={`#${link.id}`}
                role="menuitem"
                onClick={(e) => handleLinkClick(e, link.id)}
                className={activeSection === link.id ? 'active' : ''}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Nav Controls: Resume button, Theme toggle, Hamburger */}
        <div className="navbar-controls">
          {/* Resume Button */}
          <a
            href="/Ratikanta_Sahoo_Resume_OnePage_Enhanced.pdf"
            download="Ratikanta_Sahoo_Resume_OnePage_Enhanced.pdf"
            className="clay-btn clay-btn-sienna navbar-resume-btn"
            aria-label="Download Ratikanta Sahoo Resume"
          >
            RESUME
          </a>

          {/* Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Toggle ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Accessible Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="mobile-menu-panel clay-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Mobile Navigation Menu"
          >
            <div className="mobile-menu-header">
              <span className="mono-tag" style={{ color: 'var(--c-burnt-sienna)' }}>
              NAVIGATION
              </span>
              <button
                type="button"
                className="mobile-close-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <ul className="mobile-menu-links">
              {NAV_LINKS.map((link) => (
                <li key={link.id} className="mobile-nav-item">
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={activeSection === link.id ? 'active' : ''}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-menu-footer">
              <a
                href="/Ratikanta_Sahoo_Resume_OnePage_Enhanced.pdf"
                download="Ratikanta_Sahoo_Resume_OnePage_Enhanced.pdf"
                className="clay-btn clay-btn-sienna"
                style={{ width: '100%', textAlign: 'center' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
