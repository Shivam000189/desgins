"use client";

import { motion } from "framer-motion";
import HeroCarousel from "./HeroSection";

export default function Hero() {
    return (
        <div className="pb-80">
            {/* ===== HERO SECTION ===== */}
            <section className="relative bg-white pb-[400px] md:pb-[340px]">
                {/* ─── Hero Content ─── */}
                <div className="relative z-10 flex flex-col items-center px-5 pt-12 text-center md:pt-16 lg:pt-20">
                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
              text-[40px]
              leading-[1.08]
              tracking-[-0.03em]
              text-black
              md:text-[56px]
              lg:text-[72px]
            "
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        Design and development
                        <br />
                        of digital products
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.15,
                            duration: 0.7,
                        }}
                        className="
              mt-4
              max-w-[520px]
              text-[14px]
              leading-[1.2]
              text-neutral-500
              md:text-[16px]
              lg:text-[17px]
            "
                    >
                        A new generation of websites, systems and applications built
                        with excellent design, value and always exceeding expectations
                    </motion.p>
                </div>

                {/* ─── Carousel (absolute, overlaps into next section) ─── */}
                <div
                    className="
            absolute
            bottom-0
            left-1/2
            z-20
            w-full
            max-w-[1400px]
            -translate-x-1/2
            translate-y-[40%]
          "
                >
                    <HeroCarousel />
                </div>
            </section>
        </div>
    );
}