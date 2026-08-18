import Image from 'next/image';

const characters = [
  {
    src: '/assets/green-bacteria.svg',
    className:
      'left-[10%] top-[3%] w-[72px] sm:left-[15%] sm:top-[4%] sm:w-[84px] md:left-[5%] md:top-[30%] md:w-[100px] lg:left-[7%] lg:w-[120px] xl:left-[8%] xl:w-[135px]',
  },
  {
    src: '/assets/pink-bacteria.svg',
    className:
      'right-[10%] top-[4%] w-[68px] sm:right-[15%] sm:top-[5%] sm:w-[80px] md:left-[19%] md:right-auto md:top-[31%] md:w-[96px] lg:left-[22%] lg:w-[112px] xl:left-[23%] xl:w-[125px]',
  },
  {
    src: '/assets/yellow-bacteria.svg',
    className:
      'bottom-[4%] left-[10%] w-[82px] sm:bottom-[4%] sm:left-[15%] sm:w-[96px] md:bottom-auto md:left-auto md:right-[19%] md:top-[24%] md:w-[110px] lg:right-[22%] lg:w-[130px] xl:right-[23%] xl:w-[145px]',
  },
  {
    src: '/assets/giardia.svg',
    className:
      'bottom-[3%] right-[11%] w-[70px] sm:bottom-[3%] sm:right-[16%] sm:w-[82px] md:bottom-auto md:right-[5%] md:top-[25%] md:w-[100px] lg:right-[7%] lg:w-[118px] xl:right-[8%] xl:w-[130px]',
  },
];

const bubbles = [
  'left-[4%] top-[6%] w-2.5 md:left-[3%] md:top-[9%] md:w-3',
  'left-[34%] top-[2%] w-2 md:left-[14%] md:top-[5%] md:w-2.5',
  'right-[34%] top-[7%] w-2.5 md:right-auto md:left-[27%] md:top-[12%] md:w-2.5',
  'right-[4%] top-[3%] w-2 md:right-[28%] md:top-[9%] md:w-2.5',

  'left-[5%] bottom-[10%] w-2.5 md:left-[9%] md:bottom-auto md:top-[69%] md:w-3',
  'left-[36%] bottom-[2%] w-2 md:left-[42%] md:bottom-auto md:top-[21%] md:w-3',
  'right-[36%] bottom-[10%] w-2.5 md:right-[13%] md:bottom-auto md:top-[10%] md:w-3',
  'right-[4%] bottom-[4%] w-2 md:right-[3%] md:bottom-auto md:top-[28%] md:w-2.5',
];

export default function AboutUsHero() {
  return (
    <section className='relative w-full overflow-hidden bg-white'>
      <div
        className='pointer-events-none absolute inset-0 z-0 overflow-hidden'
        aria-hidden='true'>
        <div className='absolute -bottom-3 -left-[8%] h-[120px] w-[72%] sm:h-[130px] sm:w-[65%] md:h-[165px] md:w-[62%] lg:h-[180px]'>
          <svg
            viewBox='0 0 900 220'
            preserveAspectRatio='none'
            className='h-full w-full'>
            <defs>
              <linearGradient
                id='about-left-wave'
                x1='0'
                y1='0'
                x2='900'
                y2='0'
                gradientUnits='userSpaceOnUse'>
                <stop offset='0%' stopColor='#9d8cb6' stopOpacity='0.18' />
                <stop offset='48%' stopColor='#9d8cb6' stopOpacity='0.12' />
                <stop offset='72%' stopColor='#65b6b7' stopOpacity='0.13' />
                <stop offset='100%' stopColor='#65b6b7' stopOpacity='0.04' />
              </linearGradient>
            </defs>

            <path
              d='
                M -80 76
                C 45 61, 105 88, 165 124
                C 225 160, 270 168, 332 143
                C 388 121, 433 118, 493 148
                C 559 181, 621 184, 691 166
                C 765 147, 822 153, 930 196
                L 930 240
                L -80 240
                Z
              '
              fill='url(#about-left-wave)'
            />

            <path
              d='
                M -80 126
                C 60 108, 116 136, 180 166
                C 241 195, 303 201, 368 176
                C 430 152, 483 151, 548 180
                C 613 209, 688 215, 758 195
                C 824 177, 875 183, 930 208
              '
              fill='none'
              stroke='#65b6b7'
              strokeWidth='18'
              strokeLinecap='round'
              opacity='0.08'
            />
          </svg>
        </div>

        <div className='absolute right-0 top-[68%] h-[100px] w-[55%] sm:top-[67%] sm:h-[115px] sm:w-[48%] md:top-[35%] md:h-[155px] md:w-[38%] lg:h-[170px]'>
          <svg
            viewBox='0 0 650 220'
            preserveAspectRatio='none'
            className='h-full w-full'>
            <defs>
              <linearGradient
                id='about-right-wave'
                x1='0'
                y1='0'
                x2='650'
                y2='0'
                gradientUnits='userSpaceOnUse'>
                <stop offset='0%' stopColor='#9d8cb6' stopOpacity='0.02' />
                <stop offset='50%' stopColor='#9d8cb6' stopOpacity='0.12' />
                <stop offset='100%' stopColor='#9d8cb6' stopOpacity='0.22' />
              </linearGradient>
            </defs>

            <path
              d='
                M -40 133
                C 74 146, 151 155, 224 151
                C 301 147, 351 121, 403 83
                C 455 45, 503 28, 560 42
                C 606 54, 643 80, 690 99
                L 690 155
                C 633 134, 600 111, 554 105
                C 507 99, 469 119, 424 150
                C 364 192, 304 207, 223 198
                C 140 189, 66 167, -40 164
                Z
              '
              fill='url(#about-right-wave)'
            />
          </svg>
        </div>
      </div>

      <div className='relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12'>
        <div className='relative min-h-[490px] sm:min-h-[525px] md:min-h-[400px] lg:min-h-[440px] xl:min-h-[470px]'>
          {bubbles.map((className, index) => (
            <Image
              key={index}
              src='/assets/bubble.svg'
              alt=''
              width={30}
              height={30}
              className={`pointer-events-none absolute z-10 h-auto ${className}`}
            />
          ))}

          {characters.map((character) => (
            <Image
              key={character.src}
              src={character.src}
              alt=''
              width={200}
              height={200}
              className={`pointer-events-none absolute z-10 h-auto ${character.className}`}
            />
          ))}

          <div className='relative z-20 mx-auto flex max-w-[520px] flex-col items-center pt-[105px] text-center sm:pt-[120px] md:pt-5 lg:pt-6'>
            <h1 className='text-4xl font-bold tracking-[-0.03em] sm:text-5xl md:text-[44px] lg:text-[52px] xl:text-[58px]'>
              <span className='text-[#18264d]'>Sobre </span>
              <span className='text-[#9d8cb6]'>nosotros</span>
            </h1>

            <div className='mt-2 flex flex-col items-center sm:mt-3 md:mt-6 lg:mt-7 xl:mt-8'>
              <Image
                src='/assets/logo-icon.svg'
                alt=''
                width={220}
                height={120}
                priority
                className='h-auto w-[95px] sm:w-[110px] md:w-[130px] lg:w-[145px] xl:w-[160px]'
              />

              <Image
                src='/assets/logo-text.svg'
                alt='MiKros Lab Laboratorio Clínico'
                width={420}
                height={130}
                priority
                className='mt-0.5 h-auto w-[130px] sm:w-[145px] md:mt-2 md:w-[165px] lg:w-[185px] xl:w-[200px]'
              />
            </div>

            <p className='mt-2 max-w-[300px] text-sm leading-6 text-[#334175] sm:mt-3 sm:max-w-[350px] sm:text-base sm:leading-7 md:mt-7 md:max-w-[390px] md:leading-8 lg:mt-8 lg:max-w-[440px] lg:leading-9 xl:mt-9'>
              Somos un laboratorio clínico dedicado a ofrecer análisis{' '}
              <span className='font-bold text-[#65b6b7]'>confiables</span>, con
              tecnología de calidad y una atención{' '}
              <span className='font-bold text-[#9d8cb6]'>humana.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}