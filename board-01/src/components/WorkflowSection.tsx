import React from 'react';
import { motion } from 'motion/react';

export const WorkflowSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-28 px-5 text-center bg-[#FDFBF5] border-t border-[#e0ddd6]/60">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[3px] uppercase text-[#888] font-semibold mb-4 font-sans"
        >
          WISPR MAKES IT EASY
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-editorial text-[36px] sm:text-[46px] md:text-[56px] font-normal text-[#1a1a1a] mb-16 leading-[1.15]"
        >
          Fits into your workflow. <br />
          <em className="italic font-normal">Doesn't change it.</em>
        </motion.h2>

        <div className="flex justify-center gap-12 sm:gap-20 flex-wrap">
          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center max-w-[240px]"
          >
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="24" fill="none" stroke="#1a1a1a" strokeWidth="2" />
                <path d="M20 30 L27 37 L40 23" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
                <circle cx="30" cy="30" r="8" fill="#F5A623" />
                <rect x="27" y="24" width="2" height="8" rx="1" fill="white" />
                <rect x="31" y="26" width="2" height="6" rx="1" fill="white" />
                <rect x="35" y="22" width="2" height="10" rx="1" fill="white" />
              </svg>
            </div>
            <h4 className="font-editorial text-xl font-normal text-[#1a1a1a] mb-2">
              Starts automatically
            </h4>
            <p className="text-sm text-[#888] font-sans leading-relaxed">
              One button joins and records. Catches back-to-back meetings.
            </p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-[240px]"
          >
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <svg width="80" height="40" viewBox="0 0 80 40">
                <rect x="0" y="10" width="24" height="20" rx="6" fill="#F5A623" />
                <circle cx="8" cy="20" r="2" fill="white" />
                <circle cx="14" cy="20" r="2" fill="white" />
                <circle cx="20" cy="20" r="2" fill="white" />
                <path d="M28 20 Q34 10 40 20" stroke="#1a1a1a" strokeWidth="2" fill="none" />
                <rect x="36" y="8" width="24" height="24" rx="6" fill="#F5A623" />
                <circle cx="44" cy="18" r="4" fill="white" />
                <circle cx="52" cy="18" r="4" fill="white" />
                <circle cx="48" cy="24" r="4" fill="white" />
                <path d="M64 20 Q70 10 76 20" stroke="#1a1a1a" strokeWidth="2" fill="none" />
                <rect x="72" y="10" width="24" height="20" rx="6" fill="#F5A623" />
                <rect x="78" y="14" width="12" height="8" rx="2" fill="white" />
                <circle cx="84" cy="26" r="2" fill="white" />
              </svg>
            </div>
            <h4 className="font-editorial text-xl font-normal text-[#1a1a1a] mb-2">
              Whatever you use
            </h4>
            <p className="text-sm text-[#888] font-sans leading-relaxed">
              Google Meet, Teams, Huddles, lunch catchups.
            </p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center max-w-[240px]"
          >
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <svg width="80" height="40" viewBox="0 0 80 40">
                <rect x="0" y="8" width="8" height="24" rx="2" fill="#1a1a1a" />
                <rect x="12" y="12" width="8" height="16" rx="2" fill="#1a1a1a" />
                <rect x="24" y="6" width="8" height="28" rx="2" fill="#1a1a1a" />
                <path d="M36 20 L50 20" stroke="#1a1a1a" strokeWidth="2" />
                <polygon points="48,16 54,20 48,24" fill="#1a1a1a" />
                <circle cx="62" cy="20" r="12" fill="none" stroke="#1a1a1a" strokeWidth="2" />
                <line x1="70" y1="28" x2="76" y2="34" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
                <text x="58" y="24" fontSize="10" fill="#1a1a1a">✦</text>
              </svg>
            </div>
            <h4 className="font-editorial text-xl font-normal text-[#1a1a1a] mb-2">
              Connects with your AI
            </h4>
            <p className="text-sm text-[#888] font-sans leading-relaxed">
              Notetaker plugs into Claude, ChatGPT, and more.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
