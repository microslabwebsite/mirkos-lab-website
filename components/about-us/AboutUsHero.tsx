import Image from 'next/image';

export default function AboutUsHero() {
  return (
    <section className='relative w-full'>
      <div className='relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12'>
        <div className='relative flex w-full flex-col items-center md:aspect-[4886/2076]'>
          <Image
            src='/assets/logo-text.svg'
            alt='MiKros Lab'
            width={420}
            height={130}
            priority
            className='relative z-10 h-auto w-36 pt-4 sm:w-44 md:absolute md:top-8 md:pt-0 md:w-64 lg:w-96 xl:top-16 xl:w-100'
          />

          <div className='relative w-full overflow-hidden rounded-3xl aspect-[4886/2076] md:absolute md:inset-0 md:aspect-auto'>
            <Image
              src='/assets/about-us-hero.svg'
              alt=''
              width={4886}
              height={2076}
              priority
              className='absolute inset-0 h-full w-full rounded-3xl'
            />

            <p className='absolute top-5 left-1/2 w-48 -translate-x-1/2 text-center text-xs leading-snug text-slate-600 sm:w-52 sm:text-sm sm:leading-normal md:top-30 md:w-7/12 md:text-lg md:leading-relaxed lg:top-40 lg:w-6/12 lg:text-xl xl:top-60 xl:text-3xl'>
              Somos un laboratorio clínico dedicado a ofrecer análisis{' '}
              <span className='font-bold text-[#65b6b7]'>confiables</span>, con tecnología de calidad
              y una atención <span className='font-bold text-[#9d8cb6]'>humana.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
