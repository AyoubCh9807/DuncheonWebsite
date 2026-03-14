'use client';

import { motion } from 'motion/react';
import { Zap, Eye, Hash, FileOutput, RefreshCw, Palette } from 'lucide-react';

const features = [
  {
    title: 'Procedural Generation',
    description: 'Generate complex dungeon layouts instantly using advanced algorithms tailored for game design.',
    icon: Zap,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    title: 'Real-Time Preview',
    description: 'See your dungeon evolve live as you tweak parameters. No more waiting for slow bakes.',
    icon: Eye,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
  },
  {
    title: 'Seed System',
    description: 'Use seeds to recreate or share dungeon layouts. Perfect for procedural levels or team collaboration.',
    icon: Hash,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
  {
    title: 'Export Ready',
    description: 'Export PNG maps, JSON data, or a full ZIP package ready to be dropped into Unity, Unreal, or Godot.',
    icon: FileOutput,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
  {
    title: 'Customizable Themes',
    description: 'Switch between futuristic cyan, glowing amber, or deep emerald themes to match your preferred workspace aesthetic.',
    icon: Palette,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
  {
    title: 'Future Updates',
    description: 'New generation features, modules, and 3D export support coming soon to all license holders.',
    icon: RefreshCw,
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
  },
];

const FeatureCards = () => {
  return (
    <section id="features" className="py-24 bg-navy-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-black text-white mb-4"
          >
            Powerful Procedural Generation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Everything you need to build immersive environments without the manual grind.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl hover:border-white/20 transition-all group"
            >
              <div className={`w-14 h-14 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
