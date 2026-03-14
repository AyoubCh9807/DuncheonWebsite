'use client';

import { motion } from 'motion/react';
import { Terminal, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const DocsPreview = () => {
  const jsonCode = `{
  "dungeon": {
    "width": 60,
    "height": 40,
    "grid": [[0, 0, ...], ...],
    "rooms": [
      { "x": 13, "y": 13, "width": 3, "height": 6 },
      { "x": 48, "y": 3, "width": 6, "height": 4 }
    ]
  },
  "settings": {
    "algorithm": "ruins",
    "roomCount": "15",
    "seed": "978299500"
  }
}`;

  return (
    <section className="py-24 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display font-black text-white mb-6">Built for Developers</h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Duncheon isn&apos;t just a visual tool. It&apos;s designed to integrate seamlessly into your development workflow. Export raw data that your engine can understand instantly.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary-foreground shrink-0">
                  <Terminal size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Clean JSON Structure</h4>
                  <p className="text-sm text-slate-400">Every room, corridor, and point of interest is exported with precise coordinates and metadata.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary-foreground shrink-0">
                  <ExternalLink size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Engine Agnostic</h4>
                  <p className="text-sm text-slate-400">Whether you use Unity, Unreal, Godot, or a custom engine, our formats are universal.</p>
                </div>
              </div>
            </div>

            <Link
              href="/docs"
              className="inline-flex items-center space-x-2 mt-10 text-accent font-bold hover:underline"
            >
              <span>View Full Documentation</span>
              <ExternalLink size={16} />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden border-white/10 shadow-2xl"
          >
            <div className="bg-black/40 px-6 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">dungeon_data.json</span>
            </div>
            <div className="p-8 bg-[#050B14]">
              <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
                <code className="text-blue-300">
                  {jsonCode.split('\n').map((line, i) => (
                    <div key={i} className="flex">
                      <span className="text-slate-700 mr-6 select-none w-4">{i + 1}</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DocsPreview;
