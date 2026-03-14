'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Download, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Docs', href: '/docs' },
    { name: 'API', href: '/api' },
    { name: 'Download', href: 'https://wizzygame.itch.io/duncheon' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/logo_proto.png"
                alt="Duncheon Logo"
                width={60}
                height={60}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-2xl font-display font-black tracking-tighter text-white">
                DUNCHEON
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/download"
              className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-bold glow-orange hover:bg-accent/90 transition-all hover:scale-105"
            >
              Get Duncheon
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-b border-white/10 px-4 pt-2 pb-6 space-y-1"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-4 text-base font-medium text-slate-400 hover:text-accent border-b border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/download"
              className="block w-full text-center px-4 py-3 bg-accent text-white rounded-lg font-bold glow-orange"
              onClick={() => setIsOpen(false)}
            >
              Download Now
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;