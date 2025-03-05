'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BreathExerciseProps {
  duration: number; // in seconds
}

const BreathExercise: React.FC<BreathExerciseProps> = ({ duration }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mt-6 text-center">
      <motion.div
        className="w-16 h-16 mx-auto bg-blue-300 rounded-full"
        animate={isActive ? {
          scale: [1, 1.5, 1],
          transition: { duration: duration / 2, repeat: Infinity },
        } : {}}
      />
      <button
        onClick={() => setIsActive(!isActive)}
        className="mt-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        {isActive ? 'Stop' : 'Breathe'}
      </button>
    </div>
  );
};

export default BreathExercise;