import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-navy-dark">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-display font-black text-white mb-12">Privacy Policy</h1>
        
        <div className="glass p-8 md:p-12 rounded-3xl space-y-8 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Data Collection</h2>
            <p>
              Duncheon is a standalone desktop application. We do not collect, store, or transmit any personal data from your use of the Software. All generated maps and settings are stored locally on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Payment Processing</h2>
            <p>
              Payments are handled by third-party processors (e.g., Stripe, PayPal). We do not store your credit card information or billing address on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Website Analytics</h2>
            <p>
              Our website may use minimal analytics to understand traffic patterns. This data is anonymous and does not identify individual users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Third-Party Links</h2>
            <p>
              Our website may contain links to other sites. We are not responsible for the privacy practices of those sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, you can contact us via the links provided in the footer.
            </p>
          </section>

          <p className="text-sm text-slate-500 pt-8 border-t border-white/5">
            Last updated: March 12, 2026
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
