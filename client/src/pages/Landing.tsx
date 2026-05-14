import CTA from '../components/landing/sections/CTA';
import Features from '../components/landing/sections/Features';
import Footer from '../components/landing/sections/Footer';
import Hero from '../components/landing/sections/Hero';
import HowItWorks from '../components/landing/sections/HowItWorks';
import Navbar from '../components/landing/sections/Navbar';
import Pricing from '../components/landing/sections/Pricing';
import Showcase from '../components/landing/sections/Showcase';

export default function Landing() {
  return (
    <main className="bg-[#141414] min-h-screen">
      <Navbar />

      <Hero />

      <Features />

      <HowItWorks />

      <Showcase />

      <Pricing />

      <CTA />

      <Footer />
    </main>
  );
}
