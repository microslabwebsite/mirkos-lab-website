import AboutUsHero from '@/components/about-us/AboutUsHero';
import BenefitsSection from '@/components/about-us/BenefitsSection';
import ValuesSection from '@/components/about-us/ValuesSection';
import ReviewsSection from '@/components/about-us/ReviewsSection';

export default function AboutUs() {
  return (
    <main className='min-h-screen bg-white'>
      <AboutUsHero />
      <ValuesSection />
      <BenefitsSection />
      <ReviewsSection/>
    </main>
  );
}
