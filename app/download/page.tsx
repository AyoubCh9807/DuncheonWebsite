'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Download,
  Shield,
  Cpu,
  Monitor,
  Apple,
  Box,
  CheckCircle2,
  FileJson,
  Image as ImageIcon,
  Archive,
  Zap,
  Globe
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function DownloadPage() {
  const ITCH_IO_LINK = 'https://wizzygame.itch.io/duncheon';

  return (
    <main className="min-h-screen bg-[#050B14]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-[10px] font-bold tracking-widest uppercase mb-6"
          >
            <Zap size={12} />
            <span>Multi-Platform License Included</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-black text-white mb-6 uppercase tracking-tight"
          >
            Get Duncheon <br />
            <span className="text-accent">Stand-Alone</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            The world's most powerful procedural dungeon generator. Download once, run anywhere. No subscription, no DRM, just pure creativity.
          </motion.p>
        </div>
      </section>

      {/* Main Download Card */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-10 md:p-16 rounded-[3rem] border-white/10 shadow-3xl text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-center space-x-6 mb-8 text-slate-500">
                <Monitor size={32} />
                <Apple size={32} />
                <Box size={32} />
              </div>

              <h3 className="text-3xl font-display font-bold text-white mb-4">Unified Installer</h3>
              <p className="text-slate-400 mb-10 max-w-lg mx-auto">
                Your purchase includes the latest binaries for Windows, macOS, and Linux, plus source documentation.
              </p>

              <Link
                href={ITCH_IO_LINK}
                className="inline-flex items-center space-x-3 px-12 py-6 bg-accent text-white rounded-2xl font-black text-xl glow-orange hover:scale-105 transition-all shadow-2xl shadow-accent/20"
              >
                <Download size={24} />
                <span>DOWNLOAD FROM ITCH.IO</span>
              </Link>

              <div className="mt-8 flex items-center justify-center space-x-6 text-xs text-slate-500 font-bold uppercase tracking-widest">
                <span>Version 1.2.0</span>
                <span className="w-1 h-1 rounded-full bg-slate-700" />
                <span>~200MB Total</span>
                <span className="w-1 h-1 rounded-full bg-slate-700" />
                <span>Global License</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* "What's in the Box" Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-8">What's in the box?</h2>
              <div className="grid gap-6">
                {[
                  {
                    title: 'High-Res Blueprints',
                    desc: 'Export 4K PNG maps perfect for printing or digital assets.',
                    icon: ImageIcon
                  },
                  {
                    title: 'Raw Data (JSON)',
                    desc: 'Clean, structured data for Unity, Unreal, or Godot integration.',
                    icon: FileJson
                  },
                  {
                    title: 'Theme Packages',
                    desc: 'Included tilesets for Dungeons, Caves, and Sci-Fi biomes.',
                    icon: Archive
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex space-x-4 p-6 glass rounded-2xl border-white/5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass p-10 rounded-3xl border-emerald-500/20">
                <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center space-x-3">
                  <Shield className="text-emerald-400" />
                  <span>The Duncheon Promise</span>
                </h3>
                <ul className="space-y-4">
                  {[
                    'Never any subscriptions or hidden fees',
                    'Works 100% offline - always',
                    'Direct export to standard formats',
                    'Lifetime updates on v1.x core'
                  ].map((text, i) => (
                    <li key={i} className="flex items-center space-x-3 text-slate-300">
                      <CheckCircle2 className="text-emerald-400" size={18} />
                      <span className="text-sm font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Accordion-style Grid */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4 uppercase tracking-wider">Technical Specs</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-accent">
                <Monitor size={18} />
                <h4 className="font-bold text-sm uppercase tracking-widest">OS Support</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Windows 10/11 (64-bit), macOS 11+ (Intel/Silicon), Linux (Glibc 2.31+). All binaries are pre-compiled and ready to run.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-accent">
                <Cpu size={18} />
                <h4 className="font-bold text-sm uppercase tracking-widest">Hardware</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Optimized C++ core. Runs smoothly on almost any modern device with no specific RAM or GPU requirements.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-accent">
                <Globe size={18} />
                <h4 className="font-bold text-sm uppercase tracking-widest">Localization</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                UI available in English. Deterministic generation ensures seeds work identically across all platform regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
