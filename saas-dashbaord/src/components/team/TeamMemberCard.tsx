"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, CheckSquare, MessageSquare } from "lucide-react";
import type { TeamMemberItem, MemberStatus } from "@/types/team";

interface TeamMemberCardProps {
  member: TeamMemberItem;
  onClick: () => void;
  onMessage: (e: React.MouseEvent) => void;
}

const statusIndicator: Record<
  MemberStatus,
  { label: string; dotClass: string; badgeClass: string }
> = {
  Online: {
    label: "Online",
    dotClass: "bg-emerald-500",
    badgeClass: "bg-emerald-50 text-emerald-700",
  },
  Away: {
    label: "Away",
    dotClass: "bg-amber-500",
    badgeClass: "bg-amber-50 text-amber-800",
  },
  Offline: {
    label: "Offline",
    dotClass: "bg-neutral-400",
    badgeClass: "bg-neutral-100 text-neutral-600",
  },
};

export default function TeamMemberCard({
  member,
  onClick,
  onMessage,
}: TeamMemberCardProps) {
  const status = statusIndicator[member.status];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="
        group
        relative
        flex
        cursor-pointer
        flex-col
        justify-between
        rounded-2xl
        border
        border-[var(--color-border-light)]
        bg-white
        p-4
        sm:p-5
        shadow-[0_1px_3px_rgba(23,26,22,0.03)]
        transition-all
        hover:border-[var(--color-primary)]
        hover:shadow-md
      "
      tabIndex={0}
      role="button"
      aria-label={`Team member: ${member.name}`}
    >
      <div>
        {/* Top Header: Avatar, Status, Access */}
        <div className="flex items-start justify-between gap-3">
          <div className="relative">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl text-base font-bold text-white shadow-xs"
              style={{ backgroundColor: member.avatarColor }}
            >
              {member.initials}
            </div>
            {/* Status dot */}
            <span
              className={`absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full ring-2 ring-white ${status.dotClass}`}
              title={status.label}
            />
          </div>

          <div className="flex items-center gap-1.5">
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${status.badgeClass}`}
            >
              {status.label}
            </span>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                member.accessLevel === "Admin"
                  ? "bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]"
                  : "bg-[var(--color-background-soft)] text-[var(--color-text-secondary)]"
              }`}
            >
              {member.accessLevel}
            </span>
          </div>
        </div>

        {/* Name & Role */}
        <div className="mt-3.5">
          <h3 className="text-[15px] font-bold text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-primary-dark)]">
            {member.name}
          </h3>
          <p className="text-xs font-medium text-[var(--color-text-muted)] mt-0.5">
            {member.role}
          </p>
          <span className="mt-1.5 inline-block rounded-md bg-[var(--color-background-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-text-secondary)]">
            {member.department}
          </span>
        </div>

        {/* Location & Contact */}
        <div className="mt-3.5 space-y-1.5 text-xs text-[var(--color-text-muted)] border-t border-[var(--color-border-light)] pt-3">
          <div className="flex items-center gap-1.5 truncate">
            <Mail size={12} className="shrink-0 text-[var(--color-text-light)]" />
            <span className="truncate">{member.email}</span>
          </div>

          <div className="flex items-center gap-1.5 truncate">
            <MapPin size={12} className="shrink-0 text-[var(--color-text-light)]" />
            <span className="truncate">{member.location}</span>
          </div>
        </div>

        {/* Skills Tag Pills */}
        <div className="mt-3 flex flex-wrap gap-1">
          {member.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-[var(--color-border-light)] bg-white px-1.5 py-0.5 text-[9.5px] font-medium text-[var(--color-text-secondary)]"
            >
              {skill}
            </span>
          ))}
          {member.skills.length > 3 && (
            <span className="rounded-md bg-[var(--color-background-soft)] px-1.5 py-0.5 text-[9.5px] font-bold text-[var(--color-text-muted)]">
              +{member.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Card Footer: Active Tasks & Message Button */}
      <div className="mt-4 flex items-center justify-between border-t border-[var(--color-border-light)] pt-3 text-xs">
        <div className="flex items-center gap-1.5 text-[var(--color-text-muted)]">
          <CheckSquare size={13} className="text-[var(--color-primary-dark)]" />
          <span className="text-[11px] font-semibold text-[var(--color-text-primary)] tabular-nums">
            {member.activeTasksCount}
          </span>
          <span className="text-[11px]">active tasks</span>
        </div>

        <button
          type="button"
          onClick={onMessage}
          className="
            flex
            items-center
            gap-1
            rounded-lg
            border
            border-[var(--color-border)]
            bg-white
            px-2.5
            py-1
            text-[11px]
            font-semibold
            text-[var(--color-text-secondary)]
            transition-colors
            hover:border-[var(--color-primary)]
            hover:bg-[var(--color-primary-light)]
            hover:text-[var(--color-primary-dark)]
          "
        >
          <MessageSquare size={12} />
          <span>Message</span>
        </button>
      </div>
    </motion.div>
  );
}
