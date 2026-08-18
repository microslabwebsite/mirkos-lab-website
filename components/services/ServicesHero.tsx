import Image from 'next/image';

const characters = [
  {
    src: '/assets/green-bacteria.svg',
    className:
      'left-[8%] top-[2%] w-14 sm:w-16 md:left-[10%] md:top-[0%] md:w-16 lg:w-18',
  },
  {
    src: '/assets/pink-bacteria.svg',
    className:
      'left-[3%] top-[42%] w-16 sm:w-18 md:left-[2%] md:top-[42%] md:w-18 lg:w-20',
  },
  {
    src: '/assets/yellow-bacteria.svg',
    className:
      'left-[36%] top-[34%] w-20 sm:w-24 md:left-[38%] md:top-[34%] md:w-24 lg:w-26',
  },
  {
    src: '/assets/giardia.svg',
    className:
      'right-[4%] top-[10%] w-16 sm:w-18 md:right-[2%] md:top-[8%] md:w-18 lg:w-20',
  },
];

const bubbles = [
  'left-[0%] top-[10%] w-2.5',
  'left-[28%] top-[12%] w-2.5',
  'left-[18%] top-[58%] w-2.5',
  'left-[57%] top-[2%] w-2.5',
  'left-[64%] top-[48%] w-2.5',
  'right-[26%] top-[6%] w-3',
  'right-[18%] top-[52%] w-2.5',
  'right-[0%] top-[18%] w-2.5',
];

export default function ServicesHero() {
  return (
    <section className='relative overflow-hidden bg-white'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute -left-24 -top-24 h-[240px] w-[240px] rounded-full bg-[#65b6b7]/10 sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px]' />

        <div className='absolute -left-[5%] top-[34%] h-[90px] w-[52%] rounded-r-[100px] rounded-l-[120px] bg-[#65b6b7]/10 sm:top-[40%] sm:h-[100px] md:top-[46%] md:h-[110px]' />

        <div className='absolute bottom-0 left-0 h-[120px] w-full overflow-hidden sm:h-[130px] md:h-[140px]'>
          <svg
            viewBox='0 0 1440 220'
            preserveAspectRatio='none'
            className='absolute bottom-0 left-0 h-full w-full'
            aria-hidden='true'
          >
            <path
              d='
                M-80 130
                C90 104 240 112 370 138
                C505 164 640 170 790 140
                C930 112 1065 118 1200 146
                C1305 168 1380 170 1480 134
                L1480 220
                L-80 220
                Z
              '
              fill='#65b6b7'
              opacity='0.12'
            />

            <path
              d='
                M-90 168
                C90 144 235 150 380 176
                C530 202 680 202 842 170
                C988 142 1120 144 1262 170
                C1360 188 1428 186 1488 162
                L1488 220
                L-90 220
                Z
              '
              fill='#9d8cb6'
              opacity='0.16'
            />
          </svg>
        </div>
      </div>

      <div className='relative z-10 mx-auto max-w-7xl px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14'>
        <div className='grid items-center gap-8 md:grid-cols-[40%_60%] lg:gap-10'>
          <div className='max-w-md text-left'>
            <h1 className='text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl'>
              <span className='text-[#18264d]'>Servicios</span>
            </h1>

            <p className='mt-4 max-w-sm text-sm leading-8 text-[#334175] sm:text-base'>
              Contamos con una amplia gama de estudios clínicos para cuidar de ti y tu familia.
            </p>
          </div>

          <div className='relative mx-auto h-[220px] w-full max-w-[520px] sm:h-[240px] md:h-[250px] lg:h-[270px]'>
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