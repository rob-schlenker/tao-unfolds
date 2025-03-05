'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

interface BackgroundCanvasProps {
  theme: 'day' | 'night';
  chapterNumber: number;
}

const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({ theme }) => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <ambientLight intensity={0.5} />
        <mesh>
          <sphereGeometry args={[5, 32, 32]} />
          <meshStandardMaterial color={theme === 'day' ? '#87CEEB' : '#1E3A8A'} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;