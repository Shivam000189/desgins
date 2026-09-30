import React from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  os: 'windows' | 'mac';
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ os, onOpenDownload }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 pt-32 pb-16 relative overflow-hidden bg-[#FDFBF5]">
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xs tracking-[3px] uppercase text-[#888] mb-5 font-semibold font-sans"
      >
        WISPR FLOW NOTETAKER
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-editorial text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] font-normal leading-[1.08] mb-8 max-w-[850px] text-[#1a1a1a]"
      >
        Meeting notes that <br />
        get the <em className="italic font-normal">details right.</em>
      </motion.h1>

      {/* Hero CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onClick={onOpenDownload}
        className="bg-[#E8D5F5] border border-[#c9a8e8] hover:bg-[#dec2f0] px-7 py-3.5 rounded-[10px] text-base font-semibold text-[#1a1a1a] cursor-pointer inline-flex items-center gap-2 mb-3 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:scale-[1.03] transition-all font-sans"
      >
        <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
          <rect x="1" y="1" width="6" height="6" rx="1" />
          <rect x="9" y="1" width="6" height="6" rx="1" />
          <rect x="1" y="9" width="6" height="6" rx="1" />
          <rect x="9" y="9" width="6" height="6" rx="1" />
        </svg>
        <span>Get started on {os === 'windows' ? 'Windows' : 'Mac'}</span>
      </motion.button>

      {/* Subtext */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-sm text-[#888] font-sans mb-10"
      >
        Available on Mac and Windows
      </motion.div>

      {/* Floating Chat Bubbles Container matching reference */}
      <div className="relative w-full max-w-[900px] h-[340px] mt-6 select-none">
        {/* Bubble 1: Mark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          whileHover={{ scale: 1.03, y: -2 }}
          className="absolute left-[3%] sm:left-[5%] top-[18%] bg-white border border-[#e0ddd6] rounded-xl px-4 py-2.5 text-sm flex items-center gap-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] animate-float-1"
        >
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 bg-[#c9a87a]">
            M
          </div>
          <div className="text-left">
            <div className="text-[11px] font-semibold text-[#888]">Mark</div>
            <div className="text-sm text-[#1a1a1a]">Do we really need it?</div>
          </div>
        </motion.div>

        {/* Bubble 2: Alex */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.03, y: -2 }}
          className="absolute left-[20%] sm:left-[26%] top-[3%] bg-white border border-[#e0ddd6] rounded-xl px-4 py-2.5 text-sm flex items-center gap-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] animate-float-2"
        >
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 bg-[#d4a0c9]">
            A
          </div>
          <div className="text-left">
            <div className="text-[11px] font-semibold text-[#888]">Alex</div>
            <div className="text-sm text-[#1a1a1a]">For now.</div>
          </div>
        </motion.div>

        {/* Bubble 3: Haley */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          whileHover={{ scale: 1.03, y: -2 }}
          className="absolute left-[32%] sm:left-[42%] top-[38%] bg-white border border-[#e0ddd6] rounded-xl px-4 py-2.5 text-sm flex items-center gap-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] animate-float-3"
        >
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 bg-[#e8a060]">
            H
          </div>
          <div className="text-left">
            <div className="text-[11px] font-semibold text-[#888]">Haley</div>
            <div className="text-sm text-[#1a1a1a]">I'd rather use that space for another demo.</div>
          </div>
        </motion.div>

        {/* Bubble 4: DeShawn */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.03, y: -2 }}
          className="absolute left-[6%] sm:left-[10%] top-[62%] bg-white border border-[#e0ddd6] rounded-xl px-4 py-2.5 text-sm flex items-center gap-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] animate-float-1"
        >
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 bg-[#0d5c4a]">
            D
          </div>
          <div className="text-left">
            <div className="text-[11px] font-semibold text-[#888]">DeShawn</div>
            <div className="text-sm text-[#1a1a1a]">Agreed. I'll ship it.</div>
          </div>
        </motion.div>

        {/* Pinned Task Card: Hailey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          whileHover={{ scale: 1.04, y: -2 }}
          className="absolute right-[2%] sm:right-[5%] top-[30%] sm:top-[28%] bg-white border border-[#e0ddd6] rounded-xl px-4 py-3 text-sm flex items-center gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
        >
          <span className="text-[#0d5c4a] font-bold text-base">✦</span>
          <span className="text-sm font-medium text-[#1a1a1a]">Post Ramp reminder in event channel</span>
          <span className="bg-[#0d5c4a] text-white px-2.5 py-1 rounded-full text-xs font-semibold">
            Hailey
          </span>
        </motion.div>
      </div>
    </section>
  );
};
