"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ProgressChartProps {
  percentage?: number;
}

export default function ProgressChart({
  percentage = 68,
}: ProgressChartProps) {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const prefersReducedMotion = useReducedMotion();

  const progressOffset =
    circumference -
    (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center py-2">
      {/* SVG */}

      <svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        className="-rotate-90"
      >
        {/* Background ring */}

        <circle
          cx="75"
          cy="75"
          r={radius}
          fill="none"
          stroke="#E8EFE5"
          strokeWidth="11"
        />

        {/* Progress ring */}

        <motion.circle
          cx="75"
          cy="75"
          r={radius}
          fill="none"
          stroke="#648354"
          strokeWidth="11"
          strokeLinecap="round"
          initial={{
            strokeDashoffset: prefersReducedMotion ? progressOffset : circumference,
          }}
          whileInView={{
            strokeDashoffset: progressOffset,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.1,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            strokeDasharray: circumference,
          }}
        />
      </svg>

      {/* Center content */}

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          initial={{
            opacity: prefersReducedMotion ? 1 : 0,
            scale: prefersReducedMotion ? 1 : 0.85,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: prefersReducedMotion ? 0 : 0.55,
            ease: "easeOut",
          }}
          className="
            text-[28px]
            font-bold
            tracking-tight
            text-[var(--color-text-primary)]
            tabular-nums
          "
        >
          {percentage}%
        </motion.span>

        <motion.span
          initial={{
            opacity: prefersReducedMotion ? 1 : 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.35,
            delay: prefersReducedMotion ? 0 : 0.65,
          }}
          className="text-[10px] font-medium text-[var(--color-text-muted)]"
        >
          Completed
        </motion.span>
      </div>
    </div>
  );
}
