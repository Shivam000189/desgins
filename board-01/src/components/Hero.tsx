import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  os?: 'windows' | 'mac';
  onOpenDownload?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between items-center pt-36 sm:pt-40 md:pt-44 pb-14 overflow-hidden bg-[#F8F7F3]">
      {/* 
        Background Architectural Fluted Panels:
        - Wide panels with faint soft relief stroke
        - Completely disappears across the entire middle
        - Only softly emerges at the left and right perimeters
      */}
      <div 
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Soft wide fluted relief columns */}
        <div 
          className="w-full h-full fluted-relief-grid opacity-85"
          style={{
            maskImage: `linear-gradient(
              to right, 
              rgba(0,0,0,0.65) 0%, 
              rgba(0,0,0,0.35) 15%, 
              rgba(0,0,0,0.08) 20%, 
              transparent 28%, 
              transparent 72%, 
              rgba(0,0,0,0.08) 80%, 
              rgba(0,0,0,0.35) 90%, 
              rgba(0,0,0,0.65) 100%
            )`,
            WebkitMaskImage: `linear-gradient(
              to right, 
              rgba(0,0,0,0.65) 0%, 
              rgba(0,0,0,0.35) 15%, 
              rgba(0,0,0,0.08) 20%, 
              transparent 28%, 
              transparent 72%, 
              rgba(0,0,0,0.08) 80%, 
              rgba(0,0,0,0.35) 90%, 
              rgba(0,0,0,0.65) 100%
            )`,
          }}
        />

        {/* Soft radial glow in center to ensure complete smooth lighting behind content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-radial from-[#FBF9F5] via-[#F8F7F3]/95 to-transparent blur-3xl" />
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 w-full my-auto flex flex-col items-center text-center">
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[44px] sm:text-[60px] md:text-[72px] lg:text-[80px] font-bold text-neutral-900 tracking-[-0.035em] leading-[1.06] mb-6 max-w-[920px] font-sans"
        >
          Strategy and growth for <br className="hidden sm:inline" />
          modern teams
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-[20px] text-neutral-500 font-normal leading-relaxed max-w-[640px] mb-10 tracking-tight"
        >
          Shivam partners with creators and brands to engineer high-retention video pipelines, elevate visual packaging, and scale digital reach.
        </motion.p>

        {/* Action Buttons in the Middle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
        >
          {/* Primary Black Pill Button */}
          <a
            href="#contact"
            className="bg-black hover:bg-neutral-800 text-white pl-7 pr-2.5 py-2.5 rounded-full text-base font-medium inline-flex items-center gap-3.5 shadow-[0_4px_18px_rgba(0,0,0,0.16)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.24)] transition-all hover:scale-[1.02] active:scale-[0.98] group cursor-pointer no-underline"
          >
            <span>Start a project</span>
            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-0.5 shadow-xs">
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </span>
          </a>

          {/* Secondary Outlined Pill Button */}
          <a
            href="#workflow"
            className="border border-neutral-300 hover:border-neutral-400 bg-white/70 hover:bg-white text-neutral-800 px-7 py-3.5 rounded-full text-base font-medium transition-all shadow-xs hover:shadow-sm cursor-pointer no-underline"
          >
            Explore pipeline
          </a>
        </motion.div>
      </div>
    </section>
  );
};
