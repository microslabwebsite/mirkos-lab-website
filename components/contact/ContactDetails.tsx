import Link from 'next/link';
import { Clock3, Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

const contactInfo = [
  {
    icon: Mail,
    label: 'Correo',
    value: 'mikroslaboratorio@gmail.com',
    href: 'mailto:mikroslaboratorio@gmail.com',
    color: '#65b6b7',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '(506) 8759-5402',
    href: 'tel:+50687595402',
    color: '#9d8cb6',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '(506) 8759-5402',
    href: 'https://wa.me/50687595402',
    color: '#65b6b7',
  },
  {
    icon: Clock3,
    label: 'Horario',
    value: 'Lun - Vie: 6:30 am - 12:30 md',
    secondary: 'Sáb: 7:00 am - 1:00 pm',
    color: '#9d8cb6',
  },
];

export default function ContactDetails() {
  return (
    <div className='grid overflow-hidden rounded-[28px] border border-[#9d8cb6]/15 bg-white px-5 py-7 shadow-[0_10px_35px_rgba(157,140,182,0.12)] sm:grid-cols-2 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-4 lg:py-7'>
      {contactInfo.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className={`flex min-h-[150px] flex-col items-center justify-center px-4 text-center sm:min-h-[165px] lg:min-h-[145px] lg:px-6 ${
              index !== contactInfo.length - 1
                ? 'lg:border-r lg:border-[#9d8cb6]/20'
                : ''
            }`}
          >
            <Icon
              size={38}
              strokeWidth={2}
              style={{ color: item.color }}
              className='mb-5'
            />

            <p
              className='text-sm font-bold'
              style={{ color: item.color }}
            >
              {item.label}
            </p>

            {item.href ? (
              <Link
                href={item.href}
                target={
                  item.href.startsWith('http') || item.href.startsWith('mailto:')
                    ? '_blank'
                    : undefined
                }
                rel={
                  item.href.startsWith('http') || item.href.startsWith('mailto:')
                    ? 'noreferrer'
                    : undefined
                }
                className='mt-2 block break-words text-sm font-semibold leading-relaxed text-[#334175] transition hover:text-[#65b6b7]'
              >
                {item.value}
              </Link>
            ) : (
              <div className='mt-2'>
                <p className='text-sm font-semibold leading-relaxed text-[#334175]'>
                  {item.value}
                </p>

                {item.secondary && (
                  <p className='text-sm font-semibold leading-relaxed text-[#334175]'>
                    {item.secondary}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}