import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className='relative w-full'>
      <div className='relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12'>
        <div className='relative flex w-full flex-col items-center md:aspect-[4886/2076]'>
          <h1 className='relative z-10 pt-4 text-center text-2xl font-bold text-[#65b6b7] sm:text-3xl md:absolute md:top-8 md:pt-0 md:text-4xl lg:text-5xl xl:top-16'>
            Contacto
          </h1>
          <p className='absolute top-5 left-1/2 w-48 -translate-x-1/2 text-center text-xs leading-snug text-slate-600 sm:w-52 sm:text-sm sm:leading-normal md:top-30 md:w-7/12 md:text-lg md:leading-relaxed lg:top-40 lg:w-6/12 lg:text-xl xl:top-60 xl:text-3xl'>
            Estamos aquí para ayudarte. Contáctanos por cualquiera de nuestros medios o envíanos tus
            consultas completando el formulario.
          </p>
        </div>
      </div>
    </section>
  );
}
