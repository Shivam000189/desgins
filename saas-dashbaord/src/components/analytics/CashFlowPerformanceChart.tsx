"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { MetricDataPoint } from "@/types/analytics";

interface CashFlowPerformanceChartProps {
  data: MetricDataPoint[];
}

export default function CashFlowPerformanceChart({
  data,
}: CashFlowPerformanceChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Find max value across all series to scale the Y-axis accurately
  const maxVal = Math.max(
    ...data.flatMap((d) => [d.income, d.expenses, d.savings]),
    1000
  );
  const roundedMax = Math.ceil(maxVal / 10000) * 10000 || 50000;
  const gridSteps = [roundedMax, roundedMax * 0.75, roundedMax * 0.5, roundedMax * 0.25, 0];

  // Calculate totals
  const totalIncome = data.reduce((acc, d) => acc + d.income, 0);
  const totalExpenses = data.reduce((acc, d) => acc + d.expenses, 0);
  const totalSavings = totalIncome - totalExpenses;

  const formatCompact = (val: number) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `$${(val / 1000).toFixed(0)}k`;
    return `$${val}`;
  };

  return (
    <Card variant="default" className="p-4 sm:p-5 lg:p-6">
      {/* Top Header & Hero Number */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[var(--color-border-light)] pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
            Cash Flow & Performance
          </span>
          <div className="mt-1 flex items-baseline gap-2.5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)] tabular-nums">
              ${totalSavings.toLocaleString()}
            </h2>
            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary-light)] px-2 py-0.5 text-xs font-bold text-[var(--color-primary-dark)]">
              <ArrowUpRight size={13} strokeWidth={2.4} />
              +14.8% net margin
            </span>
          </div>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
            Total Revenue: ${totalIncome.toLocaleString()} · Total Expenses: ${totalExpenses.toLocaleString()}
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[var(--color-primary)]" />
            <span className="text-[var(--color-text-secondary)] font-medium">Income</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[var(--color-expense-bar)]" />
            <span className="text-[var(--color-text-secondary)] font-medium">Expenses</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[var(--color-savings-bar)]" />
            <span className="text-[var(--color-text-secondary)] font-medium">Net Savings</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm pattern-hatch border border-[var(--color-border)]" />
            <span className="text-[var(--color-text-muted)] font-medium">Projected</span>
          </div>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="mt-6 relative h-[220px] sm:h-[240px] w-full">
        {/* Horizontal Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {gridSteps.map((value, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-9 text-right text-[10px] font-medium text-[var(--color-text-light)] tabular-nums">
                {formatCompact(value)}
              </span>
              <div className="h-px flex-1 bg-[var(--color-border-light)]" />
            </div>
          ))}
        </div>

        {/* Grouped Bars Container */}
        <div className="absolute bottom-0 left-11 right-2 top-0 flex items-end justify-around gap-2 sm:gap-6">
          {data.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const incomeHeight = Math.max((item.income / roundedMax) * 100, 4);
            const expenseHeight = Math.max((item.expenses / roundedMax) * 100, 4);
            const savingsHeight = Math.max((item.savings / roundedMax) * 100, 4);

            return (
              <div
                key={item.period}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                tabIndex={0}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                className="group relative flex h-full flex-1 items-end justify-center gap-1 sm:gap-1.5 cursor-pointer focus-visible:outline-none"
              >
                {/* Tooltip */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.15 }}
                    className="
                      pointer-events-none
                      absolute
                      -top-20
                      z-30
                      min-w-[140px]
                      rounded-xl
                      bg-[var(--color-text-primary)]
                      p-2.5
                      text-[11px]
                      text-white
                      shadow-xl
                    "
                  >
                    <div className="font-bold border-b border-white/15 pb-1 mb-1.5 flex items-center justify-between">
                      <span>{item.period}</span>
                      {item.isProjected && (
                        <span className="text-[9px] uppercase font-semibold text-emerald-300">
                          Projected
                        </span>
                      )}
                    </div>
                    <div className="space-y-1 font-medium">
                      <div className="flex justify-between gap-2">
                        <span className="text-emerald-300">Income:</span>
                        <span className="font-bold tabular-nums">${item.income.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="text-orange-300">Expenses:</span>
                        <span className="font-bold tabular-nums">${item.expenses.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between gap-2 border-t border-white/10 pt-1">
                        <span className="text-lime-300">Savings:</span>
                        <span className="font-bold tabular-nums">${item.savings.toLocaleString()}</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Bar 1: Income */}
                <motion.div
                  initial={prefersReducedMotion ? false : { height: 0 }}
                  animate={{ height: `${incomeHeight}%` }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className={`
                    w-2.5
                    sm:w-3.5
                    rounded-t-md
                    bg-[var(--color-primary)]
                    transition-opacity
                    group-hover:opacity-100
                    ${item.isProjected ? "pattern-hatch border-t border-x border-[var(--color-primary)]" : ""}
                    ${hoveredIndex !== null && !isHovered ? "opacity-40" : "opacity-90"}
                  `}
                />

                {/* Bar 2: Expenses */}
                <motion.div
                  initial={prefersReducedMotion ? false : { height: 0 }}
                  animate={{ height: `${expenseHeight}%` }}
                  transition={{ duration: 0.5, delay: index * 0.04 + 0.05 }}
                  className={`
                    w-2.5
                    sm:w-3.5
                    rounded-t-md
                    bg-[var(--color-expense-bar)]
                    transition-opacity
                    group-hover:opacity-100
                    ${item.isProjected ? "pattern-hatch border-t border-x border-[var(--color-expense-bar)]" : ""}
                    ${hoveredIndex !== null && !isHovered ? "opacity-40" : "opacity-90"}
                  `}
                />

                {/* Bar 3: Savings */}
                <motion.div
                  initial={prefersReducedMotion ? false : { height: 0 }}
                  animate={{ height: `${savingsHeight}%` }}
                  transition={{ duration: 0.5, delay: index * 0.04 + 0.1 }}
                  className={`
                    w-2.5
                    sm:w-3.5
                    rounded-t-md
                    bg-[var(--color-savings-bar)]
                    transition-opacity
                    group-hover:opacity-100
                    ${item.isProjected ? "pattern-hatch border-t border-x border-[var(--color-savings-bar)]" : ""}
                    ${hoveredIndex !== null && !isHovered ? "opacity-40" : "opacity-90"}
                  `}
                />

                {/* X-Axis Label */}
                <span className="absolute -bottom-6 text-[10px] font-semibold text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)]">
                  {item.period}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-4" />
    </Card>
  );
}
