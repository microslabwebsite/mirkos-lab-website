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
    <footer className='relative overflow-hidden bg-gradient-to-b from-[#fbfcff] to-[#f2f4ff]'>
      <div className='absolute -left-24 top-0 h-48 w-48 rounded-full bg-[#02aebe]/5 blur-3xl' />
      <div className='absolute -right-24 top-0 h-48 w-48 rounded-full bg-[#8851d4]/5 blur-3xl' />

      <div className='relative mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.4fr] lg:gap-12 lg:px-10 lg:py-14'>
        <div>
          <Link href='/' className='inline-block'>
            <Image
              src='/assets/logo.png'
              alt='MiKros Lab Laboratorio Clínico'
              width={190}
              height={65}
              className='h-auto w-[175px]'
            />
          </Link>

          <p className='mt-5 max-w-[250px] text-sm leading-7 text-[#334175]'>
            Análisis confiables,
            <br />
            resultados que cuidan tu salud.
          </p>

          <div className='mt-6 flex items-center gap-3'>
            <Link
              href='#'
              aria-label='Facebook'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#328ab9] to-[#1e6f9e] text-white shadow-sm transition hover:-translate-y-1'>
              <FaFacebookF size={17} />
            </Link>

            <Link
              href='#'
              aria-label='Instagram'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#8851d4] to-[#4aa6c9] text-white shadow-sm transition hover:-translate-y-1'>
              <FaInstagram size={17} />
            </Link>

            <Link
              href='https://wa.me/5066312345678'
              target='_blank'
              aria-label='WhatsApp'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-[#08a8a8] text-white shadow-sm transition hover:-translate-y-1'>
              <FaWhatsapp size={19} />
            </Link>
          </div>
        </div>

        <div>
          <h2 className='text-sm font-bold text-[#08a8bc]'>Enlaces</h2>

          <ul className='mt-5 space-y-3'>
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className='text-sm text-[#111c5c] transition-colors hover:text-[#08a8bc]'>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className='text-sm font-bold text-[#08a8bc]'>Servicios</h2>

          <ul className='mt-5 space-y-3'>
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className='text-sm text-[#111c5c] transition-colors hover:text-[#08a8bc]'>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className='text-sm font-bold text-[#08a8bc]'>Contáctanos</h2>

          <ul className='mt-5 space-y-4'>
            <li className='flex items-start gap-3'>
              <FaWhatsapp size={18} className='mt-0.5 shrink-0 text-[#8851d4]' />

              <div className='flex flex-wrap gap-x-3 text-sm text-[#111c5c]'>
                <span className='font-semibold'>WhatsApp</span>
                <Link
                  href='https://wa.me/50687595402'
                  target='_blank'
                  className='hover:text-[#08a8bc]'>
                  (506) 8759-5402
                </Link>
              </div>
            </li>

            <li className='flex items-start gap-3'>
              <Phone size={18} className='mt-0.5 shrink-0 text-[#8851d4]' />

              <div className='flex flex-wrap gap-x-3 text-sm text-[#111c5c]'>
                <span className='font-semibold'>Teléfono</span>
                <Link href='tel:+50687595402' className='hover:text-[#08a8bc]'>
                  (506) 8759-5402
                </Link>
              </div>
            </li>

            <li className='flex items-start gap-3'>
              <Mail size={18} className='mt-0.5 shrink-0 text-[#8851d4]' />

              <div className='flex flex-wrap gap-x-3 text-sm text-[#111c5c]'>
                <span className='font-semibold'>Correo</span>
                <Link
                  href='mailto:mikroslaboratorio@gmail.com'
                  className='break-all hover:text-[#08a8bc]'>
                  mikroslaboratorio@gmail.com
                </Link>
              </div>
            </li>

            <li className='flex items-start gap-3'>
              <Clock3 size={18} className='mt-0.5 shrink-0 text-[#8851d4]' />

              <div className='text-sm leading-6 text-[#111c5c]'>
                <div className='flex flex-wrap gap-x-3'>
                  <span className='font-semibold'>Horario</span>
                  <span>Lun - Vie: 6:30 am - 1:00 pm</span>
                </div>

                <p className='sm:pl-[67px]'>Sáb: 7:00 am - 1:00 pm</p>
              </div>
            </li>

            <li className='flex items-start gap-3'>
              <MapPin size={18} className='mt-0.5 shrink-0 text-[#8851d4]' />

              <div className='flex flex-wrap gap-x-3 text-sm leading-6 text-[#111c5c]'>
                <span className='font-semibold'>Dirección</span>
                <span>Pedregoso, 75 m Norte en direccion a San Ramon, Perez Zeledon.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className='bg-gradient-to-r from-[#05a8b5] via-[#5575c6] to-[#8851d4] px-6 py-4 text-center'>
        <p className='text-xs text-white sm:text-sm'>
          © 2026 MiKros Lab Laboratorio Clínico. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
