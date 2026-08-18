import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6';

export default function ServicesCTA() {
  return (
    <section className='relative w-full pb-14 sm:pb-16 lg:pb-20'>
      <div className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-12'>
        <div className='relative overflow-hidden rounded-[24px] border border-[#9d8cb6]/10 bg-[#9d8cb6]/12 px-6 py-7 shadow-[0_8px_25px_rgba(24,38,77,0.05)] sm:px-8 sm:py-8 lg:px-10'>
          <div className='relative z-10 flex flex-col items-start gap-5 pr-24 sm:pr-32 md:pr-36 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:pr-44'>
            <div className='max-w-xl'>
              <h2 className='text-xl font-bold text-[#9d8cb6] sm:text-2xl'>
                ¿No encuentras el estudio que buscas?
              </h2>

              <p className='mt-2 text-sm leading-relaxed text-[#18264d] sm:text-base'>
                Contáctanos y te ayudamos a encontrarlo.
              </p>
            </div>

            <Link
              href='https://wa.me/50687595402'
              target='_blank'
              rel='noreferrer'
              className='inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#65b6b7] shadow-[0_6px_20px_rgba(24,38,77,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(24,38,77,0.12)]'
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </Link>
          </div>

          <div className='pointer-events-none absolute bottom-3 right-6 block sm:right-8 md:bottom-1/2 md:translate-y-1/2 lg:bottom-auto lg:right-8 lg:top-1/2 lg:-translate-y-1/2'>
            <Image
              src='/assets/green-bacteria.svg'
              alt=''
              width={150}
              height={150}
              className='h-auto w-20 sm:w-24 md:w-24 lg:w-28'
            />
          </div>

          <Image
            src='/assets/bubble.svg'
            alt=''
            width={30}
            height={30}
            className='pointer-events-none absolute right-[2%] top-[22%] h-auto w-3'
          />
        </div>
      </div>
    </section>
  );
}