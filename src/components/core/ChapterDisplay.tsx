'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DailyChapter from '@/components/core/DailyChapter';
import AudioPlayer from '@/components/core/AudioPlayer';
import ReflectionBox from '@/components/core/ReflectionBox';
import BreathExercise from '@/components/interactive/BreathExercise';
import BackgroundCanvas from '@/components/interactive/BackgroundCanvas';
import OracleButton from '@/components/interactive/OracleButton';
import NewChapterButton from '@/components/interactive/NewChapterButton';
import { Chapter } from '@/lib/chapters';

interface ChapterDisplayProps {
  initialChapter: Chapter;
}

const ChapterDisplay: React.FC<ChapterDisplayProps> = ({ initialChapter }) => {
  const [chapter, setChapter] = useState<Chapter>(initialChapter);
  const router = useRouter();

  const handleNewChapter = (newChapter: Chapter) => {
    setChapter(newChapter);
    // Update URL without reloading the page
    router.push(`/?chapter-number=${newChapter.number}`, { scroll: false });
  };

  // Sync chapter with URL changes (e.g., browser back/forward)
  useEffect(() => {
    setChapter(initialChapter);
  }, [initialChapter]);

  const song = 'Rest';

  return (
    <div className="container mx-auto p-4">
      <BackgroundCanvas theme="day" chapterNumber={chapter.number} />
      <DailyChapter chapter={chapter} translation="Legge" />
      <AudioPlayer
        audioSrc={`/audio/chapter-${chapter.number}.mp3`}
        ambientSrc={`/audio/${song}.mp3"`}
      />
      <p className="text-center text-sm text-gray-500 my-4">Music:  Drone in G Major by Rest You Sleeping Giant</p>
      <ReflectionBox chapterNumber={chapter.number} />
      <BreathExercise duration={30} />
      <OracleButton chapterNumber={chapter.number} />
      <NewChapterButton onNewChapter={handleNewChapter} />
    </div>
  );
};

export default ChapterDisplay;