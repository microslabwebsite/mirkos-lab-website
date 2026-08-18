import {
  CircleDot,
  Dna,
  Droplet,
  Microscope,
  PawPrint,
  TestTube2,
  Waves,
} from 'lucide-react';

const exams = [
  {
    icon: Droplet,
    title: 'Análisis de Sangre',
    description:
      'Estudios hematológicos, bioquímicos e inmunológicos para evaluar tu estado de salud de manera integral.',
    color: '#ef3340',
    bg: 'bg-[#ef3340]/10',
  },
  {
    icon: Droplet,
    title: 'Análisis de Orina',
    description:
      'Exámenes generales y especializados para detectar infecciones, enfermedades renales, metabólicas y más.',
    color: '#f4b41a',
    bg: 'bg-[#f4b41a]/12',
  },
  {
    icon: TestTube2,
    title: 'Análisis de Heces',
    description:
      'Detección de parásitos, bacterias y otros microorganismos que pueden afectar tu sistema digestivo.',
    color: '#8b5e3c',
    bg: 'bg-[#65b6b7]/10',
  },
  {
    icon: CircleDot,
    title: 'Fertilidad',
    description:
      'Estudios hormonales y pruebas especializadas para apoyar tu salud reproductiva y planificación familiar.',
    color: '#b348a8',
    bg: 'bg-[#b348a8]/10',
  },
  {
    icon: PawPrint,
    title: 'Veterinaria',
    description:
      'Análisis clínicos para mascotas, porque su salud también es parte de la familia.',
    color: '#2aa9ac',
    bg: 'bg-[#65b6b7]/12',
  },
  {
    icon: Dna,
    title: 'Paternidad (ADN)',
    description:
      'Pruebas de ADN con alta precisión y total confidencialidad.',
    color: '#7551b2',
    bg: 'bg-[#9d8cb6]/12',
  },
  {
    icon: Waves,
    title: 'Análisis de Aguas',
    description:
      'Evaluamos la calidad del agua para consumo humano, uso doméstico e industrial.',
    color: '#2f9fee',
    bg: 'bg-[#2f9fee]/10',
  },
  {
    icon: Microscope,
    title: 'Otros estudios',
    description:
      'Contamos con una variedad de pruebas especializadas. ¡Consúltanos!',
    color: '#7950b2',
    bg: 'bg-[#9d8cb6]/12',
  },
];

type ExamsSectionProps = {
  search: string;
};

const normalizeText = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

export default function ExamsSection({ search }: ExamsSectionProps) {
  const query = normalizeText(search);

  const filteredExams = exams.filter((exam) => {
    if (!query) return true;

    const searchableText = normalizeText(
      `${exam.title} ${exam.description}`
    );

    const terms = query.split(/\s+/);

    return terms.every((term) => searchableText.includes(term));
  });

  if (query && filteredExams.length === 0) {
    return null;
  }

  return (
    <section className='relative w-full py-14 sm:py-16 lg:py-20'>
      <div className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-12'>
        <div className='mb-10 text-center sm:mb-12'>
          <h2 className='text-3xl font-bold text-[#18264d] sm:text-4xl'>
            Exámenes
          </h2>

          <div className='mx-auto mt-3 h-1 w-12 rounded-full bg-[#65b6b7]' />

          <p className='mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#334175] sm:text-base'>
            Conoce algunos de los análisis y estudios que ponemos a tu disposición.
          </p>
        </div>

        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {filteredExams.map((exam) => {
            const Icon = exam.icon;

            return (
              <div
                key={exam.title}
                className='flex min-h-[270px] flex-col items-center rounded-2xl border border-[#9d8cb6]/10 bg-white px-6 py-7 text-center shadow-[0_8px_25px_rgba(24,38,77,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(24,38,77,0.10)]'
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full ${exam.bg}`}
                >
                  <Icon
                    size={38}
                    strokeWidth={1.8}
                    style={{ color: exam.color }}
                  />
                </div>

                <h3 className='mt-5 text-base font-bold text-[#18264d]'>
                  {exam.title}
                </h3>

                <p className='mt-3 text-sm leading-6 text-[#334175]'>
                  {exam.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}