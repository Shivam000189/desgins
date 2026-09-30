"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar as CalendarIcon, Clock, Users, Trash2, ExternalLink, Video } from "lucide-react";
import type { CalendarEventItem } from "@/types/calendar";

interface EventDetailModalProps {
  event: CalendarEventItem | null;
  onClose: () => void;
  onDelete: (id: string) => void;
}

export default function EventDetailModal({
  event,
  onClose,
  onDelete,
}: EventDetailModalProps) {
  if (!event) return null;

  const formatDate = (dateStr: string) => {
    try {
      const [y, m, d] = dateStr.split("-").map(Number);
      const date = new Date(y, m - 1, d);
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const isVideoCall =
    event.platform.toLowerCase().includes("meet") ||
    event.platform.toLowerCase().includes("zoom") ||
    event.platform.toLowerCase().includes("video");

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-900/50 backdrop-blur-xs"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative z-10 w-full max-w-lg rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-2xl"
        >
          {/* Top Bar with Badge and Close */}
          <div className="flex items-start justify-between">
            <span
              className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-xs font-bold ${event.color}`}
            >
              {event.type}
            </span>

            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-xl text-[var(--color-text-muted)] hover:bg-[var(--color-background-soft)] hover:text-[var(--color-text-primary)] transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Event Title */}
          <h2 className="mt-3 text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
            {event.title}
          </h2>

          {/* Time & Date Row */}
          <div className="mt-4 flex flex-col gap-2 rounded-xl bg-[var(--color-background-soft)] p-3 text-xs sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
              <CalendarIcon size={14} className="text-[var(--color-primary)]" />
              <span className="font-semibold">{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
              <Clock size={14} className="text-[var(--color-primary)]" />
              <span>
                {event.startTime} - {event.endTime}
              </span>
            </div>
          </div>

          {/* Platform / Call info */}
          <div className="mt-4 flex items-center justify-between rounded-xl border border-[var(--color-border-light)] p-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]">
                {isVideoCall ? <Video size={16} /> : <CalendarIcon size={16} />}
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--color-text-primary)]">
                  {event.platform}
                </p>
                <p className="text-[11px] text-[var(--color-text-muted)]">
                  {isVideoCall ? "High-definition video conference" : "Scheduled calendar commitment"}
                </p>
              </div>
            </div>

            {isVideoCall && (
              <a
                href="#join"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Joining ${event.platform} meeting room...`);
                }}
                className="flex items-center gap-1 rounded-lg bg-[var(--color-primary-dark)] px-3 py-1.5 text-xs font-semibold text-white shadow-2xs transition-colors hover:bg-[var(--color-primary)]"
              >
                <span>Join</span>
                <ExternalLink size={12} />
              </a>
            )}
          </div>

          {/* Description */}
          {event.description && (
            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                Description & Agenda
              </h4>
              <p className="mt-1.5 text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {event.description}
              </p>
            </div>
          )}

          {/* Attendees */}
          <div className="mt-5">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
              <Users size={13} />
              <span>Attendees ({event.attendees.length})</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {event.attendees.map((attendee) => (
                <div
                  key={attendee.id}
                  className="flex items-center gap-2 rounded-full border border-[var(--color-border-light)] bg-white py-1 pr-3 pl-1 shadow-2xs"
                >
                  <div
                    style={{ backgroundColor: attendee.avatarColor }}
                    className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                  >
                    {attendee.initials}
                  </div>
                  <span className="text-xs font-medium text-[var(--color-text-primary)]">
                    {attendee.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-6 flex items-center justify-between border-t border-[var(--color-border-light)] pt-4">
            <button
              type="button"
              onClick={() => {
                onDelete(event.id);
                onClose();
              }}
              className="flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:text-red-700 transition-colors"
            >
              <Trash2 size={14} />
              <span>Remove Event</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-[var(--color-background-soft)] px-4 py-2 text-xs font-semibold text-[var(--color-text-primary)] hover:bg-neutral-200 transition-colors"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
