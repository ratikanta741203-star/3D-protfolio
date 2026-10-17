import React, { useState, useRef } from 'react';
import './Productivity.css';

const SAMPLE_TEXT = "clean code reflects disciplined thinking and engineering excellence";

export default function Productivity() {
  const [userInput, setUserInput] = useState('');
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const startTimeRef = useRef(null);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setUserInput(val);

    if (!isTyping && val.length > 0) {
      setIsTyping(true);
      startTimeRef.current = Date.now();
    }

    if (val.length > 0 && startTimeRef.current) {
      const minutesElapsed = (Date.now() - startTimeRef.current) / 60000;
      const wordsCount = val.trim().split(/\s+/).length;
      if (minutesElapsed > 0.02) {
        const calculatedWpm = Math.min(130, Math.round(wordsCount / minutesElapsed));
        setWpm(calculatedWpm);
      }

      // Calculate accuracy
      let correctChars = 0;
      for (let i = 0; i < val.length; i++) {
        if (val[i] === SAMPLE_TEXT[i]) {
          correctChars++;
        }
      }
      const acc = Math.round((correctChars / val.length) * 100);
      setAccuracy(acc);
    }
  };

  const handleReset = () => {
    setUserInput('');
    setIsTyping(false);
    startTimeRef.current = null;
    setWpm(0);
    setAccuracy(0);
  };

  return (
    <section className="productivity-section" id="productivity" aria-label="Typing and Productivity">
      <div className="section-header">
        <div className="clay-badge">
          <span>VELOCITY & ERGONOMICS</span>
        </div>
        <h2 className="section-title">TYPING & PRODUCTIVITY</h2>
        <p className="section-subtitle">
          High-velocity typing, cognitive flow states, and disciplined workflow automation driving rapid development.
        </p>
      </div>

      <div className="productivity-grid">
        {/* Interactive Typing Test Card */}
        <div className="productivity-card clay-card">
          <div className="prod-card-header">
            <span className="mono-tag" style={{ color: 'var(--c-burnt-sienna)' }}>
              LIVE BENCHMARK // INTERACTIVE
            </span>
            <button
              type="button"
              className="clay-btn clay-btn-secondary mini-reset-btn"
              onClick={handleReset}
            >
              RESET DEMO
            </button>
          </div>

          <div className="typing-prompt-box clay-inset">
            <p className="prompt-label mono-tag">TYPE THIS PROMPT:</p>
            <p className="prompt-text">
              {SAMPLE_TEXT.split('').map((char, index) => {
                let statusClass = '';
                if (index < userInput.length) {
                  statusClass =
                    userInput[index] === char ? 'char-correct' : 'char-wrong';
                }
                return (
                  <span key={index} className={statusClass}>
                    {char}
                  </span>
                );
              })}
            </p>
          </div>

          <div className="typing-input-wrap">
            <input
              type="text"
              className="typing-input clay-inset"
              value={userInput}
              onChange={handleInputChange}
              aria-label="Typing benchmark input"
            />
          </div>

          {/* Telemetry live badges */}
          <div className="typing-stats-row">
            <div className="stat-pill clay-card">
              <span className="stat-number">{wpm}</span>
              <span className="stat-label">WPM SPEED</span>
            </div>
            <div className="stat-pill clay-card">
              <span className="stat-number">{accuracy}%</span>
              <span className="stat-label">ACCURACY</span>
            </div>
            <div className="stat-pill clay-card">
              <span className="stat-number">{userInput.length}</span>
              <span className="stat-label">CHARACTERS</span>
            </div>
          </div>
        </div>

        {/* Productivity Philosophy & Ergonomics */}
        <div className="productivity-details-card clay-card">
          <span className="mono-tag" style={{ color: 'var(--c-burgundy)' }}>
            WORKFLOW ARCHITECTURE
          </span>
          <h3 className="prod-details-title">Why High Typing Speed Matters</h3>
          <p className="prod-details-desc">
            This short typing exercise shows a live estimate based on your input. It is a simple demonstration and does not represent a verified personal benchmark.
          </p>

          <div className="workflow-points">
            <div className="workflow-item">
              <div className="workflow-bullet" />
              <div>
                <h4 className="workflow-heading">Frictionless Flow State</h4>
                <p className="workflow-text">Immediate translation of thoughts into clean code without breaking mental focus.</p>
              </div>
            </div>

            <div className="workflow-item">
              <div className="workflow-bullet" />
              <div>
                <h4 className="workflow-heading">Disciplined Key Ergonomics</h4>
                <p className="workflow-text">Optimized keystroke posture for long, sustainable engineering sessions.</p>
              </div>
            </div>

            <div className="workflow-item">
              <div className="workflow-bullet" />
              <div>
                <h4 className="workflow-heading">Automated Tooling & Shortcuts</h4>
                <p className="workflow-text">Command line tools and IDE shortcuts for a focused development workflow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
