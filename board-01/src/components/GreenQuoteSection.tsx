import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, CheckCircle2 } from 'lucide-react';
import { TRICKY_WORDS } from '../data/mockData';

export const GreenQuoteSection: React.FC = () => {
  const [activeSnippetId, setActiveSnippetId] = useState<string | null>(null);

  return (
    <section className="relative bg-[#0a3d35] text-white pt-20 pb-32 overflow-hidden rounded-t-[48px] sm:rounded-t-[80px] -mt-10 shadow-2xl">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Steven Bartlett Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center pt-8 pb-20 border-b border-emerald-800/40"
        >
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-editorial font-light leading-relaxed text-[#f4efe6] tracking-tight">
            “Every important thing I do starts with a conversation. I trust Wispr Notetaker to capture it accurately, so I can focus on what comes next.”
          </blockquote>

          <div className="mt-8 flex flex-col items-center justify-center">
            <cite className="not-italic text-xs font-bold tracking-[0.2em] uppercase text-emerald-200">
              STEVEN BARTLETT
            </cite>
            <span className="text-xs text-emerald-400/80 mt-1 font-sans">
              Host of The Diary of a CEO, Spotify's #1 global podcast
            </span>
          </div>
        </motion.div>

        {/* Hard-to-spell words & easy-to-miss details Interactive Playground */}
        <div className="pt-24 pb-16 relative min-h-[580px] flex flex-col items-center justify-center text-center">
          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-normal tracking-[-0.03em] leading-[1.12] text-[#fbf9f4] font-editorial max-w-4xl mx-auto relative z-20"
          >
            Wispr Notetaker captures <br />
            the <span className="italic font-light text-emerald-200">hard-to-spell</span> words <br />
            and <span className="italic font-light text-emerald-200">easy-to-miss</span> details.
          </motion.h2>

          <p className="mt-6 text-sm sm:text-base text-emerald-100/70 max-w-xl mx-auto relative z-20">
            Domain jargon, non-standard names, French idioms, and software toolchains captured without second guesses.
          </p>

          {/* Floating Snippets Array */}
          <div className="w-full max-w-5xl mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-20">
            {TRICKY_WORDS.map((item, index) => {
              const isSelected = activeSnippetId === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onClick={() => setActiveSnippetId(isSelected ? null : item.id)}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className={`group relative p-4 rounded-2xl cursor-pointer text-left transition-all duration-300 ${
                    isSelected
                      ? 'bg-white text-stone-900 shadow-xl ring-2 ring-emerald-400'
                      : 'bg-emerald-950/60 border border-emerald-800/60 hover:bg-emerald-900/80 text-emerald-100 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider ${
                        isSelected ? 'text-emerald-700' : 'text-emerald-400'
                      }`}
                    >
                      {item.speaker}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {isSelected ? (
                        <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                          <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                          <span>Playing audio</span>
                        </div>
                      ) : (
                        <span className="text-[10px] text-emerald-400/60 opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to hear
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm font-sans leading-relaxed">
                    {item.textBefore}
                    <span
                      className={`px-1.5 py-0.5 rounded-sm font-semibold transition-colors ${
                        isSelected
                          ? 'bg-amber-300 text-stone-950 shadow-xs'
                          : 'bg-emerald-700/60 text-amber-200 border-b border-amber-400/50'
                      }`}
                    >
                      {item.highlightedWord}
                    </span>
                    {item.textAfter}
                  </p>

                  {/* Audio wave simulation bar when active */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 pt-2 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500"
                      >
                        <div className="flex items-center gap-1">
                          <span className="w-1 h-3 bg-emerald-600 rounded-full animate-bounce" />
                          <span className="w-1 h-5 bg-emerald-600 rounded-full animate-bounce [animation-delay:0.1s]" />
                          <span className="w-1 h-2 bg-emerald-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                          <span className="w-1 h-4 bg-emerald-600 rounded-full animate-bounce [animation-delay:0.15s]" />
                          <span className="ml-1 text-emerald-800 font-medium">100% matched to glossary</span>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
