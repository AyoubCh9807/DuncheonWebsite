'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Shield,
  Zap,
  Cpu,
  Globe,
  Terminal,
  Layers,
  CheckCircle2,
  Copy,
  Timer
} from 'lucide-react';
import { motion } from 'motion/react';

const SNIPPETS = {
  javascript: {
    language: 'javascript',
    code: `// Technical Preview: Future API Integration
const response = await fetch('https://api-preview.duncheon.io/v1/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    type: 'dungeon',
    width: 64,
    height: 64,
    seed: 12345
  })
});

const dungeon = await response.json();
console.log(dungeon.rooms);`
  },
  python: {
    language: 'python',
    code: `# Technical Preview: Future API Integration
import requests

url = "https://api-preview.duncheon.io/v1/generate"
headers = {"Authorization": "Bearer YOUR_API_KEY"}
payload = {
    "type": "dungeon",
    "width": 64,
    "height": 64
}

response = requests.post(url, json=payload, headers=headers)
dungeon = response.json()
print(f"Generated {len(dungeon['rooms'])} rooms")`
  },
  curl: {
    language: 'bash',
    code: `# Technical Preview: Future API Integration
curl -X POST https://api-preview.duncheon.io/v1/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "dungeon",
    "width": 64,
    "height": 64
  }'`
  }
};

export default function ApiPage() {
  const [activeTab, setActiveTab] = useState('javascript');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(SNIPPETS[activeTab as keyof typeof SNIPPETS].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#050B14]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-[10px] font-bold tracking-widest uppercase mb-6"
            >
              <Timer size={12} />
              <span>Alpha Development - Q3 2026 Target</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tight"
            >
              Cloud Generation <br />
              <span className="text-accent opacity-50">Coming Soon</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              We are building a powerful procedural engine for your game backend. In the future, you'll be able to generate deterministic, connected layouts with a single REST call.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats/Metrics Row */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Infrastructure Performance Goals</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Latency Target', value: '< 50ms', icon: Zap },
              { label: 'Uptime Goal', value: '99.9%', icon: Shield },
              { label: 'Registry', value: 'Edge-Ready', icon: Globe },
              { label: 'Core Version', value: 'v2.1 Proto', icon: Cpu },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass p-6 rounded-2xl border-white/5 flex flex-col items-center text-center group transition-colors hover:border-accent/30"
              >
                <stat.icon className="text-accent mb-3 group-hover:scale-110 transition-transform" size={24} />
                <div className="text-2xl font-display font-black text-white">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Snippets Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-4">
                Architecture Preview
              </div>
              <h2 className="text-4xl font-display font-bold text-white mb-6">Designed for Devs</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Our vision is a simple, stateless API that fits into any workflow. Whether you're using Unity, Unreal, or Godot, the future planned JSON responses are structured for effortless integration.
              </p>

              <ul className="space-y-4">
                {[
                  'Stateless generation with seed support',
                  'Planned support for multiple themes',
                  'Future webhook integration',
                  'Enterprise-grade security architecture'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-300">
                    <CheckCircle2 className="text-accent/50" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl overflow-hidden border-white/10 shadow-2xl"
            >
              <div className="bg-white/5 p-4 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    {Object.keys(SNIPPETS).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === tab ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'text-slate-400 hover:text-white'
                          }`}
                      >
                        {tab.toUpperCase()}
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-accent/60 uppercase tracking-widest bg-accent/5 px-2 py-0.5 rounded border border-accent/10 anim-pulse-slow">
                    Mockup
                  </span>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="p-2 text-slate-400 hover:text-white transition-colors"
                >
                  {copied ? <CheckCircle2 size={16} className="text-green-500" /> : <Copy size={16} />}
                </button>
              </div>
              <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed overflow-x-auto min-h-[300px]">
                <pre className="text-slate-300">
                  <code>{SNIPPETS[activeTab as keyof typeof SNIPPETS].code}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">Roadmap Features</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We're focused on high-performance cloud infrastructure to power the next generation of games.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'High Throughput',
                description: 'C++ core engine ported to the cloud for maximum planned performance.',
                icon: Zap
              },
              {
                title: 'Custom Biomes',
                description: 'Future support for uploading custom generation rules via JSON.',
                icon: Layers
              },
              {
                title: 'CLI Integration',
                description: 'Planned command-line tools to manage your dungeons remotely.',
                icon: Terminal
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border-white/5 hover:border-accent/20 transition-all group pointer-events-none"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent/50 mb-6 transition-transform">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
