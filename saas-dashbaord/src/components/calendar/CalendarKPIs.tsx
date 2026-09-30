"use client";

import { motion } from "framer-motion";
import { Calendar, Flag, Video, BellRing, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { CalendarEventItem } from "@/types/calendar";

interface CalendarKPIsProps {
  events: CalendarEventItem[];
}

export default function CalendarKPIs({ events }: CalendarKPIsProps) {
  const total = events.length;
  const milestones = events.filter((e) => e.type === "Sprint Milestone").length;
  const meetings = events.filter((e) => e.type === "Team Meeting").length;
  const reminders = events.filter((e) => e.type === "Billing Reminder").length;

  const stats = [
    {
      id: "events",
      title: "Upcoming Events",
      value: total,
      change: "This Month",
      description: "synchronized team schedule",
      icon: Calendar,
      highlight: true, // Signature dark-green highlight card
    },
    {
      id: "milestones",
      title: "Sprint Milestones",
      value: milestones,
      change: "On schedule",
      description: "Q4 deliverables track",
      icon: Flag,
      highlight: false,
    },
    {
      id: "meetings",
      title: "Syncs & Standups",
      value: meetings,
      change: "15m avg duration",
      description: "minimal meeting fatigue",
      icon: Video,
      highlight: false,
    },
    {
      id: "reminders",
      title: "Bill Reminders",
      value: reminders,
      change: "Autopay synced",
      description: "recurring infrastructure",
      icon: BellRing,
      highlight: false,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
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
                className="relative overflow-hidden p-3.5 sm:p-5"
              >
                {/* Subtle hatched glow */}
                <div className="pattern-hatch-light absolute -right-6 -bottom-6 h-28 w-28 rounded-full pointer-events-none opacity-40" />

                <div className="flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-100/90 truncate mr-1">
                    {stat.title}
                  </span>
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-xs">
                    <Icon size={15} strokeWidth={2.2} />
                  </div>
                </div>

                <div className="mt-2.5 sm:mt-3 flex items-baseline gap-1.5 sm:gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums text-white">
                    {stat.value}
                  </span>
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-white/20 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-white truncate">
                    <ArrowUpRight size={11} strokeWidth={2.4} />
                    {stat.change}
                  </span>
                </div>

                <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs text-emerald-100/80 truncate">
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
              className="p-3.5 sm:p-5 hover:border-[var(--color-border)] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-semibold text-[var(--color-text-secondary)] truncate mr-1">
                  {stat.title}
                </span>
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xl bg-[var(--color-background-soft)] text-[var(--color-text-secondary)]">
                  <Icon size={15} strokeWidth={2.2} />
                </div>
              </div>

              <div className="mt-2.5 sm:mt-3 flex items-baseline gap-1.5 sm:gap-2">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight tabular-nums text-[var(--color-text-primary)]">
                  {stat.value}
                </span>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-[var(--color-primary-light)] px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-[var(--color-primary-dark)] truncate">
                  {stat.change}
                </span>
              </div>

              <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs text-[var(--color-text-muted)] truncate">
                {stat.description}
              </p>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
