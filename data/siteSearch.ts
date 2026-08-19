import examProfilesJson from '@/data/examProfiles.json';

export type SiteSearchItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
  keywords: string[];
};

type ExamProfile = {
  id: string;
  profile: string;
  price: string;
  includes?: string[];
  note?: string;
  details?: {
    genotypes: number;
    lowRisk: string[];
    highRisk: string[];
    intermediateRisk: string[];
  };
};

const examProfiles = examProfilesJson as ExamProfile[];

const siteSections: SiteSearchItem[] = [
  {
    id: 'inicio',
    title: 'Inicio',
    description:
      'Conoce MiKros Lab, nuestros servicios, proceso de atención y preguntas frecuentes.',
    category: 'Página',
    href: '/',
    keywords: [
      'inicio',
      'home',
      'mikros',
      'mikros lab',
      'laboratorio',
      'laboratorio clinico',
      'laboratorio clínico',
      'analisis',
      'análisis',
      'salud',
    ],
  },

  {
    id: 'servicios',
    title: 'Servicios',
    description:
      'Conoce nuestros exámenes, análisis clínicos y perfiles de laboratorio.',
    category: 'Página',
    href: '/services',
    keywords: [
      'servicios',
      'servicio',
      'examen',
      'examenes',
      'exámenes',
      'estudio',
      'estudios',
      'prueba',
      'pruebas',
      'analisis',
      'análisis',
      'laboratorio',
      'perfil',
      'perfiles',
    ],
  },

  {
    id: 'examenes',
    title: 'Nuestros exámenes',
    description:
      'Consulta los diferentes tipos de análisis y estudios disponibles en MiKros Lab.',
    category: 'Servicios',
    href: '/services#examenes',
    keywords: [
      'examen',
      'examenes',
      'exámenes',
      'analisis',
      'análisis',
      'estudio',
      'estudios',
      'prueba',
      'pruebas',
      'laboratorio',
    ],
  },

  {
    id: 'sangre',
    title: 'Análisis de sangre',
    description:
      'Estudios hematológicos, bioquímicos e inmunológicos para evaluar tu estado de salud.',
    category: 'Examen',
    href: '/services#examenes',
    keywords: [
      'sangre',
      'analisis de sangre',
      'análisis de sangre',
      'hematologia',
      'hematología',
      'hematologico',
      'hematológico',
      'bioquimica',
      'bioquímica',
      'hemograma',
    ],
  },

  {
    id: 'orina',
    title: 'Análisis de orina',
    description:
      'Exámenes generales y especializados para detectar diferentes condiciones de salud.',
    category: 'Examen',
    href: '/services#examenes',
    keywords: [
      'orina',
      'analisis de orina',
      'análisis de orina',
      'examen de orina',
      'examen general de orina',
      'urinario',
      'urinaria',
    ],
  },

  {
    id: 'heces',
    title: 'Análisis de heces',
    description:
      'Estudios para detectar parásitos, bacterias y otros microorganismos.',
    category: 'Examen',
    href: '/services#examenes',
    keywords: [
      'heces',
      'analisis de heces',
      'análisis de heces',
      'parasitos',
      'parásitos',
      'frotis',
      'frotis de heces',
      'intestinal',
    ],
  },

  {
    id: 'fertilidad',
    title: 'Fertilidad',
    description:
      'Estudios hormonales y pruebas especializadas para apoyar la salud reproductiva.',
    category: 'Examen',
    href: '/services#examenes',
    keywords: [
      'fertilidad',
      'hormonas',
      'hormonal',
      'salud reproductiva',
      'reproduccion',
      'reproducción',
      'embarazo',
    ],
  },

  {
    id: 'veterinaria',
    title: 'Veterinaria',
    description:
      'Análisis clínicos disponibles para el cuidado de tus mascotas.',
    category: 'Examen',
    href: '/services#examenes',
    keywords: [
      'veterinaria',
      'veterinario',
      'mascota',
      'mascotas',
      'perro',
      'perros',
      'gato',
      'gatos',
      'animales',
      'analisis veterinario',
    ],
  },

  {
    id: 'paternidad-adn',
    title: 'Paternidad (ADN)',
    description:
      'Pruebas de ADN con alta precisión y total confidencialidad.',
    category: 'Examen',
    href: '/services#examenes',
    keywords: [
      'adn',
      'paternidad',
      'prueba de adn',
      'prueba paternidad',
      'padre',
      'genetica',
      'genética',
    ],
  },

  {
    id: 'aguas',
    title: 'Análisis de aguas',
    description:
      'Evaluación de la calidad del agua para diferentes usos.',
    category: 'Examen',
    href: '/services#examenes',
    keywords: [
      'agua',
      'aguas',
      'analisis de agua',
      'análisis de agua',
      'calidad del agua',
      'agua potable',
      'consumo humano',
    ],
  },

  {
    id: 'otros-estudios',
    title: 'Otros estudios',
    description:
      'Consulta por otras pruebas y análisis especializados disponibles.',
    category: 'Examen',
    href: '/services#examenes',
    keywords: [
      'otros estudios',
      'otros examenes',
      'otros exámenes',
      'especializados',
      'pruebas especiales',
      'consulta examen',
    ],
  },

  {
    id: 'perfiles',
    title: 'Perfiles de laboratorio',
    description:
      'Consulta nuestros perfiles y los exámenes incluidos en cada opción.',
    category: 'Servicios',
    href: '/services#perfiles',
    keywords: [
      'perfil',
      'perfiles',
      'perfil laboratorio',
      'perfiles laboratorio',
      'paquete',
      'paquetes',
      'combo',
      'examenes incluidos',
      'exámenes incluidos',
      'precio',
      'precios',
    ],
  },

  {
    id: 'nosotros',
    title: 'Sobre nosotros',
    description:
      'Conoce MiKros Lab, nuestra atención, valores y compromiso con nuestros pacientes.',
    category: 'Página',
    href: '/about-us',
    keywords: [
      'nosotros',
      'sobre nosotros',
      'quienes somos',
      'quiénes somos',
      'mikros lab',
      'laboratorio',
      'historia',
      'empresa',
      'informacion',
      'información',
      'acerca de',
    ],
  },

  {
    id: 'valores',
    title: 'Nuestros valores',
    description:
      'Conoce los valores que guían la atención y el trabajo de MiKros Lab.',
    category: 'Nosotros',
    href: '/about-us#valores',
    keywords: [
      'valores',
      'confianza',
      'calidad',
      'responsabilidad',
      'compromiso',
      'atencion',
      'atención',
      'servicio',
      'humano',
      'humana',
    ],
  },

  {
    id: 'beneficios',
    title: '¿Por qué elegir MiKros Lab?',
    description:
      'Conoce los beneficios y ventajas de realizar tus análisis con nosotros.',
    category: 'Nosotros',
    href: '/about-us#beneficios',
    keywords: [
      'beneficios',
      'ventajas',
      'por que elegirnos',
      'por qué elegirnos',
      'porque elegir',
      'calidad',
      'tecnologia',
      'tecnología',
      'confianza',
      'rapidez',
    ],
  },

  {
    id: 'resenas',
    title: 'Opiniones y reseñas',
    description:
      'Conoce las experiencias y opiniones de nuestros pacientes.',
    category: 'Nosotros',
    href: '/about-us#resenas',
    keywords: [
      'reseñas',
      'resenas',
      'review',
      'reviews',
      'opiniones',
      'comentarios',
      'experiencias',
      'pacientes',
      'google reviews',
      'google maps',
      'calificacion',
      'calificación',
    ],
  },

  {
    id: 'contacto',
    title: 'Contacto',
    description:
      'Encuentra nuestros medios de contacto, ubicación, horario y formulario.',
    category: 'Página',
    href: '/contact',
    keywords: [
      'contacto',
      'contactar',
      'contactanos',
      'contáctanos',
      'comunicar',
      'informacion de contacto',
      'información de contacto',
      'telefono',
      'teléfono',
      'correo',
      'email',
      'whatsapp',
    ],
  },

  {
    id: 'telefono',
    title: 'Teléfono',
    description:
      'Comunícate con MiKros Lab por teléfono.',
    category: 'Contacto',
    href: '/contact#contacto',
    keywords: [
      'telefono',
      'teléfono',
      'llamada',
      'llamar',
      'numero',
      'número',
      'celular',
      'contacto',
    ],
  },

  {
    id: 'whatsapp',
    title: 'WhatsApp',
    description:
      'Comunícate con MiKros Lab directamente por WhatsApp.',
    category: 'Contacto',
    href: '/contact#contacto',
    keywords: [
      'whatsapp',
      'mensaje',
      'mensajes',
      'chat',
      'escribir',
      'contactar',
      'cita',
      'agendar',
    ],
  },

  {
    id: 'correo',
    title: 'Correo electrónico',
    description:
      'Contáctanos por correo electrónico.',
    category: 'Contacto',
    href: '/contact#contacto',
    keywords: [
      'correo',
      'correo electronico',
      'correo electrónico',
      'email',
      'e-mail',
      'mensaje',
      'contacto',
    ],
  },

  {
    id: 'horario',
    title: 'Horario de atención',
    description:
      'Consulta nuestro horario de atención.',
    category: 'Contacto',
    href: '/contact#contacto',
    keywords: [
      'horario',
      'horarios',
      'hora',
      'horas',
      'abierto',
      'abren',
      'cerrado',
      'cierran',
      'atienden',
      'atencion',
      'atención',
    ],
  },

  {
    id: 'ubicacion',
    title: 'Ubicación',
    description:
      'Encuéntranos en Pedregoso, Pérez Zeledón, Costa Rica.',
    category: 'Contacto',
    href: '/contact#ubicacion',
    keywords: [
      'ubicacion',
      'ubicación',
      'direccion',
      'dirección',
      'donde estan',
      'dónde están',
      'donde queda',
      'dónde queda',
      'donde se ubican',
      'dónde se ubican',
      'como llegar',
      'cómo llegar',
      'mapa',
      'maps',
      'google maps',
      'pedregoso',
      'perez zeledon',
      'pérez zeledón',
      'san ramon',
      'san ramón',
      'costa rica',
    ],
  },

  {
    id: 'parqueo',
    title: 'Parqueo',
    description:
      'Contamos con parqueo gratuito en nuestras instalaciones.',
    category: 'Contacto',
    href: '/contact#ubicacion',
    keywords: [
      'parqueo',
      'estacionamiento',
      'estacionar',
      'carro',
      'vehiculo',
      'vehículo',
      'discapacidad',
      'parqueo gratis',
      'parqueo gratuito',
    ],
  },

 {
  id: 'domicilio',
  title: 'Servicio a domicilio',
  description:
    'Consulta la disponibilidad de nuestro servicio de toma de muestras a domicilio.',
  category: 'Contacto',
  href: '/contact#ubicacion',
  keywords: [
    'domicilio',
    'servicio a domicilio',
    'casa',
    'hogar',
    'muestra a domicilio',
    'toma de muestra',
    'toma de muestras',
    'visita a domicilio',
    'ir a casa',
  ],
},
  {
    id: 'formulario-contacto',
    title: 'Envíanos un mensaje',
    description:
      'Envíanos tus consultas mediante nuestro formulario de contacto.',
    category: 'Contacto',
    href: '/contact#formulario',
    keywords: [
      'formulario',
      'mensaje',
      'enviar mensaje',
      'consulta',
      'consultas',
      'pregunta',
      'preguntas',
      'escribir',
      'contacto',
    ],
  },

  {
    id: 'redes-sociales',
    title: 'Síguenos',
    description:
      'Encuentra MiKros Lab en Instagram y Facebook.',
    category: 'Contacto',
    href: '/contact#redes',
    keywords: [
      'redes',
      'redes sociales',
      'social',
      'instagram',
      'facebook',
      'siguenos',
      'síguenos',
      'mikroslaboratorio',
      'mikroslab',
    ],
  },

  {
    id: 'proceso',
    title: '¿Cómo funciona?',
    description:
      'Conoce el proceso desde tu visita a MiKros Lab hasta la entrega de resultados.',
    category: 'Inicio',
    href: '/#proceso',
    keywords: [
      'proceso',
      'como funciona',
      'cómo funciona',
      'como hacerme un examen',
      'cómo hacerme un examen',
      'hacer examen',
      'realizar examen',
      'pasos',
      'cita',
      'sin cita',
      'agendar',
      'muestra',
      'analisis',
      'análisis',
      'resultados',
    ],
  },

  {
    id: 'visita-laboratorio',
    title: 'Visita MiKros Lab',
    description:
      'Puedes agendar tu cita o visitarnos cuando gustes.',
    category: 'Proceso',
    href: '/#proceso',
    keywords: [
      'visita',
      'visitar',
      'cita',
      'agendar',
      'agenda',
      'sin cita',
      'con cita',
      'llegar sin cita',
    ],
  },

  {
    id: 'toma-muestra',
    title: 'Toma de muestra',
    description:
      'Realizamos la toma de muestra en el laboratorio o a domicilio.',
    category: 'Proceso',
    href: '/#proceso',
    keywords: [
      'muestra',
      'muestras',
      'toma de muestra',
      'toma de muestras',
      'domicilio',
      'laboratorio',
      'sangre',
      'examen',
    ],
  },

  {
    id: 'analisis-laboratorio',
    title: 'Análisis en laboratorio',
    description:
      'Procesamos tu muestra con equipos de alta tecnología.',
    category: 'Proceso',
    href: '/#proceso',
    keywords: [
      'analisis',
      'análisis',
      'laboratorio',
      'procesar muestra',
      'tecnologia',
      'tecnología',
      'equipos',
    ],
  },

  {
    id: 'resultados',
    title: 'Resultados',
    description:
      'Recibe tus resultados con la orientación que necesitas.',
    category: 'Proceso',
    href: '/#proceso',
    keywords: [
      'resultado',
      'resultados',
      'entrega',
      'entrega de resultados',
      'recibir resultados',
      'resultado examen',
      'resultado analisis',
      'resultado análisis',
    ],
  },

  {
    id: 'preguntas-frecuentes',
    title: 'Preguntas frecuentes',
    description:
      'Encuentra respuestas a las preguntas más comunes sobre nuestros análisis.',
    category: 'Inicio',
    href: '/#preguntas-frecuentes',
    keywords: [
      'preguntas',
      'preguntas frecuentes',
      'faq',
      'dudas',
      'ayuda',
      'informacion',
      'información',
    ],
  },

  {
    id: 'faq-ayuno',
    title: '¿Debo estar en ayunas?',
    description:
      'Algunas pruebas requieren ayuno y otras no. Te indicaremos si necesitas preparación especial.',
    category: 'Preguntas frecuentes',
    href: '/#preguntas-frecuentes',
    keywords: [
      'ayuno',
      'ayunas',
      'comer',
      'comida',
      'puedo comer',
      'preparacion',
      'preparación',
      'antes del examen',
    ],
  },

  {
    id: 'faq-orden-medica',
    title: '¿Necesito una orden médica?',
    description:
      'No todas las pruebas requieren orden médica.',
    category: 'Preguntas frecuentes',
    href: '/#preguntas-frecuentes',
    keywords: [
      'orden',
      'orden medica',
      'orden médica',
      'receta',
      'doctor',
      'medico',
      'médico',
      'referencia',
    ],
  },

  {
    id: 'faq-tiempo-resultados',
    title: '¿Cuánto tardan los resultados?',
    description:
      'El tiempo de entrega depende del tipo de análisis.',
    category: 'Preguntas frecuentes',
    href: '/#preguntas-frecuentes',
    keywords: [
      'cuanto tardan',
      'cuánto tardan',
      'tiempo',
      'resultados',
      'entrega',
      'cuando estan',
      'cuándo están',
      'rapido',
      'rápido',
    ],
  },

  {
    id: 'faq-recibir-resultados',
    title: '¿Cómo recibo mis resultados?',
    description:
      'Los resultados pueden entregarse de forma digital o presencial según la prueba.',
    category: 'Preguntas frecuentes',
    href: '/#preguntas-frecuentes',
    keywords: [
      'recibir resultados',
      'resultados digital',
      'resultados digitales',
      'correo',
      'entrega resultados',
      'presencial',
      'digital',
    ],
  },

  {
    id: 'faq-domicilio',
    title: '¿Ofrecen toma de muestras a domicilio?',
    description:
      'Contamos con servicio de toma de muestras a domicilio.',
    category: 'Preguntas frecuentes',
    href: '/#preguntas-frecuentes',
    keywords: [
      'domicilio',
      'casa',
      'toma de muestra',
      'toma de muestras',
      'servicio domicilio',
      'hogar',
    ],
  },

  {
    id: 'faq-visita',
    title: '¿Debo coordinar mi visita previamente?',
    description:
      'Puedes comunicarte con nosotros para coordinar tu visita si lo deseas.',
    category: 'Preguntas frecuentes',
    href: '/#preguntas-frecuentes',
    keywords: [
      'visita',
      'cita',
      'coordinar',
      'agendar',
      'reservar',
      'sin cita',
      'cita previa',
    ],
  },

  {
    id: 'faq-medicamentos',
    title: '¿Puedo tomar mis medicamentos antes de la prueba?',
    description:
      'Algunos medicamentos pueden influir en determinados resultados.',
    category: 'Preguntas frecuentes',
    href: '/#preguntas-frecuentes',
    keywords: [
      'medicamento',
      'medicamentos',
      'medicina',
      'medicinas',
      'pastillas',
      'antes del examen',
      'tomar medicamento',
    ],
  },
];

const profileSearchItems: SiteSearchItem[] = examProfiles.map((profile) => {
  const includes = profile.includes ?? [];

  const detailsKeywords = profile.details
    ? [
        'VPH',
        'virus papiloma humano',
        'papiloma',
        `${profile.details.genotypes} genotipos`,
        ...profile.details.lowRisk,
        ...profile.details.highRisk,
        ...profile.details.intermediateRisk,
      ]
    : [];

  return {
    id: `profile-${profile.id}`,
    title: profile.profile,
    description:
      includes.length > 0
        ? `Perfil de laboratorio con ${includes.length} ${
            includes.length === 1 ? 'examen' : 'exámenes'
          } incluidos.`
        : profile.note ?? 'Perfil disponible en MiKros Lab.',
    category: 'Perfil de laboratorio',
    href: `/services#perfil-${profile.id}`,
    keywords: [
      'perfil',
      'perfiles',
      'laboratorio',
      'paquete',
      profile.profile,
      profile.price,
      ...includes,
      profile.note ?? '',
      ...detailsKeywords,
    ],
  };
});

export const siteSearchItems: SiteSearchItem[] = [
  ...siteSections,
  ...profileSearchItems,
];