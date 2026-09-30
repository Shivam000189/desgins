"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, TrendingUp, Zap, CheckCircle2, Clock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { AnalyticsKPI } from "@/types/analytics";

interface AnalyticsKPIsProps {
  kpis: AnalyticsKPI[];
}

const icons = [TrendingUp, Zap, CheckCircle2, Clock];

export default function AnalyticsKPIs({ kpis }: AnalyticsKPIsProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
      {kpis.map((kpi, index) => {
        const Icon = icons[index % icons.length];

        if (kpi.highlight) {
          return (
            <motion.div
              key={kpi.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <Card
                variant="highlight"
                className="relative overflow-hidden p-4 sm:p-5"
              >
                {/* Subtle hatched glow */}
                <div className="pattern-hatch-light absolute -right-6 -bottom-6 h-28 w-28 rounded-full pointer-events-none opacity-40" />

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-100/90">
                    {kpi.title}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-xs">
                    <Icon size={16} strokeWidth={2.2} />
                  </div>
                </div>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold tracking-tight tabular-nums text-white">
                    {kpi.value}
                  </span>
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-bold text-white">
                    <ArrowUpRight size={12} strokeWidth={2.4} />
                    {kpi.change}
                  </span>
                </div>

                <p className="mt-2 text-xs text-emerald-100/80">
                  {kpi.description}
                </p>
              </Card>
            </motion.div>
          );
        }

        return (
          <motion.div
            key={kpi.id}
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
                  {kpi.title}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--color-background-soft)] text-[var(--color-text-secondary)]">
                  <Icon size={16} strokeWidth={2.2} />
                </div>
              </div>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-tight tabular-nums text-[var(--color-text-primary)]">
                  {kpi.value}
                </span>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-[var(--color-primary-light)] px-2 py-0.5 text-[11px] font-bold text-[var(--color-primary-dark)]">
                  {kpi.trend === "up" ? (
                    <ArrowUpRight size={12} strokeWidth={2.4} />
                  ) : (
                    <ArrowDownRight size={12} strokeWidth={2.4} />
                  )}
                  {kpi.change}
                </span>
              </div>

              <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                {kpi.description}
              </p>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
