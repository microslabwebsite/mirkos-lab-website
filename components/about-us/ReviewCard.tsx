import { ExternalLink, Star } from 'lucide-react';
import type { GoogleReview } from '@/lib/google-reviews';

type ReviewCardProps = {
  review: GoogleReview;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  const author = review.authorAttribution;

  const text =
    review.text?.text ??
    review.originalText?.text ??
    '';

  const initials = author.displayName
    .split(' ')
    .filter(Boolean)
    .map((name) => name[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <article className='flex aspect-square w-full max-w-[320px] min-w-0 flex-col overflow-hidden rounded-[22px] border border-[#9d8cb6]/10 bg-white p-4 shadow-[0_8px_24px_rgba(24,38,77,0.06)] md:w-[calc(50%-10px)] md:max-w-[320px] md:p-5 lg:w-[calc(33.333%-14px)] lg:max-w-[300px] xl:max-w-[320px] xl:p-6'>
      <div className='flex shrink-0 gap-1'>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={18}
            strokeWidth={1.8}
            fill={
              index < Math.round(review.rating)
                ? 'currentColor'
                : 'none'
            }
            className={
              index < Math.round(review.rating)
                ? 'text-[#f5aa24]'
                : 'text-[#f5aa24]/35'
            }
          />
        ))}
      </div>

      <p className='mt-3 line-clamp-5 flex-1 break-words text-xs font-medium leading-5 text-[#334175] min-[375px]:line-clamp-6 min-[375px]:text-sm min-[375px]:leading-6 md:line-clamp-7 md:text-sm md:leading-6 xl:text-base xl:leading-7'>
        {text}
      </p>

      <div className='mt-3 flex min-w-0 shrink-0 items-center gap-2.5 md:mt-4 md:gap-3'>
        {author.photoUri ? (
          <img
            src={author.photoUri}
            alt={author.displayName}
            referrerPolicy='no-referrer'
            className='h-9 w-9 shrink-0 rounded-full object-cover md:h-10 md:w-10 xl:h-11 xl:w-11'
          />
        ) : (
          <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#65b6b7]/15 text-xs font-bold text-[#65b6b7] md:h-10 md:w-10 xl:h-11 xl:w-11'>
            {initials}
          </div>
        )}

        <div className='min-w-0 flex-1'>
          {author.uri ? (
            <a
              href={author.uri}
              target='_blank'
              rel='noreferrer'
              className='block truncate text-sm font-bold text-[#65b6b7] transition hover:text-[#9d8cb6]'>
              {author.displayName}
            </a>
          ) : (
            <p className='truncate text-sm font-bold text-[#65b6b7]'>
              {author.displayName}
            </p>
          )}

          {review.relativePublishTimeDescription && (
            <p className='truncate text-[11px] text-[#69749a] md:text-xs'>
              {review.relativePublishTimeDescription}
            </p>
          )}
        </div>
      </div>

      {review.googleMapsUri && (
        <a
          href={review.googleMapsUri}
          target='_blank'
          rel='noreferrer'
          className='mt-3 inline-flex w-fit shrink-0 items-center gap-1.5 text-[11px] font-semibold text-[#9d8cb6] transition hover:text-[#65b6b7] md:text-xs'>
          Ver en Google
          <ExternalLink size={12} />
        </a>
      )}
    </article>
  );
}