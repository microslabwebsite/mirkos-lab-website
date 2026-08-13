import Image from 'next/image';

const characters = [
  {
    src: '/assets/green-bacteria.svg',
    className:
      'left-[2%] top-[18%] w-16 sm:w-20 md:left-[4%] md:top-[20%] md:w-20 lg:left-[4%] lg:top-[24%] lg:w-24',
  },
  {
    src: '/assets/pink-bacteria.svg',
    className:
      'left-[28%] top-[28%] w-16 sm:w-20 md:left-[30%] md:top-[30%] md:w-20 lg:left-[29%] lg:top-[32%] lg:w-24',
  },
  {
    src: '/assets/yellow-bacteria.svg',
    className:
      'right-[27%] top-[18%] w-20 sm:w-24 md:right-[25%] md:top-[22%] md:w-24 lg:right-[24%] lg:top-[20%] lg:w-28',
  },
  {
    src: '/assets/giardia.svg',
    className:
      'right-[2%] top-[14%] w-16 sm:w-20 md:right-[3%] md:top-[18%] md:w-20 lg:right-[2%] lg:top-[13%] lg:w-24',
  },
];

const bubbles = [
  'left-[5%] top-[5%] w-2.5 md:w-3',
  'left-[20%] top-[52%] w-2 md:w-2.5',
  'left-[43%] top-[10%] w-2.5 md:w-3',
  'right-[19%] top-[7%] w-2 md:w-2.5',
  'right-[3%] top-[47%] w-2.5 md:w-3',
  'bottom-[15%] left-[55%] w-2 md:w-2.5',
];

export default function ContactHero() {
  return (
    <section className='relative w-full overflow-hidden bg-white'>
      <div className='relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12'>
        <div className='relative min-h-[330px] sm:min-h-[360px] md:min-h-[390px] lg:min-h-[420px]'>
          <div className='relative z-10 grid min-h-[330px] grid-cols-1 items-center gap-8 py-10 sm:min-h-[360px] md:min-h-[390px] md:grid-cols-[42%_58%] md:gap-6 md:py-12 lg:min-h-[420px] lg:grid-cols-[40%_60%] lg:py-14'>
            <div className='relative z-30 max-w-lg text-left'>
              <h1 className='text-4xl font-bold tracking-[-0.03em] text-[#18264d] sm:text-5xl lg:text-[58px]'>
                Contacto
              </h1>

              <p className='mt-7 max-w-[460px] text-sm leading-7 text-[#334175] sm:text-base sm:leading-8 lg:text-lg lg:leading-9'>
                Estamos aquí para ayudarte. Contáctanos por cualquiera de nuestros medios o envíanos
                tus consultas completando el formulario.
              </p>
            </div>

            <div className='relative z-20 mx-auto h-[220px] w-full max-w-[650px] sm:h-[240px] md:h-[260px] lg:h-[280px] lg:max-w-[760px]'>
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

          <div className='pointer-events-none absolute bottom-4 right-0 z-0  h-[180px] w-[62%] md:block lg:bottom-2 lg:h-[205px] lg:w-[64%]'>
            <svg
              viewBox='0 0 1000 260'
              preserveAspectRatio='none'
              className='h-full w-full'
              aria-hidden='true'
            >
              <path
                d='
                  M40 175
                  C140 142 245 133 350 145
                  C485 162 600 139 720 103
                  C825 72 910 43 1000 10

                  L1000 94

                  C900 112 820 137 710 166
                  C590 198 470 211 350 195
                  C230 180 135 185 65 192

                  C55 187 47 181 40 175
                  Z
                '
                fill='#65b6b7'
                opacity='0.28'
              />

              <path
                d='
                  M125 218
                  C220 193 315 192 425 203
                  C555 216 680 190 790 157
                  C875 132 945 103 1000 78

                  L1000 172

                  C925 187 850 204 760 224
                  C645 248 535 254 420 239
                  C310 225 215 229 150 233

                  C141 228 133 223 125 218
                  Z
                '
                fill='#9d8cb6'
                opacity='0.22'
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}