import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Clock3, Heart, Microscope, UserRound } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

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
    <section className='relative overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-[1500px] px-5 pb-16 pt-4 sm:px-8 sm:pb-20 sm:pt-6 md:pt-8 lg:px-12 lg:pb-8 lg:pt-8'>
        <div className='flex flex-col items-center gap-6 sm:gap-8 lg:grid lg:min-h-[500px] lg:grid-cols-[42%_58%] lg:items-center lg:gap-10'>
          <div className='relative w-full max-w-[260px] min-[360px]:max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:order-2 lg:max-w-[520px] xl:max-w-[480px]'>
            <Image
              src='/assets/hero.png'
              alt='MiKros Lab Laboratorio Clínico'
              width={1725}
              height={1812}
              priority
              className='h-auto w-full'
            />
          </div>

          <div className='relative z-30 w-full max-w-[650px] text-center lg:order-1 lg:max-w-none lg:text-left'>
            <h1 className='text-[32px] font-bold leading-[1.15] tracking-[-0.03em] text-[#18264d] min-[360px]:text-[36px] sm:text-[42px] md:text-[46px] lg:text-[52px]'>
              Análisis
              <span className='lg:hidden'> </span>
              <br className='hidden lg:block' />
              confiables,
              <br />
              <span className='text-[#9d8cb6]'>resultados que</span>
              <br />
              <span className='text-[#31afb4]'>cuidan tu salud</span>
            </h1>

            <p className='mx-auto mt-4 max-w-[500px] text-sm leading-7 text-[#334175] sm:mt-5 sm:text-base lg:mx-0 lg:mt-7'>
              Somos un laboratorio comprometido con tu bienestar y el de tu familia.
            </p>

            <div className='mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start'>
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
        </div>

        <div className='relative z-40 mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-4 lg:mt-10 lg:max-w-[720px] lg:gap-4'>
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
    </section>
  );
}
