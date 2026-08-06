'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileSearch, Menu, X } from 'lucide-react';
import SearchModal from './SearchModal';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/services', label: 'Servicios' },
  { href: '/about-us', label: 'Nosotros' },
  { href: '/contact', label: 'Contacto' },
];

export default function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function openSearch() {
    closeMenu();
    setIsSearchOpen(true);
  }

  return (
    <>
      <header className='relative z-50 w-full bg-white'>
        <div className='mx-auto max-w-7xl px-5 sm:px-6 lg:px-10'>
          <nav className='flex h-20 items-center justify-between lg:h-24'>
            <Link href='/' className='shrink-0' onClick={closeMenu}>
              <Image
                src='/assets/logo.png'
                alt='MiKros Lab Laboratorio Clínico'
                width={190}
                height={65}
                priority
                className='h-auto w-[145px] sm:w-[165px] lg:w-[190px]'
              />
            </Link>

            <ul className='hidden items-center gap-10 lg:flex'>
              {links.map((link) => {
                const isActive =
                  link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative block py-3 text-sm font-semibold transition-colors duration-200 ${
                        isActive ? 'text-[#08a8bc]' : 'text-[#111c5c] hover:text-[#08a8bc]'
                      }`}>
                      {link.label}

                      <span
                        className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#08a8bc] transition-all duration-200 ${
                          isActive ? 'w-full' : 'w-0'
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className='flex items-center gap-2 sm:gap-3'>
              <button
                type='button'
                onClick={openSearch}
                className='hidden items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8851d4] to-[#02aebe] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(86,89,190,0.2)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(86,89,190,0.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#08a8bc]/20 lg:flex'>
                <FileSearch size={18} strokeWidth={2} />
                Buscar
              </button>

              <button
                type='button'
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isMenuOpen}
                className='flex h-11 w-11 items-center justify-center rounded-full border border-[#e8ebf4] bg-white text-[#111c5c] shadow-sm transition-colors hover:bg-[#f3f5fb] lg:hidden'>
                {isMenuOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
              </button>
            </div>
          </nav>

          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
              isMenuOpen
                ? 'grid-rows-[1fr] border-t border-[#edf0fb] pb-6 opacity-100'
                : 'grid-rows-[0fr] opacity-0'
            }`}>
            <div className='min-h-0'>
              <ul className='flex flex-col pt-4'>
                {links.map((link) => {
                  const isActive =
                    link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-colors ${
                          isActive
                            ? 'bg-[#eefafb] text-[#08a8bc]'
                            : 'text-[#111c5c] hover:bg-[#f6f7fb] hover:text-[#08a8bc]'
                        }`}>
                        {link.label}

                        {isActive && <span className='h-2 w-2 rounded-full bg-[#08a8bc]' />}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <button
                type='button'
                onClick={openSearch}
                className='mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8851d4] to-[#02aebe] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(86,89,190,0.2)] transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#08a8bc]/20'>
                <FileSearch size={18} strokeWidth={2} />
                Buscar
              </button>
            </div>
          </div>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
