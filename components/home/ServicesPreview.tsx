import Link from 'next/link';
import {
  ArrowRight,
  Dna,
  Droplet,
  TestTube2,
} from 'lucide-react';
import examProfiles from '@/data/examProfiles.json';

const featuredExams = [
  {
    icon: Droplet,
    title: 'Análisis de Sangre',
    description:
      'Estudios hematológicos, bioquímicos e inmunológicos para evaluar tu estado de salud.',
    color: '#ef3340',
    bg: 'bg-[#ef3340]/10',
  },
  {
    icon: Droplet,
    title: 'Análisis de Orina',
    description:
      'Pruebas generales y especializadas para apoyar el diagnóstico y cuidado de tu salud.',
    color: '#f4b41a',
    bg: 'bg-[#f4b41a]/12',
  },
  {
    icon: TestTube2,
    title: 'Análisis de Heces',
    description:
      'Detección de parásitos, bacterias y otros microorganismos del sistema digestivo.',
    color: '#8b5e3c',
    bg: 'bg-[#65b6b7]/10',
  },
  {
    icon: Dna,
    title: 'Paternidad (ADN)',
    description:
      'Pruebas de ADN con alta precisión y total confidencialidad.',
    color: '#7551b2',
    bg: 'bg-[#9d8cb6]/12',
  },
];

const featuredProfileIds = [
  'basico',
  'completo',
  'hormonal-masculino',
];

export default function ServicesPreview() {
  const featuredProfiles = examProfiles.filter((profile) =>
    featuredProfileIds.includes(profile.id)
  );

  return (
    <section className='relative w-full py-14 sm:py-16 lg:py-20'>
      <div className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-12'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-[#18264d] sm:text-4xl'>
            Nuestros <span className='text-[#9d8cb6]'>servicios</span>
          </h2>

          <div className='mx-auto mt-3 h-1 w-12 rounded-full bg-[#65b6b7]' />

          <p className='mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#334175] sm:text-base'>
            Conoce algunos de los exámenes y perfiles de laboratorio que tenemos disponibles para ti.
          </p>
        </div>

        <div className='mt-10'>
          <h3 className='text-xl font-bold text-[#18264d] sm:text-2xl'>
            Exámenes
          </h3>

          <div className='mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
            {featuredExams.map((exam) => {
              const Icon = exam.icon;

              return (
                <div
                  key={exam.title}
                  className='flex min-h-[250px] flex-col items-center rounded-2xl border border-[#9d8cb6]/10 bg-white px-6 py-7 text-center shadow-[0_8px_25px_rgba(24,38,77,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(24,38,77,0.10)]'
                >
                  <div
                    className={`flex h-18 w-18 items-center justify-center rounded-full ${exam.bg}`}
                  >
                    <Icon
                      size={34}
                      strokeWidth={1.8}
                      style={{ color: exam.color }}
                    />
                  </div>

                  <h4 className='mt-5 text-base font-bold text-[#18264d]'>
                    {exam.title}
                  </h4>

                  <p className='mt-3 text-sm leading-6 text-[#334175]'>
                    {exam.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className='mt-12'>
          <h3 className='text-xl font-bold text-[#18264d] sm:text-2xl'>
            Perfiles de laboratorio
          </h3>

          <div className='mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {featuredProfiles.map((profile) => {
              const includes = profile.includes ?? [];
              const preview = includes.slice(0, 2);
              const remaining = includes.length - preview.length;

              return (
                <div
                  key={profile.id}
                  className='rounded-2xl border border-[#9d8cb6]/15 bg-gradient-to-br from-[#65b6b7]/6 to-[#9d8cb6]/10 p-6 shadow-[0_8px_25px_rgba(24,38,77,0.05)]'
                >
                  <div className='flex items-start justify-between gap-4'>
                    <div>
                      <h4 className='text-lg font-bold text-[#18264d]'>
                        {profile.profile}
                      </h4>

                      <p className='mt-2 text-2xl font-bold text-[#65b6b7]'>
                        {profile.price}
                      </p>
                    </div>

                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#9d8cb6] shadow-sm'>
                      {includes.length || 1}
                    </div>
                  </div>

                  {preview.length > 0 && (
                    <div className='mt-5'>
                      <p className='text-sm font-bold text-[#18264d]'>
                        Incluye
                      </p>

                      <ul className='mt-3 space-y-2'>
                        {preview.map((exam) => (
                          <li
                            key={exam}
                            className='flex items-start gap-2 text-sm leading-6 text-[#334175]'
                          >
                            <span className='mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#65b6b7]' />
                            {exam}
                          </li>
                        ))}
                      </ul>

                      {remaining > 0 && (
                        <p className='mt-3 text-sm font-semibold text-[#9d8cb6]'>
                          + {remaining} exámenes más
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className='mt-10 flex justify-center'>
          <Link
            href='/services'
            className='inline-flex items-center gap-2 rounded-full bg-[#65b6b7] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90'
          >
            Ver todos los servicios
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}