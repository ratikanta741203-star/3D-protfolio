import React, { useRef } from 'react';
import './WhatIDo.css';

const SERVICES = [
  {
    id: 1,
    title: 'WEB DEVELOPMENT',
    desc: 'Responsive websites and interactive interfaces.',
    tag: 'PILLAR // 01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    details: 'Crafting responsive layouts, modern JavaScript interactivity, and refined UI styling that feels natural on every device.',
  },
  {
    id: 2,
    title: 'SOFTWARE DEVELOPMENT',
    desc: 'Programming and problem solving using Java and Python.',
    tag: 'PILLAR // 02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    details: 'Building structured algorithms, object-oriented systems, and clean procedural logic with a strong focus on computational efficiency.',
  },
  {
    id: 3,
    title: 'AI & INNOVATION',
    desc: 'Exploring AI-powered applications and real-world solutions.',
    tag: 'PILLAR // 03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    ),
    details: 'Investigating intelligent assistants, security telemetry, and emerging generative models to solve practical challenges.',
  },
  {
    id: 4,
    title: 'TEAMWORK & PROBLEM SOLVING',
    desc: 'Collaborating on projects, ideas, and hackathon challenges.',
    tag: 'PILLAR // 04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    details: 'Leading discussions in hackathon settings, coordinating team deliverables, and breaking ambiguous problems into structured steps.',
  },
];

function TiltCard({ item }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <div
      ref={cardRef}
      className="what-card clay-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="what-card-header">
        <div className="what-icon-wrapper clay-badge">
          {item.icon}
        </div>
        <span className="mono-tag what-tag">{item.tag}</span>
      </div>

      <h3 className="what-card-title">{item.title}</h3>
      <p className="what-card-desc">{item.desc}</p>

      <div className="what-card-footer clay-inset">
        <p className="what-details-text">{item.details}</p>
      </div>
    </div>
  );
}

export default function WhatIDo() {
  return (
    <section className="what-i-do-section" id="what-i-do" aria-label="What I Do">
      <div className="section-header">
        <div className="clay-badge">
          <span>CAPABILITIES & FOCUS</span>
        </div>
        <h2 className="section-title">WHAT I DO</h2>
        <p className="section-subtitle">
          Core technical disciplines combining front-end craftsmanship, algorithmic engineering, and team leadership.
        </p>
      </div>

      <div className="what-grid">
        {SERVICES.map((item) => (
          <TiltCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
