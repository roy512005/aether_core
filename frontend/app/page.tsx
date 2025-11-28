import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import WorkingProcess from '../components/WorkingProcess';
import WhyChooseUs from '../components/WhyChooseUs';
import TechStack from '../components/TechStack';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import FAQ from '@/components/FAQ';
import ParallaxSection from '@/components/animations/ParallaxSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <ParallaxSection offset={30}>
        <ServicesPreview />
      </ParallaxSection>
      <WorkingProcess />
      <ParallaxSection offset={-30}>
        <WhyChooseUs />
      </ParallaxSection>
      <FeaturedProjects />
      <TechStack />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
