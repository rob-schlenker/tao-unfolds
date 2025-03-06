import { NextResponse } from 'next/server';
import { getRandomChapter } from '@/lib/chapters';

export async function GET() {
  const chapter = await getRandomChapter();
  return NextResponse.json(chapter);
}