'use client';

import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import Image from 'next/image';

const PreviewShowcase = () => {
  return (
    <section className="py-24 bg-navy-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-[2.5rem] overflow-hidden border-white/10 shadow-2xl">
          <div className="relative h-[600px]">
            {/* Grid overlay */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            {/* Full Preview Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src="/preview.png"
                alt="Dungeon preview"
                fill
                className="object-cover object-center"
                priority
              />
            </motion.div>

            {/* Optional download button overlay */}
            <div className="absolute top-4 right-4">
              <button className="p-3 glass rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <Download size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewShowcase;