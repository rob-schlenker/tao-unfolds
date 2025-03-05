import DailyChapter from '@/components/core/DailyChapter';
import AudioPlayer from '@/components/core/AudioPlayer';
import ReflectionBox from '@/components/core/ReflectionBox';
import BreathExercise from '@/components/interactive/BreathExercise';
import BackgroundCanvas from '@/components/interactive/BackgroundCanvas';
import OracleButton from '@/components/interactive/OracleButton';
import { getDailyChapter } from '@/lib/chapters';

export default async function Home() {
  const chapter = await getDailyChapter();
  return (
    <div className="container mx-auto p-4">
      <BackgroundCanvas theme="day" chapterNumber={chapter.number} />
      <DailyChapter chapter={chapter} translation="Legge" />
      <AudioPlayer
        audioSrc={`/audio/chapter-${chapter.number}.mp3`}
        ambientSrc="/audio/stream.mp3"
      />
      <ReflectionBox chapterNumber={chapter.number} />
      <BreathExercise duration={30} />
      <OracleButton chapterNumber={chapter.number} />
    </div>
  );
}