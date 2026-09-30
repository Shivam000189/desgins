"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { analyticsDataByFilter } from "@/lib/dashboard/data";
import type { TimeFilter } from "@/types/dashboard";

const gridLines = [100, 75, 50, 25, 0];

interface AnalyticsChartProps {
  filter?: TimeFilter;
}

export default function AnalyticsChart({
  filter = "This Year",
}: AnalyticsChartProps) {
  const [hoveredMonth, setHoveredMonth] = useState<string | null>(null);
  const data = analyticsDataByFilter[filter] || analyticsDataByFilter["This Year"];
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mt-4">
      {/* Legend */}

      <div className="mb-3 flex flex-wrap items-center gap-4 sm:gap-5">
        <Legend
          color="bg-[var(--color-primary)]"
          label="Completed"
        />

        <Legend
          color="bg-[#8FA880]"
          label="In Progress"
        />

        <Legend
          color="bg-[#D5DFD1]"
          label="Pending"
        />
      </div>

      {/* Chart */}

      <div className="relative h-[180px] sm:h-[192px] w-full">
        {/* Grid lines */}

        <div className="absolute inset-0 flex flex-col justify-between">
          {gridLines.map((value) => (
            <div
              key={value}
              className="flex items-center gap-2.5 sm:gap-3"
            >
              <span className="w-5 sm:w-6 text-right text-[10px] font-medium text-[var(--color-text-light)] tabular-nums">
                {value}
              </span>

              <div className="h-px flex-1 bg-[var(--color-border-light)]" />
            </div>
          ))}
        </div>

        {/* Bars */}

        <div className="absolute bottom-0 left-7 sm:left-9 right-1 sm:right-2 top-0 flex items-end justify-between gap-1 sm:gap-2">
          {data.map((item, index) => {
            const isHovered = hoveredMonth === item.month;

            return (
              <div
                key={item.month}
                onMouseEnter={() => setHoveredMonth(item.month)}
                onMouseLeave={() => setHoveredMonth(null)}
                className="group/col relative flex h-full flex-1 cursor-pointer items-end justify-center gap-[2px] sm:gap-1.5"
              >
                {/* Hover tooltip */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="
                      pointer-events-none
                      absolute
                      -top-9
                      z-20
                      whitespace-nowrap
                      rounded-lg
                      bg-[var(--color-text-primary)]
                      px-2
                      py-1
                      text-[9px]
                      font-semibold
                      text-white
                      shadow-md
                    "
                  >
                    <span>{item.month}: {item.completed}%</span>
                  </motion.div>
                )}

                {/* Completed */}

                <motion.div
                  initial={prefersReducedMotion ? false : { height: 0 }}
                  animate={{
                    height: `${item.completed}%`,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: prefersReducedMotion ? 0 : index * 0.02,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    opacity: 0.85,
                  }}
                  className="
                    w-[4px]
                    max-w-[10px]
                    rounded-t-[3px]
                    bg-[var(--color-primary)]
                    sm:w-2.5
                  "
                />

                {/* In Progress */}

                <motion.div
                  initial={prefersReducedMotion ? false : { height: 0 }}
                  animate={{
                    height: `${item.inProgress}%`,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: prefersReducedMotion ? 0 : index * 0.02 + 0.03,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    opacity: 0.85,
                  }}
                  className="
                    w-[4px]
                    max-w-[10px]
                    rounded-t-[3px]
                    bg-[#8FA880]
                    sm:w-2.5
                  "
                />

                {/* Pending */}

                <motion.div
                  initial={prefersReducedMotion ? false : { height: 0 }}
                  animate={{
                    height: `${item.pending}%`,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: prefersReducedMotion ? 0 : index * 0.02 + 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    opacity: 0.85,
                  }}
                  className="
                    hidden
                    w-[4px]
                    max-w-[10px]
                    rounded-t-[3px]
                    bg-[#D5DFD1]
                    sm:block
                    sm:w-2.5
                  "
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Month Labels */}

      <div className="mt-2.5 flex items-center justify-between pl-7 sm:pl-9 pr-1 sm:pr-2">
        {data.map((item) => (
          <span
            key={item.month}
            className={`flex-1 text-center text-[10px] sm:text-[11px] font-medium transition-colors ${
              hoveredMonth === item.month
                ? "font-semibold text-[var(--color-primary)]"
                : "text-[var(--color-text-muted)]"
            }`}
          >
            {item.month}
          </span>
        ))}
      </div>
    </div>
  );
}

function Legend({
  color,
  label,
}: {
  color: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-2.5 w-2.5 rounded-full ${color}`}
      />

      <span className="text-[11px] font-medium text-[var(--color-text-secondary)]">
        {label}
      </span>
    </div>
  );
}
