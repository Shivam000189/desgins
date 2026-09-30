import React from 'react';
import { motion } from 'motion/react';

export const GreenSection: React.FC = () => {
  const bubbles = [
    {
      name: 'Nathalie',
      text: 'Make sure the Tableau dashboard is ready.',
      pos: 'left-[3%] sm:left-[6%] top-[8%]',
      delay: 0.2,
    },
    {
      name: 'Stephen',
      text: "I'd give Raphael carte blanche.",
      pos: 'right-[3%] sm:right-[6%] top-[18%]',
      delay: 0.35,
    },
    {
      name: 'Stephen',
      text: 'Most ad hoc updates can go in Asana.',
      pos: 'left-[8%] sm:left-[14%] top-[48%]',
      delay: 0.5,
    },
    {
      name: 'Stephen',
      text: 'Tuesday is better. I want to run it by Siobhan first.',
      pos: 'right-[6%] sm:right-[14%] top-[56%]',
      delay: 0.65,
    },
    {
      name: 'Mike',
      text: 'Will you be ready to present the Miro board on Monday?',
      pos: 'left-[20%] sm:left-[30%] bottom-[8%]',
      delay: 0.8,
    },
  ];

  return (
    <section className="bg-[#0d5c4a] text-white py-28 sm:py-36 px-5 text-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-editorial text-[36px] sm:text-[50px] md:text-[64px] font-normal leading-[1.18] max-w-[900px] mx-auto text-[#FDFBF5]"
        >
          Wispr Notetaker captures <br />
          the <em className="italic font-normal">hard-to-spell</em> words <br />
          and <em className="italic font-normal">easy-to-miss</em> details.
        </motion.h2>

        {/* Floating Green Frosted Bubbles */}
        <div className="relative max-w-[1000px] mx-auto mt-14 h-[320px]">
          {bubbles.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: b.delay }}
              whileHover={{ scale: 1.04, y: -2 }}
              className={`absolute ${b.pos} bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-2.5 text-left shadow-lg cursor-pointer transition-colors hover:bg-white/15`}
            >
              <div className="text-[11px] text-white/60 mb-1 font-semibold">{b.name}</div>
              <div className="text-sm text-white font-medium">{b.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
