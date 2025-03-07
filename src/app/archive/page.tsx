import ChapterArchive from '@/components/utility/ChapterArchive';
import { getAllChapters } from '@/lib/chapters';

export default async function ArchivePage() {
  const chapters = await getAllChapters();

  return (
    <div className="bg-cream text-gray-800 min-h-screen flex flex-col items-center font-serif max-w-[100ch] mx-auto">
      <h1 className="text-5xl text-sage-dark mb-2 font-normal">Chapter Archive</h1>
      <ChapterArchive chapters={chapters} />
    </div>
  );
}