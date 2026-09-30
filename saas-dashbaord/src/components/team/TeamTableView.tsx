"use client";

import { MessageSquare } from "lucide-react";
import type { TeamMemberItem, MemberStatus } from "@/types/team";

interface TeamTableViewProps {
  members: TeamMemberItem[];
  onSelectMember: (member: TeamMemberItem) => void;
  onMessageMember: (member: TeamMemberItem, e: React.MouseEvent) => void;
}

const statusIndicator: Record<MemberStatus, { label: string; dotClass: string }> = {
  Online: { label: "Online", dotClass: "bg-emerald-500" },
  Away: { label: "Away", dotClass: "bg-amber-500" },
  Offline: { label: "Offline", dotClass: "bg-neutral-400" },
};

export default function TeamTableView({
  members,
  onSelectMember,
  onMessageMember,
}: TeamTableViewProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-white shadow-xs">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-[var(--color-border-light)] bg-[var(--color-background-soft)] text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
            <tr>
              <th scope="col" className="px-4 py-3.5">
                Member
              </th>
              <th scope="col" className="px-4 py-3.5">
                Role & Department
              </th>
              <th scope="col" className="px-4 py-3.5">
                Status
              </th>
              <th scope="col" className="px-4 py-3.5">
                Access Level
              </th>
              <th scope="col" className="px-4 py-3.5">
                Active Tasks
              </th>
              <th scope="col" className="px-4 py-3.5">
                Location & Timezone
              </th>
              <th scope="col" className="px-4 py-3.5 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[var(--color-border-light)]">
            {members.map((member) => {
              const status = statusIndicator[member.status];

              return (
                <tr
                  key={member.id}
                  onClick={() => onSelectMember(member)}
                  className="group cursor-pointer transition-colors hover:bg-[var(--color-background-soft)]"
                >
                  {/* Member Name + Avatar */}
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold text-white shadow-2xs"
                          style={{ backgroundColor: member.avatarColor }}
                        >
                          {member.initials}
                        </div>
                        <span
                          className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-white ${status.dotClass}`}
                        />
                      </div>

                      <div>
                        <span className="font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-dark)]">
                          {member.name}
                        </span>
                        <p className="text-[11px] text-[var(--color-text-muted)]">
                          {member.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Role & Department */}
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <div>
                      <span className="font-semibold text-[var(--color-text-secondary)]">
                        {member.role}
                      </span>
                      <p className="text-[11px] text-[var(--color-text-muted)]">
                        {member.department}
                      </p>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 font-medium text-[var(--color-text-secondary)]">
                      <span className={`h-1.5 w-1.5 rounded-full ${status.dotClass}`} />
                      {status.label}
                    </span>
                  </td>

                  {/* Access Level */}
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${
                        member.accessLevel === "Admin"
                          ? "bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]"
                          : "bg-[var(--color-background-soft)] text-[var(--color-text-secondary)]"
                      }`}
                    >
                      {member.accessLevel}
                    </span>
                  </td>

                  {/* Active Tasks */}
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span className="font-bold tabular-nums text-[var(--color-primary-dark)]">
                      {member.activeTasksCount} tasks
                    </span>
                    <span className="text-[10px] text-[var(--color-text-muted)] block">
                      {member.completedTasksCount} completed
                    </span>
                  </td>

                  {/* Location & Timezone */}
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span className="text-[var(--color-text-secondary)]">
                      {member.location}
                    </span>
                    <span className="text-[10px] text-[var(--color-text-light)] block">
                      {member.timezone}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3.5 text-right whitespace-nowrap">
                    <button
                      type="button"
                      onClick={(e) => onMessageMember(member, e)}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-text-muted)] hover:bg-white hover:text-[var(--color-primary-dark)]"
                      title="Send direct message"
                    >
                      <MessageSquare size={14} />
                    </button>
                  </td>
                </tr>
              );
            })}

            {members.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-12 text-center text-xs text-[var(--color-text-muted)]"
                >
                  No team members matching your current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
