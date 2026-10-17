import React from 'react';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/ratikanta741203-star',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://in.linkedin.com/in/ratikanta-sahoo-452763358',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ratikanta_sahoo_149_a9?stkn=bjRxazc4dGd1dGs4',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    name: 'X',
    url: 'https://x.com/A9_Sahoo',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/919078835620',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:ratikantas512@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <footer className="footer-container" role="contentinfo">
      <div className="footer-content">
        {/* Brand & Motto */}
        <div className="footer-brand-block">
          <a className="footer-brand-title" href="/#hero" aria-label="Ratikanta Sahoo home">
            <div className="brand-badge">RS</div>
            <h4 className="footer-name">RATIKANTA SAHOO</h4>
          </a>
          <p className="footer-brand-subtitle">
            Full-Stack Developer | Web Developer | Java & Python Developer
          </p>
          <nav className="footer-legal-links" aria-label="Legal information">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms and Conditions</a>
          </nav>
          {/* Exact required motto */}
          <div className="footer-motto mono-tag">
            BUILD. LEARN. SOLVE. CREATE.
          </div>
        </div>

        {/* Social Icons Navigation */}
        <div className="footer-social-block">
          <span className="mono-tag social-block-label">CONNECT CHANNELS</span>
          <div className="footer-social-icons">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn clay-card"
                aria-label={`Open ${item.name}`}
                title={item.name}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Back to top & Copyright */}
        <div className="footer-action-block">
          <button
            type="button"
            onClick={scrollToTop}
            className="clay-btn clay-btn-secondary back-to-top-btn"
            aria-label="Scroll back to top of the page"
          >
            <span>BACK TO TOP</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
          <p className="footer-copyright">
            {'\u00a9'} {CURRENT_YEAR} Ratikanta Sahoo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
