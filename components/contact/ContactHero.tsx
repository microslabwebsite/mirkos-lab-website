import Image from 'next/image';

const characters = [
  {
    src: '/assets/green-bacteria.svg',
    className:
      'left-[2%] top-[18%] w-16 sm:w-20 md:left-[4%] md:top-[20%] md:w-20 lg:left-[4%] lg:top-[24%] lg:w-24 xl:w-28',
  },
  {
    src: '/assets/pink-bacteria.svg',
    className:
      'left-[28%] top-[28%] w-16 sm:w-20 md:left-[30%] md:top-[30%] md:w-20 lg:left-[29%] lg:top-[32%] lg:w-24 xl:w-28',
  },
  {
    src: '/assets/yellow-bacteria.svg',
    className:
      'right-[27%] top-[18%] w-20 sm:w-24 md:right-[25%] md:top-[22%] md:w-24 lg:right-[24%] lg:top-[20%] lg:w-28 xl:w-32',
  },
  {
    src: '/assets/giardia.svg',
    className:
      'right-[6%] top-[14%] w-16 sm:right-[7%] sm:w-20 md:right-[6%] md:top-[18%] md:w-20 lg:right-[6%] lg:top-[13%] lg:w-24 xl:w-28',
  },
];

const bubbles = [
  'left-[5%] top-[5%] w-2.5 md:w-3',
  'left-[20%] top-[52%] w-2 md:w-2.5',
  'left-[43%] top-[10%] w-2.5 md:w-3',
  'right-[19%] top-[7%] w-2 md:w-2.5',
  'right-[6%] top-[47%] w-2.5 md:w-3',
  'bottom-[15%] left-[55%] w-2 md:w-2.5',
];

export default function ContactHero() {
  return (
    <section className='relative w-full overflow-hidden bg-white'>
      <div className='pointer-events-none absolute inset-0 z-0 overflow-hidden'>
        <div className='absolute -bottom-1 right-0 h-[145px] w-[76%] sm:h-[155px] sm:w-[72%] md:h-[165px] md:w-[68%] lg:h-[175px] lg:w-[70%] xl:h-[195px]'>
          <svg
            viewBox='0 0 1000 260'
            preserveAspectRatio='none'
            className='h-full w-full'
            aria-hidden='true'>
            <defs>
              <linearGradient
                id='contact-turquoise-wave'
                x1='0'
                y1='0'
                x2='1000'
                y2='0'
                gradientUnits='userSpaceOnUse'>
                <stop offset='0%' stopColor='#65b6b7' stopOpacity='0.05' />
                <stop offset='45%' stopColor='#65b6b7' stopOpacity='0.13' />
                <stop offset='100%' stopColor='#65b6b7' stopOpacity='0.28' />
              </linearGradient>

              <linearGradient
                id='contact-violet-wave'
                x1='0'
                y1='0'
                x2='1000'
                y2='0'
                gradientUnits='userSpaceOnUse'>
                <stop offset='0%' stopColor='#9d8cb6' stopOpacity='0.03' />
                <stop offset='50%' stopColor='#9d8cb6' stopOpacity='0.11' />
                <stop offset='100%' stopColor='#9d8cb6' stopOpacity='0.24' />
              </linearGradient>
            </defs>

            <path
              d='
                M 20 202
                C 105 181, 186 158, 275 153
                C 372 147, 455 165, 544 170
                C 625 175, 696 165, 758 140
                C 822 114, 868 77, 908 46
                C 944 18, 974 5, 1010 0

                L 1010 88

                C 975 100, 946 117, 915 140
                C 872 172, 826 198, 766 216
                C 690 239, 610 239, 524 224
                C 433 208, 350 194, 270 196
                C 184 198, 104 211, 55 211
                C 39 211, 28 207, 20 202

                Z
              '
              fill='url(#contact-turquoise-wave)'
            />

            <path
              d='
                M 112 229
                C 188 207, 270 196, 358 202
                C 452 208, 540 222, 630 214
                C 708 207, 772 184, 825 153
                C 878 122, 918 86, 949 61
                C 971 43, 991 32, 1010 27

                L 1010 139

                C 984 148, 960 160, 936 178
                C 899 205, 856 225, 805 239
                C 735 258, 664 260, 588 251
                C 498 240, 417 228, 335 230
                C 260 232, 194 241, 148 240
                C 132 240, 120 235, 112 229

                Z
              '
              fill='url(#contact-violet-wave)'
            />
          </svg>
        </div>
      </div>

      <div className='relative z-10 mx-auto w-full max-w-7xl px-5 py-2 sm:px-8 sm:py-3 md:py-4 lg:px-12 lg:py-4  xl:py-5'>
        <div className='grid items-center gap-3 md:grid-cols-[43%_57%] md:gap-2 lg:grid-cols-[45%_55%] lg:gap-2'>
          <div className='relative z-30 w-full text-left'>
            <h1 className='text-4xl font-bold tracking-[-0.03em] text-[#18264d] sm:text-5xl md:text-[44px] lg:text-[52px] xl:text-[58px]'>
              Contáctanos
            </h1>

            <p className='mt-5 max-w-[420px] text-sm leading-7 text-[#334175] sm:text-base sm:leading-8 md:mt-4 md:max-w-[390px] lg:mt-5 lg:max-w-[440px]'>
              por cualquiera de nuestros medios o{' '}
              <span className='font-bold text-[#65b6b7]'>envíanos tus consultas</span> completando
              el formulario.
              <span className='font-bold text-[#9d8cb6]'> Estamos aquí para ayudarte.</span>
            </p>
          </div>

          <div className='relative z-20 mx-auto h-[190px] w-full max-w-[580px] sm:h-[200px] sm:max-w-[610px] md:h-[205px] md:max-w-[630px] lg:h-[215px] lg:max-w-[660px] xl:h-[235px] xl:max-w-[720px]'>
            {characters.map((character) => (
              <Image
                key={character.src}
                src={character.src}
                alt=''
                width={180}
                height={180}
                className={`absolute z-20 h-auto ${character.className}`}
              />
            ))}

            {bubbles.map((className, index) => (
              <Image
                key={index}
                src='/assets/bubble.svg'
                alt=''
                width={30}
                height={30}
                className={`absolute z-10 h-auto ${className}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
