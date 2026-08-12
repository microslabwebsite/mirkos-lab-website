export default function ServicesHero() {
  return (
    <section className='relative w-full'>
      <div className='relative z-10 grid grid-cols-1 items-center gap-8 px-6 py-10 sm:px-8 md:grid-cols-2 md:gap-6 md:px-10 md:py-12 lg:px-14 lg:py-14'>
        <div className='max-w-md text-left md:max-w-lg'>
          <h1 className='text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl'>
            <span className='text-[#18264d]'>Nuestros </span>
            <span className='text-[#9274c2]'>servicios</span>
          </h1>

          <p className='mt-4 text-sm leading-relaxed text-[#334175] sm:mt-5 sm:text-base lg:text-lg'>
            Contamos con una amplia gama de estudios clínicos para cuidar de ti y tu familia.
          </p>
        </div>
      </div>
    </section>
  );
}
