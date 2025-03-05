'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { oracleInsights } from '@/lib/oracleData';

interface OracleButtonProps {
  chapterNumber: number;
}

const OracleButton: React.FC<OracleButtonProps> = ({ chapterNumber }) => {
  const [insight, setInsight] = useState<string | null>(null);

  const getInsight = () => {
    const randomIndex = Math.floor(Math.random() * oracleInsights.length);
    setInsight(oracleInsights[randomIndex]);
  };

  return (
    <div className="mt-6 text-center">
      <button
        onClick={getInsight}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Consult the Tao
      </button>
      {insight && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 italic text-gray-600"
        >
          "{insight}"
        </motion.p>
      )}
    </div>
  );
};

export default OracleButton;