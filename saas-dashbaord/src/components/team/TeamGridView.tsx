"use client";

import { AnimatePresence } from "framer-motion";
import TeamMemberCard from "./TeamMemberCard";
import type { TeamMemberItem } from "@/types/team";

interface TeamGridViewProps {
  members: TeamMemberItem[];
  onSelectMember: (member: TeamMemberItem) => void;
  onMessageMember: (member: TeamMemberItem, e: React.MouseEvent) => void;
}

export default function TeamGridView({
  members,
  onSelectMember,
  onMessageMember,
}: TeamGridViewProps) {
  if (members.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--color-border)] bg-white p-12 text-center text-xs text-[var(--color-text-muted)]">
        <p className="text-sm font-semibold text-[var(--color-text-primary)]">
          No team members found
        </p>
        <p className="mt-1 text-xs">Try adjusting your search query or department filter.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <AnimatePresence mode="popLayout">
        {members.map((member) => (
          <TeamMemberCard
            key={member.id}
            member={member}
            onClick={() => onSelectMember(member)}
            onMessage={(e) => onMessageMember(member, e)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
