import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import AboutSnapshot from '../components/AboutSnapshot';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <AboutSnapshot />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <CTA />
    </main>
  );
}
