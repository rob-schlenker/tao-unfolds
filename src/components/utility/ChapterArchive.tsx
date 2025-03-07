'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Chapter } from '@/lib/chapters';

interface ChapterArchiveProps {
  chapters: Chapter[];
}

const ChapterArchive: React.FC<ChapterArchiveProps> = ({ chapters }) => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const filteredChapters = chapters.filter(ch =>
    ch.text.toLowerCase().includes(search.toLowerCase()) ||
    ch.number.toString().includes(search)
  );

  const handleSelect = (chapter: Chapter) => {
    router.push(`/?chapter-number=${chapter.number}`);
  };

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
            onClick={() => handleSelect(chapter)}
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