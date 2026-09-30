"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, List } from "lucide-react";
import type { CalendarViewMode } from "@/types/calendar";

interface CalendarHeaderProps {
  currentMonthName: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
  viewMode: CalendarViewMode;
  onViewModeChange: (mode: CalendarViewMode) => void;
  onNewEvent: () => void;
}

export default function CalendarHeader({
  currentMonthName,
  onPrevMonth,
  onNextMonth,
  onToday,
  viewMode,
  onViewModeChange,
  onNewEvent,
}: CalendarHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
    >
      <div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-primary)]" />
          <p className="text-[11px] font-bold uppercase tracking-[0.09em] text-[var(--color-primary-dark)]">
            Schedule & Milestones
          </p>
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-2.5 sm:gap-3">
          <h1 className="text-xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-2xl lg:text-3xl">
            {currentMonthName}
          </h1>

          {/* Month Navigation Controls */}
          <div className="flex items-center rounded-xl border border-[var(--color-border)] bg-white p-0.5 shadow-2xs">
            <button
              type="button"
              onClick={onPrevMonth}
              className="flex h-7 w-7 items-center justify-center rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-background-soft)]"
              aria-label="Previous month"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={onToday}
              className="px-2 text-xs font-bold text-[var(--color-primary-dark)] hover:underline"
            >
              Today
            </button>
            <button
              type="button"
              onClick={onNextMonth}
              className="flex h-7 w-7 items-center justify-center rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-background-soft)]"
              aria-label="Next month"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <p className="mt-1 max-w-xl text-[13px] text-[var(--color-text-muted)] leading-relaxed">
          Coordinate sprint releases, team meetings, client demo syncs, and recurring financial bill reminders.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        {/* View Mode Toggle */}
        <div className="flex items-center rounded-xl border border-[var(--color-border)] bg-white p-1 shadow-xs">
          <button
            type="button"
            onClick={() => onViewModeChange("month")}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              viewMode === "month"
                ? "bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            <CalendarIcon size={14} />
            <span className="hidden sm:inline">Month Grid</span>
          </button>

          <button
            type="button"
            onClick={() => onViewModeChange("agenda")}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              viewMode === "agenda"
                ? "bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            <List size={14} />
            <span className="hidden sm:inline">Agenda List</span>
          </button>
        </div>

        {/* New Event Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={onNewEvent}
          className="
            flex
            h-9
            items-center
            gap-1.5
            rounded-xl
            bg-[var(--color-primary-dark)]
            px-3.5
            text-xs
            font-semibold
            text-white
            shadow-xs
            transition-colors
            hover:bg-[var(--color-primary)]
          "
        >
          <Plus size={15} strokeWidth={2.4} />
          <span>New Event</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
