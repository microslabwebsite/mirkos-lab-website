import { Microscope, Eye, Heart, ShieldCheck } from 'lucide-react';

const values = ['Calidad', 'Confianza', 'Compromiso', 'Respeto', 'Empatía'];

export default function ValuesSection() {
  return (
    <section className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
      <div className='rounded-[30px] border border-slate-100 bg-white px-6 py-10 shadow-[0_12px_45px_rgba(70,70,120,0.07)] md:px-10'>
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0'>
          <article className='flex flex-col items-center px-6 text-center lg:border-r lg:border-slate-200'>
            <Microscope size={45} strokeWidth={1.6} className='mb-4 text-[#65b6b7]' />

            <h2 className='text-lg font-bold text-[#65b6b7]'>Misión</h2>

            <div className='my-4 h-[2px] w-8 bg-[#65b6b7]' />

            <p className='text-sm leading-7 text-slate-600'>
              Brindar servicios de diagnóstico clínico con calidad, precisión e innovación,
              ofreciendo una atención humana, confiable y oportuna que contribuya al bienestar y la
              prevención de nuestros pacientes.
            </p>
          </article>

          <article className='flex flex-col items-center px-6 text-center lg:border-r lg:border-slate-200'>
            <Eye size={45} strokeWidth={1.6} className='mb-4 text-[#9d8cb6]' />

            <h2 className='text-lg font-bold text-[#9d8cb6]'>Visión</h2>

            <div className='my-4 h-[2px] w-8 bg-[#9d8cb6]' />

            <p className='text-sm leading-7 text-slate-600'>
              Ser el laboratorio clínico líder en confianza e innovación, reconocido por su
              excelencia, tecnología de vanguardia y compromiso con la salud de nuestros pacientes.
            </p>
          </article>

          <article className='flex flex-col items-center px-6 text-center lg:border-r lg:border-slate-200'>
            <Heart size={45} strokeWidth={1.6} className='mb-4 text-[#65b6b7]' />

            <h2 className='text-lg font-bold text-[#65b6b7]'>Valores</h2>

            <div className='my-4 h-[2px] w-8 bg-[#65b6b7]' />

            <ul className='space-y-2 text-left text-sm text-slate-600'>
              {values.map((value) => (
                <li key={value} className='flex items-center gap-2'>
                  <span className='h-1.5 w-1.5 rounded-full bg-[#65b6b7]' />
                  {value}
                </li>
              ))}
            </ul>
          </article>

          <article className='flex flex-col items-center px-6 text-center'>
            <ShieldCheck size={45} strokeWidth={1.6} className='mb-4 text-[#9d8cb6]' />

            <h2 className='text-lg font-bold text-[#9d8cb6]'>Compromiso</h2>

            <div className='my-4 h-[2px] w-8 bg-[#9d8cb6]' />

            <p className='text-sm leading-7 text-slate-600'>
              Trabajamos cada día para ofrecerte una experiencia segura, con ética y responsabilidad
              en cada proceso.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
