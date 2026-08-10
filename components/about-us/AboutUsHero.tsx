import Image from 'next/image';
const characters = [
  {
    src: '/assets/green-bacteria.svg',
    className: 'left-[4%] top-[18%] w-20 sm:w-24 md:left-[8%] md:w-32 lg:w-36',
  },
  {
    src: '/assets/pink-bacteria.svg',
    className: 'bottom-[10%] left-[15%] w-16 sm:w-20 md:left-[20%] md:w-24 lg:w-28',
  },
  {
    src: '/assets/yellow-bacteria.svg',
    className: 'right-[5%] top-[14%] w-20 sm:w-24 md:right-[10%] md:w-32 lg:w-36',
  },
  {
    src: '/assets/giardia.svg',
    className: 'bottom-[5%] right-[15%] w-16 sm:w-20 md:right-[20%] md:w-24 lg:w-28',
  },
];

const bubbles = [
  'left-[3%] top-[8%] w-4 md:w-5',
  'left-[28%] top-[12%] w-3 md:w-4',
  'right-[27%] top-[7%] w-4 md:w-5',
  'right-[4%] top-[42%] w-3 md:w-4',
  'bottom-[10%] left-[5%] w-3 md:w-4',
  'bottom-[6%] left-[38%] w-4 md:w-5',
  'bottom-[12%] right-[5%] w-4 md:w-5',
];

export default function AboutUsHero() {
  return (
    <section className='relative overflow-hidden bg-white'>
      <div className='absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#65b6b7]/12 blur-3xl' />
      <div className='absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#9d8cb6]/14 blur-3xl' />
      <div className='absolute bottom-[-120px] left-1/3 h-72 w-72 rounded-full bg-[#65b6b7]/8 blur-3xl' />
      <div className='absolute bottom-[-100px] right-[18%] h-64 w-64 rounded-full bg-[#9d8cb6]/10 blur-3xl' />

      <div className='relative mx-auto flex min-h-[560px] max-w-7xl items-center justify-center px-6 py-20 md:min-h-[620px] lg:px-8'>
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

        <div className='relative z-10 mx-auto max-w-2xl text-center'>
          <Image
            src='/assets/logo-text.svg'
            alt='MiKros Lab'
            width={420}
            height={180}
            priority
            className='mx-auto h-auto w-64 sm:w-72 md:w-80 lg:w-96'
          />

          <p className='mx-auto mt-8 max-w-xl text-base leading-8 text-slate-600 md:text-lg'>
            Somos un laboratorio clínico dedicado a ofrecer análisis{' '}
            <span className='font-bold text-[#65b6b7]'>confiables</span>, con tecnología de calidad
            y una atención <span className='font-bold text-[#9d8cb6]'>humana y cercana.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
