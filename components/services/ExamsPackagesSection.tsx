'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import examProfiles from '@/data/examProfiles.json';

type ExamsPackagesSectionProps = {
  search: string;
};

const normalizeText = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

export default function ExamsPackagesSection({
  search,
}: ExamsPackagesSectionProps) {
  const [openProfile, setOpenProfile] = useState<string | null>(null);

  const toggleProfile = (id: string) => {
    setOpenProfile(openProfile === id ? null : id);
  };

  const query = normalizeText(search);

  const filteredProfiles = examProfiles.filter((profile) => {
    if (!query) return true;

    const searchableText = normalizeText(
      [
        'perfil',
        'paquete',
        profile.id,
        profile.profile,
        ...(profile.includes ?? []),
        profile.note ?? '',
      ].join(' ')
    );

    const terms = query.split(/\s+/);

    return terms.every((term) => searchableText.includes(term));
  });

  if (query && filteredProfiles.length === 0) {
    return null;
  }

  return (
    <section className='relative w-full py-14 sm:py-16 lg:py-20'>
      <div
        className='pointer-events-none absolute inset-0 overflow-hidden'
        aria-hidden='true'
      >
        <Image
          src='/assets/bubble.svg'
          alt=''
          width={30}
          height={30}
          className='absolute left-[4%] top-[8%] h-auto w-3 opacity-70'
        />

        <Image
          src='/assets/bubble.svg'
          alt=''
          width={30}
          height={30}
          className='absolute right-[6%] top-[12%] h-auto w-4 opacity-60'
        />

        <Image
          src='/assets/bubble.svg'
          alt=''
          width={30}
          height={30}
          className='absolute left-[8%] top-[36%] h-auto w-2.5 opacity-60'
        />

        <Image
          src='/assets/bubble.svg'
          alt=''
          width={30}
          height={30}
          className='absolute right-[10%] top-[42%] h-auto w-3 opacity-70'
        />

        <Image
          src='/assets/bubble.svg'
          alt=''
          width={30}
          height={30}
          className='absolute left-[3%] top-[68%] h-auto w-4 opacity-50'
        />

        <Image
          src='/assets/bubble.svg'
          alt=''
          width={30}
          height={30}
          className='absolute right-[4%] top-[72%] h-auto w-2.5 opacity-70'
        />

        <Image
          src='/assets/bubble.svg'
          alt=''
          width={30}
          height={30}
          className='absolute bottom-[5%] left-[18%] h-auto w-3 opacity-60'
        />

        <Image
          src='/assets/bubble.svg'
          alt=''
          width={30}
          height={30}
          className='absolute bottom-[3%] right-[20%] h-auto w-4 opacity-50'
        />
      </div>

      <div className='relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12'>
        <div className='mb-10 text-center sm:mb-12'>
          <h2 className='text-3xl font-bold text-[#18264d] sm:text-4xl'>
            Perfiles de <span className='text-[#9d8cb6]'>laboratorio</span>
          </h2>

          <div className='mx-auto mt-3 h-1 w-12 rounded-full bg-[#65b6b7]' />

          <p className='mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#334175] sm:text-base'>
            Consulta nuestros perfiles y conoce los exámenes incluidos en cada opción.
          </p>
        </div>

        <div className='grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {filteredProfiles.map((profile) => {
            const isOpen = openProfile === profile.id;
            const includes = profile.includes ?? [];
            const visibleExams = includes.slice(0, 3);
            const remainingExams = includes.length - visibleExams.length;

            const total =
              profile.details?.genotypes ??
              (includes.length > 0 ? includes.length : 1);

            return (
              <div
                key={profile.id}
                className='overflow-hidden rounded-2xl border border-[#9d8cb6]/15 bg-white shadow-[0_8px_25px_rgba(24,38,77,0.06)]'
              >
                <div className='p-6'>
                  <div className='flex items-start justify-between gap-4'>
                    <div>
                      <h3 className='text-lg font-bold text-[#18264d]'>
                        {profile.profile}
                      </h3>

                      <p className='mt-2 text-2xl font-bold text-[#65b6b7]'>
                        {profile.price}
                      </p>
                    </div>

                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#9d8cb6]/10 text-[#9d8cb6]'>
                      <span className='text-sm font-bold'>{total}</span>
                    </div>
                  </div>

                  {profile.details ? (
                    <>
                      <div className='mt-6'>
                        <p className='text-sm font-bold text-[#18264d]'>
                          Incluye
                        </p>

                        <div className='mt-3 flex items-start gap-3 text-sm text-[#334175]'>
                          <Check
                            size={17}
                            strokeWidth={2}
                            className='mt-0.5 shrink-0 text-[#65b6b7]'
                          />

                          <span>
                            {profile.details.genotypes} genotipos de VPH
                          </span>
                        </div>
                      </div>

                      {!isOpen && (
                        <p className='mt-4 text-sm font-semibold text-[#9d8cb6]'>
                          + detalles de riesgo
                        </p>
                      )}

                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen
                            ? 'grid-rows-[1fr]'
                            : 'grid-rows-[0fr]'
                        }`}
                      >
                        <div className='overflow-hidden'>
                          <div className='mt-4 space-y-5'>
                            <div>
                              <p className='text-sm font-bold text-[#65b6b7]'>
                                Bajo riesgo
                              </p>

                              <div className='mt-2 flex flex-wrap gap-2'>
                                {profile.details.lowRisk.map((type) => (
                                  <span
                                    key={type}
                                    className='rounded-full bg-[#65b6b7]/10 px-3 py-1 text-xs font-semibold text-[#334175]'
                                  >
                                    {type}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <p className='text-sm font-bold text-[#9d8cb6]'>
                                Alto riesgo
                              </p>

                              <div className='mt-2 flex flex-wrap gap-2'>
                                {profile.details.highRisk.map((type) => (
                                  <span
                                    key={type}
                                    className='rounded-full bg-[#9d8cb6]/10 px-3 py-1 text-xs font-semibold text-[#334175]'
                                  >
                                    {type}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <p className='text-sm font-bold text-[#18264d]'>
                                Riesgo intermedio
                              </p>

                              <div className='mt-2 flex flex-wrap gap-2'>
                                {profile.details.intermediateRisk.map((type) => (
                                  <span
                                    key={type}
                                    className='rounded-full bg-[#65b6b7]/10 px-3 py-1 text-xs font-semibold text-[#334175]'
                                  >
                                    {type}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        type='button'
                        onClick={() => toggleProfile(profile.id)}
                        className='mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-[#9d8cb6]/30 px-4 py-2.5 text-sm font-semibold text-[#9d8cb6] transition hover:bg-[#9d8cb6]/5'
                        aria-expanded={isOpen}
                      >
                        {isOpen ? 'Ver menos' : 'Ver perfil completo'}

                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </>
                  ) : (
                    <>
                      {visibleExams.length > 0 && (
                        <div className='mt-6'>
                          <p className='mb-3 text-sm font-bold text-[#18264d]'>
                            Incluye
                          </p>

                          <ul className='space-y-3'>
                            {visibleExams.map((exam) => (
                              <li
                                key={exam}
                                className='flex items-start gap-3 text-sm text-[#334175]'
                              >
                                <Check
                                  size={17}
                                  strokeWidth={2}
                                  className='mt-0.5 shrink-0 text-[#65b6b7]'
                                />

                                <span>{exam}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {remainingExams > 0 && !isOpen && (
                        <p className='mt-4 text-sm font-semibold text-[#9d8cb6]'>
                          + {remainingExams} exámenes más
                        </p>
                      )}

                      {includes.length > 3 && (
                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen
                              ? 'grid-rows-[1fr]'
                              : 'grid-rows-[0fr]'
                          }`}
                        >
                          <div className='overflow-hidden'>
                            <ul className='mt-3 space-y-3'>
                              {includes.slice(3).map((exam) => (
                                <li
                                  key={exam}
                                  className='flex items-start gap-3 text-sm text-[#334175]'
                                >
                                  <Check
                                    size={17}
                                    strokeWidth={2}
                                    className='mt-0.5 shrink-0 text-[#65b6b7]'
                                  />

                                  <span>{exam}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {profile.note && (
                        <p className='mt-5 rounded-xl bg-[#65b6b7]/10 px-4 py-3 text-sm leading-relaxed text-[#334175]'>
                          {profile.note}
                        </p>
                      )}

                      {includes.length > 3 && (
                        <button
                          type='button'
                          onClick={() => toggleProfile(profile.id)}
                          className='mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-[#9d8cb6]/30 px-4 py-2.5 text-sm font-semibold text-[#9d8cb6] transition hover:bg-[#9d8cb6]/5'
                          aria-expanded={isOpen}
                        >
                          {isOpen ? 'Ver menos' : 'Ver perfil completo'}

                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}