"use client";

import { motion } from "framer-motion";
import {
  MoreHorizontal,
  CheckCircle2,
  CircleDot,
} from "lucide-react";

interface ProjectItemProps {
  name: string;
  category: string;
  progress: number;
  members: string[];
  status: "Running" | "Completed" | "Pending";
}

const statusStyles = {
  Running: {
    background: "bg-[var(--color-primary-light)]",
    text: "text-[var(--color-primary-dark)]",
    icon: "text-[var(--color-primary)]",
  },

  Completed: {
    background: "bg-[#EEF2ED]",
    text: "text-[var(--color-primary-dark)]",
    icon: "text-[var(--color-primary)]",
  },

  Pending: {
    background: "bg-[var(--color-warning-light)]",
    text: "text-[#9A742D]",
    icon: "text-[var(--color-warning)]",
  },
};

export default function ProjectItem({
  name,
  category,
  progress,
  members,
  status,
}: ProjectItemProps) {
  const styles = statusStyles[status];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 6,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        backgroundColor: "var(--color-background-soft)",
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        group
        flex
        flex-col
        gap-3
        rounded-xl
        px-3
        py-3.5
        transition-colors
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      {/* Left: Icon & Info */}

      <div className="flex min-w-0 flex-1 items-center gap-3">
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
            transition-transform
            duration-200
            group-hover:translate-x-0.5
          "
        >
          {status === "Completed" ? (
            <CheckCircle2
              size={16}
              strokeWidth={2}
            />
          ) : (
            <CircleDot
              size={16}
              strokeWidth={2}
            />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[13px] font-semibold text-[var(--color-text-primary)]">
            {name}
          </h3>

          <p className="truncate text-[11px] text-[var(--color-text-muted)]">
            {category}
          </p>
        </div>
      </div>

      {/* Right cluster on desktop: Team + Progress + Status + Action */}

      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 sm:flex-nowrap sm:justify-end shrink-0">
        {/* Members */}

        <div className="flex shrink-0 items-center">
          {members.slice(0, 3).map((member, index) => (
            <motion.div
              key={`${member}-${index}`}
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
                ${index > 0 ? "-ml-2" : ""}
              `}
            >
              {member}
            </motion.div>
          ))}

          {members.length > 3 && (
            <span className="ml-1.5 text-[10px] font-medium text-[var(--color-text-muted)]">
              +{members.length - 3}
            </span>
          )}
        </div>

        {/* Progress bar */}

        <div className="flex shrink-0 items-center gap-2.5 w-28 sm:w-32 md:w-36">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--color-border-light)]">
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: `${progress}%`,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                h-full
                rounded-full
                bg-[var(--color-primary)]
              "
            />
          </div>

          <span className="w-7 text-right text-[11px] font-semibold tabular-nums text-[var(--color-text-secondary)]">
            {progress}%
          </span>
        </div>

        {/* Status Badge */}

        <div
          className={`
            inline-flex
            shrink-0
            items-center
            gap-1.5
            rounded-full
            px-2.5
            py-0.5
            text-[10px]
            font-semibold
            ${styles.background}
            ${styles.text}
          `}
        >
          <span
            className={`
              h-1.5
              w-1.5
              rounded-full
              ${styles.icon}
              bg-current
            `}
          />

          <span>{status}</span>
        </div>

        {/* Action */}

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.92,
          }}
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-lg
            text-[var(--color-text-muted)]
            opacity-70
            transition-all
            duration-200
            hover:bg-white
            hover:text-[var(--color-text-primary)]
            hover:opacity-100
            hover:shadow-[0_1px_2px_rgba(0,0,0,0.04)]
            focus-visible:opacity-100
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[var(--color-primary)]
          "
          aria-label={`Options for ${name}`}
        >
          <MoreHorizontal
            size={16}
            strokeWidth={1.8}
          />
        </motion.button>
      </div>
    </motion.div>
  );
}
