import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PhotoAvatar } from './PhotoAvatar';
import './Avatar3D.css';

/**
 * Checks whether WebGL is supported in current browser environment.
 */
function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

/**
 * Interactive 3D Avatar for Ratikanta Sahoo.
 * 
 * - Displays a portrait with a static composition.
 * - Soft studio lighting with Burgundy & Burnt Sienna rim lights.
 * - Mobile friendly & WebGL fallback.
 */
export default function Avatar3D() {
  const [webGLOk] = useState(isWebGLAvailable);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768 || 'ontouchstart' in window);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!webGLOk) {
    return (
      <div className="avatar-3d-wrapper">
        <div className="avatar-fallback">
          <div className="avatar-fallback-avatar" style={{ borderRadius: '24px', overflow: 'hidden' }}>
            <img
              src="/images/avatar-developer-3d.webp"
              alt="Ratikanta Sahoo 3D Developer Avatar"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <h3 className="avatar-fallback-title">Ratikanta Sahoo</h3>
          <p className="avatar-fallback-desc">
            Full-Stack Developer | Web Developer | Java & Python Developer
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="avatar-3d-wrapper"
      aria-label="3D portrait of Ratikanta Sahoo"
    >
      {/* Top HUD badge */}
      <div className="avatar-hud-top">
        <div className="avatar-pill">
          <span className="avatar-pill-dot" />
          <span>3D PORTRAIT</span>
        </div>
        <div className="avatar-pill">
          <span>PROFILE</span>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="avatar-canvas-container">
        <Canvas
          camera={{ position: [0, 0.15, 3.2], fov: 42 }}
          dpr={isMobile ? [1, 1.5] : [1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          {/* Studio Lights with Burgundy & Burnt Sienna rim lights */}
          <ambientLight color="#F4EBDD" intensity={0.85} />
          
          {/* Key light (Cream soft spotlight) */}
          <directionalLight
            position={[2, 3, 3]}
            color="#FFFFFF"
            intensity={1.2}
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={1}
            shadow-camera-far={8}
            shadow-bias={-0.0001}
          />

          {/* Fill light (Skin tone warmth) */}
          <directionalLight
            position={[-2, 1, 2]}
            color="#D9A17E"
            intensity={0.45}
          />

          {/* Burgundy Rim Light (Back-Right) */}
          <pointLight
            position={[2.5, 1.5, -1.8]}
            color="#641E32"
            intensity={3.2}
            distance={7}
          />

          {/* Burnt Sienna Rim Light (Back-Left) */}
          <pointLight
            position={[-2.5, 1.5, -1.8]}
            color="#C15A32"
            intensity={2.8}
            distance={7}
          />

          {/* Soft Bottom Uplight */}
          <pointLight
            position={[0, -2, 1]}
            color="#F4EBDD"
            intensity={0.3}
            distance={4}
          />

          <Suspense fallback={null}>
            {/* Floating 3D portrait using Ratikanta's photo */}
            <PhotoAvatar
            />

          </Suspense>
        </Canvas>
      </div>

      {/* Bottom Hint HUD */}
      <div className="avatar-hud-bottom">
        <div className="avatar-hint">
          <span>PROFILE PORTRAIT</span>
        </div>
      </div>
    </div>
  );
}
