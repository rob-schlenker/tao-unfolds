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
    <div className="p-6 text-black max-w-[100ch] mx-auto">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search chapters..."
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      <ul className="space-y-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
        {filteredChapters.map((chapter) => (
          <li
            key={chapter.number}
            onClick={() => handleSelect(chapter)}
            className="text-sage-dark p-4 m-0 bg-white rounded cursor-pointer transition-all outline-1 outline-gray-500 duration-300 hover:bg-gray-200 hover:outline-2 hover:outline-amber-400 text-center"
          >
            Chapter {chapter.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterArchive;