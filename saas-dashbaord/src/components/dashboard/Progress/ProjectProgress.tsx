"use client";

import { motion } from "framer-motion";
import {
  ChartNoAxesColumnIncreasing,
  ArrowUpRight,
} from "lucide-react";

import ProgressChart from "./ProgressChart";

export default function ProjectProgress() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        delay: 0.2,
        ease: "easeOut",
      }}
      className="
        flex
        h-full
        min-w-0
        flex-col
        justify-between
        rounded-2xl
        border
        border-[var(--color-border-light)]
        bg-white
        p-4
        sm:p-5
        lg:p-6
        shadow-[0_1px_3px_rgba(23,26,22,0.03)]
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[var(--color-primary-light)]
              text-[var(--color-primary)]
            "
          >
            <ChartNoAxesColumnIncreasing
              size={17}
              strokeWidth={2}
            />
          </div>

          <div>
            <h2 className="text-[15px] font-semibold text-[var(--color-text-primary)]">
              Project Progress
            </h2>

            <p className="text-[11px] text-[var(--color-text-muted)]">
              Overall project completion
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{
            x: 2,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-xl
            text-[var(--color-text-muted)]
            transition-colors
            hover:bg-[var(--color-background-soft)]
            hover:text-[var(--color-text-primary)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[var(--color-primary)]
          "
          aria-label="View project progress details"
        >
          <ArrowUpRight
            size={16}
            strokeWidth={1.8}
          />
        </motion.button>
      </div>

      {/* Progress chart */}

      <div className="my-auto flex flex-1 flex-col items-center justify-center py-2 sm:py-3">
        <ProgressChart percentage={68} />
      </div>

      {/* Stats */}

      <div className="mt-2 grid grid-cols-2 gap-2.5">
        {/* Completed */}

        <motion.div
          whileHover={{
            y: -1,
          }}
          className="
            rounded-xl
            border
            border-[var(--color-border-light)]
            bg-[var(--color-primary-lighter)]
            p-3
            text-center
          "
        >
          <p className="text-[10px] font-medium text-[var(--color-text-muted)]">
            Completed
          </p>

          <p className="mt-0.5 text-[18px] font-bold tracking-tight text-[var(--color-text-primary)]">
            16
          </p>

          <p className="text-[9px] font-medium text-[var(--color-primary-dark)]">
            Projects
          </p>
        </motion.div>

        {/* Remaining */}

        <motion.div
          whileHover={{
            y: -1,
          }}
          className="
            rounded-xl
            border
            border-[var(--color-border-light)]
            bg-[var(--color-background-soft)]
            p-3
            text-center
          "
        >
          <p className="text-[10px] font-medium text-[var(--color-text-muted)]">
            Remaining
          </p>

          <p className="mt-0.5 text-[18px] font-bold tracking-tight text-[var(--color-text-primary)]">
            8
          </p>

          <p className="text-[9px] font-medium text-[var(--color-text-muted)]">
            Projects
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
