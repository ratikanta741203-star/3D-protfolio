import React from 'react';
import './ExperienceEducation.css';

const EXPERIENCES = [
  {
    id: 'sih',
    title: 'Smart India Hackathon',
    role: 'Student Team Leader',
    period: 'Academic Hackathon Leadership',
    tag: 'LEADERSHIP',
    highlights: [
      'Team coordination and task allocation under high-tempo constraints.',
      'Collaborative problem analysis targeting practical public challenges.',
      'Idea development and conceptual technical solution formulation.',
      'Technical discussions, milestone reviews, and final presentations.',
    ],
  },
  {
    id: 'hack-team',
    title: 'Hackathon Teamwork & Ideation',
    role: 'Collaborative Problem Solver',
    period: 'Team Collaboration',
    tag: 'TEAMWORK',
    highlights: [
      'Active collaboration with cross-functional student engineering peers.',
      'Technical brainstorming across software feasibility and workflows.',
      'Solution planning, task sequencing, and prototype specification.',
    ],
  },
  {
    id: 'marketing',
    title: 'Promotional & Outreach Activities',
    role: 'Marketing & Communications',
    period: 'Communications & Event Outreach',
    tag: 'COMMUNICATION',
    highlights: [
      'Promotional activities championing student initiatives and ideas.',
      'Clear, articulate communication with peer groups and mentors.',
      'Presentation delivery, public speaking, and campaign outreach.',
    ],
  },
];

const EDUCATION_DATA = [
  {
    id: 'btech',
    institution: 'Einstein Academy of Technology and Management',
    location: 'Baniatangi, Bhubaneswar, Odisha',
    degree: 'Bachelor of Technology (B.Tech)',
    period: '2025 – 2029',
    status: 'Currently pursuing second year',
    score: 'In Progress (Active Coursework)',
    details: 'Alongside the B.Tech program, completed coursework in C, C++, SQL, and MERN Stack development through EATM.',
  },
  {
    id: 'class12',
    institution: 'Sri Aurobindo Science College',
    location: 'Cuttack, Odisha',
    degree: 'Higher Secondary Certificate (Class XII - Science)',
    period: '2025',
    status: 'Completed',
    score: '467 marks (77.84%)',
    details: 'Focused study in Science curriculum with Physics, Chemistry, and Mathematics foundations.',
  },
  {
    id: 'class10',
    institution: 'A.B. Higher Secondary School',
    location: 'Basudevpur, Bhadrak, Odisha',
    degree: 'Secondary School Examination (Class X)',
    period: '2023',
    status: 'Completed',
    score: '407 marks (67.84%)',
    details: 'Core secondary education in General Science, Mathematics, and Languages.',
  },
];

const CERTIFICATIONS_DATA = [
  {
    id: 'cert-html-css',
    title: 'HTML & CSS',
    issuer: 'GeeksforGeeks',
    certificateUrl: null, // Only displayed if verified URL is provided
    status: 'Completed',
    scope: 'Semantic markup, styling fundamentals, layout design, and responsive web principles.',
  },
  {
    id: 'cert-python',
    title: 'Python',
    issuer: 'GeeksforGeeks',
    certificateUrl: null,
    status: 'Completed',
    scope: 'Core programming constructs, data structures, scripting, and algorithmic problem solving.',
  },
  {
    id: 'cert-java',
    title: 'Java',
    issuer: 'GeeksforGeeks',
    certificateUrl: null,
    status: 'Completed',
    scope: 'Object-Oriented Programming (OOP), encapsulation, inheritance, interfaces, and exception handling.',
  },
];

const COURSEWORK_DATA = [
  {
    id: 'eatm-programming-databases',
    title: 'C, C++ & SQL',
    scope: 'Completed coursework in C and C++ programming, together with SQL fundamentals for working with relational databases.',
  },
  {
    id: 'eatm-mern-stack',
    title: 'MERN Stack Development',
    scope: 'Completed coursework covering MongoDB, Express.js, React, Node.js, JavaScript (ES6+), TypeScript, JSX/TSX, and MongoDB Query Language (MQL).',
  },
];

export function ExperienceSection() {
  return (
    <section className="experience-section" id="experience" aria-label="Experience and Achievements">
      <div className="section-header">
        <div className="clay-badge">
          <span>MILESTONES & LEADERSHIP</span>
        </div>
        <h2 className="section-title">EXPERIENCE & ACHIEVEMENTS</h2>
        <p className="section-subtitle">
          Student leadership in nationwide hackathons, collaborative technical brainstorming, and structured promotional outreach.
        </p>
      </div>

      <div className="editorial-timeline">
        <div className="timeline-center-line" aria-hidden="true" />

        {EXPERIENCES.map((exp, idx) => (
          <div key={exp.id} className={`timeline-entry ${idx % 2 === 0 ? 'entry-left' : 'entry-right'}`}>
            <div className="timeline-node" aria-hidden="true">
              <div className="node-inner" />
            </div>

            <div className="timeline-card clay-card">
              <div className="card-top-meta">
                <span className="mono-tag timeline-tag">{exp.tag}</span>
                <span className="mono-tag timeline-period">{exp.period}</span>
              </div>

              <h3 className="timeline-title">{exp.title}</h3>
              <h4 className="timeline-role">{exp.role}</h4>

              <ul className="timeline-highlights">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="highlight-item">
                    <span className="highlight-bullet">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ExperienceEducation() {
  return (
    <div className="editorial-records-wrapper">
      <ExperienceSection />

      {/* =====================================================================
          EDUCATION SECTION (#education)
          ===================================================================== */}
      <section className="education-section" id="education" aria-label="Academic Education and Certifications">
        <div className="section-header">
          <div className="clay-badge">
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="section-title">EDUCATION</h2>
          <p className="section-subtitle">
            Formal engineering studies in Computer Science and secondary science qualifications.
          </p>
        </div>

        <div className="education-grid">
          {EDUCATION_DATA.map((edu) => (
            <div key={edu.id} className="education-card clay-card">
              <div className="edu-card-header">
                <span className="mono-tag edu-period-tag">{edu.period}</span>
                <span className="mono-tag edu-status-badge">{edu.status}</span>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>
              <p className="edu-location">{edu.location}</p>

              <div className="edu-score-box clay-inset">
                <span className="score-label mono-tag">ACADEMIC SCORE:</span>
                <span className="score-val">{edu.score}</span>
              </div>

              <p className="edu-details">{edu.details}</p>
            </div>
          ))}
        </div>

        <div className="certifications-sub-block">
          <div className="cert-sub-header">
            <span className="mono-tag cert-sub-tag">COMPLETED COURSEWORK</span>
            <h3 className="cert-sub-title">TECHNICAL COURSES</h3>
            <p className="cert-sub-desc">
              Programming, database, and full-stack web development coursework completed at Einstein Academy of Technology and Management (EATM), Bhubaneswar, Odisha.
            </p>
          </div>

          <div className="certifications-grid">
            {COURSEWORK_DATA.map((course) => (
              <div key={course.id} className="cert-card clay-card">
                <div className="cert-header">
                  <div className="cert-issuer-badge mono-tag">EATM // BHUBANESWAR</div>
                  <span className="cert-status-tag mono-tag">● COMPLETED</span>
                </div>
                <h4 className="cert-title">{course.title}</h4>
                <p className="cert-scope">{course.scope}</p>
                <div className="cert-card-footer">
                  <div className="cert-verified-note clay-inset">
                    <span className="verified-icon">✓</span>
                    <span className="verified-text mono-tag">COMPLETED AT EATM</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================================
            CERTIFICATIONS SECTION
            ===================================================================== */}
        <div className="certifications-sub-block">
          <div className="cert-sub-header">
            <span className="mono-tag cert-sub-tag">PROFESSIONAL ACCREDITATIONS</span>
            <h3 className="cert-sub-title">CERTIFICATIONS</h3>
            <p className="cert-sub-desc">
              Verified technical proficiencies completed through GeeksforGeeks course tracks.
            </p>
          </div>

          <div className="certifications-grid">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div key={cert.id} className="cert-card clay-card">
                <div className="cert-header">
                  <div className="cert-issuer-badge mono-tag">
                    {cert.issuer}
                  </div>
                  <span className="cert-status-tag mono-tag">● {cert.status}</span>
                </div>

                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-scope">{cert.scope}</p>

                <div className="cert-card-footer">
                  {cert.certificateUrl ? (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="clay-btn clay-btn-sienna cert-btn"
                    >
                      VIEW CERTIFICATE
                    </a>
                  ) : (
                    <div className="cert-verified-note clay-inset">
                      <span className="verified-icon">✓</span>
                      <span className="verified-text mono-tag">
                        COMPLETED VIA GEEKSFORGEEKS
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
