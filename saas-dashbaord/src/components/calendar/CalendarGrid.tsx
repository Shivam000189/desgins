"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Clock, Video, Flag, Calendar as CalendarIcon, ChevronRight } from "lucide-react";
import type { CalendarEventItem } from "@/types/calendar";

interface CalendarGridProps {
  events: CalendarEventItem[];
  onSelectEvent: (event: CalendarEventItem) => void;
  onAddEventOnDate: (dateStr: string) => void;
}

const dayNames = [
  { short: "Mon", initial: "M" },
  { short: "Tue", initial: "T" },
  { short: "Wed", initial: "W" },
  { short: "Thu", initial: "T" },
  { short: "Fri", initial: "F" },
  { short: "Sat", initial: "S" },
  { short: "Sun", initial: "S" },
];

export default function CalendarGrid({
  events,
  onSelectEvent,
  onAddEventOnDate,
}: CalendarGridProps) {
  const [selectedMobileDate, setSelectedMobileDate] = useState<string>("2026-10-01");

  // Calendar days grid for October 2026
  const calendarCells = [
    { day: 28, month: 9, year: 2026, isCurrentMonth: false, dateStr: "2026-09-28" },
    { day: 29, month: 9, year: 2026, isCurrentMonth: false, dateStr: "2026-09-29" },
    { day: 30, month: 9, year: 2026, isCurrentMonth: false, dateStr: "2026-09-30" },
    ...Array.from({ length: 31 }, (_, i) => {
      const d = i + 1;
      const formattedDay = d < 10 ? `0${d}` : `${d}`;
      return {
        day: d,
        month: 10,
        year: 2026,
        isCurrentMonth: true,
        dateStr: `2026-10-${formattedDay}`,
      };
    }),
    { day: 1, month: 11, year: 2026, isCurrentMonth: false, dateStr: "2026-11-01" },
  ];

  const todayStr = "2026-10-01";
  const mobileSelectedEvents = events.filter((e) => e.date === selectedMobileDate);

  const formatSelectedDateHeader = (dateStr: string) => {
    try {
      const [y, m, d] = dateStr.split("-").map(Number);
      const date = new Date(y, m - 1, d);
      return date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const getDotColor = (type: string) => {
    switch (type) {
      case "Sprint Milestone":
        return "bg-[var(--color-primary-dark)]";
      case "Team Meeting":
        return "bg-blue-600";
      case "Project Deadline":
        return "bg-orange-600";
      case "Billing Reminder":
        return "bg-emerald-600";
      default:
        return "bg-neutral-600";
    }
  };

  return (
    <div className="space-y-4">
      {/* Calendar Card Container */}
      <div className="overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-white shadow-xs">
        {/* Day names header */}
        <div className="grid grid-cols-7 border-b border-[var(--color-border-light)] bg-[var(--color-background-soft)] text-center text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-muted)] py-2.5 sm:py-3">
          {dayNames.map((d, index) => (
            <div key={index} className="truncate">
              <span className="sm:hidden">{d.initial}</span>
              <span className="hidden sm:inline">{d.short}</span>
            </div>
          ))}
        </div>

        {/* Grid of days */}
        <div className="grid grid-cols-7 auto-rows-fr divide-x divide-y divide-[var(--color-border-light)]">
          {calendarCells.map((cell) => {
            const isToday = cell.dateStr === todayStr;
            const isSelectedMobile = cell.dateStr === selectedMobileDate;
            const dayEvents = events.filter((e) => e.date === cell.dateStr);

            return (
              <div
                key={cell.dateStr}
                onClick={() => {
                  setSelectedMobileDate(cell.dateStr);
                  // On desktop, clicking the cell triggers add event
                  if (typeof window !== "undefined" && window.innerWidth >= 640) {
                    onAddEventOnDate(cell.dateStr);
                  }
                }}
                className={`
                  group
                  relative
                  flex
                  min-h-[58px]
                  xs:min-h-[68px]
                  sm:min-h-[125px]
                  flex-col
                  p-1
                  xs:p-1.5
                  sm:p-2
                  cursor-pointer
                  transition-colors
                  hover:bg-[var(--color-background-soft)]
                  ${!cell.isCurrentMonth ? "bg-neutral-50/60 opacity-40 sm:opacity-50" : "bg-white"}
                  ${isSelectedMobile ? "ring-2 ring-[var(--color-primary)] ring-inset sm:ring-0" : ""}
                `}
              >
                {/* Day Number Header */}
                <div className="flex items-center justify-between">
                  <span
                    className={`
                      flex
                      h-5
                      w-5
                      xs:h-6
                      xs:w-6
                      items-center
                      justify-center
                      rounded-full
                      text-[11px]
                      xs:text-xs
                      font-semibold
                      ${
                        isToday
                          ? "bg-[var(--color-primary-dark)] text-white shadow-xs font-bold"
                          : cell.isCurrentMonth
                          ? "text-[var(--color-text-primary)]"
                          : "text-[var(--color-text-light)]"
                      }
                    `}
                  >
                    {cell.day}
                  </span>

                  {/* Desktop Quick Add Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddEventOnDate(cell.dateStr);
                    }}
                    className="hidden sm:flex opacity-0 group-hover:opacity-100 h-5 w-5 items-center justify-center rounded-md text-[var(--color-text-muted)] hover:bg-white hover:text-[var(--color-primary-dark)] transition-opacity"
                    title="Add event on this date"
                  >
                    <Plus size={13} />
                  </button>
                </div>

                {/* MOBILE VIEW: Compact Dots / Indicators */}
                <div className="mt-1 flex flex-1 items-center justify-center gap-1 sm:hidden">
                  {dayEvents.length > 0 && (
                    <div className="flex items-center gap-0.5">
                      {dayEvents.slice(0, 2).map((ev) => (
                        <span
                          key={ev.id}
                          className={`h-1.5 w-1.5 rounded-full ${getDotColor(ev.type)}`}
                        />
                      ))}
                      {dayEvents.length > 2 && (
                        <span className="text-[9px] font-bold text-[var(--color-text-muted)] leading-none">
                          +{dayEvents.length - 2}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* DESKTOP VIEW: Full Event Pills */}
                <div className="hidden sm:flex mt-1.5 flex-1 flex-col gap-1 overflow-y-auto no-scrollbar">
                  {dayEvents.map((event) => (
                    <motion.div
                      key={event.id}
                      layout
                      whileHover={{ scale: 1.02 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectEvent(event);
                      }}
                      className={`
                        cursor-pointer
                        rounded-lg
                        border
                        px-1.5
                        py-1
                        text-[10.5px]
                        font-semibold
                        leading-tight
                        truncate
                        transition-all
                        hover:shadow-2xs
                        ${event.color}
                      `}
                      title={`${event.title} (${event.startTime})`}
                    >
                      <div className="flex items-center justify-between gap-1 truncate">
                        <span className="truncate">{event.title}</span>
                        <span className="shrink-0 text-[9px] opacity-80 tabular-nums">
                          {event.startTime.split(" ")[0]}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MOBILE-ONLY: Selected Date Event Preview & Quick Add */}
      <div className="block sm:hidden">
        <div className="rounded-2xl border border-[var(--color-border-light)] bg-white p-3.5 shadow-xs">
          <div className="flex items-center justify-between border-b border-[var(--color-border-light)] pb-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              <h3 className="text-xs font-bold text-[var(--color-text-primary)]">
                {formatSelectedDateHeader(selectedMobileDate)}
              </h3>
              <span className="rounded-full bg-[var(--color-background-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-text-secondary)]">
                {mobileSelectedEvents.length} {mobileSelectedEvents.length === 1 ? "event" : "events"}
              </span>
            </div>

            <button
              type="button"
              onClick={() => onAddEventOnDate(selectedMobileDate)}
              className="flex items-center gap-1 rounded-lg bg-[var(--color-primary-light)] px-2.5 py-1 text-[11px] font-bold text-[var(--color-primary-dark)]"
            >
              <Plus size={13} />
              <span>Add</span>
            </button>
          </div>

          <div className="mt-2.5 divide-y divide-[var(--color-border-light)]">
            <AnimatePresence mode="popLayout">
              {mobileSelectedEvents.length === 0 ? (
                <p className="py-3 text-center text-xs text-[var(--color-text-muted)]">
                  No events scheduled on this day. Tap &quot;Add&quot; to create one.
                </p>
              ) : (
                mobileSelectedEvents.map((evt) => (
                  <motion.div
                    key={evt.id}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    onClick={() => onSelectEvent(evt)}
                    className="flex items-center justify-between py-2.5 cursor-pointer hover:bg-[var(--color-background-soft)] px-1 rounded-lg transition-colors"
                  >
                    <div className="flex items-start gap-2.5 min-w-0 pr-2">
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--color-background-soft)] text-[var(--color-text-secondary)]">
                        {evt.type === "Sprint Milestone" ? (
                          <Flag size={13} className="text-[var(--color-primary)]" />
                        ) : evt.platform.toLowerCase().includes("meet") || evt.platform.toLowerCase().includes("zoom") ? (
                          <Video size={13} className="text-blue-600" />
                        ) : (
                          <CalendarIcon size={13} className="text-emerald-600" />
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-xs font-bold text-[var(--color-text-primary)]">
                          {evt.title}
                        </p>
                        <div className="flex items-center gap-1.5 text-[10px] text-[var(--color-text-muted)] mt-0.5">
                          <Clock size={10} />
                          <span>{evt.startTime} - {evt.endTime}</span>
                          <span>•</span>
                          <span className="truncate">{evt.platform}</span>
                        </div>
                      </div>
                    </div>

                    <ChevronRight size={15} className="shrink-0 text-[var(--color-text-light)]" />
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
