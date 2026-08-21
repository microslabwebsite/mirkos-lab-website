import Image from 'next/image';
import Link from 'next/link';
import { Clock3, Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa6';

const navigationLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/services', label: 'Servicios' },
  { href: '/about-us', label: 'Nosotros' },
  { href: '/contact', label: 'Contacto' },
];

const serviceLinks = [
  { href: '/services#blood', label: 'Sangre' },
  { href: '/services#urine', label: 'Orina' },
  { href: '/services#stool', label: 'Heces' },
  { href: '/services#fertility', label: 'Fertilidad' },
  { href: '/services#paternity', label: 'Paternidad (ADN)' },
  { href: '/services#veterinary', label: 'Veterinaria' },
  { href: '/services#water', label: 'Aguas' },
];

export default function Footer() {
  return (
    <footer className='relative mt-24 bg-[#f4f7fb]'>
      <div className='pointer-events-none absolute left-0 top-0 w-full -translate-y-[98%] overflow-hidden leading-none'>
        <svg
          viewBox='0 0 1440 150'
          preserveAspectRatio='none'
          className='h-24 w-full sm:h-28 lg:h-32'
          aria-hidden='true'>
          <path
            d='M0,55
               C140,85 260,105 400,92
               C560,78 650,45 820,60
               C990,76 1080,105 1230,92
               C1320,84 1380,62 1440,58
               L1440,150
               L0,150
               Z'
            fill='#f4f7fb'
          />
        </svg>
      </div>

      <div className='relative mx-auto grid max-w-7xl gap-8 px-6 pb-8 pt-2 sm:px-8 sm:pb-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.4fr] lg:gap-10 lg:px-10 lg:pb-10 lg:pt-3'>
        <div>
          <Link href='/' className='flex shrink-0 items-center gap-2'>
            <Image
              src='/assets/logo-icon.svg'
              alt='MiKros Lab Icon'
              width={65}
              height={65}
              priority
              className='h-auto w-[55px] lg:w-[65px]'
            />

            <Image
              src='/assets/logo-text.svg'
              alt='MiKros Lab Laboratorio Clínico'
              width={150}
              height={50}
              priority
              className='h-auto w-[125px] lg:w-[150px]'
            />
          </Link>

          <p className='mt-5 max-w-[250px] text-sm leading-7 text-[#4f5d7a]'>
            Análisis confiables,
            <br />
            resultados que cuidan tu salud.
          </p>

          <div className='mt-6 flex items-center gap-3'>
            <Link
              href='https://wa.me/50687595402'
              target='_blank'
              aria-label='WhatsApp'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-[#65b6b7] text-white shadow-sm transition hover:-translate-y-1'>
              <FaWhatsapp size={19} />
            </Link>
            <Link
              href='https://www.instagram.com/mikroslaboratorio'
              target='_blank'
              aria-label='Instagram'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#65b6b7] to-[#9d8cb6] text-white shadow-sm transition hover:-translate-y-1'>
              <FaInstagram size={17} />
            </Link>
            <Link
              href='https://www.facebook.com/mikroslab'
              target='_blank'
              aria-label='Facebook'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-[#9d8cb6] text-white shadow-sm transition hover:-translate-y-1'>
              <FaFacebookF size={17} />
            </Link>
          </div>
        </div>

        <div>
          <h2 className='text-sm font-bold text-[#65b6b7]'>Enlaces</h2>

          <ul className='mt-5 space-y-3'>
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className='text-sm text-[#2f3b5f] transition-colors hover:text-[#65b6b7]'>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className='text-sm font-bold text-[#9d8cb6]'>Servicios</h2>

          <ul className='mt-5 space-y-3'>
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className='text-sm text-[#2f3b5f] transition-colors hover:text-[#9d8cb6]'>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className='text-sm font-bold text-[#65b6b7]'>Contáctanos</h2>

          <ul className='mt-5 space-y-4'>
            <li className='flex items-start gap-3'>
              <FaWhatsapp size={18} className='mt-0.5 shrink-0 text-[#65b6b7]' />

              <div className='flex flex-wrap gap-x-3 text-sm text-[#2f3b5f]'>
                <span className='font-semibold'>WhatsApp</span>

                <Link
                  href='https://wa.me/50687595402'
                  target='_blank'
                  className='hover:text-[#65b6b7]'>
                  (506) 8759-5402
                </Link>
              </div>
            </li>

            <li className='flex items-start gap-3'>
              <Phone size={18} className='mt-0.5 shrink-0 text-[#9d8cb6]' />

              <div className='flex flex-wrap gap-x-3 text-sm text-[#2f3b5f]'>
                <span className='font-semibold'>Teléfono</span>

                <Link href='tel:+50687595402' className='hover:text-[#65b6b7]'>
                  (506) 8759-5402
                </Link>
              </div>
            </li>

            <li className='flex items-start gap-3'>
              <Mail size={18} className='mt-0.5 shrink-0 text-[#65b6b7]' />

              <div className='flex flex-wrap gap-x-3 text-sm text-[#2f3b5f]'>
                <span className='font-semibold'>Correo</span>

                <Link
                  href='mailto:mikroslaboratorio@gmail.com'
                  className='break-all hover:text-[#65b6b7]'>
                  mikroslaboratorio@gmail.com
                </Link>
              </div>
            </li>

            <li className='flex items-start gap-3'>
              <Clock3 size={18} className='mt-0.5 shrink-0 text-[#9d8cb6]' />

              <div className='text-sm leading-6 text-[#2f3b5f]'>
                <div className='flex flex-wrap gap-x-3'>
                  <span className='font-semibold'>Horario</span>
                  <span>Lun - Vie: 6:30 am - 12:30 md pm</span>
                </div>

                <p className='sm:pl-[67px]'>Sáb: 7:00 am - 1:00 pm</p>
              </div>
            </li>

            <li className='flex items-start gap-3'>
              <MapPin size={18} className='mt-0.5 shrink-0 text-[#65b6b7]' />

              <div className='flex flex-wrap gap-x-3 text-sm leading-6 text-[#2f3b5f]'>
                <span className='font-semibold'>Dirección</span>

                <span>Pedregoso, 75m Norte en dirección a San Ramón, Pérez Zeledón.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className='bg-gradient-to-r from-[#65b6b7] to-[#9d8cb6] px-6 py-4 text-center'>
        <p className='text-xs text-white sm:text-sm'>
          © 2026 MiKros Lab Laboratorio Clínico. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
