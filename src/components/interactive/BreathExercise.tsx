'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BreathExerciseProps {
  duration: number; // in seconds
}

const BreathExercise: React.FC<BreathExerciseProps> = ({ duration }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="text-center flex flex-col items-center justify-center py-2 gap-4">
      <motion.div
        className="w-16 h-16 mx-auto bg-blue-300 rounded-full "
        animate={isActive ? {
          scale: [1, 1.5, 1],
          transition: { duration: duration / 2, repeat: Infinity },
        } : {}}
      />
      <button
        onClick={() => setIsActive(!isActive)}
        id="breatheBtn" className="bg-sage-light text-sage-dark px-6 py-3 rounded-full text-lg transition-all duration-300 mx-auto block hover:bg-sage hover:text-white"
      >
        {isActive ? 'Stop' : 'Begin Breathing'}
      </button>
    </div>
  );
};

export default BreathExercise;