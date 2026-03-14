'use client';

import { motion } from 'motion/react';
import { Settings, Cpu, Download } from 'lucide-react';

const steps = [
  {
    title: 'Configure generation',
    description: 'Choose dungeon size, density, and parameters using our intuitive control panel.',
    icon: Settings,
  },
  {
    title: 'Generate instantly',
    description: 'Duncheon creates a full dungeon layout in real time using high-performance algorithms.',
    icon: Cpu,
  },
  {
    title: 'Export your map',
    description: 'Download PNG, JSON, or ZIP ready for your game engine of choice.',
    icon: Download,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4">How It Works</h2>
          <p className="text-slate-400 text-lg">From idea to export in three simple steps.</p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full glass flex items-center justify-center mb-8 relative">
                  <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon size={32} className="text-accent" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-navy-dark border border-white/10 flex items-center justify-center text-xs font-bold text-white">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
