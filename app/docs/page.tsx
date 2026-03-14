import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Download, FileJson, Image as ImageIcon, Archive } from 'lucide-react';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block space-y-8">
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Getting Started</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#introduction" className="text-accent">Introduction</a></li>
                <li><a href="#installation" className="hover:text-white transition-colors">Installation</a></li>
                <li><a href="#first-dungeon" className="hover:text-white transition-colors">Your First Dungeon</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Export Formats</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#json" className="hover:text-white transition-colors">JSON Data</a></li>
                <li><a href="#png" className="hover:text-white transition-colors">PNG Maps</a></li>
                <li><a href="#zip" className="hover:text-white transition-colors">ZIP Packages</a></li>
              </ul>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-3">
            <h1 className="text-5xl font-display font-black text-white mb-8">Documentation</h1>

            <section id="introduction" className="mb-16">
              <h2 className="text-2xl font-display font-bold text-white mb-4">Introduction</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Duncheon is a procedural generation tool designed specifically for game developers who need high-quality, deterministic dungeon layouts without the overhead of manual design. Whether you are building a roguelike, an RPG, or a tactical strategy game, Duncheon provides the foundation for your levels.
              </p>
            </section>

            <section id="installation" className="mb-16">
              <h2 className="text-3xl font-bold">Installation</h2>
              <p className="text-slate-300">
                Getting started with <strong>Duncheon</strong> is easy. Download the latest version, extract it to your preferred directory, and run the executable to start designing infinite dungeons instantly.
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Download the application from <Link href="https://wizzygame.itch.io/duncheon" className="text-accent underline">Itch.io</Link>.</li>
                <li>Extract the files to your preferred folder.</li>
                <li>Run the executable and start generating dungeons immediately.</li>
              </ul>
              <div className="mt-4">
                <Link
                  href="https://wizzygame.itch.io/duncheon"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-white rounded-xl font-bold hover:scale-105 transition-all"
                >
                  <Download size={20} />
                  <span>Download from Itch.io</span>
                </Link>
              </div>
            </section>

            <section id="json" className="mb-16">
              <div className="flex items-center space-x-3 mb-4">
                <FileJson className="text-accent" />
                <h2 className="text-2xl font-display font-bold text-white">JSON Data Export</h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                The JSON export provides a raw representation of the dungeon. This is the most powerful way to integrate Duncheon into your game engine.
              </p>
              <div className="glass rounded-2xl p-6 bg-black/20 font-mono text-sm">
                <pre className="text-blue-300">
                  <code>{`{
  "version": "1.2.0",
  "seed": 83921,
  "config": {
    "width": 64,
    "height": 64,
    "density": 0.45
  },
  "rooms": [...],
  "corridors": [...]
}`}</code>
                </pre>
              </div>
            </section>

            <section id="png" className="mb-16">
              <div className="flex items-center space-x-3 mb-4">
                <ImageIcon className="text-accent" />
                <h2 className="text-2xl font-display font-bold text-white">PNG Map Export</h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Export high-resolution blueprint-style maps. These are perfect for level design references or can be used directly as background sprites in 2D games.
              </p>
            </section>

            <section id="zip" className="mb-16">
              <div className="flex items-center space-x-3 mb-4">
                <Archive className="text-accent" />
                <h2 className="text-2xl font-display font-bold text-white">ZIP Package</h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                The ZIP package contains both the JSON data and the PNG map, along with a metadata file explaining the generation parameters used.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
