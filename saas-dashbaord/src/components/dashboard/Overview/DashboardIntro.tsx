"use client";

import { motion } from "framer-motion";

export default function DashboardIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      <div className="flex items-center gap-2">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]">
          Overview
        </p>
      </div>

      <h1 className="mt-1 text-[26px] font-bold tracking-[-0.035em] text-[var(--color-text-primary)] sm:text-[28px]">
        Dashboard
      </h1>

      <p className="mt-1 max-w-[520px] text-[13px] leading-relaxed text-[var(--color-text-muted)]">
        Welcome back, Shivam. Here&apos;s an overview of your projects,
        tasks and team activity.
      </p>
    </motion.div>
  );
}
