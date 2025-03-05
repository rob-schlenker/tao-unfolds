import { NextResponse } from 'next/server';
import { getDailyChapter } from '@/lib/chapters';

export async function GET() {
  const chapter = await getDailyChapter();
  return NextResponse.json(chapter);
}