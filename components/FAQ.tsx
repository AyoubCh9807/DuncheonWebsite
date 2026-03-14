'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import React from 'react';

const faqs = [
  {
    question: 'What does Duncheon generate?',
    answer: 'Duncheon generates procedural dungeon layouts, cave systems, and room-based environments. It calculates room placements, corridor paths, and can even suggest points of interest like treasure or enemy spawns.',
  },
  {
    question: 'Is the generator deterministic?',
    answer: 'Yes! By using the seed system, you can recreate the exact same dungeon layout every time. This is perfect for sharing levels with other developers or ensuring consistent procedural generation in your game.',
  },
  {
    question: 'What formats can I export?',
    answer: 'You can export high-resolution PNG maps for visual reference or direct use as sprites, raw JSON data for engine integration, or a full ZIP package containing both.',
  },
  {
    question: 'Will more features be added?',
    answer: 'Absolutely. We have a roadmap that includes 3D mesh export, more complex generation algorithms (like BSP and Drunkard Walk), and a module system for custom room templates.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-black text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-400">Everything you need to know about Duncheon.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass rounded-2xl overflow-hidden border-white/5">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold text-white">{faq.question}</span>
                {openIndex === index ? <Minus className="text-accent" /> : <Plus className="text-slate-500" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
