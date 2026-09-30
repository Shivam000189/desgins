"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Plus,
  Upload,
  Loader2,
  Check,
} from "lucide-react";

export default function DashboardActions() {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleAddProject = () => {
    if (isAdding) return;
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }, 900);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.1,
        ease: "easeOut",
      }}
      className="flex shrink-0 items-center gap-2"
    >
      {/* Import Data */}

      <motion.button
        whileHover={{
          y: prefersReducedMotion ? 0 : -1,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          inline-flex
          h-[38px]
          items-center
          gap-2
          rounded-xl
          border
          border-[var(--color-border-light)]
          bg-white
          px-3.5
          text-[12px]
          font-medium
          text-[var(--color-text-secondary)]
          shadow-[0_1px_2px_rgba(23,26,22,0.02)]
          transition-colors
          duration-200
          hover:border-[var(--color-primary)]
          hover:bg-[var(--color-primary-light)]
          hover:text-[var(--color-primary-darker)]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[var(--color-primary)]
        "
        aria-label="Import project data"
      >
        <Upload
          size={14}
          strokeWidth={2}
        />

        <span className="hidden sm:inline">
          Import Data
        </span>
      </motion.button>

      {/* Add Project */}

      <motion.button
        whileHover={{
          y: prefersReducedMotion ? 0 : -1,
          backgroundColor: "#4F6B42",
        }}
        whileTap={{
          scale: 0.98,
        }}
        onClick={handleAddProject}
        disabled={isAdding}
        className="
          inline-flex
          h-[38px]
          items-center
          gap-2
          rounded-xl
          bg-[var(--color-primary)]
          px-4
          text-[12px]
          font-medium
          text-white
          shadow-[0_3px_12px_rgba(100,131,84,0.22)]
          transition-all
          duration-200
          hover:bg-[var(--color-primary-dark)]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[var(--color-primary)]
          focus-visible:ring-offset-2
          disabled:cursor-not-allowed
          disabled:opacity-85
        "
        aria-label="Add new project"
      >
        {isAdding ? (
          <>
            <Loader2
              size={14}
              strokeWidth={2.2}
              className="animate-spin"
            />
            <span>Creating...</span>
          </>
        ) : isAdded ? (
          <>
            <Check
              size={14}
              strokeWidth={2.5}
            />
            <span>Created!</span>
          </>
        ) : (
          <>
            <Plus
              size={15}
              strokeWidth={2.2}
            />
            <span>Add Project</span>
          </>
        )}
      </motion.button>
    </motion.div>
  );
}
