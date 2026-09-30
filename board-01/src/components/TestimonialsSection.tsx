import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/mockData';
import {
  DaveGilboaAvatar,
  ChelcieTaylorAvatar,
  DeedyDasAvatar,
  StevenBartlettAvatar,
  ChiHuaAvatar,
} from './AvatarSvgs';

export const TestimonialsSection: React.FC = () => {
  const renderAvatar = (type: string) => {
    switch (type) {
      case 'dave':
        return <DaveGilboaAvatar />;
      case 'chelcie':
        return <ChelcieTaylorAvatar />;
      case 'deedy':
        return <DeedyDasAvatar />;
      case 'steven':
        return <StevenBartlettAvatar />;
      case 'chihua':
        return <ChiHuaAvatar />;
      default:
        return null;
    }
  };

  return (
    <section className="py-24 md:py-36 bg-[#0c0b0a] text-white overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-900/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.25em] uppercase text-stone-400 block mb-3"
          >
            EARLY ACCESS, REAL RESULTS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#f5f2eb] font-editorial leading-tight"
          >
            From the first people to use it.
          </motion.h2>
        </div>

        {/* Dynamic Staggered Testimonial Cards Layout matching video */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* 1. Dave Gilboa (Warm Cream Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-2 bg-[#fbf8f2] text-stone-900 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row gap-6 justify-between items-center shadow-lg"
          >
            <div className="flex-1 space-y-6">
              <blockquote className="text-lg sm:text-xl font-editorial font-light leading-relaxed text-stone-900">
                “Wispr Flow’s dictation has always felt like magic. With Notetaker, that magic has gone multiplayer with no extra setup, perfectly formatted notes, and summaries that are actually useful.”
              </blockquote>
              <div>
                <h4 className="text-sm font-bold text-stone-900 font-sans">Dave Gilboa</h4>
                <p className="text-xs text-stone-500">CEO of Warby Parker</p>
              </div>
            </div>
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-stone-200">
              <DaveGilboaAvatar />
            </div>
          </motion.div>

          {/* 2. Chelcie Taylor (Terracotta Red Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-[#c85332] text-white rounded-3xl p-8 flex flex-col justify-between shadow-lg"
          >
            <blockquote className="text-base sm:text-lg font-editorial font-light leading-relaxed text-white/95 mb-6">
              “I’ve connected Wispr Flow Notetaker to the other agents I run, and they do noticeably better work with its transcripts. The accuracy makes a difference beyond the meeting itself.”
            </blockquote>

            <div className="flex items-center gap-4 pt-4 border-t border-white/20">
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-white/30">
                <ChelcieTaylorAvatar />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-sans">Chelcie Taylor</h4>
                <p className="text-xs text-white/80">Principal at Notable Capital</p>
              </div>
            </div>
          </motion.div>

          {/* 3. Deedy Das (Clean White Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="bg-white text-stone-900 rounded-3xl p-8 flex flex-col justify-between shadow-lg"
          >
            <blockquote className="text-base sm:text-lg font-editorial font-light leading-relaxed text-stone-800 mb-6">
              “There are many notetakers in the market, but Wispr Notetaker is the most seamless experience I’ve seen.”
            </blockquote>

            <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-stone-200">
                <DeedyDasAvatar />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900 font-sans">Deedy Das</h4>
                <p className="text-xs text-stone-500">Partner at Menlo Ventures</p>
              </div>
            </div>
          </motion.div>

          {/* 4. Steven Bartlett (Lavender Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="bg-[#ded6eb] text-stone-900 rounded-3xl p-8 flex flex-col justify-between shadow-lg"
          >
            <blockquote className="text-base sm:text-lg font-editorial font-light leading-relaxed text-stone-900 mb-6">
              “Every important thing I do starts with a conversation. I trust Wispr Notetaker to capture it accurately, so I can focus on what comes next.”
            </blockquote>

            <div className="flex items-center gap-4 pt-4 border-t border-stone-300/40">
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-stone-300">
                <StevenBartlettAvatar />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900 font-sans">Steven Bartlett</h4>
                <p className="text-xs text-stone-600">Host of The Diary of a CEO</p>
              </div>
            </div>
          </motion.div>

          {/* 5. Chi-Hua Chien (Emerald Green Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="bg-[#0a8a65] text-white rounded-3xl p-8 flex flex-col justify-between shadow-lg"
          >
            <blockquote className="text-base sm:text-lg font-editorial font-light leading-relaxed text-white/95 mb-6">
              “Notetaker has become my constant companion for all meetings. It helps me focus much more on the meeting content with the confidence that high-quality notes and next steps will be magically produced.”
            </blockquote>

            <div className="flex items-center gap-4 pt-4 border-t border-white/20">
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-white/30">
                <ChiHuaAvatar />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-sans">Chi-Hua Chien</h4>
                <p className="text-xs text-white/80">Co-Founder & Managing Partner at Goodwater Capital</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
