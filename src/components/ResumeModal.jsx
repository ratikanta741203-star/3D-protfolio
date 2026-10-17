import React from 'react';
import './ResumeModal.css';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="resume-modal-backdrop" onClick={onClose}>
      <div className="resume-modal-card clay-card" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-badge mono-tag">RESUME ARCHIVE // 2026</div>
        <h3 className="resume-modal-title">Curriculum Vitae</h3>
        <p className="resume-modal-desc">
          Ratikanta Sahoo's verified one-page enhanced resume is available for download, featuring B.Tech engineering coursework, Full-Stack & Java competencies, project portfolio, and certifications.
        </p>

        <div className="resume-modal-details clay-inset">
          <div className="resume-detail-row">
            <span className="resume-detail-label">Candidate:</span>
            <span className="resume-detail-val">Ratikanta Sahoo</span>
          </div>
          <div className="resume-detail-row">
            <span className="resume-detail-label">Specialization:</span>
            <span className="resume-detail-val">Full-Stack Development, Java & Python</span>
          </div>
          <div className="resume-detail-row">
            <span className="resume-detail-label">Status:</span>
            <span className="resume-detail-val highlight">Available for Roles & Internships</span>
          </div>
          <div className="resume-detail-row">
            <span className="resume-detail-label">Document:</span>
            <span className="resume-detail-val">Ratikanta_Sahoo_Resume_OnePage_Enhanced.pdf</span>
          </div>
        </div>

        <div className="resume-modal-actions">
          <a
            href="/Ratikanta_Sahoo_Resume_OnePage_Enhanced.pdf"
            download="Ratikanta_Sahoo_Resume_OnePage_Enhanced.pdf"
            className="clay-btn clay-btn-sienna"
          >
            DOWNLOAD RESUME (PDF)
          </a>
          <a
            href="/Ratikanta_Sahoo_Resume_OnePage_Enhanced.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="clay-btn clay-btn-secondary"
          >
            PREVIEW IN BROWSER
          </a>
          <button
            type="button"
            className="clay-btn clay-btn-secondary"
            onClick={onClose}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
