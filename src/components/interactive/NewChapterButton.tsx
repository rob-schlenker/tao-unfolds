'use client';
import React, { useState } from 'react';
import { Chapter } from '@/lib/chapters';

interface NewChapterButtonProps {
  onNewChapter: (chapter: Chapter) => void;
}

const NewChapterButton: React.FC<NewChapterButtonProps> = ({ onNewChapter }) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchNewChapter = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/chapter/random');
      if (!response.ok) throw new Error('Failed to fetch chapter');
      const newChapter: Chapter = await response.json();
      onNewChapter(newChapter);
    } catch (error) {
      console.error('Error fetching new chapter:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={fetchNewChapter}
      disabled={isLoading}
      className="bg-sage text-white px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      {isLoading ? 'Loading...' : 'Get a New Chapter'}
    </button>
  );
};

export default NewChapterButton;