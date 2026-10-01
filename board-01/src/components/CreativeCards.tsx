"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const cards = [
  {
    top: "THINK BEYOND",
    title: "Imagine",
    bottom: "UNBOUNDED HORIZONS",
    tagline: "Vision & Creative Direction",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=900&auto=format&fit=crop",
  },
  {
    top: "BUILD SYSTEMATIC",
    title: "Create",
    bottom: "DESIGNED FOR PURPOSE",
    tagline: "Production & Brand Systems",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=900&auto=format&fit=crop",
  },
  {
    top: "MOVE FORWARD",
    title: "Evolve",
    bottom: "PERPETUAL PROGRESSION",
    tagline: "Growth & Multi-Platform Reach",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=900&auto=format&fit=crop",
  },
];

export default function CreativeCards() {
  const [active, setActive] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative min-h-[820px] w-full overflow-hidden bg-[#0D5C4A] text-white flex flex-col items-center justify-center px-4 sm:px-6 py-20 sm:py-28">
      {/* Ambient gradient lighting for cinematic depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 25%, rgba(93, 212, 160, 0.22) 0%, rgba(13, 92, 74, 0) 70%)",
        }}
      />

      {/* Header for the Digital Creator Agency */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-10 sm:mb-14 px-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold tracking-[0.14em] uppercase text-emerald-200 mb-6 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
          <span>The Digital Creator Studio</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-editorial text-[34px] sm:text-[48px] md:text-[60px] font-normal leading-[1.14] tracking-[-0.02em] text-[#FDFBF5] max-w-[860px] mx-auto"
        >
          Crafting iconic digital brands <br className="hidden sm:inline" />
          from <em className="italic font-normal text-emerald-200">raw vision</em> to{" "}
          <em className="italic font-normal text-emerald-200">cultural impact</em>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-sm sm:text-base md:text-[17px] text-emerald-100/80 max-w-[620px] mx-auto font-sans leading-relaxed font-normal"
        >
          We engineer bespoke visual identities, automated content engines, and high-impact digital ventures for the next generation of visionary creators.
        </motion.p>
      </div>

      {/* 3D Rotating Cards Container */}
      <div
        className="relative flex h-[500px] sm:h-[540px] w-full max-w-[1200px] items-center justify-center [perspective:1400px] z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {cards.map((card, index) => {
          let position = index - active;

          if (position > 1) position -= cards.length;
          if (position < -1) position += cards.length;

          const isCenter = position === 0;

          return (
            <motion.div
              key={card.title}
              onClick={() => setActive(index)}
              className="absolute h-[420px] sm:h-[470px] w-[270px] sm:w-[310px] overflow-hidden rounded-[28px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] cursor-pointer select-none border border-white/10"
              animate={{
                x:
                  position === -1
                    ? "-115%"
                    : position === 1
                    ? "115%"
                    : "0%",
                scale: isCenter ? 1 : 0.86,
                rotateY:
                  position === -1
                    ? 18
                    : position === 1
                    ? -18
                    : 0,
                rotateZ:
                  position === -1
                    ? -2
                    : position === 1
                    ? 2
                    : 0,
                opacity: Math.abs(position) > 1 ? 0 : 1,
                zIndex: isCenter ? 30 : 10,
              }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* image overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 transition-opacity duration-300" />

              {/* soft grain */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
                }}
              />

              {/* top label */}
              <div className="absolute left-0 right-0 top-7 z-10 text-center">
                <span className="text-[10px] font-semibold tracking-[0.16em] text-white/90 uppercase">
                  {card.top}
                </span>
              </div>

              {/* center title */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.9,
                    y: 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-[40px] sm:text-[46px] font-semibold tracking-[-0.04em] text-white leading-tight font-editorial"
                >
                  {card.title}
                </motion.h2>
                <span className="text-[11px] font-medium tracking-wide text-emerald-200/80 mt-1">
                  {card.tagline}
                </span>
              </div>

              {/* bottom label */}
              <div className="absolute bottom-7 left-0 right-0 z-10 text-center">
                <span className="text-[9px] font-semibold tracking-[0.14em] text-white/80 uppercase">
                  {card.bottom}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pagination indicators */}
      <div className="relative z-10 flex items-center justify-center gap-2 mt-8">
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            aria-label={`Go to ${card.title} card`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              active === index
                ? "w-8 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                : "w-2 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}