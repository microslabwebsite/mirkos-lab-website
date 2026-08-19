import { Check, Clock3, UserRound, MapPin } from 'lucide-react';

const benefits = [
  {
    title: 'Resultados confiables',
    description: 'Análisis precisos para decisiones seguras.',
    icon: Check,
  },
  {
    title: 'Entrega oportuna',
    description: 'Valoramos tu tiempo, entregamos cuando lo necesitas.',
    icon: Clock3,
  },
  {
    title: 'Atención personalizada',
    description: 'Te escuchamos y te guiamos en todo el proceso.',
    icon: UserRound,
  },
  {
    title: 'Ubicación accesible',
    description: 'Estamos en un lugar cómodo y de fácil acceso.',
    icon: MapPin,
  },
];

export default function BenefitsSection() {
  return (
    <section id='beneficios' className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-[#302b64] md:text-3xl'>
          ¿Por qué elegir <span className='text-[#9d8cb6]'>MiKros Lab?</span>
        </h2>

        <div className='mx-auto mt-3 h-1 w-12 rounded-full bg-[#65b6b7]' />
      </div>

      <div className='mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
        {benefits.map(({ title, description, icon: Icon }, index) => (
          <article
            key={title}
            className={`flex flex-col items-center px-6 text-center ${
              index !== benefits.length - 1 ? 'lg:border-r lg:border-slate-200' : ''
            }`}>
            <div
              className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 ${
                index % 2 === 0
                  ? 'border-[#65b6b7] text-[#65b6b7]'
                  : 'border-[#9d8cb6] text-[#9d8cb6]'
              }`}>
              <Icon size={26} strokeWidth={1.7} />
            </div>

            <h3 className='font-bold text-[#302b64]'>{title}</h3>

            <p className='mt-3 max-w-[220px] text-sm leading-6 text-slate-600'>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
