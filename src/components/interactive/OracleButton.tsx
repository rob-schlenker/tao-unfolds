'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { oracleInsights } from '@/lib/oracleData';

const OracleButton: React.FC = () => {
  const [insight, setInsight] = useState<string | null>(null);

  const getInsight = () => {
    const randomIndex = Math.floor(Math.random() * oracleInsights.length);
    setInsight(oracleInsights[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={getInsight}
        className="bg-gold text-white px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
      >
        Gain Knowledge
      </button>
      {insight && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 italic text-black"
        >
          {insight}
        </motion.p>
      )}
    </div>
  );
};

export default OracleButton;