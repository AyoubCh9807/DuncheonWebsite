import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TOSPage() {
  return (
    <main className="min-h-screen bg-navy-dark">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-display font-black text-white mb-12">Terms of Service</h1>
        
        <div className="glass p-8 md:p-12 rounded-3xl space-y-8 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By purchasing, downloading, or using Duncheon (the &quot;Software&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Software.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">2. Purchase and Fees</h2>
            <p>
              Duncheon is provided for a one-time purchase fee of $4.99 USD. This fee grants you a perpetual license to use the current version of the Software as defined in the License Agreement. All sales are final and non-refundable unless required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">3. Intellectual Property</h2>
            <p>
              The Software, including but not limited to its code, algorithms, user interface, brand name (&quot;Duncheon&quot;), and logo, are the exclusive property of the developer. These are protected by copyright, trademark, and other intellectual property laws. You may not use the brand name or logo for any purpose without express written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">4. Restrictions</h2>
            <p>
              You are strictly prohibited from:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Redistributing the Software, whether for free or for commercial gain.</li>
              <li>Reverse engineering, decompiling, or attempting to extract the source code of the Software.</li>
              <li>Creating derivative works based on the Software&apos;s proprietary code or assets.</li>
              <li>Using the Software in any way that violates applicable laws.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p>
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND. IN NO EVENT SHALL THE DEVELOPER BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE. YOU AGREE THAT YOU CANNOT SUE THE DEVELOPER FOR ANY ISSUES ARISING FROM THE USE OF THE SOFTWARE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">6. Trademarks</h2>
            <p>
              &quot;Duncheon&quot; and the Duncheon logo are trademarks of the developer. Unauthorized use of these marks is strictly prohibited.
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
