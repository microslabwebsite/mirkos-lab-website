export type GoogleReview = {
  name: string;
  rating: number;
  relativePublishTimeDescription?: string;
  text?: {
    text: string;
    languageCode?: string;
  };
  originalText?: {
    text: string;
    languageCode?: string;
  };
  authorAttribution: {
    displayName: string;
    uri?: string;
    photoUri?: string;
  };
  googleMapsUri?: string;
};

type GoogleReviewsResponse = {
  reviews?: GoogleReview[];
};

export async function getGoogleReviews(): Promise<GoogleReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    throw new Error('Google Places no está configurado');
  }

  const response = await fetch(
    `https://places.googleapis.com/v1/places/${placeId}?languageCode=es`,
    {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'reviews',
      },
      next: {
        revalidate: 86400,
      },
    },
  );

  if (!response.ok) {
    throw new Error(
      'No se pudieron obtener las reseñas de Google',
    );
  }

  const data: GoogleReviewsResponse =
    await response.json();

  return Array.from(
    new Map(
      (data.reviews ?? []).map((review) => [
        review.name,
        review,
      ]),
    ).values(),
  );
}