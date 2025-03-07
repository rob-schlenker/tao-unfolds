import ChapterArchive from '@/components/utility/ChapterArchive';
import { getAllChapters } from '@/lib/chapters';
import { Chapter } from '@/lib/chapters';

export default async function ArchivePage() {
  const chapters = await getAllChapters();

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-light text-center p-6">Chapter Archive</h1>
      <ChapterArchive chapters={chapters} />
    </div>
  );
}