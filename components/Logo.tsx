'use client';

import React from 'react';

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <div className={`${className} relative group`}>
      {/* Outer Metallic Border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C58E58] via-[#8B5E34] to-[#5D3A1A] p-[2px] shadow-lg">
        {/* Inner Dark Background */}
        <div className="w-full h-full rounded-[10px] bg-[#1A1F26] flex items-center justify-center overflow-hidden relative">
          {/* Subtle Circuit Lines */}
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#C58E58]" fill="none">
              <path d="M0 20 H20 V0 M80 0 V20 H100 M100 80 H80 V100 M20 100 V80 H0" strokeWidth="2" />
              <path d="M30 50 H70 M50 30 V70" strokeWidth="1" />
            </svg>
          </div>
          
          {/* Glowing Dungeon Map */}
          <svg viewBox="0 0 100 100" className="w-3/5 h-3/5 relative z-10 drop-shadow-[0_0_5px_#00E5FF]">
            <rect x="20" y="20" width="25" height="20" fill="#00E5FF" rx="2" />
            <rect x="55" y="15" width="20" height="25" fill="#00E5FF" rx="2" />
            <rect x="35" y="55" width="30" height="20" fill="#00E5FF" rx="2" />
            <path d="M45 30 H55 M50 40 V55" stroke="#00E5FF" strokeWidth="4" strokeLinecap="round" />
          </svg>
          
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-[#00E5FF]/5 blur-sm pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
