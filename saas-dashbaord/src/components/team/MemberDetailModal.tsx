"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, MapPin, Trash2, Send } from "lucide-react";
import type { TeamMemberItem, MemberStatus } from "@/types/team";

interface MemberDetailModalProps {
  member: TeamMemberItem | null;
  onClose: () => void;
  onUpdateStatus: (memberId: string, status: MemberStatus) => void;
  onRemoveMember: (memberId: string) => void;
}

const statusOptions: MemberStatus[] = ["Online", "Away", "Offline"];

export default function MemberDetailModal({
  member,
  onClose,
  onUpdateStatus,
  onRemoveMember,
}: MemberDetailModalProps) {
  if (!member) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/45 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.2 }}
          className="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-white shadow-2xl z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[var(--color-border-light)] px-5 py-3.5 bg-[var(--color-background-soft)]">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">
              Team Member Profile
            </span>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => {
                  if (confirm(`Remove ${member.name} from the workspace?`)) {
                    onRemoveMember(member.id);
                    onClose();
                  }
                }}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-text-muted)] hover:bg-red-50 hover:text-red-600 transition-colors"
                title="Remove member"
              >
                <Trash2 size={15} />
              </button>

              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-text-muted)] hover:bg-white hover:text-[var(--color-text-primary)]"
              >
                <X size={17} />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 text-xs">
            {/* Member Profile Hero */}
            <div className="flex items-center gap-4">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-xl font-bold text-white shadow-sm"
                style={{ backgroundColor: member.avatarColor }}
              >
                {member.initials}
              </div>

              <div>
                <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
                  {member.name}
                </h2>
                <p className="text-xs font-medium text-[var(--color-text-muted)]">
                  {member.role}
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="rounded-md bg-[var(--color-background-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-text-secondary)]">
                    {member.department}
                  </span>
                  <span className="rounded-md bg-[var(--color-primary-light)] px-2 py-0.5 text-[10px] font-bold text-[var(--color-primary-dark)]">
                    {member.accessLevel}
                  </span>
                </div>
              </div>
            </div>

            {/* Status Switcher */}
            <div className="rounded-xl border border-[var(--color-border-light)] bg-[var(--color-background-soft)] p-3">
              <span className="text-[10px] uppercase font-bold text-[var(--color-text-muted)] block mb-1.5">
                Current Availability
              </span>
              <div className="flex items-center gap-1.5">
                {statusOptions.map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => onUpdateStatus(member.id, st)}
                    className={`rounded-lg px-3 py-1 font-semibold text-xs transition-colors ${
                      member.status === st
                        ? "bg-[var(--color-primary-dark)] text-white shadow-xs"
                        : "bg-white text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact & Meta Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 rounded-xl border border-[var(--color-border-light)] p-3">
                <Mail size={15} className="text-[var(--color-primary-dark)] shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] text-[var(--color-text-muted)] block">Email</span>
                  <span className="font-semibold text-[var(--color-text-primary)] truncate block">
                    {member.email}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-[var(--color-border-light)] p-3">
                <MapPin size={15} className="text-[var(--color-primary-dark)] shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] text-[var(--color-text-muted)] block">Location</span>
                  <span className="font-semibold text-[var(--color-text-primary)] truncate block">
                    {member.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Sprint Contribution Metrics */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl bg-[var(--color-background-soft)] p-2.5">
                <span className="text-[10px] uppercase font-bold text-[var(--color-text-muted)]">
                  Active Tasks
                </span>
                <p className="text-base font-bold text-[var(--color-primary-dark)] mt-0.5 tabular-nums">
                  {member.activeTasksCount}
                </p>
              </div>

              <div className="rounded-xl bg-[var(--color-background-soft)] p-2.5">
                <span className="text-[10px] uppercase font-bold text-[var(--color-text-muted)]">
                  Completed
                </span>
                <p className="text-base font-bold text-[var(--color-text-primary)] mt-0.5 tabular-nums">
                  {member.completedTasksCount}
                </p>
              </div>

              <div className="rounded-xl bg-[var(--color-background-soft)] p-2.5">
                <span className="text-[10px] uppercase font-bold text-[var(--color-text-muted)]">
                  Tenure
                </span>
                <p className="text-xs font-bold text-[var(--color-text-primary)] mt-1">
                  {member.joinedDate}
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <span className="text-xs font-bold text-[var(--color-text-primary)] block mb-1.5">
                Technical Expertise & Skills
              </span>
              <div className="flex flex-wrap gap-1.5">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[var(--color-background-soft)] border border-[var(--color-border-light)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-text-secondary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="border-t border-[var(--color-border-light)] pt-4 flex gap-2">
              <button
                type="button"
                onClick={() => alert(`Opening direct chat with ${member.name}...`)}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[var(--color-primary-dark)] py-2 text-xs font-semibold text-white shadow-xs hover:bg-[var(--color-primary)]"
              >
                <Send size={13} />
                Send Direct Message
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
