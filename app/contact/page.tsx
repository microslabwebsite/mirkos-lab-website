import ContactDetails from '@/components/contact/ContactDetails';
import ContactForm from '@/components/contact/ContactForm';
import ContactHero from '@/components/contact/ContactHero';
import Location from '@/components/contact/Location';

export default function Contact() {
  return (
    <main className='min-h-screen'>
      <ContactHero />
      <section className='relative w-full pb-16 pt-8 sm:pt-10 lg:pb-20'>
        <div className='mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12'>
          <ContactDetails />
          <div className='mt-10 flex flex-col gap-10 lg:mt-12 lg:gap-12'>
            <Location />
            <div className='rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8'>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
