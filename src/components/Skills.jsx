import React from 'react';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    category: 'DEVELOPMENT',
    tag: 'CORE // 01',
    description: 'Programming languages, web foundations, and database skills completed through coursework and projects.',
    skills: [
      'C',
      'C++',
      'HTML5',
      'CSS3',
      'XML',
      'Python',
      'Java',
      'SQL',
      'MySQL',
    ],
  },
  {
    category: 'MERN STACK',
    tag: 'COMPLETED COURSEWORK // 02',
    description: 'Completed MERN Stack coursework at EATM, covering the JavaScript full-stack ecosystem and typed React development.',
    skills: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'JSX / TSX',
      'MongoDB Query Language (MQL)',
    ],
  },
  {
    category: 'PRODUCTIVITY',
    tag: 'OFFICE & EXECUTION // 03',
    description: 'High-speed typing ergonomics, office suite proficiency, and executive presentation drafting.',
    skills: [
      'Typing practice',
      'Microsoft Word',
      'Microsoft Excel',
      'Microsoft PowerPoint',
      'Presentation Delivery',
    ],
  },
  {
    category: 'CREATIVE',
    tag: 'DESIGN & WRITING // 04',
    description: 'Visual communication, design editing, storytelling, script formulation, and professional correspondence.',
    skills: [
      'Photo Editing',
      'Poster Making',
      'Report Writing',
      'Script Writing',
      'Email Writing',
    ],
  },
  {
    category: 'PROFESSIONAL',
    tag: 'LEADERSHIP & COLLABORATION // 05',
    description: 'Interpersonal coordination, hackathon teamwork, promotional outreach, and analytical reasoning.',
    skills: [
      'Marketing',
      'Team Collaboration',
      'Communication',
      'Problem Solving',
    ],
  },
  {
    category: 'TOOLS',
    tag: 'DEVELOPER WORKFLOW // 06',
    description: 'Version control workflows, repository management, and code editor environment.',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
    ],
  },
  {
    category: 'LEARNING',
    tag: 'EXPLORING & ADVANCING // 07',
    description: 'Technologies currently being explored through self-directed learning and project work.',
    skills: [
      'Three.js & 3D Web',
      'REST API Integration',
      'AI & Machine Learning Tools',
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills" aria-label="Skills and Technologies">
      <div className="section-header">
        <div className="clay-badge">
          <span>EXPERTISE MATRIX</span>
        </div>
        <h2 className="section-title">SKILLS & CAPABILITIES</h2>
        <p className="section-subtitle">
          An honest categorization of development languages, creative proficiencies, office productivity, and active learning areas.
        </p>
      </div>

      <div className="skills-grid">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="skill-category-card clay-card">
            <div className="skill-card-top">
              <span className="skill-card-tag mono-tag">{cat.tag}</span>
              <h3 className="skill-card-role">{cat.category}</h3>
              <p className="skill-card-desc">{cat.description}</p>
            </div>

            <div className="skill-badges-container">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-pill clay-inset">
                  <span className="skill-pill-bullet" />
                  <span className="skill-pill-text">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
