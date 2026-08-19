'use client';

import {
  FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  FileSearch,
  Search,
  X,
} from 'lucide-react';
import {
  siteSearchItems,
  type SiteSearchItem,
} from '@/data/siteSearch';

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function normalizeText(text: string) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function getSearchScore(item: SiteSearchItem, searchTerm: string) {
  const query = normalizeText(searchTerm);

  const title = normalizeText(item.title);
  const description = normalizeText(item.description);
  const category = normalizeText(item.category);

  const keywords = item.keywords.map((keyword) =>
    normalizeText(keyword)
  );

  const queryWords = query
    .split(/\s+/)
    .filter((word) => word.length > 1);

  let score = 0;

  if (title === query) {
    score += 100;
  } else if (title.startsWith(query)) {
    score += 80;
  } else if (title.includes(query)) {
    score += 60;
  }

  keywords.forEach((keyword) => {
    if (keyword === query) {
      score += 70;
    } else if (keyword.includes(query)) {
      score += 45;
    } else if (query.includes(keyword) && keyword.length > 3) {
      score += 35;
    }
  });

  if (description.includes(query)) {
    score += 30;
  }

  if (category.includes(query)) {
    score += 20;
  }

  queryWords.forEach((word) => {
    if (title.includes(word)) {
      score += 15;
    }

    if (keywords.some((keyword) => keyword.includes(word))) {
      score += 10;
    }

    if (description.includes(word)) {
      score += 5;
    }

    if (category.includes(word)) {
      score += 3;
    }
  });

  return score;
}

export default function SearchModal({
  isOpen,
  onClose,
}: SearchModalProps) {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const timeout = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.clearTimeout(timeout);

      document.removeEventListener(
        'keydown',
        handleKeyDown
      );

      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const results = useMemo(() => {
    const query = normalizeText(searchTerm);

    if (!query) {
      return [];
    }

    return siteSearchItems
      .map((item) => ({
        item,
        score: getSearchScore(item, query),
      }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map(({ item }) => item);
  }, [searchTerm]);

  function handleClose() {
    setSearchTerm('');
    setHasSearched(false);
    onClose();
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!searchTerm.trim()) {
      setHasSearched(true);
      inputRef.current?.focus();
      return;
    }

    setHasSearched(true);
  }

  function handleResultClick(result: SiteSearchItem) {
    const href = result.href;

    setSearchTerm('');
    setHasSearched(false);
    onClose();

    const [pathname, hash] = href.split('#');

    const currentPathname = window.location.pathname;

    if (
      hash &&
      (pathname === currentPathname ||
        (pathname === '/' && currentPathname === '/'))
    ) {
      window.history.pushState(null, '', href);

      window.setTimeout(() => {
        document
          .getElementById(hash)
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
      }, 100);

      return;
    }

    router.push(href);
  }

  if (!isOpen) return null;

  const hasSearchTerm = searchTerm.trim().length > 0;

  return (
    <div
      data-search-modal
      role='dialog'
      aria-modal='true'
      aria-labelledby='search-title'
      className='fixed inset-0 z-[100] flex items-end justify-center bg-[#2f3b5f]/35 backdrop-blur-sm sm:items-start sm:px-4 sm:pt-24'
      onMouseDown={handleClose}
    >
      <div
        className='max-h-[90dvh] w-full overflow-y-auto rounded-t-[30px] border border-white/70 bg-white shadow-[0_-20px_60px_rgba(47,59,95,0.22)] sm:max-w-xl sm:rounded-[28px] sm:shadow-[0_30px_80px_rgba(47,59,95,0.25)]'
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >
        <div className='relative overflow-hidden bg-gradient-to-r from-[#65b6b7]/10 via-white to-[#9d8cb6]/10 px-5 pb-6 pt-5 sm:p-8'>
          <div className='mx-auto mb-5 h-1.5 w-12 rounded-full bg-[#9d8cb6]/25 sm:hidden' />

          <div className='absolute -right-12 -top-16 h-40 w-40 rounded-full bg-[#9d8cb6]/10 blur-2xl' />

          <div className='absolute -bottom-20 -left-14 h-40 w-40 rounded-full bg-[#65b6b7]/10 blur-2xl' />

          <div className='relative flex items-start justify-between gap-3 sm:gap-4'>
            <div className='flex min-w-0 items-center gap-3'>
              <FileSearch
                size={28}
                strokeWidth={1.8}
                className='shrink-0 text-[#65b6b7]'
              />

              <div className='min-w-0'>
                <h2
                  id='search-title'
                  className='text-base font-bold text-[#18264d] sm:text-xl'
                >
                  Buscar en MiKros Lab
                </h2>

                <p className='mt-1 text-xs leading-5 text-[#69749a] sm:text-sm'>
                  Encuentra servicios, exámenes, perfiles e
                  información del sitio.
                </p>
              </div>
            </div>

            <button
              type='button'
              onClick={handleClose}
              aria-label='Cerrar búsqueda'
              className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#18264d] transition hover:bg-white hover:text-[#65b6b7] sm:h-10 sm:w-10'
            >
              <X size={22} />
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className='relative mt-5 sm:mt-6'
          >
            <Search
              size={20}
              className='pointer-events-none absolute left-4 top-7 -translate-y-1/2 text-[#65b6b7] sm:top-1/2'
            />

            <input
              ref={inputRef}
              type='search'
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                setHasSearched(false);
              }}
              placeholder='Buscar examen, ubicación, horario...'
              className='h-14 w-full rounded-2xl border border-[#65b6b7]/25 bg-white pl-12 pr-4 text-sm text-[#18264d] shadow-[0_8px_24px_rgba(47,59,95,0.06)] outline-none transition placeholder:text-[#9aa3b5] focus:border-[#65b6b7] focus:ring-4 focus:ring-[#65b6b7]/10 sm:pr-28'
            />

            <button
              type='submit'
              className='mt-3 flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#9d8cb6] to-[#65b6b7] px-5 text-sm font-semibold text-white transition hover:opacity-90 sm:absolute sm:right-2 sm:top-1/2 sm:mt-0 sm:h-auto sm:w-auto sm:-translate-y-1/2 sm:py-2.5'
            >
              Buscar
            </button>
          </form>

          {!hasSearchTerm && hasSearched && (
            <p
              role='status'
              className='relative mt-4 rounded-xl bg-white/75 px-4 py-3 text-sm text-[#69749a]'
            >
              Escribe una palabra para buscar.
            </p>
          )}
        </div>

        {hasSearchTerm && (
          <div className='border-t border-[#65b6b7]/10 bg-white px-4 py-4 sm:px-6 sm:py-5'>
            {results.length > 0 ? (
              <>
                <p className='mb-3 px-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#69749a]'>
                  {results.length}{' '}
                  {results.length === 1
                    ? 'resultado'
                    : 'resultados'}
                </p>

                <div className='flex flex-col gap-1'>
                  {results.map((result) => (
                    <button
                      key={result.id}
                      type='button'
                      onClick={() =>
                        handleResultClick(result)
                      }
                      className='group flex w-full items-center justify-between gap-4 rounded-2xl px-3 py-3 text-left transition hover:bg-[#65b6b7]/[0.07]'
                    >
                      <div className='min-w-0'>
                        <div className='flex flex-wrap items-center gap-2'>
                          <p className='font-semibold text-[#18264d] transition group-hover:text-[#65b6b7]'>
                            {result.title}
                          </p>

                          <span className='rounded-full bg-[#9d8cb6]/10 px-2.5 py-1 text-[10px] font-semibold text-[#9d8cb6]'>
                            {result.category}
                          </span>
                        </div>

                        <p className='mt-1 line-clamp-2 text-xs leading-5 text-[#69749a] sm:text-sm'>
                          {result.description}
                        </p>
                      </div>

                      <ArrowRight
                        size={18}
                        className='shrink-0 text-[#9d8cb6] transition duration-200 group-hover:translate-x-1 group-hover:text-[#65b6b7]'
                      />
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className='py-5 text-center'>
                <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#9d8cb6]/10 text-[#9d8cb6]'>
                  <FileSearch
                    size={23}
                    strokeWidth={1.7}
                  />
                </div>

                <p className='mt-3 text-sm font-bold text-[#18264d]'>
                  No encontramos resultados
                </p>

                <p className='mt-1 text-xs leading-5 text-[#69749a]'>
                  Intenta buscar con otra palabra o término.
                </p>
              </div>
            )}
          </div>
        )}

        <div className='flex items-center justify-center border-t border-[#65b6b7]/15 bg-white px-6 py-3 text-xs text-[#7f879c] sm:justify-between'>
          <span>Enter para buscar</span>

          <span className='hidden sm:inline'>
            Esc para cerrar
          </span>
        </div>
      </div>
    </div>
  );
}