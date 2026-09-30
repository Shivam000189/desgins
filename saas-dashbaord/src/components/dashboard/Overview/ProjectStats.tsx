"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FolderKanban,
  CircleCheck,
  LoaderCircle,
  Clock3,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { initialStats } from "@/lib/dashboard/data";

const iconMap = {
  FolderKanban,
  CircleCheck,
  LoaderCircle,
  Clock3,
};

function AnimatedNumber({
  value,
  padZero = false,
}: {
  value: number;
  padZero?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(() => (prefersReducedMotion ? value : 0));

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const start = 0;
    const duration = 750;
    const startTime = performance.now();

    function updateNumber(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (value - start) * ease);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    }

    const frameId = requestAnimationFrame(updateNumber);
    return () => cancelAnimationFrame(frameId);
  }, [value, prefersReducedMotion]);

  const outputValue = prefersReducedMotion ? value : displayValue;

  if (padZero && outputValue < 10) {
    return <span>0{outputValue}</span>;
  }

  return <span>{outputValue}</span>;
}

export default function ProjectStats() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Project statistics"
      className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4"
    >
      {initialStats.map((stat, index) => {
        const Icon = iconMap[stat.iconName as keyof typeof iconMap] || FolderKanban;
        const shouldPad = stat.formattedValue?.startsWith("0");

        return (
          <motion.div
            key={stat.title}
            initial={{
              opacity: 0,
              y: prefersReducedMotion ? 0 : 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.06,
              ease: "easeOut",
            }}
            whileHover={{
              y: prefersReducedMotion ? 0 : -2,
              transition: {
                duration: 0.2,
              },
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-[var(--color-border-light)]
              bg-white
              p-3.5
              sm:p-4
              lg:p-5
              shadow-[0_1px_3px_rgba(23,26,22,0.03)]
              transition-all
              duration-200
              hover:border-[var(--color-border)]
              hover:shadow-[0_4px_16px_rgba(23,26,22,0.05)]
            "
          >
            {/* Subtle green decoration */}

            {stat.highlight && (
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-6
                  -top-6
                  h-24
                  w-24
                  rounded-full
                  bg-[var(--color-primary-lighter)]
                  opacity-80
                "
              />
            )}

            {/* Header */}

            <div className="relative flex items-center justify-between">
              <span className="truncate text-[11px] sm:text-[12px] font-medium text-[var(--color-text-muted)]">
                {stat.title}
              </span>

              <motion.div
                whileHover={{
                  scale: 1.06,
                }}
                className="
                  flex
                  h-7
                  w-7
                  sm:h-8
                  sm:w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[var(--color-primary-light)]
                  text-[var(--color-primary)]
                "
              >
                <Icon
                  size={15}
                  strokeWidth={2}
                />
              </motion.div>
            </div>

            {/* Value */}

            <div className="relative mt-2.5 sm:mt-3.5 flex flex-wrap items-baseline justify-between gap-1.5 sm:gap-2">
              <p className="text-[20px] sm:text-[24px] lg:text-[26px] xl:text-[28px] font-bold tracking-[-0.035em] text-[var(--color-text-primary)] tabular-nums">
                <AnimatedNumber value={stat.value} padZero={shouldPad} />
              </p>

              <motion.div
                initial={{
                  opacity: 0,
                  x: -6,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: prefersReducedMotion ? 0 : 0.4 + index * 0.08,
                  ease: "easeOut",
                }}
                className={`
                  inline-flex
                  shrink-0
                  items-center
                  gap-1
                  rounded-full
                  px-2
                  py-0.5
                  text-[10px]
                  font-semibold
                  ${
                    stat.positive
                      ? "bg-[var(--color-primary-light)] text-[var(--color-primary-darker)]"
                      : "bg-[var(--color-danger-light)] text-[var(--color-danger)]"
                  }
                `}
              >
                {stat.positive ? (
                  <TrendingUp size={11} strokeWidth={2.2} />
                ) : (
                  <TrendingDown size={11} strokeWidth={2.2} />
                )}

                <span>{stat.change}</span>
              </motion.div>
            </div>

            {/* Footer */}

            <p className="relative mt-1 text-[11px] text-[var(--color-text-light)]">
              {stat.description}
            </p>
          </motion.div>
        );
      })}
    </section>
  );
}
