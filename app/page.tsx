import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import HowItWorks from '@/components/HowItWorks';
import PreviewShowcase from '@/components/PreviewShowcase';
import Pricing from '@/components/Pricing';
import DocsPreview from '@/components/DocsPreview';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureCards />
      <HowItWorks />
      <PreviewShowcase />
      <Pricing />
      <DocsPreview />
      <FAQ />
      <Footer />
    </main>
  );
}
