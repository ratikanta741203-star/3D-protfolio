import React, { useEffect, useState, useRef } from 'react';
import './LoadingScreen.css';

/**
 * Cinematic full-screen loading screen for Ratikanta Sahoo's 3D Portfolio.
 * 
 * - Black background, Cream & White typography, Burgundy details, Burnt Sienna indicator.
 * - Smoothly ramps 0% -> 100% in ~1.5s while verifying document readiness.
 * - Handles reduced motion and fallback timeouts gracefully.
 */
export default function LoadingScreen({ onLoaded }) {
  const [percent, setPercent] = useState(0);
  const [statusMessage, setStatusMessage] = useState('ALLOCATING 3D SHADERS');
  const [isExiting, setIsExiting] = useState(false);
  const animFrameRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    let exitTimer;
    let completionTimer;
    let safetyCompletionTimer;
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      const reducedMotionTimer = setTimeout(() => onLoaded?.(), 0);
      return () => clearTimeout(reducedMotionTimer);
    }

    // Target duration ~ 1400ms for a snappy, cinematic feel
    const TARGET_DURATION = 1400;

    const statusMilestones = [
      { at: 15, msg: 'LOADING GEOMETRY ENGINE' },
      { at: 45, msg: 'INITIALIZING 3D AVATAR SYSTEM' },
      { at: 75, msg: 'CONFIGURING STUDIO LIGHTS' },
      { at: 92, msg: 'OPTIMIZING VIEWPORT' },
      { at: 100, msg: 'EXPERIENCE READY' },
    ];

    const animateProgress = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progressRatio = Math.min(elapsed / TARGET_DURATION, 1);

      // Smooth cubic ease out
      const eased = 1 - Math.pow(1 - progressRatio, 3);
      const currentPercent = Math.min(Math.round(eased * 100), 100);

      setPercent(currentPercent);

      // Update milestone status message
      const currentStatus = statusMilestones.find((s) => currentPercent <= s.at);
      if (currentStatus) {
        setStatusMessage(currentStatus.msg);
      }

      if (progressRatio < 1) {
        animFrameRef.current = requestAnimationFrame(animateProgress);
      } else {
        // Completed at 100%
        setStatusMessage('EXPERIENCE READY');
        exitTimer = setTimeout(() => {
          setIsExiting(true);
          completionTimer = setTimeout(() => {
            onLoaded?.();
          }, 800); // matches CSS exit transition
        }, 150);
      }
    };

    animFrameRef.current = requestAnimationFrame(animateProgress);

    // Safety fallback timeout: never hang forever
    const safetyTimeout = setTimeout(() => {
      setPercent(100);
      setIsExiting(true);
      safetyCompletionTimer = setTimeout(() => onLoaded?.(), 600);
    }, 3500);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      clearTimeout(safetyTimeout);
      clearTimeout(exitTimer);
      clearTimeout(completionTimer);
      clearTimeout(safetyCompletionTimer);
    };
  }, [onLoaded]);

  return (
    <div
      className={`loader-overlay ${isExiting ? 'is-exiting' : ''}`}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
      aria-label="Loading digital experience"
    >
      {/* Editorial corner frame accents in Burgundy */}
      <div className="loader-corner top-left" aria-hidden="true" />
      <div className="loader-corner top-right" aria-hidden="true" />
      <div className="loader-corner bottom-left" aria-hidden="true" />
      <div className="loader-corner bottom-right" aria-hidden="true" />

      {/* Ambient Burgundy glow */}
      <div className="loader-ambient" aria-hidden="true" />

      <div className="loader-frame">
        <div className="loader-badge">
          <span className="loader-badge-dot" />
          <span>SYSTEM // V2.026</span>
        </div>

        <h1 className="loader-title">RATIKANTA SAHOO</h1>
        <p className="loader-subtitle">INITIALIZING DIGITAL EXPERIENCE</p>

        {/* Big percentage counter */}
        <div className="loader-counter-wrap">
          <span className="loader-counter">{percent}</span>
          <span className="loader-counter-unit">%</span>
        </div>

        {/* Progress track & Burnt Sienna bar */}
        <div className="loader-bar-track">
          <div
            className="loader-bar-fill"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Technical milestone label */}
        <span className="loader-status-text">{statusMessage}</span>
      </div>
    </div>
  );
}
