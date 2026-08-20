import { NextResponse } from 'next/server';
import { getGoogleReviews } from '@/lib/google-reviews';

export async function GET() {
  try {
    const reviews = await getGoogleReviews();

    return NextResponse.json({ reviews });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: 'No se pudieron obtener las reseñas',
      },
      {
        status: 500,
      },
    );
  }
}