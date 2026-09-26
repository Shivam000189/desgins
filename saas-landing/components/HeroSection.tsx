"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/images/Slide-01.png",
    title: "Northern Ridge",
  },
  {
    id: 2,
    image: "/images/Slide-02.png",
    title: "Silent Valley",
  },
  {
    id: 3,
    image: "/images/Slide-03.png",
    title: "The Horizon",
  },
  {
    id: 4,
    image: "/images/Slide-04.png",
    title: "Stone House",
  },
  {
    id: 5,
    image: "/images/Slide-05.png",
    title: "Open Space",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic slide movement every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    /* Box container matching the prototype wireframe */
    <div
      className="
        relative
        mx-auto
        h-[360px]
        w-[94%]
        max-w-[1100px]
        overflow-hidden
        rounded-[12px]
        bg-[#F7F7F7]
        sm:h-[420px]
        md:h-[480px]
        md:rounded-[14px]
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3D Perspective Stage */}
      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden"
        style={{
          perspective: "1200px",
        }}
      >
        {slides.map((slide, index) => {
          let offset = index - activeIndex;

          // Infinite carousel wrap
          if (offset > 2) offset -= slides.length;
          if (offset < -2) offset += slides.length;

          const positions: Record<
            number,
            {
              x: number;
              y: number;
              scale: number;
              opacity: number;
              blur: number;
              rotate: number;
              zIndex: number;
            }
          > = {
            [-2]: {
              x: -360,
              y: 22,
              scale: 0.74,
              opacity: 0.35,
              blur: 2,
              rotate: -4,
              zIndex: 1,
            },
            [-1]: {
              x: -185,
              y: 10,
              scale: 0.88,
              opacity: 0.7,
              blur: 1.5,
              rotate: -2,
              zIndex: 5,
            },
            [0]: {
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
              blur: 0,
              rotate: 0,
              zIndex: 20,
            },
            [1]: {
              x: 185,
              y: 10,
              scale: 0.88,
              opacity: 0.7,
              blur: 1.5,
              rotate: 2,
              zIndex: 5,
            },
            [2]: {
              x: 360,
              y: 22,
              scale: 0.74,
              opacity: 0.35,
              blur: 4,
              rotate: 4,
              zIndex: 1,
            },
          };

          const clampedOffset = Math.max(-2, Math.min(2, offset));
          const pos = positions[clampedOffset];

          return (
            <motion.div
              key={slide.id}
              className="
                absolute
                h-[220px]
                w-[330px]
                cursor-pointer
                overflow-hidden
                rounded-[16px]
                border
                border-black/5
                bg-white
                shadow-2xl
                sm:h-[270px]
                sm:w-[420px]
                md:h-[310px]
                md:w-[480px]
              "
              animate={{
                x: pos.x,
                y: pos.y,
                scale: pos.scale,
                opacity: pos.opacity,
                rotate: pos.rotate,
                filter: `blur(${pos.blur}px)`,
              }}
              initial={false}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                zIndex: pos.zIndex,
              }}
              onClick={() => {
                if (offset !== 0) {
                  setActiveIndex(index);
                }
              }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 768px) 330px, 480px"
                  className="object-cover"
                  draggable={false}
                  priority={index === 0}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Subtle indicator dots */}
      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-1.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? "w-6 bg-black"
                : "w-1.5 bg-neutral-300 hover:bg-neutral-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}