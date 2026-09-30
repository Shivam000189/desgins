"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar as CalendarIcon, Clock, Users, Tag, Monitor } from "lucide-react";
import type { CalendarEventItem, EventType } from "@/types/calendar";
import { calendarAttendees } from "@/lib/dashboard/calendarData";

interface NewEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddEvent: (event: CalendarEventItem) => void;
  defaultDate?: string;
}

const eventTypes: { type: EventType; color: string; label: string }[] = [
  {
    type: "Sprint Milestone",
    color: "bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] border-[var(--color-primary)]",
    label: "Sprint Milestone",
  },
  {
    type: "Team Meeting",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    label: "Team Meeting",
  },
  {
    type: "Project Deadline",
    color: "bg-orange-50 text-orange-700 border-orange-200",
    label: "Project Deadline",
  },
  {
    type: "Billing Reminder",
    color: "bg-emerald-50 text-emerald-800 border-emerald-200",
    label: "Billing Reminder",
  },
];

export default function NewEventModal({
  isOpen,
  onClose,
  onAddEvent,
  defaultDate = "2026-10-01",
}: NewEventModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(defaultDate);
  const [startTime, setStartTime] = useState("10:00 AM");
  const [endTime, setEndTime] = useState("11:00 AM");
  const [type, setType] = useState<EventType>("Team Meeting");
  const [platform, setPlatform] = useState("Google Meet");
  const [selectedAttendeeIds, setSelectedAttendeeIds] = useState<string[]>([
    calendarAttendees[0].id,
    calendarAttendees[1].id,
  ]);

  const toggleAttendee = (id: string) => {
    setSelectedAttendeeIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const matchedConfig = eventTypes.find((t) => t.type === type) || eventTypes[1];
    const selectedAttendees = calendarAttendees.filter((a) =>
      selectedAttendeeIds.includes(a.id)
    );

    const newEvent: CalendarEventItem = {
      id: `evt-${Date.now()}`,
      title: title.trim(),
      description: description.trim(),
      date,
      startTime,
      endTime,
      type,
      platform,
      attendees: selectedAttendees.length > 0 ? selectedAttendees : [calendarAttendees[0]],
      color: matchedConfig.color,
    };

    onAddEvent(newEvent);
    // Reset form
    setTitle("");
    setDescription("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-2xl sm:p-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[var(--color-border-light)] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]">
                  <CalendarIcon size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <h2 className="text-base font-bold text-[var(--color-text-primary)]">
                    Schedule New Event
                  </h2>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    Add a sprint milestone, team meeting, or deadline
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-xl text-[var(--color-text-muted)] hover:bg-[var(--color-background-soft)] hover:text-[var(--color-text-primary)] transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              {/* Title */}
              <div>
                <label className="block text-xs font-semibold text-[var(--color-text-secondary)]">
                  Event Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Q4 Growth Architecture Review"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-[var(--color-border)] bg-white px-3 py-2 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-light)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
                />
              </div>

              {/* Event Type selection pills */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                  <Tag size={13} />
                  Category
                </label>
                <div className="mt-1.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {eventTypes.map((et) => (
                    <button
                      key={et.type}
                      type="button"
                      onClick={() => setType(et.type)}
                      className={`rounded-xl border px-2 py-1.5 text-center text-[11px] font-semibold transition-all ${
                        type === et.type
                          ? "border-[var(--color-primary)] bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] shadow-xs"
                          : "border-[var(--color-border-light)] bg-[var(--color-background-soft)] text-[var(--color-text-muted)] hover:bg-neutral-100"
                      }`}
                    >
                      {et.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                    <CalendarIcon size={13} />
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-[var(--color-border)] bg-white px-2.5 py-1.5 text-xs text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                    <Clock size={13} />
                    Start Time
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="10:00 AM"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-[var(--color-border)] bg-white px-2.5 py-1.5 text-xs text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                    <Clock size={13} />
                    End Time
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="11:00 AM"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-[var(--color-border)] bg-white px-2.5 py-1.5 text-xs text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus:outline-none"
                  />
                </div>
              </div>

              {/* Platform / Location */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                  <Monitor size={13} />
                  Platform or Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Google Meet, Zoom, Boardroom 3"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-[var(--color-border)] bg-white px-3 py-1.5 text-xs text-[var(--color-text-primary)] placeholder-[var(--color-text-light)] focus:border-[var(--color-primary)] focus:outline-none"
                />
              </div>

              {/* Attendees multi-select */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                  <Users size={13} />
                  Invite Team Members
                </label>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {calendarAttendees.map((att) => {
                    const isSelected = selectedAttendeeIds.includes(att.id);
                    return (
                      <button
                        key={att.id}
                        type="button"
                        onClick={() => toggleAttendee(att.id)}
                        className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-all ${
                          isSelected
                            ? "border-[var(--color-primary)] bg-[var(--color-primary-light)] font-bold text-[var(--color-primary-dark)]"
                            : "border-[var(--color-border-light)] bg-white text-[var(--color-text-secondary)] hover:bg-[var(--color-background-soft)]"
                        }`}
                      >
                        <span
                          style={{ backgroundColor: att.avatarColor }}
                          className="flex h-4 w-4 items-center justify-center rounded-full text-[9px] text-white"
                        >
                          {att.initials}
                        </span>
                        <span>{att.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-[var(--color-text-secondary)]">
                  Agenda / Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Add meeting agenda or milestone goals..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-[var(--color-border)] bg-white px-3 py-2 text-xs text-[var(--color-text-primary)] placeholder-[var(--color-text-light)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-[var(--color-border-light)]">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl px-4 py-2 text-xs font-semibold text-[var(--color-text-secondary)] hover:bg-[var(--color-background-soft)] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[var(--color-primary-dark)] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[var(--color-primary)]"
                >
                  Schedule Event
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
