import ChapterDisplay from '@/components/core/ChapterDisplay';
import { getDailyChapter, getChapterByNumber } from '@/lib/chapters';

export default async function Home({ searchParams }: { searchParams: { 'chapter-number'?: string } }) {
  const chapterNumber = searchParams['chapter-number'];
  const chapter = chapterNumber
    ? await getChapterByNumber(Number(chapterNumber))
    : await getDailyChapter();

  if (!chapter || chapter.number === 0) {
    return <div className="text-center p-4">Chapter not found. Showing daily chapter instead.</div>;
  }

  return <ChapterDisplay initialChapter={chapter} />;
}