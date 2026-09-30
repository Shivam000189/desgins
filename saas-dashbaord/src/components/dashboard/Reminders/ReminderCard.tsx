"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bell,
  CalendarDays,
  Clock3,
  MoreHorizontal,
  Video,
  ExternalLink,
  Check,
} from "lucide-react";

export default function ReminderCard() {
  const [isJoining, setIsJoining] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleJoin = () => {
    setIsJoining(true);
    setTimeout(() => {
      setIsJoining(false);
    }, 1800);
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
        delay: 0.08,
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
            <Bell
              size={17}
              strokeWidth={2}
            />
          </div>

          <div>
            <h2 className="text-[15px] font-semibold text-[var(--color-text-primary)]">
              Reminders
            </h2>

            <p className="text-[11px] text-[var(--color-text-muted)]">
              Your upcoming activities
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{
            backgroundColor: "#F8F9F7",
          }}
          whileTap={{
            scale: 0.92,
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
            hover:text-[var(--color-text-primary)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[var(--color-primary)]
          "
          aria-label="Reminder options"
        >
          <MoreHorizontal
            size={17}
            strokeWidth={1.8}
          />
        </motion.button>
      </div>

      {/* Reminder Event Card */}

      <motion.div
        whileHover={{
          y: prefersReducedMotion ? 0 : -2,
          borderColor: "var(--color-border)",
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          my-3.5
          rounded-xl
          border
          border-[var(--color-border-light)]
          bg-[var(--color-background-soft)]
          p-4
          shadow-[0_1px_2px_rgba(0,0,0,0.02)]
          transition-all
          hover:shadow-[0_6px_20px_rgba(23,26,22,0.05)]
        "
      >
        {/* Time */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Clock3
              size={13}
              strokeWidth={2}
              className="text-[var(--color-primary)]"
            />

            <span className="text-[12px] font-semibold text-[var(--color-primary-darker)]">
              10:00 AM
            </span>
          </div>

          <motion.span
            animate={
              prefersReducedMotion
                ? false
                : {
                    scale: [1, 1.03, 1],
                    opacity: [0.95, 1, 0.95],
                  }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              rounded-full
              bg-[var(--color-primary-light)]
              px-2.5
              py-0.5
              text-[10px]
              font-semibold
              text-[var(--color-primary-darker)]
            "
          >
            In 30 min
          </motion.span>
        </div>

        {/* Title */}

        <h3 className="mt-2.5 text-[14px] font-semibold text-[var(--color-text-primary)]">
          Team Standup Meeting
        </h3>

        {/* Details */}

        <div className="mt-2 flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <CalendarDays
              size={13}
              strokeWidth={1.8}
              className="text-[var(--color-text-muted)]"
            />

            <span className="text-[11px] text-[var(--color-text-secondary)]">
              Today · Monday, September 27
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Video
              size={13}
              strokeWidth={1.8}
              className="text-[var(--color-text-muted)]"
            />

            <span className="text-[11px] text-[var(--color-text-secondary)]">
              Google Meet · 30 minutes
            </span>
          </div>
        </div>

        {/* Participants & Quick Join */}

        <div className="mt-3.5 flex items-center justify-between border-t border-[var(--color-border-light)] pt-3">
          <div className="flex items-center">
            {["SS", "AK", "RM"].map((initials, index) => (
              <motion.div
                key={initials}
                whileHover={{
                  y: -2,
                  zIndex: 10,
                }}
                className={`
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white
                  bg-[var(--color-primary-light)]
                  text-[9px]
                  font-bold
                  text-[var(--color-primary-dark)]
                  shadow-[0_1px_2px_rgba(0,0,0,0.04)]
                  ${
                    index !== 0
                      ? "-ml-1.5"
                      : ""
                  }
                `}
              >
                {initials}
              </motion.div>
            ))}

            <span className="ml-2 text-[10px] font-medium text-[var(--color-text-muted)]">
              +4 others
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleJoin}
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-lg
              bg-[var(--color-primary)]
              px-2.5
              py-1
              text-[10px]
              font-semibold
              text-white
              shadow-[0_2px_6px_rgba(100,131,84,0.2)]
              transition-colors
              hover:bg-[var(--color-primary-dark)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--color-primary)]
            "
          >
            {isJoining ? (
              <>
                <Check size={11} strokeWidth={2.5} />
                <span>Joined!</span>
              </>
            ) : (
              <>
                <span>Join</span>
                <ExternalLink size={10} strokeWidth={2} />
              </>
            )}
          </motion.button>
        </div>
      </motion.div>

      {/* Footer */}

      <div className="flex items-center justify-between pt-1">
        <motion.button
          whileHover={{
            x: 2,
          }}
          className="
            text-[11px]
            font-medium
            text-[var(--color-primary)]
            hover:text-[var(--color-primary-dark)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[var(--color-primary)]
            rounded-md
            px-1
          "
        >
          View all reminders →
        </motion.button>
      </div>
    </motion.section>
  );
}
