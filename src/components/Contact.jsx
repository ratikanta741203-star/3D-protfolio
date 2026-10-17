import React, { useState } from 'react';
import './Contact.css';

const CONTACT_INFO = {
  primaryEmail: 'ratikantas512@gmail.com',
  altEmail: 'ratikanta741203@gmail.com',
  whatsappNumber: '919078835620',
  phone: '9078835620',
  formattedPhone: '+91 9078835620',
  location: 'Jagatsinghpur, Odisha, India',
  github: 'https://github.com/ratikanta741203-star',
  linkedin: 'https://in.linkedin.com/in/ratikanta-sahoo-452763358',
  instagram: 'https://www.instagram.com/ratikanta_sahoo_149_a9?stkn=bjRxazc4dGd1dGs4',
  x: 'https://x.com/A9_Sahoo',
  whatsapp: 'https://wa.me/919078835620?text=Hello%20Ratikanta,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.',
};

function createMessageBody({ name, email, message }) {
  return `From: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`;
}

function createEmailUrl({ name, email, subject, message }) {
  const body = createMessageBody({ name, email, message });
  return `mailto:${CONTACT_INFO.primaryEmail}?subject=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(body)}`;
}

function createWhatsAppUrl({ name, email, subject, message }) {
  const body = createMessageBody({ name, email, message });
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Ratikanta, I saw your portfolio and would like to connect.\n\nSubject: ${subject.trim()}\n\n${body}`)}`;
}

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [submissionState, setSubmissionState] = useState({
    loading: false,
    success: false,
    error: null,
    usedMailto: false,
  });

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      errors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required.';
    } else if (formData.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message content is required.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmissionState({ loading: true, success: false, error: null, usedMailto: false });

    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
          }),
        });

        if (response.ok) {
          setSubmissionState({
            loading: false,
            success: true,
            error: null,
            usedMailto: false,
          });
          setFormErrors({});
        } else {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.message || 'Delivery service returned an error. Please use direct mail fallback.');
        }
      } catch (err) {
        setSubmissionState({
          loading: false,
          success: false,
          error: err.message || 'Network error occurred.',
          usedMailto: false,
        });
      }
    } else {
      setSubmissionState({
        loading: false,
        success: false,
        error: null,
        usedMailto: true,
      });
    }
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormErrors({});
    setSubmissionState({ loading: false, success: false, error: null, usedMailto: false });
  };

  return (
    <section className="contact-section" id="contact" aria-label="Contact Ratikanta Sahoo">
      <div className="section-header">
        <div className="clay-badge">
          <span>CONNECT & COLLABORATE</span>
        </div>
        {/* Exact required heading */}
        <h2 className="section-title">LET'S BUILD SOMETHING GREAT.</h2>
        {/* Exact required description */}
        <p className="section-subtitle">
          Have a project idea, internship opportunity, or collaboration in mind? Let's connect.
        </p>
      </div>

      <div className="contact-grid">
        {/* Direct Contact Details Card */}
        <div className="contact-info-card clay-card">
          <div className="mono-tag" style={{ color: 'var(--c-burnt-sienna)' }}>
            EMAIL & WHATSAPP
          </div>
          <h3 className="contact-info-title">Reach Out Anytime</h3>
          <p className="contact-info-desc">
            Whether for Full-Stack, Java, or Python opportunities, I look forward to discussing how we can build together.
          </p>

          <div className="contact-channels">
            {/* Primary Email */}
            <div className="channel-item clay-inset">
              <span className="channel-label mono-tag">PRIMARY EMAIL</span>
              <a href={`mailto:${CONTACT_INFO.primaryEmail}`} className="channel-val">
                {CONTACT_INFO.primaryEmail}
              </a>
            </div>

            {/* Alternative Email */}
            <div className="channel-item clay-inset">
              <span className="channel-label mono-tag">ALTERNATIVE EMAIL</span>
              <a href={`mailto:${CONTACT_INFO.altEmail}`} className="channel-val">
                {CONTACT_INFO.altEmail}
              </a>
            </div>

            {/* Phone */}
            <div className="channel-item clay-inset">
              <span className="channel-label mono-tag">PHONE (CALL)</span>
              <a href={`tel:+91${CONTACT_INFO.phone}`} className="channel-val">
                {CONTACT_INFO.formattedPhone}
              </a>
            </div>

            {/* Location */}
            <div className="channel-item clay-inset">
              <span className="channel-label mono-tag">LOCATION</span>
              <span className="channel-val">{CONTACT_INFO.location}</span>
            </div>
          </div>

          {/* Social Links & WhatsApp Chat */}
          <div className="contact-social-pills">
            {/* WhatsApp Click-to-Chat (international +91 confirmed) */}
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay-btn-sienna social-pill-btn"
              aria-label="Chat on WhatsApp"
            >
              <span>WHATSAPP CHAT</span>
            </a>

            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay-btn-secondary social-pill-btn"
              aria-label="GitHub Profile"
            >
              <span>GITHUB</span>
            </a>

            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay-btn-secondary social-pill-btn"
              aria-label="LinkedIn Profile"
            >
              <span>LINKEDIN</span>
            </a>

            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay-btn-secondary social-pill-btn"
              aria-label="Instagram Profile"
            >
              <span>INSTAGRAM</span>
            </a>

            <a
              href={CONTACT_INFO.x}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay-btn-secondary social-pill-btn"
              aria-label="X (Twitter) Profile"
            >
              <span>X (@A9_Sahoo)</span>
            </a>
          </div>

          <div className="contact-card-actions">
            <button
              type="button"
              className="clay-btn clay-btn-burgundy"
              onClick={onOpenResume}
            >
              VIEW RESUME ARCHIVE
            </button>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="contact-form-card clay-card">
          <div className="form-card-header">
            <h3 className="form-card-title">Send a Direct Message</h3>
            <span className="mono-tag" style={{ color: 'var(--c-burgundy)', fontSize: '0.72rem' }}>
              EMAIL + WHATSAPP
            </span>
          </div>

          {/* Submission Status Banners */}
          {submissionState.success && (
            <div className="form-feedback-banner success-banner clay-inset" role="alert">
              <div className="banner-icon">✓</div>
              <div>
                <h4 className="banner-title">Email service accepted your message</h4>
                <p className="banner-desc">
                  To also contact Ratikanta on WhatsApp, open the prepared chat and press Send.
                </p>
                <div className="mailto-actions">
                  <a
                    href={createWhatsAppUrl(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clay-btn clay-btn-sienna banner-action-btn"
                  >
                    CONTINUE TO WHATSAPP
                  </a>
                <button
                  type="button"
                  className="clay-btn clay-btn-secondary banner-action-btn"
                  onClick={handleResetForm}
                >
                  SEND ANOTHER MESSAGE
                </button>
                </div>
              </div>
            </div>
          )}

          {submissionState.usedMailto && (
            <div className="form-feedback-banner mailto-banner clay-inset" role="status">
              <div className="banner-icon">✉</div>
              <div>
                <h4 className="banner-title">Choose where to send your message</h4>
                <p className="banner-desc">
                  Your message has not been sent yet. Open each draft below and press Send in your email app and WhatsApp to contact Ratikanta on both.
                </p>
                <div className="mailto-actions">
                  <a
                    href={createEmailUrl(formData)}
                    className="clay-btn clay-btn-sienna banner-action-btn"
                  >
                    SEND TO {CONTACT_INFO.primaryEmail}
                  </a>
                  <a
                    href={createWhatsAppUrl(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clay-btn clay-btn-burgundy banner-action-btn"
                  >
                    OPEN WHATSAPP DRAFT
                  </a>
                  <button
                    type="button"
                    className="clay-btn clay-btn-secondary banner-action-btn"
                    onClick={handleResetForm}
                  >
                    RESET FORM
                  </button>
                </div>
              </div>
            </div>
          )}

          {submissionState.error && (
            <div className="form-feedback-banner error-banner clay-inset" role="alert">
              <div className="banner-icon">!</div>
              <div>
                <h4 className="banner-title">Delivery Failed</h4>
                <p className="banner-desc">{submissionState.error}</p>
                <a
                  href={createEmailUrl(formData)}
                  className="clay-btn clay-btn-sienna banner-action-btn"
                >
                  SEND VIA DIRECT EMAIL
                </a>
                <a
                  href={createWhatsAppUrl(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-btn clay-btn-burgundy banner-action-btn"
                >
                  OPEN WHATSAPP DRAFT
                </a>
              </div>
            </div>
          )}

          {!submissionState.success && !submissionState.usedMailto && (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              {/* Name */}
              <div className="form-field">
                <label htmlFor="contact-name" className="field-label mono-tag">
                  YOUR NAME <span className="req-star">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  aria-required="true"
                  aria-invalid={!!formErrors.name}
                  aria-describedby={formErrors.name ? 'name-error' : undefined}
                  className={`field-input clay-inset ${formErrors.name ? 'has-error' : ''}`}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (formErrors.name) setFormErrors({ ...formErrors, name: null });
                  }}
                />
                {formErrors.name && (
                  <span id="name-error" className="field-error-text mono-tag" role="alert">
                    {formErrors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="form-field">
                <label htmlFor="contact-email" className="field-label mono-tag">
                  YOUR EMAIL ADDRESS <span className="req-star">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  aria-required="true"
                  aria-invalid={!!formErrors.email}
                  aria-describedby={formErrors.email ? 'email-error' : undefined}
                  className={`field-input clay-inset ${formErrors.email ? 'has-error' : ''}`}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (formErrors.email) setFormErrors({ ...formErrors, email: null });
                  }}
                />
                {formErrors.email && (
                  <span id="email-error" className="field-error-text mono-tag" role="alert">
                    {formErrors.email}
                  </span>
                )}
              </div>

              {/* Subject */}
              <div className="form-field">
                <label htmlFor="contact-subject" className="field-label mono-tag">
                  SUBJECT <span className="req-star">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  aria-required="true"
                  aria-invalid={!!formErrors.subject}
                  aria-describedby={formErrors.subject ? 'subject-error' : undefined}
                  className={`field-input clay-inset ${formErrors.subject ? 'has-error' : ''}`}
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (formErrors.subject) setFormErrors({ ...formErrors, subject: null });
                  }}
                />
                {formErrors.subject && (
                  <span id="subject-error" className="field-error-text mono-tag" role="alert">
                    {formErrors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="form-field">
                <label htmlFor="contact-message" className="field-label mono-tag">
                  YOUR MESSAGE <span className="req-star">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  aria-required="true"
                  aria-invalid={!!formErrors.message}
                  aria-describedby={formErrors.message ? 'message-error' : undefined}
                  className={`field-input clay-inset textarea-input ${formErrors.message ? 'has-error' : ''}`}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (formErrors.message) setFormErrors({ ...formErrors, message: null });
                  }}
                />
                {formErrors.message && (
                  <span id="message-error" className="field-error-text mono-tag" role="alert">
                    {formErrors.message}
                  </span>
                )}
              </div>

              {/* Submit Button with Loading State */}
              <button
                type="submit"
                disabled={submissionState.loading}
                className="clay-btn clay-btn-sienna submit-btn"
                aria-label="Send message to Ratikanta Sahoo"
              >
                {submissionState.loading ? (
                  <>
                    <span className="btn-spinner" aria-hidden="true" />
                    <span>DISPATCHING MESSAGE...</span>
                  </>
                ) : (
                  <>
                    <span>CONTINUE TO EMAIL + WHATSAPP</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
