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
      className="text-center p-6 bg-white bg-opacity-80 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-light mb-4">
        Chapter {chapter.number}
      </h2>
      <p className="text-lg leading-relaxed whitespace-pre-line">{chapter.text}</p>
      <small className="text-gray-500">Translated by {translation}</small>
    </motion.div>
  );
};

export default DailyChapter;