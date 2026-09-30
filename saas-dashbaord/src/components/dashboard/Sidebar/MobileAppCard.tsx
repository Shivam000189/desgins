"use client";

import { motion } from "framer-motion";
import { Smartphone, ArrowRight } from "lucide-react";

export default function MobileAppCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: 0.45,
        ease: "easeOut",
      }}
      className="
        relative
        overflow-hidden
        rounded-2xl
        bg-[var(--color-primary)]
        p-3.5
        text-white
        shadow-[0_6px_20px_rgba(100,131,84,0.22)]
      "
    >
      {/* Decorative circles */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-8
          -top-8
          h-28
          w-28
          rounded-full
          border
          border-white/10
        "
      />

      <div
        className="
          absolute
          -right-5
          -top-5
          h-20
          w-20
          rounded-full
          border
          border-white/10
        "
      />

      {/* Content */}

      <div className="relative z-10">
        <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-white/20">
          <Smartphone size={14} strokeWidth={2.2} />
        </div>

        <p className="text-[12px] font-bold leading-snug">
          Download our
          <br />
          Mobile App
        </p>

        <p className="mt-1 text-[9.5px] leading-tight text-white/80">
          Get things done anywhere
        </p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="
            mt-3
            flex
            w-full
            items-center
            justify-center
            gap-1.5
            rounded-xl
            bg-white
            py-1.5
            text-[10px]
            font-semibold
            text-[var(--color-primary-darker)]
            shadow-[0_2px_6px_rgba(0,0,0,0.06)]
          "
        >
          <span>Download</span>
          <ArrowRight size={11} strokeWidth={2.2} />
        </motion.button>
      </div>
    </motion.div>
  );
}
