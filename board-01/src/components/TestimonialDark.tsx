import React from 'react';
import { motion } from 'motion/react';

export const TestimonialDark: React.FC = () => {
  return (
    <section className="bg-[#1a1a1a] text-white py-24 sm:py-28 px-5 text-center rounded-t-[40px] -mt-1 relative z-20">
      <div className="max-w-4xl mx-auto">
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-editorial text-[24px] sm:text-[34px] md:text-[42px] font-normal leading-[1.4] italic max-w-[800px] mx-auto mb-8 text-[#f5f5f5]"
        >
          “Every important thing I do starts with a conversation. I trust Wispr Notetaker to capture it accurately, so I can focus on what comes next.”
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-lg sm:text-xl font-bold tracking-[2px] uppercase mb-2 font-sans text-white">
            STEVEN BARTLETT
          </div>
          <div className="text-sm text-[#999] font-sans">
            Host of The Diary of a CEO, Spotify's #2 global podcast
          </div>
        </motion.div>
      </div>
    </section>
  );
};
