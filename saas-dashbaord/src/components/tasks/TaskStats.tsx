"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, ListChecks, ArrowUpRight, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { TaskItem } from "@/types/task";

interface TaskStatsProps {
  tasks: TaskItem[];
}

export default function TaskStats({ tasks }: TaskStatsProps) {
  const total = tasks.length;
  const inProgress = tasks.filter((t) => t.status === "In Progress").length;
  const inReview = tasks.filter((t) => t.status === "In Review").length;
  const completed = tasks.filter((t) => t.status === "Completed").length;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  const stats = [
    {
      id: "total",
      title: "Total Tasks",
      value: total,
      change: "+14.2%",
      description: "vs last sprint",
      icon: ListChecks,
      highlight: true, // Signature dark green hero card!
      isGood: true,
    },
    {
      id: "in-progress",
      title: "In Progress",
      value: inProgress,
      change: `${inProgress} active`,
      description: "in current sprint",
      icon: Clock,
      highlight: false,
      isGood: true,
      accentColor: "text-[var(--color-primary-dark)]",
    },
    {
      id: "in-review",
      title: "In Review",
      value: inReview,
      change: `${inReview} awaiting`,
      description: "QA & approval",
      icon: AlertCircle,
      highlight: false,
      isGood: true,
      accentColor: "text-amber-700",
    },
    {
      id: "completed",
      title: "Completed Rate",
      value: `${completionRate}%`,
      change: `${completed} finished`,
      description: "high velocity",
      icon: CheckCircle2,
      highlight: false,
      isGood: true,
      accentColor: "text-[var(--color-success)]",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        if (stat.highlight) {
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <Card
                variant="highlight"
                className="relative overflow-hidden p-4 sm:p-5"
              >
                {/* Subtle hatched background accent */}
                <div className="pattern-hatch-light absolute -right-6 -bottom-6 h-28 w-28 rounded-full pointer-events-none opacity-40" />

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-100/90">
                    {stat.title}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-xs">
                    <Icon size={16} strokeWidth={2.2} />
                  </div>
                </div>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold tracking-tight tabular-nums text-white">
                    {stat.value}
                  </span>
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-bold text-white">
                    <ArrowUpRight size={12} strokeWidth={2.4} />
                    {stat.change}
                  </span>
                </div>

                <p className="mt-2 text-xs text-emerald-100/80">
                  {stat.description}
                </p>
              </Card>
            </motion.div>
          );
        }

        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <Card
              variant="default"
              className="p-4 sm:p-5 hover:border-[var(--color-border)] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[var(--color-text-secondary)]">
                  {stat.title}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--color-background-soft)] text-[var(--color-text-secondary)]">
                  <Icon size={16} strokeWidth={2.2} />
                </div>
              </div>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-tight tabular-nums text-[var(--color-text-primary)]">
                  {stat.value}
                </span>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-[var(--color-primary-light)] px-2 py-0.5 text-[11px] font-bold text-[var(--color-primary-dark)]">
                  {stat.change}
                </span>
              </div>

              <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                {stat.description}
              </p>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
