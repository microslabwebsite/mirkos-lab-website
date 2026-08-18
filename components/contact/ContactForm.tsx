'use client';

import Image from 'next/image';
import { useActionState } from 'react';
import { Loader2, Send } from 'lucide-react';
import { sendContactMessage } from '@/app/actions/contact';

export type ContactFormState = {
  success: boolean;
  message: string;
};

export const initialContactFormState: ContactFormState = {
  success: false,
  message: '',
};

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialContactFormState);

  return (
    <div className='relative'>
      <div className='relative pr-24 sm:pr-28'>
        <h2 className='text-xl font-bold text-[#18264d] sm:text-2xl'>Envíanos un mensaje</h2>

        <div className='mt-2 h-1 w-12 rounded-full bg-[#9d8cb6]' />

        <Image
          src='/assets/pink-bacteria.svg'
          alt=''
          width={100}
          height={100}
          className='pointer-events-none absolute right-1 top-0 h-auto w-16 sm:right-2 sm:top-1 sm:w-20'
        />

        <Image
          src='/assets/bubble.svg'
          alt=''
          width={30}
          height={30}
          className='pointer-events-none absolute right-20 -top-2 h-auto w-2.5 opacity-65 sm:right-26 sm:-top-1 sm:w-3'
        />

        <Image
          src='/assets/bubble.svg'
          alt=''
          width={30}
          height={30}
          className='pointer-events-none absolute right-4 -top-5 h-auto w-2 opacity-55 sm:right-5 sm:-top-4 sm:w-2.5'
        />

        <Image
          src='/assets/bubble.svg'
          alt=''
          width={30}
          height={30}
          className='pointer-events-none absolute right-23 top-12 h-auto w-2 opacity-60 sm:right-30 sm:top-15 sm:w-2.5'
        />

        <Image
          src='/assets/bubble.svg'
          alt=''
          width={30}
          height={30}
          className='pointer-events-none absolute -right-1 top-17 h-auto w-2.5 opacity-65 sm:right-0 sm:top-19 sm:w-3'
        />
      </div>

      <div className='mt-6'>
        <form action={formAction} className='space-y-4'>
          <div>
            <label htmlFor='name' className='mb-1.5 block text-sm text-[#334175]'>
              Nombre completo
            </label>

            <input
              id='name'
              name='name'
              type='text'
              required
              disabled={pending}
              className='w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#18264d] outline-none transition focus:border-[#65b6b7] focus:ring-2 focus:ring-[#65b6b7]/20 disabled:cursor-not-allowed disabled:opacity-60'
            />
          </div>

          <div>
            <label htmlFor='email' className='mb-1.5 block text-sm text-[#334175]'>
              Correo electrónico
            </label>

            <input
              id='email'
              name='email'
              type='email'
              required
              disabled={pending}
              className='w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#18264d] outline-none transition focus:border-[#65b6b7] focus:ring-2 focus:ring-[#65b6b7]/20 disabled:cursor-not-allowed disabled:opacity-60'
            />
          </div>

          <div>
            <label htmlFor='phone' className='mb-1.5 block text-sm text-[#334175]'>
              Teléfono
            </label>

            <input
              id='phone'
              name='phone'
              type='tel'
              disabled={pending}
              className='w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#18264d] outline-none transition focus:border-[#65b6b7] focus:ring-2 focus:ring-[#65b6b7]/20 disabled:cursor-not-allowed disabled:opacity-60'
            />
          </div>

          <div>
            <label htmlFor='subject' className='mb-1.5 block text-sm text-[#334175]'>
              Asunto
            </label>

            <input
              id='subject'
              name='subject'
              type='text'
              disabled={pending}
              className='w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#18264d] outline-none transition focus:border-[#65b6b7] focus:ring-2 focus:ring-[#65b6b7]/20 disabled:cursor-not-allowed disabled:opacity-60'
            />
          </div>

          <div>
            <label htmlFor='message' className='mb-1.5 block text-sm text-[#334175]'>
              Mensaje
            </label>

            <textarea
              id='message'
              name='message'
              rows={5}
              required
              disabled={pending}
              className='w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#18264d] outline-none transition focus:border-[#65b6b7] focus:ring-2 focus:ring-[#65b6b7]/20 disabled:cursor-not-allowed disabled:opacity-60'
            />
          </div>

          {state.message ? (
            <p
              role='status'
              className={`text-sm ${state.success ? 'text-[#65b6b7]' : 'text-red-600'}`}>
              {state.message}
            </p>
          ) : null}

          <button
            type='submit'
            disabled={pending}
            className='flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#9d8cb6] to-[#65b6b7] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(101,182,183,0.25)] transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70'>
            {pending ? <Loader2 size={16} className='animate-spin' /> : <Send size={16} />}

            {pending ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </div>
  );
}
