import { CalendarDays, TestTube2, Microscope, FileText, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: CalendarDays,
    title: 'Coordina tu cita',
    description: 'Contáctanos por WhatsApp, llamada o correo para coordinar tu cita.',
    color: '#9d8cb6',
    tint: 'rgba(157, 140, 182, 0.14)',
  },
  {
    number: '2',
    icon: TestTube2,
    title: 'Toma de muestra',
    description: 'Realizamos la toma de muestra en el laboratorio o a domicilio.',
    color: '#9d8cb6',
    tint: 'rgba(157, 140, 182, 0.14)',
  },
  {
    number: '3',
    icon: Microscope,
    title: 'Análisis en laboratorio',
    description: 'Procesamos tu muestra con equipos de alta tecnología.',
    color: '#65b6b7',
    tint: 'rgba(101, 182, 183, 0.15)',
  },
  {
    number: '4',
    icon: FileText,
    title: 'Resultados',
    description: 'Recibe tus resultados rápido y con la orientación que necesitas.',
    color: '#9d8cb6',
    tint: 'rgba(157, 140, 182, 0.14)',
  },
];

export default function ProcessSection() {
  return (
    <section className='relative py-10 sm:py-12'>
      <div className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-12'>
        <div className='relative overflow-hidden rounded-[28px] border border-[#9d8cb6]/10 bg-gradient-to-br from-[#65b6b7]/12 to-[#9d8cb6]/15 px-5 py-8 shadow-[0_10px_30px_rgba(157,140,182,0.10)] sm:px-7 sm:py-9 lg:px-9 lg:py-10'>
          <div className='relative z-10'>
            <div className='text-center'>
              <h2 className='text-2xl font-bold text-[#18264d] sm:text-3xl'>
                Así es nuestro <span className='text-[#9d8cb6]'>proceso</span>
              </h2>

              <div className='mx-auto mt-3 h-1 w-12 rounded-full bg-[#65b6b7]' />
            </div>

            <div className='mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5'>
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className='relative flex flex-col items-center text-center'
                  >
                    <div className='relative'>
                      <div className='flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(24,38,77,0.08)] sm:h-24 sm:w-24'>
                        <div
                          className='flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14'
                          style={{ backgroundColor: step.tint }}
                        >
                          <Icon
                            size={27}
                            strokeWidth={1.9}
                            style={{ color: step.color }}
                          />
                        </div>
                      </div>

                      <div
                        className='absolute -left-1.5 -top-1.5 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white shadow-sm sm:h-8 sm:w-8'
                        style={{ backgroundColor: step.color }}
                      >
                        {step.number}
                      </div>
                    </div>

                    <h3 className='mt-4 text-base font-bold text-[#18264d]'>
                      {step.title}
                    </h3>

                    <p className='mt-2 max-w-[220px] text-sm leading-relaxed text-[#334175]'>
                      {step.description}
                    </p>

                    {index < steps.length - 1 && (
                      <ArrowRight
                        size={24}
                        strokeWidth={1.7}
                        className='absolute -right-3 top-10 hidden text-[#9d8cb6]/45 lg:block'
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}