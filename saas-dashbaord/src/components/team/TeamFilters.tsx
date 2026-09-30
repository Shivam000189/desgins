"use client";

import { Search, X } from "lucide-react";
import type { Department, MemberStatus } from "@/types/team";

interface TeamFiltersProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedDepartment: string;
  onDepartmentChange: (d: string) => void;
  selectedStatus: string;
  onStatusChange: (s: string) => void;
  onReset: () => void;
  isFiltered: boolean;
}

const departments: Department[] = [
  "Product & Design",
  "Frontend Engineering",
  "Backend & Infra",
  "Mobile Engineering",
  "QA & Security",
];

const statuses: MemberStatus[] = ["Online", "Away", "Offline"];

export default function TeamFilters({
  searchQuery,
  onSearchChange,
  selectedDepartment,
  onDepartmentChange,
  selectedStatus,
  onStatusChange,
  onReset,
  isFiltered,
}: TeamFiltersProps) {
  return (
    <div className="flex flex-col gap-2.5 rounded-2xl border border-[var(--color-border-light)] bg-white p-3 sm:p-3.5 shadow-xs">
      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative min-w-0 flex-1">
          <Search
            size={15}
            strokeWidth={2.2}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name, role, email, or skill..."
            className="
              h-9
              w-full
              rounded-xl
              border
              border-[var(--color-border)]
              bg-[var(--color-background-soft)]
              pl-9
              pr-8
              text-xs
              text-[var(--color-text-primary)]
              placeholder:text-[var(--color-text-light)]
              transition-colors
              focus:border-[var(--color-primary)]
              focus:bg-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--color-primary)]
            "
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Department Filter */}
          <select
            value={selectedDepartment}
            onChange={(e) => onDepartmentChange(e.target.value)}
            className="
              h-9
              rounded-xl
              border
              border-[var(--color-border)]
              bg-white
              px-2.5
              text-xs
              font-medium
              text-[var(--color-text-secondary)]
              transition-colors
              hover:border-[var(--color-primary)]
              focus:border-[var(--color-primary)]
              focus-visible:outline-none
            "
          >
            <option value="All">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="
              h-9
              rounded-xl
              border
              border-[var(--color-border)]
              bg-white
              px-2.5
              text-xs
              font-medium
              text-[var(--color-text-secondary)]
              transition-colors
              hover:border-[var(--color-primary)]
              focus:border-[var(--color-primary)]
              focus-visible:outline-none
            "
          >
            <option value="All">All Statuses</option>
            {statuses.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>

          {isFiltered && (
            <button
              type="button"
              onClick={onReset}
              className="flex h-9 items-center gap-1 rounded-xl px-2.5 text-xs font-semibold text-[var(--color-primary-dark)] hover:bg-[var(--color-primary-light)] transition-colors"
            >
              <X size={13} />
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
