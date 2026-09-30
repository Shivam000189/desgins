"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { CalendarEventItem } from "@/types/calendar";

interface CalendarGridProps {
  events: CalendarEventItem[];
  onSelectEvent: (event: CalendarEventItem) => void;
  onAddEventOnDate: (dateStr: string) => void;
}

const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function CalendarGrid({
  events,
  onSelectEvent,
  onAddEventOnDate,
}: CalendarGridProps) {
  // Calendar days grid for October 2026
  // Sep 28, 29, 30 are previous month padding days
  // Oct 1 to Oct 31 are current month
  // Nov 1 is next month padding day
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

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-white shadow-xs">
      {/* Day names header */}
      <div className="grid grid-cols-7 border-b border-[var(--color-border-light)] bg-[var(--color-background-soft)] text-center text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-muted)] py-3">
        {dayNames.map((d) => (
          <div key={d} className="truncate">
            {d}
          </div>
        ))}
      </div>

      {/* Grid of days */}
      <div className="grid grid-cols-7 auto-rows-fr divide-x divide-y divide-[var(--color-border-light)]">
        {calendarCells.map((cell) => {
          const isToday = cell.dateStr === todayStr;
          const dayEvents = events.filter((e) => e.date === cell.dateStr);

          return (
            <div
              key={cell.dateStr}
              onClick={() => onAddEventOnDate(cell.dateStr)}
              className={`
                group
                relative
                flex
                min-h-[110px]
                sm:min-h-[125px]
                flex-col
                p-1.5
                sm:p-2
                transition-colors
                hover:bg-[var(--color-background-soft)]
                ${!cell.isCurrentMonth ? "bg-neutral-50/60 opacity-50" : "bg-white"}
              `}
            >
              {/* Day Number Header */}
              <div className="flex items-center justify-between">
                <span
                  className={`
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    text-xs
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

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddEventOnDate(cell.dateStr);
                  }}
                  className="opacity-0 group-hover:opacity-100 flex h-5 w-5 items-center justify-center rounded-md text-[var(--color-text-muted)] hover:bg-white hover:text-[var(--color-primary-dark)] transition-opacity"
                  title="Add event on this date"
                >
                  <Plus size={13} />
                </button>
              </div>

              {/* Events inside this day */}
              <div className="mt-1.5 flex flex-1 flex-col gap-1 overflow-y-auto no-scrollbar">
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
  );
}
