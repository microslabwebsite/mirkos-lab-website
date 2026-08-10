import Image from 'next/image';

const characters = [
  {
    src: '/assets/green-bacteria.svg',
    className:
      'left-[2%] top-[15%] w-20 sm:left-[6%] sm:top-[18%] md:left-[12%] md:w-28 lg:w-36',
  },
  {
    src: '/assets/pink-bacteria.svg',
    className:
      'bottom-[10%] left-[8%] w-20 sm:bottom-[13%] sm:left-[16%] md:left-[24%] md:w-24 lg:w-36',
  },
  {
    src: '/assets/yellow-bacteria.svg',
    className:
      'right-[2%] top-[14%] w-20 sm:right-[6%] sm:top-[17%] md:right-[13%] md:w-28 lg:w-36',
  },
  {
    src: '/assets/giardia.svg',
    className:
      'bottom-[8%] right-[8%] w-20 sm:bottom-[10%] sm:right-[15%] md:bottom-[5%] md:right-[15%] md:w-24 lg:w-30',
  },
];

const bubbles = [
  'left-[5%] top-[7%] w-3 sm:left-[8%] sm:top-[10%] sm:w-4',
  'left-[26%] top-[9%] w-2.5 sm:left-[31%] sm:top-[13%] sm:w-3',
  'right-[25%] top-[7%] w-3 sm:right-[30%] sm:top-[9%] sm:w-4',
  'right-[4%] top-[40%] w-2.5 sm:right-[8%] sm:top-[42%] sm:w-3',
  'bottom-[8%] left-[4%] w-2.5 sm:bottom-[12%] sm:left-[9%] sm:w-3',
  'bottom-[5%] left-[44%] w-3 sm:bottom-[8%] sm:left-[42%] sm:w-4',
  'bottom-[9%] right-[4%] w-3 sm:bottom-[13%] sm:right-[8%] sm:w-4',
];

export default function AboutUsHero() {
  return (
    <section className='relative overflow-hidden bg-white'>
      <div className='relative mx-auto flex min-h-[390px] max-w-6xl items-center justify-center px-5 py-10 sm:min-h-[440px] sm:px-6 sm:py-12 md:min-h-[480px] lg:px-8'>
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

        <div className='relative z-10 mx-auto w-full max-w-[270px] text-center sm:max-w-md md:max-w-xl'>
          <Image
            src='/assets/logo-text.svg'
            alt='MiKros Lab'
            width={420}
            height={180}
            priority
            className='mx-auto h-auto w-40 sm:w-52 md:w-64'
          />

          <p className='mx-auto mt-4 max-w-[260px] text-xs leading-6 text-slate-600 sm:mt-5 sm:max-w-sm sm:text-sm sm:leading-7 md:max-w-lg md:text-base'>
            Somos un laboratorio clínico dedicado a ofrecer análisis{' '}
            <span className='font-bold text-[#65b6b7]'>confiables</span>, con
            tecnología de calidad y una atención{' '}
            <span className='font-bold text-[#9d8cb6]'>
              humana y cercana.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}