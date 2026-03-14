import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCards from '@/components/FeatureCards';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32">
        <FeatureCards />
      </div>
      <Footer />
    </main>
  );
}
