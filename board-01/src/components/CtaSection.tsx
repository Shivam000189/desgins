import React from 'react';
import { motion } from 'motion/react';

interface CtaSectionProps {
  os: 'windows' | 'mac';
  onOpenDownload: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ os, onOpenDownload }) => {
  return (
    <section className="py-24 sm:py-28 px-5 text-center relative overflow-hidden bg-[#FDFBF5]">
      <div className="max-w-5xl mx-auto relative">
        {/* Dark curved background container */}
        <div
          className="rounded-[40px] px-6 sm:px-12 py-16 sm:py-20 shadow-xl relative z-10"
          style={{ background: 'linear-gradient(135deg, #2a1a0a, #1a0a00)' }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-editorial text-[26px] sm:text-[36px] md:text-[44px] font-normal text-white max-w-[700px] mx-auto mb-8 leading-[1.35]"
          >
            Capture meeting notes with Notetaker and write emails, messages, and documents by speaking with Flow. Both in one subscription.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <button
              onClick={onOpenDownload}
              className="bg-[#E8D5F5] border border-[#c9a8e8] hover:bg-[#dec2f0] px-7 py-3.5 rounded-[10px] text-base font-semibold text-[#1a1a1a] cursor-pointer inline-flex items-center gap-2 mb-3 shadow-[0_2px_12px_rgba(0,0,0,0.1)] hover:scale-[1.03] transition-all font-sans"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                <rect x="1" y="1" width="6" height="6" rx="1" />
                <rect x="9" y="1" width="6" height="6" rx="1" />
                <rect x="1" y="9" width="6" height="6" rx="1" />
                <rect x="9" y="9" width="6" height="6" rx="1" />
              </svg>
              <span>Get started on {os === 'windows' ? 'Windows' : 'Mac'}</span>
            </button>
            <div className="text-sm text-[#999] font-sans">
              Available on Mac and Windows
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
