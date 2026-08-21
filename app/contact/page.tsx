import ContactDetails from '@/components/contact/ContactDetails';
import ContactForm from '@/components/contact/ContactForm';
import ContactHero from '@/components/contact/ContactHero';
import FollowUs from '@/components/contact/FollowUs';
import Location from '@/components/contact/Location';

export default function Contact() {
  return (
    <main className='min-h-screen'>
      <ContactHero />

      <section className='relative w-full pb-16 pt-8 sm:pt-10 lg:pb-20'>
        <div className='mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-10'>
          <ContactDetails />

          <div className='mt-10 flex flex-col gap-10 lg:mt-12 lg:gap-12'>
            <Location />

            <div className='grid gap-6 lg:grid-cols-[minmax(0,1.75fr)_minmax(320px,0.75fr)] lg:items-stretch lg:gap-8 xl:grid-cols-[minmax(0,1.7fr)_minmax(350px,0.7fr)]'>
              <div className='h-full rounded-[24px] border border-slate-100 bg-white p-6 shadow-sm sm:p-8'>
                <ContactForm />
              </div>

              <FollowUs />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
