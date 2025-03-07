'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Define props interface
interface BackgroundCanvasProps {
  theme: 'day' | 'night';
}

// Shader for water-like waves
const WaterShader = {
  uniforms: {
    uTime: { value: 0.0 },
    uColor: { value: new THREE.Color('#87CEEB') }, // Default: light blue for day
    uAmplitude: { value: 0.1 }, // Wave height
    uFrequency: { value: 2.0 }, // Wave density
  },
  vertexShader: `
    uniform float uTime;
    uniform float uAmplitude;
    uniform float uFrequency;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec3 pos = position;
      pos.z += sin(pos.x * uFrequency + uTime) * cos(pos.y * uFrequency + uTime) * uAmplitude;
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

const WaterPlane: React.FC<{ theme: 'day' | 'night' }> = ({ theme }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const shaderRef = useRef<THREE.ShaderMaterial>(null!);

  // Animate the waves
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
        args={[WaterShader]}
        uniforms-uColor-value={new THREE.Color(color)}
        transparent
      />
    </mesh>
  );
};

const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({ theme }) => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <WaterPlane theme={theme} />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;