'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: '¿Debo estar en ayunas?',
    answer:
      'Depende del tipo de prueba. Algunas requieren ayuno y otras no. Le indicaremos previamente si necesita alguna preparación especial.',
  },
  {
    question: '¿Necesito una orden médica?',
    answer:
      'No todas las pruebas requieren orden médica. Puede consultarnos para confirmar los requisitos según lo que necesite.',
  },
  {
    question: '¿Cuánto tardan los resultados?',
    answer:
      'El tiempo de entrega depende del análisis. Algunos resultados pueden estar disponibles el mismo día, mientras que pruebas más especializadas pueden requerir más tiempo.',
  },
  {
    question: '¿Cómo recibo mis resultados?',
    answer:
      'Los resultados pueden entregarse de forma digital o presencial, según el tipo de prueba y la opción acordada.',
  },
  {
    question: '¿Ofrecen toma de muestras a domicilio?',
    answer:
      'Sí. Contamos con servicio de toma de muestras a domicilio. Puede contactarnos para consultar disponibilidad y coordinar la visita.',
  },
  {
    question: '¿Debo coordinar mi visita previamente?',
    answer:
      'Puede comunicarse con nosotros por WhatsApp, teléfono o correo para coordinar su visita o la toma de muestra.',
  },
  {
    question: '¿Puedo tomar mis medicamentos antes de la prueba?',
    answer:
      'Algunos medicamentos pueden influir en determinados resultados. No suspenda ningún medicamento sin indicación de su médico y consulte previamente si necesita alguna preparación especial.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='relative overflow-hidden py-16 sm:py-20'>
      <div className='relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12'>
        <div className='grid items-center gap-10 lg:grid-cols-[65%_35%] lg:gap-12'>
          <div>
            <h2 className='text-2xl font-bold text-[#18264d] sm:text-3xl'>
              Preguntas <span className='text-[#9d8cb6]'>frecuentes</span>
            </h2>

            <div className='mt-2 h-1 w-12 rounded-full bg-[#65b6b7]' />

            <div className='mt-8 space-y-3'>
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className='overflow-hidden rounded-xl border border-[#9d8cb6]/15 bg-white shadow-sm'
                  >
                    <button
                      type='button'
                      onClick={() => toggleFAQ(index)}
                      className='flex w-full items-center justify-between gap-4 px-5 py-4 text-left'
                      aria-expanded={isOpen}
                    >
                      <span className='text-sm font-bold text-[#18264d] sm:text-base'>
                        {faq.question}
                      </span>

                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-[#9d8cb6] transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className='overflow-hidden'>
                        <p className='border-t border-[#9d8cb6]/10 px-5 py-4 text-sm leading-6 text-[#334175] sm:text-[15px]'>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='relative hidden h-full min-h-[430px] items-center justify-center lg:flex'>
            <Image
              src='/assets/giardia.svg'
              alt=''
              width={220}
              height={300}
              className='relative z-10 h-auto w-40 xl:w-48'
            />

            <Image
              src='/assets/bubble.svg'
              alt=''
              width={30}
              height={30}
              className='absolute left-[18%] top-[24%] h-auto w-3'
            />

            <Image
              src='/assets/bubble.svg'
              alt=''
              width={30}
              height={30}
              className='absolute right-[16%] top-[34%] h-auto w-4'
            />

            <Image
              src='/assets/bubble.svg'
              alt=''
              width={30}
              height={30}
              className='absolute bottom-[24%] left-[28%] h-auto w-2.5'
            />

            <Image
              src='/assets/bubble.svg'
              alt=''
              width={30}
              height={30}
              className='absolute bottom-[34%] right-[24%] h-auto w-3'
            />
          </div>
        </div>
      </div>
    </section>
  );
}