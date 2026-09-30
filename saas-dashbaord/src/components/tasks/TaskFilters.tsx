"use client";

import { Search, X } from "lucide-react";
import type { TaskCategory, TaskPriority } from "@/types/task";

interface TaskFiltersProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  selectedPriority: string;
  onPriorityChange: (p: string) => void;
  onReset: () => void;
  isFiltered: boolean;
}

const categories: TaskCategory[] = [
  "Product Design",
  "Frontend",
  "Backend API",
  "Mobile App",
  "Security",
  "Analytics",
];

const priorities: TaskPriority[] = ["Urgent", "High", "Medium", "Low"];

export default function TaskFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedPriority,
  onPriorityChange,
  onReset,
  isFiltered,
}: TaskFiltersProps) {
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
            placeholder="Search tasks by title, tag, or description..."
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
              aria-label="Clear search query"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
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
            <option value="All">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Priority Dropdown */}
          <select
            value={selectedPriority}
            onChange={(e) => onPriorityChange(e.target.value)}
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
            <option value="All">All Priorities</option>
            {priorities.map((p) => (
              <option key={p} value={p}>
                {p}
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
