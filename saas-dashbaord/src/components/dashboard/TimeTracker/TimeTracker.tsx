"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Clock3,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react";

type TimerStatus = "STOPPED" | "RUNNING" | "PAUSED";

export default function TimeTracker() {
  const [seconds, setSeconds] = useState(1 * 60 * 60 + 24 * 60 + 8);
  const [status, setStatus] = useState<TimerStatus>("RUNNING");
  const prefersReducedMotion = useReducedMotion();

  const isRunning = status === "RUNNING";

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = [
    hours,
    minutes,
    remainingSeconds,
  ]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");

  const handleToggle = () => {
    if (status === "RUNNING") {
      setStatus("PAUSED");
    } else {
      setStatus("RUNNING");
    }
  };

  const handleReset = () => {
    setSeconds(0);
    setStatus("STOPPED");
  };

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        delay: 0.25,
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
            <Clock3
              size={17}
              strokeWidth={2}
            />
          </div>

          <div>
            <h2 className="text-[15px] font-semibold text-[var(--color-text-primary)]">
              Time Tracker
            </h2>

            <p className="text-[11px] text-[var(--color-text-muted)]">
              Track your working time
            </p>
          </div>
        </div>

        {/* Status indicator */}

        <div
          className={`
            flex
            items-center
            gap-1.5
            rounded-full
            px-2.5
            py-0.5
            transition-colors
            ${
              status === "RUNNING"
                ? "bg-[var(--color-primary-light)]"
                : status === "PAUSED"
                ? "bg-[var(--color-warning-light)]"
                : "bg-[var(--color-background-muted)]"
            }
          `}
        >
          <motion.span
            animate={
              isRunning && !prefersReducedMotion
                ? {
                    scale: [1, 1.35, 1],
                    opacity: [1, 0.5, 1],
                  }
                : {
                    scale: 1,
                    opacity: status === "STOPPED" ? 0.4 : 1,
                  }
            }
            transition={{
              duration: 1.5,
              repeat: isRunning && !prefersReducedMotion ? Infinity : 0,
              ease: "easeInOut",
            }}
            className={`
              h-1.5
              w-1.5
              rounded-full
              ${
                status === "RUNNING"
                  ? "bg-[var(--color-primary)]"
                  : status === "PAUSED"
                  ? "bg-[var(--color-warning)]"
                  : "bg-[var(--color-text-muted)]"
              }
            `}
          />

          <span
            className={`
              text-[10px]
              font-semibold
              ${
                status === "RUNNING"
                  ? "text-[var(--color-primary-darker)]"
                  : status === "PAUSED"
                  ? "text-[#9A742D]"
                  : "text-[var(--color-text-muted)]"
              }
            `}
          >
            {status === "RUNNING"
              ? "Tracking"
              : status === "PAUSED"
              ? "Paused"
              : "Stopped"}
          </span>
        </div>
      </div>

      {/* Timer */}

      <div className="my-auto flex flex-1 flex-col items-center justify-center py-4 text-center">
        <motion.p
          key={formattedTime}
          initial={{
            opacity: 0.8,
          }}
          animate={{
            opacity: 1,
          }}
          className="
            text-[28px]
            sm:text-[32px]
            font-bold
            tracking-tight
            text-[var(--color-text-primary)]
            tabular-nums
          "
        >
          {formattedTime}
        </motion.p>

        <p className="mt-1 text-[11px] text-[var(--color-text-muted)]">
          Current session
        </p>
      </div>

      {/* Controls & Total */}

      <div className="space-y-2.5">
        <div className="flex items-center gap-2">
          {/* Play / Pause */}

          <motion.button
            whileHover={{
              y: prefersReducedMotion ? 0 : -1,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={handleToggle}
            className="
              flex
              h-[38px]
              flex-1
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[var(--color-primary)]
              text-[12px]
              font-medium
              text-white
              shadow-[0_3px_12px_rgba(100,131,84,0.22)]
              transition-colors
              hover:bg-[var(--color-primary-dark)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--color-primary)]
            "
          >
            {status === "RUNNING" ? (
              <>
                <Pause
                  size={14}
                  strokeWidth={2}
                />
                <span>Pause</span>
              </>
            ) : status === "PAUSED" ? (
              <>
                <Play
                  size={14}
                  strokeWidth={2}
                />
                <span>Resume</span>
              </>
            ) : (
              <>
                <Play
                  size={14}
                  strokeWidth={2}
                />
                <span>Start</span>
              </>
            )}
          </motion.button>

          {/* Reset */}

          <motion.button
            whileHover={{
              y: prefersReducedMotion ? 0 : -1,
              borderColor: "var(--color-border)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={handleReset}
            className="
              flex
              h-[38px]
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-[var(--color-border-light)]
              text-[var(--color-text-muted)]
              shadow-[0_1px_2px_rgba(0,0,0,0.02)]
              transition-colors
              hover:bg-[var(--color-background-soft)]
              hover:text-[var(--color-text-primary)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--color-primary)]
            "
            aria-label="Reset timer"
          >
            <RotateCcw
              size={15}
              strokeWidth={1.8}
            />
          </motion.button>
        </div>

        {/* Today's total */}

        <div
          className="
            flex
            items-center
            justify-between
            rounded-xl
            border
            border-[var(--color-border-light)]
            bg-[var(--color-background-soft)]
            px-3.5
            py-2.5
          "
        >
          <span className="text-[11px] font-medium text-[var(--color-text-muted)]">
            Today&apos;s total
          </span>

          <span className="text-[12px] font-bold tabular-nums text-[var(--color-text-primary)]">
            06:42:18
          </span>
        </div>
      </div>
    </motion.section>
  );
}
