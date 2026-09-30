"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Plus, FolderPlus } from "lucide-react";

interface DashboardActionsProps {
  onNewTask?: () => void;
  onAddProject?: () => void;
}

export default function DashboardActions({
  onNewTask,
  onAddProject,
}: DashboardActionsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.1,
        ease: "easeOut",
      }}
      className="flex flex-wrap items-center gap-2"
    >
      {/* Add Project Button */}
      <motion.button
        whileHover={{
          y: prefersReducedMotion ? 0 : -1,
        }}
        whileTap={{
          scale: 0.98,
        }}
        onClick={onAddProject}
        className="
          inline-flex
          h-[38px]
          items-center
          gap-1.5
          rounded-xl
          border
          border-[var(--color-border-light)]
          bg-white
          px-3.5
          text-[12px]
          font-semibold
          text-[var(--color-text-secondary)]
          shadow-xs
          transition-colors
          duration-200
          hover:border-[var(--color-primary)]
          hover:bg-[var(--color-primary-light)]
          hover:text-[var(--color-primary-darker)]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[var(--color-primary)]
        "
        aria-label="Add new project"
      >
        <FolderPlus size={15} strokeWidth={2.2} className="text-[var(--color-primary)]" />
        <span>Add Project</span>
      </motion.button>

      {/* New Task Button */}
      <motion.button
        whileHover={{
          y: prefersReducedMotion ? 0 : -1,
        }}
        whileTap={{
          scale: 0.98,
        }}
        onClick={onNewTask}
        className="
          inline-flex
          h-[38px]
          items-center
          gap-1.5
          rounded-xl
          bg-[var(--color-primary-dark)]
          px-4
          text-[12px]
          font-semibold
          text-white
          shadow-[0_3px_12px_rgba(100,131,84,0.22)]
          transition-all
          duration-200
          hover:bg-[var(--color-primary)]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[var(--color-primary)]
          focus-visible:ring-offset-2
        "
        aria-label="Create new task"
      >
        <Plus size={15} strokeWidth={2.2} />
        <span>New Task</span>
      </motion.button>
    </motion.div>
  );
}
