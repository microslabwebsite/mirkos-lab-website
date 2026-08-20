'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { GoogleReview } from '@/lib/google-reviews';
import ReviewCard from './ReviewCard';

type GoogleReviewsResponse = {
  reviews?: GoogleReview[];
};

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const response = await fetch('/api/google-reviews');

        if (!response.ok) {
          throw new Error('No se pudieron obtener las reseñas');
        }

        const data: GoogleReviewsResponse =
          await response.json();

        setReviews(data.reviews ?? []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  const visibleReviews = Array.from(
    {
      length: Math.min(3, reviews.length),
    },
    (_, index) =>
      reviews[(current + index) % reviews.length],
  );

  const previous = () => {
    if (reviews.length <= 1) return;

    setCurrent(
      (current - 1 + reviews.length) % reviews.length,
    );
  };

  const next = () => {
    if (reviews.length <= 1) return;

    setCurrent(
      (current + 1) % reviews.length,
    );
  };

  const navigationClass =
    reviews.length <= 1
      ? 'hidden'
      : reviews.length === 2
        ? 'flex md:hidden'
        : reviews.length === 3
          ? 'flex lg:hidden'
          : 'flex';

  if (!loading && reviews.length === 0) {
    return null;
  }

  return (
    <section className='relative w-full overflow-hidden py-10 sm:py-14 lg:py-16'>
      <div className='relative mx-auto max-w-7xl px-3 min-[375px]:px-5 sm:px-8 lg:px-12'>
        <div className='mb-7 text-center sm:mb-9'>
          <h2 className='text-2xl font-bold tracking-[-0.03em] min-[375px]:text-3xl sm:text-4xl lg:text-[42px]'>
            <span className='text-[#18264d]'>
              Lo que dicen nuestros{' '}
            </span>

            <span className='text-[#9d8cb6]'>
              pacientes
            </span>
          </h2>

          <div className='mx-auto mt-3 h-1 w-14 rounded-full bg-[#65b6b7]' />
        </div>

        <div className='relative rounded-[26px] bg-gradient-to-br from-[#9d8cb6]/10 via-[#9d8cb6]/7 to-[#65b6b7]/10 px-3 pb-8 pt-5 min-[375px]:px-5 min-[375px]:pt-7 sm:rounded-[32px] sm:px-8 sm:pb-10 sm:pt-8 lg:px-10 xl:px-16'>
          {loading ? (
            <div className='mx-auto flex max-w-[980px] flex-wrap justify-center gap-5'>
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className={`aspect-square w-full max-w-[320px] animate-pulse rounded-[22px] bg-white/80 md:w-[calc(50%-10px)] md:max-w-[320px] lg:w-[calc(33.333%-14px)] lg:max-w-[300px] xl:max-w-[320px] ${
                    index === 1
                      ? 'hidden md:block'
                      : index === 2
                        ? 'hidden lg:block'
                        : ''
                  }`}
                />
              ))}
            </div>
          ) : (
            <>
              <div className='mx-auto flex max-w-[980px] flex-wrap justify-center gap-5'>
                {visibleReviews.map((review, index) => (
                  <div
                    key={review.name}
                    className={`contents ${
                      index === 1
                        ? '[&>article]:hidden md:[&>article]:flex'
                        : index === 2
                          ? '[&>article]:hidden lg:[&>article]:flex'
                          : ''
                    }`}>
                    <ReviewCard review={review} />
                  </div>
                ))}
              </div>

              <div
                className={`mt-6 items-center justify-center gap-3 ${navigationClass}`}>
                <button
                  type='button'
                  onClick={previous}
                  aria-label='Reseña anterior'
                  className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#18264d] shadow-sm transition hover:text-[#65b6b7]'>
                  <ChevronLeft size={19} />
                </button>

                <div className='flex items-center gap-1.5'>
                  {reviews.map((review, index) => (
                    <button
                      key={review.name}
                      type='button'
                      onClick={() => setCurrent(index)}
                      aria-label={`Ir a la reseña ${index + 1}`}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        current === index
                          ? 'bg-[#65b6b7]'
                          : 'bg-[#9d8cb6]/50'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type='button'
                  onClick={next}
                  aria-label='Siguiente reseña'
                  className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#18264d] shadow-sm transition hover:text-[#65b6b7]'>
                  <ChevronRight size={19} />
                </button>
              </div>
            </>
          )}
        </div>

        <Image
          src='/assets/yellow-bacteria.svg'
          alt=''
          width={220}
          height={220}
          className='pointer-events-none absolute -bottom-2 left-2 z-20 h-auto w-20 min-[375px]:-bottom-4 min-[375px]:w-24 sm:w-32 md:-bottom-12 md:left-1 lg:left-6 lg:w-40'
        />
      </div>
    </section>
  );
}