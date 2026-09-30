"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  ChevronDown,
  Check,
} from "lucide-react";

import AnalyticsChart from "./AnalyticsChart";
import type { TimeFilter } from "@/types/dashboard";

const filterOptions: TimeFilter[] = ["This Year", "This Month", "Last Year"];

export default function ProjectAnalytics() {
  const [selectedFilter, setSelectedFilter] = useState<TimeFilter>("This Year");
  const [isOpen, setIsOpen] = useState(false);

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

      <div className="flex items-center justify-between gap-4">
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
            <BarChart3
              size={17}
              strokeWidth={2}
            />
          </div>

          <div>
            <h2 className="text-[15px] font-semibold text-[var(--color-text-primary)]">
              Project Analytics
            </h2>

            <p className="text-[11px] text-[var(--color-text-muted)]">
              Track your project activity and performance
            </p>
          </div>
        </div>

        {/* Time Filter Dropdown */}

        <div className="relative">
          <motion.button
            whileHover={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-background-soft)",
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            className="
              flex
              h-8
              shrink-0
              items-center
              gap-1.5
              rounded-xl
              border
              border-[var(--color-border-light)]
              bg-white
              px-3
              text-[11px]
              font-medium
              text-[var(--color-text-secondary)]
              shadow-[0_1px_2px_rgba(0,0,0,0.02)]
              transition-colors
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--color-primary)]
            "
          >
            <span>{selectedFilter}</span>

            <ChevronDown
              size={13}
              strokeWidth={2}
              className={`text-[var(--color-text-muted)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <>
                <div
                  className="fixed inset-0 z-20"
                  onClick={() => setIsOpen(false)}
                />

                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="
                    absolute
                    right-0
                    top-9
                    z-30
                    min-w-[130px]
                    overflow-hidden
                    rounded-xl
                    border
                    border-[var(--color-border-light)]
                    bg-white
                    p-1
                    shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                  "
                  role="listbox"
                >
                  {filterOptions.map((option) => (
                    <button
                      key={option}
                      role="option"
                      aria-selected={selectedFilter === option}
                      onClick={() => {
                        setSelectedFilter(option);
                        setIsOpen(false);
                      }}
                      className={`
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-lg
                        px-2.5
                        py-1.5
                        text-left
                        text-[11px]
                        font-medium
                        transition-colors
                        ${
                          selectedFilter === option
                            ? "bg-[var(--color-primary-light)] text-[var(--color-primary-darker)] font-semibold"
                            : "text-[var(--color-text-secondary)] hover:bg-[var(--color-background-soft)] hover:text-[var(--color-text-primary)]"
                        }
                      `}
                    >
                      <span>{option}</span>
                      {selectedFilter === option && (
                        <Check size={12} strokeWidth={2.5} className="text-[var(--color-primary)]" />
                      )}
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Chart */}

      <AnalyticsChart filter={selectedFilter} />
    </motion.section>
  );
}
