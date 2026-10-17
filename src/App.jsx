import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import Productivity from './components/Productivity';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import AIAgent from './components/AIAgent/AIAgent';
import './App.css';

export default function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname.replace(/\/+$/, '') || '/');
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname.replace(/\/+$/, '') || '/');
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const pages = {
      '/privacy-policy': ['Privacy Policy | Ratikanta Sahoo', 'How Ratikanta Sahoo’s portfolio handles information submitted through the contact form and collected by the site.'],
      '/terms-and-conditions': ['Terms and Conditions | Ratikanta Sahoo', 'Terms for using Ratikanta Sahoo’s portfolio website, project information, and linked resources.'],
    };
    const page = pages[pathname];
    document.title = page?.[0] || (pathname === '/' ? 'Ratikanta Sahoo | Developer Portfolio' : 'Page Not Found | Ratikanta Sahoo');
    document.querySelector('meta[name="description"]')?.setAttribute('content', page?.[1] || 'Portfolio of Ratikanta Sahoo, a developer working with web technologies, Java, Python, and interactive 3D.');
  }, [pathname]);

  if (pathname === '/privacy-policy' || pathname === '/terms-and-conditions') {
    return <LegalPage type={pathname === '/privacy-policy' ? 'privacy' : 'terms'} />;
  }
  if (pathname !== '/') return <NotFoundPage />;

  return (
    <div className="portfolio-app-root">
      {/* Cinematic Full-Screen Loading Screen */}
      {isLoading && (
        <LoadingScreen onLoaded={() => setIsLoading(false)} />
      )}

      {/* Main Website Structure */}
      <div className={`portfolio-main-wrapper ${isLoading ? 'is-loading-hidden' : 'is-revealed'}`}>
        <Navbar />

        <main id="main-content">
          {/* HOME */}
          <Hero />

          {/* ABOUT */}
          <div>
            <About />
          </div>

          {/* WHAT I DO */}
          <div>
            <WhatIDo />
          </div>

          {/* SKILLS */}
          <div>
            <Skills />
          </div>

          {/* PROJECTS */}
          <div>
            <Projects />
          </div>

          {/* EXPERIENCE & EDUCATION */}
          <div>
            <ExperienceEducation />
          </div>

          {/* PRODUCTIVITY */}
          <div>
            <Productivity />
          </div>

          {/* CONTACT */}
          <div>
            <Contact onOpenResume={() => setIsResumeModalOpen(true)} />
          </div>
        </main>

        <Footer />
      </div>

      {/* Interactive AI Portfolio Agent */}
      <AIAgent />

      {/* Resume Archive Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

function LegalPage({ type }) {
  const isPrivacy = type === 'privacy';
  return <div className="legal-page"><a className="legal-home" href="/">Ratikanta Sahoo</a><main>
    <p className="mono-tag">PORTFOLIO INFORMATION</p>
    <h1>{isPrivacy ? 'Privacy Policy' : 'Terms and Conditions'}</h1>
    <p>Effective date: October 14, 2026</p>
    {isPrivacy ? <>
      <h2>Information you provide</h2><p>If you use the contact form, the information you enter is sent to the email address shown on this site through your email application, unless a delivery service is configured. Do not include sensitive personal information.</p>
      <h2>Technical information</h2><p>The site may receive standard technical information from your browser or hosting provider, such as requested pages and device details. This portfolio does not use advertising or analytics trackers.</p>
      <h2>External services</h2><p>Links to social networks, project websites, and other services are governed by those services’ own privacy policies. This site does not control their practices.</p>
      <h2>Contact</h2><p>Questions about privacy can be sent to <a href="mailto:ratikantas512@gmail.com">ratikantas512@gmail.com</a>.</p>
    </> : <>
      <h2>Use of this site</h2><p>You may browse this portfolio for personal and informational purposes. Do not misuse the site, interfere with its operation, or attempt unauthorized access.</p>
      <h2>Portfolio content</h2><p>Project descriptions are provided for informational purposes and may describe concepts or work in progress. Availability and details can change. Names and marks belonging to others remain theirs.</p>
      <h2>External links</h2><p>This site may link to third-party services. Those services operate under their own terms, and this site is not responsible for their content or availability.</p>
      <h2>Disclaimer</h2><p>This site is provided as available without guarantees that it will always be uninterrupted or error-free. To the extent permitted by applicable law, the site owner is not liable for losses arising from use of the site.</p>
      <h2>Contact</h2><p>Questions about these terms can be sent to <a href="mailto:ratikantas512@gmail.com">ratikantas512@gmail.com</a>.</p>
    </>}
    <a className="legal-back" href="/">Back to portfolio</a>
  </main></div>;
}

function NotFoundPage() {
  return <main className="not-found-page"><p className="mono-tag">404</p><h1>Page not found</h1><p>The address may be incorrect, or the page may have moved.</p><a className="clay-btn clay-btn-sienna" href="/">Return to portfolio</a></main>;
}
