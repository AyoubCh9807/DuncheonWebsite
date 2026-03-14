'use client';

import { motion } from 'motion/react';
import { Check, Download } from 'lucide-react';
import Link from 'next/link';

const Pricing = () => {
  const features = [
    'Full dungeon generator',
    'PNG export (high resolution)',
    'JSON export (raw data)',
    'ZIP package export',
    'Future feature updates',
    'Commercial use license',
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4">Simple Pricing</h2>
          <p className="text-slate-400 text-lg">No subscriptions. No hidden fees. Just one tool for your craft.</p>
        </div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] border-accent/30 relative overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 blur-[80px] rounded-full" />

            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Duncheon License</h3>
              <div className="flex items-baseline space-x-2">
                <span className="text-5xl font-display font-black text-white">Free</span>
                <span className="text-slate-400">forever</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-center space-x-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/download"
              className="w-full flex items-center justify-center space-x-2 py-5 bg-accent text-white rounded-2xl font-bold text-lg glow-orange hover:scale-[1.02] transition-all"
            >
              <Download size={20} />
              <span>Download Duncheon</span>
            </Link>

            <p className="mt-6 text-center text-xs text-slate-500 font-medium">
              Supports Windows, macOS, and Linux.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
