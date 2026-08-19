import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';

const socialLinks = [
  {
    name: 'Instagram',
    description: 'Síguenos y descubre nuestras novedades',
    href: 'https://www.instagram.com/mikroslaboratorio',
    icon: FaInstagram,
    iconClass:
      'bg-gradient-to-br from-[#65b6b7] to-[#9d8cb6]',
  },
  {
    name: 'Facebook',
    description: 'Encuéntranos y conoce más de MiKros Lab',
    href: 'https://www.facebook.com/mikroslab',
    icon: FaFacebookF,
    iconClass: 'bg-[#9d8cb6]',
  },
];

export default function FollowUs() {
  return (
    <div className='relative h-full min-h-[360px] overflow-hidden rounded-[24px] border border-[#9d8cb6]/10 bg-gradient-to-br from-[#9d8cb6]/10 to-[#65b6b7]/10 p-6 shadow-sm sm:p-8 lg:min-h-full'>
      <div className='relative z-20'>
        <h2 className='text-xl font-bold text-[#18264d] sm:text-2xl'>
          Síguenos
        </h2>

        <div className='mt-2 h-1 w-12 rounded-full bg-[#9d8cb6]' />

        <p className='mt-4 max-w-[280px] text-sm leading-6 text-[#334175]'>
          Mantente al día con nuestras novedades e información.
        </p>

        <div className='mt-7 flex flex-col gap-4'>
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <Link
                key={social.name}
                href={social.href}
                target='_blank'
                rel='noreferrer'
                aria-label={social.name}
                className='group flex w-full items-center gap-4 rounded-2xl border border-white/60 bg-white/85 p-4 shadow-[0_6px_18px_rgba(24,38,77,0.05)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_10px_24px_rgba(24,38,77,0.08)]'
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-sm ${social.iconClass}`}
                >
                  <Icon size={19} />
                </div>

                <div>
                  <p className='text-sm font-bold text-[#18264d]'>
                    {social.name}
                  </p>

                  <p className='mt-1 text-xs leading-5 text-[#69749a]'>
                    {social.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div
        className='pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[210px]'
        aria-hidden='true'
      >
        <svg
          viewBox='0 0 500 240'
          preserveAspectRatio='none'
          className='h-full w-full'
        >
          <defs>
            <linearGradient
              id='follow-wave'
              x1='0'
              y1='0'
              x2='500'
              y2='0'
              gradientUnits='userSpaceOnUse'
            >
              <stop
                offset='0%'
                stopColor='#65b6b7'
                stopOpacity='0.05'
              />
              <stop
                offset='55%'
                stopColor='#65b6b7'
                stopOpacity='0.09'
              />
              <stop
                offset='100%'
                stopColor='#9d8cb6'
                stopOpacity='0.18'
              />
            </linearGradient>
          </defs>

          <path
            d='
              M -40 185
              C 55 155, 115 171, 178 190
              C 247 211, 308 204, 358 170
              C 407 137, 443 93, 540 58

              L 540 240
              L -40 240
              Z
            '
            fill='url(#follow-wave)'
          />
        </svg>
      </div>

<Image
  src='/assets/pink-bacteria.svg'
  alt=''
  width={180}
  height={180}
  className='pointer-events-none absolute right-5 top-5 z-10 h-auto w-20 sm:right-7 sm:top-6 sm:w-24 md:right-8 md:top-6 md:w-28 lg:bottom-6 lg:right-7 lg:top-auto lg:w-36'
/>

<Image
  src='/assets/bubble.svg'
  alt=''
  width={30}
  height={30}
  className='pointer-events-none absolute right-28 top-5 z-10 h-auto w-2.5 opacity-55 sm:right-34 sm:top-6 md:right-38 lg:right-7 lg:top-7 lg:w-3'
/>

<Image
  src='/assets/bubble.svg'
  alt=''
  width={30}
  height={30}
  className='pointer-events-none absolute right-5 top-28 z-10 h-auto w-2 opacity-55 sm:right-6 sm:top-32 md:right-7 md:top-34 lg:bottom-44 lg:right-10 lg:top-auto lg:w-2.5'
/>

<Image
  src='/assets/bubble.svg'
  alt=''
  width={30}
  height={30}
  className='pointer-events-none absolute right-30 top-24 z-10 h-auto w-2 opacity-55 sm:right-36 sm:top-28 md:right-40 md:top-30 lg:bottom-16 lg:right-44 lg:top-auto'
/>
    </div>
  );
}