'use client';
import React, { useState } from 'react';
import { Chapter } from '@/lib/chapters';

interface ChapterArchiveProps {
  chapters: Chapter[];
  onSelect: (chapter: Chapter) => void;
}

const ChapterArchive: React.FC<ChapterArchiveProps> = ({ chapters, onSelect }) => {
  const [search, setSearch] = useState('');

  const filteredChapters = chapters.filter(ch =>
    ch.text.toLowerCase().includes(search.toLowerCase()) ||
    ch.number.toString().includes(search)
  );

  return (
    <div className="p-6">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search chapters..."
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      <ul className="space-y-2">
        {filteredChapters.map((chapter) => (
          <li
            key={chapter.number}
            onClick={() => onSelect(chapter)}
            className="p-2 bg-white rounded cursor-pointer hover:bg-gray-100"
          >
            Chapter {chapter.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterArchive;