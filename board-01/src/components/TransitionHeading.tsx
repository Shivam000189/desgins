import React from 'react';
import { motion } from 'motion/react';

export const TransitionHeading: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-5 text-center bg-[#FDFBF5]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-editorial text-[32px] sm:text-[44px] md:text-[56px] font-normal leading-[1.25] max-w-[800px] mx-auto text-[#1a1a1a]"
        >
          So you can answer the <br />
          questions, write the follow-up, <br />
          and <em className="italic font-normal">keep things moving.</em>
        </motion.h2>
      </div>
    </section>
  );
};
