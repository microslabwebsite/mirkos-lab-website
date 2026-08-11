import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Clock3, Heart, Microscope, UserRound } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

const bubbles = [
  'left-[8%] -top-[20%] w-3 md:top-[20%] lg:left-[51%] lg:top-[14%]',
  'right-[9%] -top-[13%] md:top-[40%] w-4 lg:right-[3%] lg:top-[16%] lg:w-3',
  'left-[5%] top-[5%] w-4 md:top-[10%] lg:left-[48%] lg:top-[44%] lg:w-5',
  'right-[6%] top-[20%] w-4 md:top-[0%] lg:right-[5%] lg:top-[31%]',
  'left-[20%] top-[27%] w-3 md:top-[70%] lg:left-[53%] lg:top-[57%]',
  'right-[19%] top-[31%] w-4 md:top-[50%] lg:right-[2%] lg:top-[52%] lg:w-5',
];

const characters = [
  {
    src: '/assets/green-bacteria.svg',
    width: 120,
    height: 120,
    className:
      'left-[2%] top-[270px] w-[62px] -translate-y-125 sm:left-[5%] sm:top-[300px] sm:w-[78px] sm:-translate-y-130 md:left-[8%] md:w-[90px] md:-translate-y-150 lg:bottom-[106px] lg:left-[15%] lg:top-auto lg:w-[100px] lg:translate-y-0',
  },
  {
    src: '/assets/pink-bacteria.svg',
    width: 130,
    height: 130,
    className:
      'right-[2%] top-[230px] w-[65px] -translate-y-115 sm:right-[5%] sm:top-[300px] sm:w-[78px] sm:-translate-y-125 md:right-[8%] md:w-[90px] md:-translate-y-145 lg:bottom-[81px] lg:left-[36%] lg:right-auto lg:top-auto lg:w-[102px] lg:translate-y-0',
  },
  {
    src: '/assets/yellow-bacteria.svg',
    width: 150,
    height: 150,
    className:
      'bottom-[40px] left-[2%] w-[78px] -translate-y-115 min-[360px]:-translate-y-95 min-[425px]:-translate-y-80 sm:left-[6%] sm:w-[95px] md:-bottom-[150px] md:left-[10%] md:w-[110px] md:-translate-y-145 lg:bottom-[60px] lg:left-auto lg:right-[20%] lg:w-[122px] lg:translate-y-0',
  },
  {
    src: '/assets/giardia.svg',
    width: 150,
    height: 190,
    className:
      'bottom-[1px] right-[2%] w-[64px] -translate-y-125 min-[360px]:-translate-y-100 min-[425px]:-translate-y-90 sm:right-[6%] sm:w-[78px] sm:-translate-y-120 md:-bottom-[150px] md:right-[10%] md:w-[92px] md:-translate-y-140 lg:bottom-[90px] lg:right-[3%] lg:w-[105px] lg:translate-y-0',
  },
];

const benefits = [
  {
    icon: Clock3,
    top: 'Resultados',
    bottom: 'rápidos',
  },
  {
    icon: UserRound,
    top: 'Personal',
    bottom: 'calificado',
  },
  {
    icon: Microscope,
    top: 'Equipos de',
    bottom: 'última tecnología',
  },
  {
    icon: Heart,
    top: 'Atención',
    bottom: 'humana',
  },
];

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-white'>
      <div className='relative z-10 mx-auto max-w-[1500px] px-5 pb-24 sm:pt-10 sm:px-8 md:pt-12 lg:px-12 lg:pb-8 lg:pt-8'>
        {bubbles.map((className, index) => (
          <Image
            key={index}
            src='/assets/bubble.svg'
            alt=''
            width={30}
            height={30}
            className={`pointer-events-none absolute ${className}`}
          />
        ))}

        <div className='relative min-h-[400px]  lg:grid lg:min-h-[500px] lg:grid-cols-[42%_58%] lg:items-center'>
          <div className='relative z-30 mx-auto mt-[250px] max-w-[650px] text-center sm:mt-[280px] md:mt-[300px] lg:mx-0 lg:mt-0 lg:max-w-none lg:text-left'>
            <h1 className='text-[38px] font-bold leading-[1.15] tracking-[-0.03em] text-[#18264d] sm:text-[46px] md:text-[52px]'>
              Análisis
              <span className='lg:hidden'> </span>
              <br className='hidden lg:block' />
              confiables,
              <br />
              <span className='text-[#9274c2]'>resultados que</span>
              <br />
              <span className='text-[#31afb4]'>cuidan tu salud</span>
            </h1>

            <p className='mx-auto mt-6 max-w-[500px] text-sm leading-7 text-[#334175] sm:text-base lg:mx-0 lg:mt-7'>
              Somos un laboratorio comprometido con tu bienestar y el de tu familia.
            </p>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start'>
              <Link
                href='/contact'
                className='flex w-full items-center justify-center gap-2 rounded-full bg-[#31afb4] px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(49,175,180,0.2)] transition hover:-translate-y-0.5 hover:bg-[#28a4a9] sm:w-auto'>
                <CalendarDays size={17} />
                Agendar cita
              </Link>

              <Link
                href='https://wa.me/50687595402'
                target='_blank'
                rel='noreferrer'
                className='flex w-full items-center justify-center gap-2 rounded-full border border-[#31afb4] bg-white px-7 py-3 text-sm font-semibold text-[#23a9ae] transition hover:bg-[#f0fbfc] sm:w-auto'>
                <FaWhatsapp size={18} />
                WhatsApp
              </Link>
            </div>
          </div>

          <div className='pointer-events-none absolute inset-0 z-20 lg:relative lg:inset-auto lg:h-[520px]'>
            <div className='absolute left-1/2 top-0 flex -translate-x-1/2 flex-col items-center'>
              <Image
                src='/assets/logo-icon.svg'
                alt=''
                width={370}
                height={180}
                priority
                className='h-auto w-[200px] -translate-y-45
                          md:w-[300px] md:-translate-y-70
                          lg:w-[600px] lg:translate-y-8
                          xl:w-[400px] xl:translate-y-0'
              />

              <Image
                src='/assets/logo-text.svg'
                alt='MiKros Lab Laboratorio Clínico'
                width={420}
                height={130}
                priority
                className='absolute mt-3 h-auto w-[210px] -translate-y-30
                          min-[360px]:-translate-y-25
                          min-[425px]:-translate-y-20
                          sm:w-[250px] sm:-translate-y-20
                          md:w-[280px] md:-translate-y-25
                          lg:mt-8 lg:w-[500px] lg:translate-y-50
                          xl:w-[365px] xl:translate-y-45'
              />
            </div>

            {characters.map((character) => (
              <Image
                key={character.src}
                src={character.src}
                alt=''
                width={character.width}
                height={character.height}
                className={`absolute ${character.className}`}
              />
            ))}
          </div>
        </div>

        <div className='relative z-40 mt-4 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:mt-10 lg:max-w-[720px] lg:gap-4'>
          {benefits.map(({ icon: Icon, top, bottom }) => (
            <div
              key={top}
              className='flex flex-col items-center gap-2 text-center lg:flex-row lg:text-left'>
              <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5f0fb] text-[#9d8cb6]'>
                <Icon size={19} strokeWidth={2} />
              </div>

              <div>
                <p className='text-xs text-[#69749a]'>{top}</p>
                <p className='text-sm font-bold text-[#18264d]'>{bottom}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='pointer-events-none absolute bottom-0 left-0 z-0 h-[45px] w-full bg-[#f5f7fb] lg:hidden'>
        <div className='absolute -top-5 left-[-10%] h-12 w-[120%] rounded-[50%] bg-white' />
      </div>
    </section>
  );
}
