'use client';

import { SubmitEvent, useEffect, useRef, useState } from 'react';
import { FileSearch, Search, X } from 'lucide-react';

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    inputRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  function handleClose() {
    setSearchTerm('');
    setMessage('');
    onClose();
  }

  function findTextOnPage(term: string) {
    const normalizedTerm = term.trim().toLowerCase();

    if (!normalizedTerm) {
      setMessage('Escribe una palabra para buscar.');
      return;
    }

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parentElement = node.parentElement;

        if (!parentElement) {
          return NodeFilter.FILTER_REJECT;
        }

        const ignoredTags = ['SCRIPT', 'STYLE', 'NOSCRIPT', 'INPUT', 'TEXTAREA'];

        const isInsideSearchModal = parentElement.closest('[data-search-modal]');

        if (ignoredTags.includes(parentElement.tagName) || isInsideSearchModal) {
          return NodeFilter.FILTER_REJECT;
        }

        return node.textContent?.toLowerCase().includes(normalizedTerm)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
    });

    const matchingNode = walker.nextNode();

    if (!matchingNode || !matchingNode.textContent) {
      setMessage(`No encontramos “${term}” en esta página.`);
      return;
    }

    const text = matchingNode.textContent;
    const startIndex = text.toLowerCase().indexOf(normalizedTerm);

    const range = document.createRange();

    range.setStart(matchingNode, startIndex);
    range.setEnd(matchingNode, startIndex + term.trim().length);

    const selection = window.getSelection();

    selection?.removeAllRanges();
    selection?.addRange(range);

    const parentElement = matchingNode.parentElement;

    onClose();

    window.setTimeout(() => {
      parentElement?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 100);
  }

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    findTextOnPage(searchTerm);
  }

  if (!isOpen) return null;

  return (
    <div
      data-search-modal
      role='dialog'
      aria-modal='true'
      aria-labelledby='search-title'
      className='fixed inset-0 z-[100] flex items-end justify-center bg-[#2f3b5f]/35 backdrop-blur-sm sm:items-start sm:px-4 sm:pt-24'
      onMouseDown={onClose}>
      <div
        className='max-h-[90dvh] w-full overflow-y-auto rounded-t-[30px] border border-white/70 bg-white shadow-[0_-20px_60px_rgba(47,59,95,0.22)] sm:max-h-none sm:max-w-xl sm:rounded-[28px] sm:shadow-[0_30px_80px_rgba(47,59,95,0.25)]'
        onMouseDown={(event) => event.stopPropagation()}>
        <div className='relative overflow-hidden bg-gradient-to-r from-[#65b6b7]/10 via-white to-[#9d8cb6]/10 px-5 pb-6 pt-5 sm:p-8'>
          <div className='mx-auto mb-5 h-1.5 w-12 rounded-full bg-[#9d8cb6]/25 sm:hidden' />

          <div className='absolute -right-12 -top-16 h-40 w-40 rounded-full bg-[#9d8cb6]/10 blur-2xl' />
          <div className='absolute -bottom-20 -left-14 h-40 w-40 rounded-full bg-[#65b6b7]/10 blur-2xl' />

          <div className='relative flex items-start justify-between gap-3 sm:gap-4'>
            <div className='flex min-w-0 items-center gap-3'>
              <FileSearch size={28} strokeWidth={1.8} className='shrink-0 text-[#65b6b7]' />

              <div className='min-w-0'>
                <h2 id='search-title' className='text-base font-bold text-[#2f3b5f] sm:text-xl'>
                  Buscar en esta página
                </h2>

                <p className='mt-1 text-xs leading-5 text-[#6f7791] sm:text-sm'>
                  Encuentra palabras dentro del contenido visible.
                </p>
              </div>
            </div>

            <button
              type='button'
              onClick={handleClose}
              aria-label='Cerrar búsqueda'
              className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#2f3b5f] transition hover:bg-white hover:text-[#65b6b7] sm:h-10 sm:w-10'>
              <X size={22} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className='relative mt-5 sm:mt-6'>
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
                setMessage('');
              }}
              placeholder='Escribe el texto que deseas encontrar'
              className='h-14 w-full rounded-2xl border border-[#65b6b7]/25 bg-white pl-12 pr-4 text-sm text-[#2f3b5f] shadow-[0_8px_24px_rgba(47,59,95,0.06)] outline-none transition placeholder:text-[#9aa3b5] focus:border-[#65b6b7] focus:ring-4 focus:ring-[#65b6b7]/10 sm:pr-28'
            />

            <button
              type='submit'
              className='mt-3 flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#9d8cb6] to-[#65b6b7] px-5 text-sm font-semibold text-white transition hover:opacity-90 sm:absolute sm:right-2 sm:top-1/2 sm:mt-0 sm:h-auto sm:w-auto sm:-translate-y-1/2 sm:py-2.5'>
              Buscar
            </button>
          </form>

          {message && (
            <p
              role='status'
              className='relative mt-4 rounded-xl bg-white/75 px-4 py-3 text-sm text-[#6f7791]'>
              {message}
            </p>
          )}
        </div>

        <div className='flex items-center justify-center border-t border-[#65b6b7]/15 bg-[#ffffff] px-6 py-3 text-xs text-[#7f879c] sm:justify-between'>
          <span>Enter para buscar</span>
          <span className='hidden sm:inline'>Esc para cerrar</span>
        </div>
      </div>
    </div>
  );
}
