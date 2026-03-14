'use client';

import Link from 'next/link';
import { Github, Twitter, Mail } from 'lucide-react';

import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-navy-dark border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Logo className="w-12 h-12" />
              <span className="text-2xl font-display font-black tracking-tighter text-white">DUNCHEON</span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Empowering game developers with procedural tools that spark creativity and save time. Design infinite dungeons in seconds.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Product</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/features" className="hover:text-accent transition-colors">Features</Link></li>
              <li><Link href="/docs" className="hover:text-accent transition-colors">Documentation</Link></li>
              <li><Link href="/api" className="hover:text-accent transition-colors">API Support</Link></li>
              <li><Link href="https://wizzygame.itch.io/duncheon" className="hover:text-accent transition-colors">Download</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Connect</h4>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-600 cursor-not-allowed">
                <Github size={20} />
              </div>
              <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-600 cursor-not-allowed">
                <Twitter size={20} />
              </div>
              <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-600 cursor-not-allowed">
                <Mail size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-medium">
          <p>© 2026 Duncheon. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/tos" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link href="/license" className="hover:text-slate-400 transition-colors">License</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
