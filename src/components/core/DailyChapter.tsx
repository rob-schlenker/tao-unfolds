'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Chapter } from '@/lib/chapters';

interface DailyChapterProps {
  chapter: Chapter;
  translation: string;
}

const DailyChapter: React.FC<DailyChapterProps> = ({ chapter, translation }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-white p-10 rounded-lg shadow-md mb-10 relative border-l-4 border-sage"
    >
      <h2 className="absolute top-0 right-5 -translate-y-1/2 bg-sage text-white px-4 py-1 rounded-full text-sm">
        Chapter {chapter.number}
      </h2>
      <p className="text-lg leading-relaxed">{chapter.text}</p>
      <small className="text-gray-500">Translated by {translation}</small>
    </motion.div>
  );
};

export default DailyChapter;