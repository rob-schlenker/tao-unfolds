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
    router.push(`/?chapter-number=${newChapter.number}`, { scroll: false });
  };

  useEffect(() => {
    setChapter(initialChapter);
  }, [initialChapter]);

  return (
    <div className="container mx-auto p-4 text-black">
      <BackgroundCanvas theme="day" /> {/* Removed chapterNumber */}
      <DailyChapter chapter={chapter} translation="Legge" />
      <AudioPlayer
        ambientSrc="/audio/Rest.mp3"
        songArtistTitle="Drone in G Major by Rest You Sleeping Giant"
      />
      <ReflectionBox chapterNumber={chapter.number} />
      <BreathExercise duration={30} />
      <OracleButton />
      <NewChapterButton onNewChapter={handleNewChapter} />
    </div>
  );
};

export default ChapterDisplay;