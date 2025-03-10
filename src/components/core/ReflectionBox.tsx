'use client';
import React, { useState, useEffect } from 'react';

interface ReflectionBoxProps {
  chapterNumber: number;
}

const ReflectionBox: React.FC<ReflectionBoxProps> = ({ chapterNumber }) => {
  const [reflection, setReflection] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(`reflection-${chapterNumber}`);
    if (saved) setReflection(saved);
  }, [chapterNumber]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setReflection(text);
    const timeout = setTimeout(() => {
      localStorage.setItem(`reflection-${chapterNumber}`, text);
    }, 500); // Save after 500ms of no typing
    return () => clearTimeout(timeout);
  };

  const clearReflection = () => {
    setReflection('');
    localStorage.removeItem(`reflection-${chapterNumber}`);
  };

  return (
    <div className="mt-6 p-4 bg-white bg-opacity-80 rounded-lg shadow-md">
      <textarea
        value={reflection}
        onChange={handleChange}
        placeholder="Reflect on this chapter..."
        className="w-full h-24 md:h-56 p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      <button
        onClick={clearReflection}
        className="bg-sage-light text-sage-dark px-6 py-3 rounded-full text-lg transition-all duration-300 mx-auto block hover:bg-sage hover:text-white">Clear Reflection</button>
    </div>
  );
};

export default ReflectionBox;