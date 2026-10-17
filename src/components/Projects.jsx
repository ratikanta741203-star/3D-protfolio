import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import './Projects.css';

const FILTERS = ['ALL', 'WEB', 'PYTHON', 'JAVA', 'AI', 'DATABASE'];

function ProjectPlaceholderGraphic({ type }) {
  // Honest architectural SVG diagram/icon in the approved 6-color palette
  return (
    <div className="project-placeholder-box clay-inset">
      <div className="placeholder-content">
        {type === 'cyclone' && (
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--c-burnt-sienna)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
            <path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 8a2 2 0 1 1 2-2 2 2 0 0 1-2 2z" />
          </svg>
        )}
        {type === 'shield-ai' && (
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--c-burgundy)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <circle cx="12" cy="11" r="3" />
          </svg>
        )}
        {type === 'bot' && (
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--c-burnt-sienna)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <circle cx="12" cy="5" r="2" />
            <path d="M12 7v4" />
            <line x1="8" y1="16" x2="8.01" y2="16" strokeWidth="3" />
            <line x1="16" y1="16" x2="16.01" y2="16" strokeWidth="3" />
          </svg>
        )}
        {type === 'store' && (
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--c-burgundy)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        )}
        {type === 'academic' && (
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--c-burnt-sienna)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        )}
        {type === 'utensils' && (
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--c-burgundy)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2v20M2 12h8a4 4 0 0 1-4-4V2M14 2v20" />
          </svg>
        )}
        <span className="placeholder-caption mono-tag">ARCHITECTURAL SCHEMATIC // PROTOTYPE</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects =
    activeFilter === 'ALL'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) =>
          project.categoryTags.includes(activeFilter)
        );

  return (
    <section className="projects-section" id="projects" aria-label="Portfolio Projects">
      <div className="section-header">
        <div className="clay-badge">
          <span>PROJECTS ARCHIVE</span>
        </div>
        <h2 className="section-title">PROJECT CONCEPTS & PROTOTYPES</h2>
        <p className="section-subtitle">
          Practical application concepts exploring disaster management, intelligent assistants, educational platforms, and commercial web solutions.
        </p>

        {/* Filter Navigation Bar */}
        <div className="projects-filter-bar clay-card" role="tablist" aria-label="Project Category Filters">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article key={project.id} className="project-card clay-card">
            {/* Real Project Photo or Architectural Graphic */}
            {project.image ? (
              <div className="project-image-box clay-inset">
                <img
                  src={project.image}
                  alt={`${project.title} asset`}
                  className="project-image-img"
                  loading="lazy"
                />
              </div>
            ) : (
              <ProjectPlaceholderGraphic type={project.placeholderIcon} />
            )}

            <div className="project-card-body">
              <div className="project-header-meta">
                <span className={`project-status-badge mono-tag status-${project.statusType}`}>
                  ● {project.status}
                </span>
                <div className="project-categories">
                  {project.categoryTags.map((cat) => (
                    <span key={cat} className="project-category-tag mono-tag">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <h4 className="project-subtitle">{project.subtitle}</h4>
              <p className="project-desc">{project.description}</p>

              {/* Planned / Implemented Features */}
              <div className="project-features-block">
                <span className="features-label mono-tag">KEY ARCHITECTURAL HIGHLIGHTS:</span>
                <ul className="features-list">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-bullet">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="project-tech-stack">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag clay-inset">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links & Honest Status Action */}
              <div className="project-card-footer">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clay-btn clay-btn-secondary project-btn"
                  >
                    <span>GITHUB</span>
                  </a>
                ) : (
                  <div className="honest-repo-note clay-inset">
                    <span className="note-text mono-tag">REPO: IN PROGRESS / LOCAL</span>
                  </div>
                )}

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clay-btn clay-btn-sienna project-btn"
                  >
                    <span>LIVE DEMO</span>
                  </a>
                ) : (
                  <div className="honest-demo-note clay-inset">
                    <span className="note-text mono-tag">DEMO: PROTOTYPE STAGE</span>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
