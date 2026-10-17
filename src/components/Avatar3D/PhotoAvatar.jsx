import React, { useMemo } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const AVATAR_SIZE = 2.15;
const FRAME_BORDER = 0.14;

/**
 * 3D Avatar Portrait for Ratikanta Sahoo featuring his developer studio 3D illustration.
 * - Floats and translates in 3D space in response to cursor position.
 * - Tilts and rotates naturally with mouse movement.
 * - Bobs smoothly with idle floating physics.
 * - Styled with Claymorphic Burgundy and Burnt Sienna bezel.
 */
export function PhotoAvatar() {
  // Load the user's authentic 3D developer avatar photo
  const texture = useTexture('/images/avatar-developer-3d.webp');

  const avatarTexture = useMemo(() => {
    const configured = texture.clone();
    configured.colorSpace = THREE.SRGBColorSpace;
    configured.generateMipmaps = true;
    configured.minFilter = THREE.LinearMipmapLinearFilter;
    configured.magFilter = THREE.LinearFilter;
    configured.anisotropy = 16;
    return configured;
  }, [texture]);

  return (
    <group position={[0, 0, 0]}>
      {/* Outer Claymorphic Frame Backing in Burgundy */}
      <mesh position={[0, 0, -0.05]} castShadow receiveShadow>
        <boxGeometry args={[AVATAR_SIZE + FRAME_BORDER, AVATAR_SIZE + FRAME_BORDER, 0.1]} />
        <meshStandardMaterial
          color="#641E32"
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      {/* Inner Bezel Accent in Burnt Sienna */}
      <mesh position={[0, 0, -0.01]}>
        <boxGeometry args={[AVATAR_SIZE + 0.04, AVATAR_SIZE + 0.04, 0.04]} />
        <meshStandardMaterial
          color="#C15A32"
          roughness={0.35}
          metalness={0.15}
        />
      </mesh>

      {/* The 3D Developer Avatar Image Plane */}
      <mesh position={[0, 0, 0.02]} castShadow>
        <planeGeometry args={[AVATAR_SIZE, AVATAR_SIZE]} />
        <meshBasicMaterial
          map={avatarTexture}
          toneMapped={false}
        />
      </mesh>

      {/* Bottom Claymorphic Badge Tab */}
      <group position={[0, -(AVATAR_SIZE / 2 + 0.06), 0.03]}>
        <mesh castShadow>
          <boxGeometry args={[1.4, 0.12, 0.04]} />
          <meshStandardMaterial color="#641E32" roughness={0.35} />
        </mesh>
        <mesh position={[0, 0, 0.025]}>
          <boxGeometry args={[1.32, 0.035, 0.01]} />
          <meshStandardMaterial color="#C15A32" roughness={0.3} />
        </mesh>
      </group>

      {/* Floating Soft Contact Shadow Plane */}
      <mesh position={[0, -(AVATAR_SIZE / 2 + 0.32), -0.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.4, 1.2]} />
        <meshBasicMaterial
          color="#171311"
          transparent
          opacity={0.22}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
