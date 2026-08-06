'use client';

import { SubmitEvent, useEffect, useRef, useState } from 'react';
import { FileSearch, Search, X } from 'lucide-react';

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SearchModal({
  isOpen,
  onClose,
}: SearchModalProps) {
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

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const parentElement = node.parentElement;

          if (!parentElement) {
            return NodeFilter.FILTER_REJECT;
          }

          const ignoredTags = [
            'SCRIPT',
            'STYLE',
            'NOSCRIPT',
            'INPUT',
            'TEXTAREA',
          ];

          const isInsideSearchModal = parentElement.closest(
            '[data-search-modal]'
          );

          if (
            ignoredTags.includes(parentElement.tagName) ||
            isInsideSearchModal
          ) {
            return NodeFilter.FILTER_REJECT;
          }

          return node.textContent
            ?.toLowerCase()
            .includes(normalizedTerm)
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        },
      }
    );

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

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    findTextOnPage(searchTerm);
  }

  if (!isOpen) return null;

  return (
    <div
      data-search-modal
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-title"
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[#111c5c]/35 backdrop-blur-sm sm:items-start sm:px-4 sm:pt-24"
      onMouseDown={onClose}
    >
      <div
        className="max-h-[90dvh] w-full overflow-y-auto rounded-t-[30px] border border-white/70 bg-white shadow-[0_-20px_60px_rgba(17,28,92,0.22)] sm:max-h-none sm:max-w-xl sm:rounded-[28px] sm:shadow-[0_30px_80px_rgba(17,28,92,0.25)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="relative overflow-hidden bg-gradient-to-r from-[#f3fbfc] via-white to-[#f8f3ff] px-5 pb-6 pt-5 sm:p-8">
          <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-[#dfe4f0] sm:hidden" />

          <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-[#8851d4]/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-14 h-40 w-40 rounded-full bg-[#02aebe]/10 blur-2xl" />

          <div className="relative flex items-start justify-between gap-3 sm:gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8851d4] to-[#02aebe] text-white shadow-md sm:h-11 sm:w-11">
                <FileSearch size={21} />
              </div>

              <div className="min-w-0">
                <h2
                  id="search-title"
                  className="text-base font-bold text-[#111c5c] sm:text-xl"
                >
                  Buscar en esta página
                </h2>

                <p className="mt-1 text-xs leading-5 text-[#6d78a5] sm:text-sm">
                  Encuentra palabras dentro del contenido visible.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleClose}
              aria-label="Cerrar búsqueda"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#111c5c] transition hover:bg-white hover:text-[#08a8bc] sm:h-10 sm:w-10"
            >
              <X size={22} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="relative mt-5 sm:mt-6">
            <Search
              size={20}
              className="pointer-events-none absolute left-4 top-7 -translate-y-1/2 text-[#08a8bc] sm:top-1/2"
            />

            <input
              ref={inputRef}
              type="search"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                setMessage('');
              }}
              placeholder="Escribe el texto que deseas encontrar"
              className="h-14 w-full rounded-2xl border border-[#e5e9f5] bg-white pl-12 pr-4 text-sm text-[#111c5c] shadow-[0_8px_24px_rgba(20,40,90,0.06)] outline-none transition placeholder:text-[#9aa3c0] focus:border-[#08a8bc] focus:ring-4 focus:ring-[#08a8bc]/10 sm:pr-28"
            />

            <button
              type="submit"
              className="mt-3 flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#8851d4] to-[#02aebe] px-5 text-sm font-semibold text-white transition hover:opacity-90 sm:absolute sm:right-2 sm:top-1/2 sm:mt-0 sm:h-auto sm:w-auto sm:-translate-y-1/2 sm:py-2.5"
            >
              Buscar
            </button>
          </form>

          {message && (
            <p
              role="status"
              className="relative mt-4 rounded-xl bg-white/70 px-4 py-3 text-sm text-[#6d78a5]"
            >
              {message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-center border-t border-[#edf0f8] bg-[#fafbfe] px-6 py-3 text-xs text-[#8a93b1] sm:justify-between">
          <span>Enter para buscar</span>
          <span className="hidden sm:inline">Esc para cerrar</span>
        </div>
      </div>
    </div>
  );
}