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
    localStorage.setItem(`reflection-${chapterNumber}`, text);
  };

  return (
    <div className="mt-6 p-4 bg-white bg-opacity-80 rounded-lg shadow-md">
      <textarea
        value={reflection}
        onChange={handleChange}
        placeholder="Reflect on this chapter..."
        className="w-full h-24 p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
    </div>
  );
};

export default ReflectionBox;