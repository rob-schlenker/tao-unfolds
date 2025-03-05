export interface Chapter {
    number: number;
    title: string;
    text: string;
  }
  
  export async function getDailyChapter(): Promise<Chapter> {
    const chapters: Chapter[] = [
      { number: 1, title: '', text: 'The Tao that can be told...' },
      // Placeholder for missing chapters
      { number: 2, title: '', text: 'Placeholder for Chapter 2' },
      // Add more or fetch from a real source later
    ];
    const dayOfYear = Math.floor((Date.now() - Date.parse('2025-01-01')) / (1000 * 60 * 60 * 24));
    const chapterIndex = dayOfYear % 81;
    return chapters[chapterIndex] || { number: 0, title: 'Not Found', text: 'Chapter not available yet.' };
  }