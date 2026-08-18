import Image from 'next/image';

const characters = [
  {
    src: '/assets/green-bacteria.svg',
    className: 'left-[10%] top-[1%] w-[82px] sm:w-[92px] md:left-[11%] md:w-[98px] lg:w-[108px]',
  },
  {
    src: '/assets/pink-bacteria.svg',
    className:
      'left-[2%] top-[43%] w-[92px] sm:left-[3%] sm:w-[102px] md:left-[2%] md:w-[108px] lg:w-[118px]',
  },
  {
    src: '/assets/yellow-bacteria.svg',
    className:
      'left-[38%] top-[29%] w-[112px] sm:left-[39%] sm:w-[124px] md:left-[40%] md:w-[132px] lg:w-[142px]',
  },
  {
    src: '/assets/giardia.svg',
    className:
      'right-[2%] top-[4%] w-[92px] sm:right-[3%] sm:w-[104px] md:right-[2%] md:w-[112px] lg:w-[122px]',
  },
];

const bubbles = [
  'left-[1%] top-[17%] w-2.5 sm:w-3',
  'left-[27%] top-[12%] w-2.5 sm:w-3',
  'left-[18%] top-[67%] w-2.5 sm:w-3',
  'left-[58%] top-[6%] w-2.5 sm:w-3',
  'left-[66%] top-[57%] w-2.5 sm:w-3',
  'right-[24%] top-[8%] w-3 sm:w-3.5',
  'right-[17%] top-[61%] w-2.5 sm:w-3',
  'right-[0%] top-[23%] w-2.5 sm:w-3',
];

export default function ServicesHero() {
  return (
    <section className='relative overflow-hidden bg-white'>
      <div className='pointer-events-none absolute inset-0 z-0 overflow-hidden' aria-hidden='true'>
        <div className='absolute -bottom-2 left-0 h-[155px] w-full sm:h-[165px] md:h-[175px] lg:h-[185px]'>
          <svg viewBox='0 0 1440 240' preserveAspectRatio='none' className='h-full w-full'>
            <defs>
              <linearGradient
                id='services-wave-gradient'
                x1='0'
                y1='0'
                x2='1440'
                y2='0'
                gradientUnits='userSpaceOnUse'>
                <stop offset='0%' stopColor='#65b6b7' stopOpacity='0.17' />
                <stop offset='43%' stopColor='#e1efee' stopOpacity='0.16' />
                <stop offset='65%' stopColor='#e8e5f0' stopOpacity='0.18' />
                <stop offset='100%' stopColor='#9d8cb6' stopOpacity='0.24' />
              </linearGradient>
            </defs>

            <path
              d='
                M -80 126

                C 70 158, 195 159, 315 142
                C 435 125, 535 112, 650 132
                C 760 151, 850 166, 945 157

                C 1030 149, 1095 118, 1160 92
                C 1230 64, 1305 52, 1380 62
                C 1440 70, 1490 92, 1540 108

                L 1540 218

                C 1480 207, 1420 192, 1350 183
                C 1270 173, 1200 174, 1130 188

                C 1050 204, 990 213, 915 207
                C 825 200, 750 180, 648 166
                C 535 150, 430 148, 310 166
                C 180 185, 55 187, -80 158

                Z
              '
              fill='url(#services-wave-gradient)'
            />
          </svg>
        </div>
      </div>

      <div className='relative z-10 mx-auto max-w-7xl px-6 pb-5 pt-7 sm:px-8 sm:pb-6 sm:pt-8 md:px-10 md:pb-7 md:pt-8 lg:px-12 lg:pb-8 lg:pt-9'>
        <div className='grid items-center gap-3 md:grid-cols-[43%_57%] md:gap-2 lg:grid-cols-[45%_55%] lg:gap-2'>
          <div className='w-full text-center md:text-left'>
            <h1 className='text-4xl font-bold tracking-[-0.03em] text-[#18264d] sm:text-5xl lg:whitespace-nowrap '>
              <span className='text-[#18264d]'>Nuestros </span>
              <span className='text-[#9d8cb6]'>servicios</span>
            </h1>

            <p className='mt-5 max-w-[420px] text-sm leading-7 text-[#334175] sm:text-base sm:leading-8 md:mt-4 md:max-w-[390px] lg:mt-5 lg:max-w-[440px]'>
              Contamos con una amplia gama de{' '}
              <span className='font-bold text-[#65b6b7]'>estudios clínicos</span> para cuidar de ti
              y tu <span className='font-bold text-[#9d8cb6]'>familia.</span>
            </p>
          </div>

          <div className='relative z-10 mx-auto h-[220px] w-full max-w-[580px] sm:h-[230px] sm:max-w-[610px] md:h-[240px] md:max-w-[630px] lg:h-[250px] lg:max-w-[660px]'>
            {bubbles.map((className, index) => (
              <Image
                key={index}
                src='/assets/bubble.svg'
                alt=''
                width={30}
                height={30}
                className={`absolute h-auto ${className}`}
              />
            ))}

            {characters.map((character) => (
              <Image
                key={character.src}
                src={character.src}
                alt=''
                width={180}
                height={180}
                className={`absolute h-auto ${character.className}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
