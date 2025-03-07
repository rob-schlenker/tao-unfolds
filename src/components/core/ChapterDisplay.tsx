'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import DailyChapter from '@/components/core/DailyChapter'
import AudioPlayer from '@/components/core/AudioPlayer'
import ReflectionBox from '@/components/core/ReflectionBox'
import BreathExercise from '@/components/interactive/BreathExercise'
// import BackgroundCanvas from '@/components/interactive/BackgroundCanvas';
import OracleButton from '@/components/interactive/OracleButton'
import NewChapterButton from '@/components/interactive/NewChapterButton'
import Hero from '@/components/core/Hero'
import { Chapter } from '@/lib/chapters'

interface ChapterDisplayProps {
  initialChapter: Chapter
}

const ChapterDisplay: React.FC<ChapterDisplayProps> = ({ initialChapter }) => {
  const [chapter, setChapter] = useState<Chapter>(initialChapter)
  const router = useRouter()

  const handleNewChapter = (newChapter: Chapter) => {
    setChapter(newChapter)
    router.push(`/?chapter-number=${newChapter.number}`, { scroll: false })
  }

  useEffect(() => {
    setChapter(initialChapter)
  }, [initialChapter])

  return (
    <div className="container mx-auto p-4 text-black">
      <Hero />
      {/* <BackgroundCanvas theme="day" /> Removed chapterNumber */}
      <DailyChapter chapter={chapter} translation="Legge" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* left panel */}
        <div className="flex flex-col gap-5">
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-gold">
            <h3 className="text-xl text-sage-dark font-normal mt-0">
              Mindful Breathing
            </h3>
            <p className="mb-4">
              Take a moment to breathe and reflect on today's wisdom.
            </p>
            <BreathExercise duration={30} />

            <h3 className="text-xl text-sage-dark font-normal mt-6">
              Meditation Audio
            </h3>
            <AudioPlayer
              ambientSrc="/audio/Rest.mp3"
              songArtistTitle="Drone in G Major by Rest You Sleeping Giant"
            />
          </div>
        </div>
        {/* right panel  */}
        <div className="flex flex-col gap-5">
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-sage-light">
            <h3 className="text-xl text-sage-dark font-normal mt-0">
              Reflect & Journal
            </h3>
            <p className="mb-2">
              What thoughts arise as you contemplate today's chapter?
            </p>
            <ReflectionBox chapterNumber={chapter.number} />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5 mt-6">
      <NewChapterButton onNewChapter={handleNewChapter} />
      <OracleButton />
    </div>

    </div>
  )
}

export default ChapterDisplay
