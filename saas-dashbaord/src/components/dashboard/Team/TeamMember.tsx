"use client";

import { motion } from "framer-motion";

interface TeamMemberProps {
  id?: string;
  initials: string;
  name: string;
  role: string;
  status: "Online" | "Away" | "Offline";
  email?: string;
}

const statusStyles = {
  Online: {
    dot: "bg-[var(--color-primary)]",
    text: "text-[var(--color-primary-dark)]",
    background: "bg-[var(--color-primary-light)]",
  },

  Away: {
    dot: "bg-[var(--color-warning)]",
    text: "text-[#9A742D]",
    background: "bg-[var(--color-warning-light)]",
  },

  Offline: {
    dot: "bg-[var(--color-text-light)]",
    text: "text-[var(--color-text-muted)]",
    background: "bg-[var(--color-background-muted)]",
  },
};

export default function TeamMember({
  initials,
  name,
  role,
  status,
}: TeamMemberProps) {
  const styles = statusStyles[status];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -6,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      whileHover={{
        x: 2,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        flex
        items-center
        gap-2.5
        rounded-xl
        px-2.5
        py-2
        transition-colors
        hover:bg-[var(--color-background-soft)]
      "
    >
      {/* Avatar */}

      <div className="relative shrink-0">
        <div
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-[var(--color-primary-light)]
            text-[10px]
            font-bold
            text-[var(--color-primary-dark)]
          "
        >
          {initials}
        </div>

        {/* Online indicator */}

        <span
          className={`
            absolute
            bottom-0
            right-0
            h-2
            w-2
            rounded-full
            border-2
            border-white
            ${styles.dot}
          `}
        />
      </div>

      {/* User info */}

      <div className="min-w-0 flex-1">
        <p className="truncate text-[12px] font-semibold text-[var(--color-text-primary)]">
          {name}
        </p>

        <p className="truncate text-[10px] text-[var(--color-text-muted)]">
          {role}
        </p>
      </div>

      {/* Status */}

      <span
        className={`
          hidden
          rounded-full
          px-2
          py-0.5
          text-[9px]
          font-semibold
          sm:block
          ${styles.background}
          ${styles.text}
        `}
      >
        {status}
      </span>
    </motion.div>
  );
}
