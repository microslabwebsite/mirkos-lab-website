'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import ExamsSection from '@/components/services/ExamsSection';
import ExamsPackagesSection from '@/components/services/ExamsPackagesSection';
import ServicesCTA from '@/components/services/ServicesCTA';
import ServicesHero from '@/components/services/ServicesHero';

export default function Services() {
  const [search, setSearch] = useState('');

  return (
    <main className='min-h-screen'>
      <ServicesHero />

      <section className='w-full py-8 sm:py-10'>
        <div className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-12'>
          <div className='relative'>
            <Search
              size={26}
              strokeWidth={1.8}
              className='absolute left-5 top-1/2 -translate-y-1/2 text-[#9d8cb6]'
            />

            <input
              type='text'
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder='Buscar examen o perfil'
              className='w-full rounded-2xl border border-[#9d8cb6]/15 bg-white py-5 pl-16 pr-5 text-sm text-[#18264d] shadow-[0_8px_25px_rgba(24,38,77,0.06)] outline-none transition placeholder:text-[#69749a] focus:border-[#65b6b7]/50 sm:text-base'
            />
          </div>
        </div>
      </section>

      <ExamsSection search={search} />
      <ExamsPackagesSection search={search} />
      <ServicesCTA />
    </main>
  );
}