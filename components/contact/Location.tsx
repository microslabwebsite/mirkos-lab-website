import Image from 'next/image';
import Link from 'next/link';
import { House, Car, CircleParking, ExternalLink, MapPin } from 'lucide-react';

const directions = [
  {
    icon: Car,
    title: 'En vehículo',
    description:
      'Desde San José, tome la Interamericana Sur hacia Pérez Zeledón. Continúe hasta Pedregoso y gire 75 m al norte en dirección a San Ramón.',
  },
  {
    icon: House,
    title: 'Servicio a domicilio',
    description:
      '¿Prefieres realizar tus análisis desde casa? Consulta la disponibilidad de nuestro servicio a domicilio y coordina tu atención con nosotros.',
  },
  {
    icon: CircleParking,
    title: 'Parqueo',
    description:
      'Contamos con parqueo gratuito en las instalaciones para que tu visita sea más cómoda y sencilla. También disponemos de espacio de parqueo para personas con discapacidad.',
  },
];

const address = 'Pedregoso, 75 m Norte en direccion a San Ramon, Perez Zeledon, Costa Rica.';

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Pedregoso+Perez+Zeledon+Costa+Rica+MiKros+Lab';

export default function Location() {
  return (
    <div className='grid gap-8 lg:grid-cols-2 lg:items-stretch'>
      <div className='flex h-full flex-col gap-8'>
        <div className='rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8'>
          <div>
            <h2 className='text-xl font-bold text-[#18264d] sm:text-2xl'>
              ¿Dónde estamos?
            </h2>
            <div className='mt-2 h-1 w-12 rounded-full bg-[#9d8cb6]' />
          </div>

          <div className='mt-6 flex items-start gap-3'>
            <MapPin size={20} className='mt-0.5 shrink-0 text-[#65b6b7]' />

            <p className='text-sm leading-relaxed text-[#334175]'>{address}</p>
          </div>

          <Link
            href={mapsUrl}
            target='_blank'
            className='mt-5 inline-flex items-center gap-2 rounded-full border border-[#65b6b7] px-5 py-2.5 text-sm font-semibold text-[#65b6b7] transition hover:bg-[#65b6b7]/5'
          >
            Ver en Google Maps
            <ExternalLink size={15} />
          </Link>
        </div>

        <div className='flex-1 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8'>
          <div>
            <h2 className='text-xl font-bold text-[#18264d] sm:text-2xl'>
              Visítanos
            </h2>
            <div className='mt-2 h-1 w-12 rounded-full bg-[#9d8cb6]' />
          </div>

          <p className='mt-2 text-sm leading-relaxed text-[#69749a]'>
            Todo lo que necesitas saber para planificar tu visita o solicitar atención desde casa.
          </p>

          <ul className='mt-7 space-y-6'>
            {directions.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.title} className='flex items-start gap-3'>
                  <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#65b6b7]/10 text-[#65b6b7]'>
                    <Icon size={17} />
                  </div>

                  <div>
                    <p className='text-sm font-bold text-[#65b6b7]'>{item.title}</p>

                    <p className='mt-1 text-sm leading-relaxed text-[#334175]'>
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className='flex h-full flex-col'>
        <div>
          <h2 className='text-xl font-bold text-[#18264d] sm:text-2xl'>
            MiKros Lab
          </h2>
          <div className='mt-2 h-1 w-12 rounded-full bg-[#9d8cb6]' />
        </div>

        <div className='mt-4 flex-1 overflow-hidden rounded-2xl shadow-sm'>
          <Image
            src='/assets/lab.png'
            alt='Instalaciones de MiKros Lab'
            width={1200}
            height={700}
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </div>
  );
}