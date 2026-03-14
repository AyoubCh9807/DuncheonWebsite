'use client';

import { motion } from 'motion/react';
import { Download, Book } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050B14]/50 to-[#050B14] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>v1.2.0 Now Available</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-display font-black text-white leading-tight mb-6 tracking-tighter">
              DUN<span className="text-accent">CHEON</span>
            </h1>

            <p className="text-2xl md:text-3xl font-display font-medium text-slate-300 mb-8 leading-snug">
              Design infinite dungeons <br className="hidden md:block" />
              <span className="text-white">in seconds.</span>
            </p>

            <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
              Procedural dungeon and cave generation for game developers. Export clean JSON and ready-to-use maps instantly for your next masterpiece.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/download"
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-accent text-white rounded-xl font-bold text-lg glow-orange hover:scale-105 transition-all"
              >
                <Download size={20} />
                <span>Download Now</span>
              </Link>

              <Link
                href="/docs"
                className="flex items-center justify-center space-x-2 px-8 py-4 glass text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                <Book size={20} />
                <span>View Documentation</span>
              </Link>
            </div>


          </motion.div>

          {/* Right Content - Blueprint Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-[500px] mx-auto">

              {/* Outer Glow */}
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />

              {/* Blueprint Container */}
              <div className="absolute inset-0 glass rounded-3xl border-white/20 overflow-hidden shadow-2xl p-4">
                <div className="w-full h-full rounded-2xl bg-[#0A192F] relative overflow-hidden border border-white/5">

                  <Image
                    src="/blueprint.png"
                    alt="Dungeon blueprint preview"
                    fill
                    priority
                    className="object-cover object-center"
                  />

                </div>
              </div>

              {/* Floating Export Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent">
                    <Download size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Export</div>
                    <div className="text-xs font-bold text-white">map_v1.png</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating JSON Card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary-foreground">
                    <Book size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Data</div>
                    <div className="text-xs font-bold text-white">dungeon.json</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;