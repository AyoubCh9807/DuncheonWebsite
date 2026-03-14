import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LicensePage() {
  return (
    <main className="min-h-screen bg-navy-dark">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-display font-black text-white mb-12">Software License</h1>
        
        <div className="glass p-8 md:p-12 rounded-3xl space-y-8 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Single User License</h2>
            <p>
              Upon payment of the purchase fee, you are granted a non-exclusive, non-transferable license to use Duncheon on your personal or professional devices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Generated Content</h2>
            <p>
              Any dungeon layouts, maps, or data generated using Duncheon are yours to use in your own projects, including commercial games, without any royalty requirements. You own the output; we own the generator.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Prohibited Uses</h2>
            <p>
              This license does NOT include the right to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Sell the Software as a standalone product or as part of a bundle.</li>
              <li>Distribute the Software to third parties.</li>
              <li>Use the Software&apos;s source code in other applications.</li>
              <li>Modify the Software binaries.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Ownership</h2>
            <p>
              The developer retains all ownership and intellectual property rights to the Software. This license is a right to use, not a transfer of title.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Termination</h2>
            <p>
              This license is effective until terminated. Your rights under this license will terminate automatically without notice if you fail to comply with any of its terms.
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
