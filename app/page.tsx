import FAQSection from '@/components/home/FAQSection';
import Hero from '@/components/home/Hero';
import ProcessSection from '@/components/home/ProcessSection';
import ServicesPreview from '@/components/home/ServicesPreview';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Hero />
      <ServicesPreview/>
      <ProcessSection />
      <FAQSection/>
    </main>
  );
}
