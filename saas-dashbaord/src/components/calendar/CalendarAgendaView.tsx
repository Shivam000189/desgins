"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Video, Flag, Calendar as CalendarIcon, ArrowRight } from "lucide-react";
import type { CalendarEventItem } from "@/types/calendar";

interface CalendarAgendaViewProps {
  events: CalendarEventItem[];
  onSelectEvent: (event: CalendarEventItem) => void;
}

export default function CalendarAgendaView({
  events,
  onSelectEvent,
}: CalendarAgendaViewProps) {
  // Sort events chronologically by date and start time
  const sortedEvents = [...events].sort((a, b) => {
    if (a.date === b.date) {
      return a.startTime.localeCompare(b.startTime);
    }
    return a.date.localeCompare(b.date);
  });

  // Group events by date
  const groupedByDate: Record<string, CalendarEventItem[]> = {};
  sortedEvents.forEach((evt) => {
    if (!groupedByDate[evt.date]) {
      groupedByDate[evt.date] = [];
    }
    groupedByDate[evt.date].push(evt);
  });

  const dates = Object.keys(groupedByDate);

  const formatDateHeader = (dateStr: string) => {
    try {
      const [y, m, d] = dateStr.split("-").map(Number);
      const date = new Date(y, m - 1, d);
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const getRelativeBadge = (dateStr: string) => {
    if (dateStr === "2026-10-01") {
      return <span className="rounded-full bg-[var(--color-primary-light)] px-2 py-0.5 text-[10px] font-bold text-[var(--color-primary-dark)]">Today</span>;
    }
    if (dateStr === "2026-10-02") {
      return <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">Tomorrow</span>;
    }
    return null;
  };

  const getPlatformIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes("meet") || p.includes("zoom") || p.includes("video")) {
      return <Video size={13} className="text-blue-600" />;
    }
    if (p.includes("bank") || p.includes("autopay") || p.includes("stripe")) {
      return <CalendarIcon size={13} className="text-emerald-600" />;
    }
    return <MapPin size={13} className="text-amber-600" />;
  };

  if (dates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-[var(--color-border-light)] bg-white p-12 text-center shadow-xs">
        <CalendarIcon size={36} className="text-[var(--color-text-light)]" />
        <h3 className="mt-3 text-sm font-semibold text-[var(--color-text-primary)]">
          No scheduled events
        </h3>
        <p className="mt-1 text-xs text-[var(--color-text-muted)]">
          You don&apos;t have any events or milestones on your agenda.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {dates.map((dateStr, groupIndex) => {
        const dayEvents = groupedByDate[dateStr];
        const relativeBadge = getRelativeBadge(dateStr);

        return (
          <motion.div
            key={dateStr}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: groupIndex * 0.05 }}
            className="rounded-2xl border border-[var(--color-border-light)] bg-white p-4 shadow-xs sm:p-5"
          >
            {/* Date Heading */}
            <div className="flex items-center justify-between border-b border-[var(--color-border-light)] pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                  {formatDateHeader(dateStr)}
                </h3>
                {relativeBadge}
              </div>
              <span className="text-xs font-semibold text-[var(--color-text-muted)]">
                {dayEvents.length} {dayEvents.length === 1 ? "event" : "events"}
              </span>
            </div>

            {/* List of events on this date */}
            <div className="mt-3 divide-y divide-[var(--color-border-light)]">
              {dayEvents.map((evt) => (
                <div
                  key={evt.id}
                  onClick={() => onSelectEvent(evt)}
                  className="group flex flex-col gap-3 py-3 transition-colors hover:bg-[var(--color-background-soft)] -mx-2 px-2 rounded-xl sm:flex-row sm:items-center sm:justify-between cursor-pointer"
                >
                  <div className="flex flex-1 items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-background-soft)] text-[var(--color-text-secondary)] group-hover:bg-white transition-colors">
                      {evt.type === "Sprint Milestone" ? (
                        <Flag size={16} className="text-[var(--color-primary)]" />
                      ) : (
                        getPlatformIcon(evt.platform)
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold ${evt.color}`}>
                          {evt.type}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-[var(--color-text-muted)]">
                          <Clock size={12} />
                          <span>{evt.startTime} - {evt.endTime}</span>
                        </div>
                      </div>

                      <h4 className="mt-1 text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-dark)] transition-colors">
                        {evt.title}
                      </h4>

                      {evt.description && (
                        <p className="mt-0.5 line-clamp-1 text-xs text-[var(--color-text-muted)]">
                          {evt.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 pl-12 sm:pl-0">
                    {/* Platform location */}
                    <span className="inline-flex items-center gap-1 text-xs text-[var(--color-text-secondary)]">
                      {getPlatformIcon(evt.platform)}
                      <span className="truncate max-w-[110px] xs:max-w-[140px]">{evt.platform}</span>
                    </span>

                    {/* Attendees avatar pile */}
                    <div className="flex items-center -space-x-1.5">
                      {evt.attendees.slice(0, 3).map((a) => (
                        <div
                          key={a.id}
                          style={{ backgroundColor: a.avatarColor }}
                          title={a.name}
                          className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white ring-2 ring-white"
                        >
                          {a.initials}
                        </div>
                      ))}
                      {evt.attendees.length > 3 && (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-200 text-[9px] font-bold text-neutral-700 ring-2 ring-white">
                          +{evt.attendees.length - 3}
                        </div>
                      )}
                    </div>

                    <ArrowRight
                      size={15}
                      className="text-[var(--color-text-light)] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
