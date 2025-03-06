'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Define props interface
interface BackgroundCanvasProps {
  theme: 'day' | 'night';
  chapterNumber: number;
}

// Shader for radial ripple effect
const RippleShader = {
  uniforms: {
    uTime: { value: 0.0 },
    uColor: { value: new THREE.Color('#87CEEB') }, // Default: light blue for day
    uAmplitude: { value: 1.15 }, // Wave height
    uFrequency: { value: 6.0 }, // Wave density
    uSpeed: { value: 0.2 }, // Wave speed
  },
  vertexShader: `
    uniform float uTime;
    uniform float uAmplitude;
    uniform float uFrequency;
    uniform float uSpeed;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec3 pos = position;
      vec2 center = vec2(0.0, 0.0); // Center of the plane
      float dist = distance(pos.xy, center); // Distance from center
      pos.z = sin(dist * uFrequency - uTime * uSpeed) * uAmplitude; // Radial wave
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 uColor;
    varying vec2 vUv;

    void main() {
      gl_FragColor = vec4(uColor, 0.6); // Semi-transparent
    }
  `,
};

const RipplePlane: React.FC<{ theme: 'day' | 'night' }> = ({ theme }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const shaderRef = useRef<THREE.ShaderMaterial>(null!);

  // Animate the ripples
  useFrame((state) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  // Set color based on theme
  const color = theme === 'day' ? '#87CEEB' : '#1E3A8A'; // Day: light blue, Night: dark blue

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[10, 10, 32, 32]} /> {/* Wide plane with subdivisions */}
      <shaderMaterial
        ref={shaderRef}
        attach="material"
        args={[RippleShader]}
        uniforms-uColor-value={new THREE.Color(color)}
        transparent
      />
    </mesh>
  );
};

const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({ theme, chapterNumber }) => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RipplePlane theme={theme} />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;