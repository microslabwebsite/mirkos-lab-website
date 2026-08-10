import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Clock3, Heart, Microscope, UserRound } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-white'>
      <div className='mx-auto max-w-7xl px-5 pb-14 pt-6 sm:px-6 sm:pt-8 lg:px-10 lg:pb-16 lg:pt-10'>
        <div className='grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12'>
          <div className='relative z-10 text-center lg:text-left'>
            <h1 className='mx-auto max-w-xl text-4xl font-bold leading-[1.12] tracking-[-0.02em] text-[#111c5c] sm:text-5xl lg:mx-0 lg:text-[56px]'>
              Análisis confiables,
              <span className='block text-[#9d8cb6]'>resultados que</span>
              <span className='block text-[#65b6b7]'>cuidan tu salud</span>
            </h1>

            <p className='mx-auto mt-5 max-w-md text-sm leading-7 text-[#334175] sm:mt-6 sm:text-base lg:mx-0'>
              Somos un laboratorio comprometido con tu bienestar y el de tu familia.
            </p>

            <div className='mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start'>
              <Link
                href='/contact'
                className='flex w-full items-center justify-center gap-2 rounded-full bg-[#31afb4] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(49,175,180,0.2)] transition hover:-translate-y-0.5 hover:bg-[#28a4a9] sm:w-auto'>
                <CalendarDays size={17} />
                Agendar cita
              </Link>

              <Link
                href='https://wa.me/50687595402'
                target='_blank'
                className='flex w-full items-center justify-center gap-2 rounded-full border border-[#31afb4] bg-white px-6 py-3 text-sm font-semibold text-[#23a9ae] transition hover:bg-[#f0fbfc] sm:w-auto'>
                <FaWhatsapp size={18} />
                WhatsApp
              </Link>
            </div>
          </div>

          <div className='relative flex items-center justify-center'>
            <div className='absolute left-[8%] top-[8%] h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#6bc5c4] to-[#9b82c6] opacity-70 sm:h-3 sm:w-3' />
            <div className='absolute right-[5%] top-[24%] h-3.5 w-3.5 rounded-full bg-gradient-to-br from-[#6bc5c4] to-[#9b82c6] opacity-70 sm:h-4 sm:w-4' />
            <div className='absolute bottom-[12%] left-[15%] h-4 w-4 rounded-full bg-gradient-to-br from-[#6bc5c4] to-[#9b82c6] opacity-50 sm:h-5 sm:w-5' />

            <Image
              src='/assets/hero.png'
              alt='MiKros Lab Laboratorio Clínico'
              width={7559}
              height={3780}
              priority
              className='relative h-auto w-full max-w-[520px] object-contain sm:max-w-[620px] lg:max-w-[700px]'
            />
          </div>
        </div>

        <div className='mt-10 grid grid-cols-1 gap-4 border-t border-[#eef1f7] pt-7 sm:grid-cols-2 sm:gap-6 lg:mt-8 lg:grid-cols-4 lg:border-t-0 lg:pt-0'>
          <div className='flex items-center gap-3 rounded-2xl bg-white/70 p-3 sm:p-4 lg:bg-transparent lg:p-0'>
            <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eefafb] text-[#08a8bc] sm:h-12 sm:w-12'>
              <Clock3 size={22} strokeWidth={2} />
            </div>

            <div className='text-left'>
              <p className='text-xs text-[#69749a] sm:text-sm'>Resultados</p>
              <p className='text-sm font-bold text-[#111c5c]'>rápidos</p>
            </div>
          </div>

          <div className='flex items-center gap-3 rounded-2xl bg-white/70 p-3 sm:p-4 lg:bg-transparent lg:p-0'>
            <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3EEFB] text-[#9364D8] sm:h-12 sm:w-12'>
              <UserRound size={22} strokeWidth={2} />
            </div>

            <div className='text-left'>
              <p className='text-xs text-[#69749a] sm:text-sm'>Personal</p>
              <p className='text-sm font-bold text-[#111c5c]'>calificado</p>
            </div>
          </div>

          <div className='flex items-center gap-3 rounded-2xl bg-white/70 p-3 sm:p-4 lg:bg-transparent lg:p-0'>
            <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eefafb] text-[#08a8bc] sm:h-12 sm:w-12'>
              <Microscope size={22} strokeWidth={2} />
            </div>

            <div className='text-left'>
              <p className='text-xs text-[#69749a] sm:text-sm'>Equipos de</p>
              <p className='text-sm font-bold text-[#111c5c]'>última tecnología</p>
            </div>
          </div>

          <div className='flex items-center gap-3 rounded-2xl bg-white/70 p-3 sm:p-4 lg:bg-transparent lg:p-0'>
            <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3EEFB] text-[#9364D8] sm:h-12 sm:w-12'>
              <Heart size={22} strokeWidth={2} />
            </div>

            <div className='text-left'>
              <p className='text-xs text-[#69749a] sm:text-sm'>Atención</p>
              <p className='text-sm font-bold text-[#111c5c]'>humana</p>
            </div>
          </div>
        </div>
      </div>

      <div className='pointer-events-none absolute bottom-0 left-0 -z-0 h-14 w-full bg-gradient-to-r from-[#e7f7f8] via-[#f4f5fc] to-[#eee8f8] opacity-60 [clip-path:ellipse(80%_50%_at_50%_100%)] sm:h-16 lg:h-20' />
    </section>
  );
}
