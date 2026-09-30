"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  CheckSquare,
  Paperclip,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import type { TaskItem, TaskPriority } from "@/types/task";

interface TaskCardProps {
  task: TaskItem;
  onClick: () => void;
  onToggleComplete: (e: React.MouseEvent) => void;
  onMoveForward?: (e: React.MouseEvent) => void;
}

const priorityConfig: Record<
  TaskPriority,
  { label: string; badgeClass: string; dotClass: string }
> = {
  Urgent: {
    label: "Urgent",
    badgeClass: "bg-red-50 text-red-700 border-red-200",
    dotClass: "bg-red-500",
  },
  High: {
    label: "High",
    badgeClass: "bg-orange-50 text-orange-700 border-orange-200",
    dotClass: "bg-orange-500",
  },
  Medium: {
    label: "Medium",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
    dotClass: "bg-amber-500",
  },
  Low: {
    label: "Low",
    badgeClass: "bg-neutral-100 text-neutral-600 border-neutral-200",
    dotClass: "bg-neutral-400",
  },
};

export default function TaskCard({
  task,
  onClick,
  onToggleComplete,
  onMoveForward,
}: TaskCardProps) {
  const isCompleted = task.status === "Completed";
  const completedSubtasks = task.subtasks.filter((s) => s.completed).length;
  const totalSubtasks = task.subtasks.length;
  const priority = priorityConfig[task.priority];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`
        group
        relative
        flex
        cursor-pointer
        flex-col
        justify-between
        rounded-2xl
        border
        bg-white
        p-4
        shadow-[0_1px_3px_rgba(23,26,22,0.03)]
        transition-shadow
        hover:border-[var(--color-primary)]
        hover:shadow-md
        ${
          isCompleted
            ? "border-[var(--color-border-light)] bg-white/70 opacity-80"
            : "border-[var(--color-border-light)]"
        }
      `}
      tabIndex={0}
      role="button"
      aria-label={`Task: ${task.title}`}
    >
      <div>
        {/* Top Badges: Category & Priority */}
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-md bg-[var(--color-background-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-text-secondary)]">
            {task.category}
          </span>

          <div className="flex items-center gap-1.5">
            <span
              className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold ${priority.badgeClass}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${priority.dotClass}`} />
              {priority.label}
            </span>

            {/* Complete quick toggle */}
            <button
              type="button"
              onClick={onToggleComplete}
              className={`flex h-6 w-6 items-center justify-center rounded-lg transition-colors ${
                isCompleted
                  ? "text-[var(--color-success)] bg-[var(--color-success-light)]"
                  : "text-[var(--color-text-muted)] hover:bg-[var(--color-background-soft)] hover:text-[var(--color-primary)]"
              }`}
              title={isCompleted ? "Mark incomplete" : "Mark completed"}
            >
              <CheckCircle2 size={16} strokeWidth={isCompleted ? 2.4 : 1.8} />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3
          className={`mt-2.5 text-[13.5px] font-semibold leading-snug tracking-[-0.01em] transition-colors group-hover:text-[var(--color-primary-dark)] ${
            isCompleted
              ? "line-through text-[var(--color-text-muted)]"
              : "text-[var(--color-text-primary)]"
          }`}
        >
          {task.title}
        </h3>

        {/* Description */}
        <p className="mt-1 text-xs text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
          {task.description}
        </p>

        {/* Progress Bar (with pattern-hatch for active) */}
        <div className="mt-3.5 space-y-1">
          <div className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1 text-[var(--color-text-muted)] font-medium">
              <CheckSquare size={12} strokeWidth={2} />
              {completedSubtasks}/{totalSubtasks} subtasks
            </span>
            <span className="font-bold tabular-nums text-[var(--color-text-secondary)]">
              {task.progress}%
            </span>
          </div>

          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-border-light)]">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                isCompleted
                  ? "bg-[var(--color-success)]"
                  : task.status === "In Progress"
                  ? "bg-[var(--color-primary)] pattern-hatch"
                  : "bg-[var(--color-primary-dark)]"
              }`}
              style={{ width: `${task.progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Row: Due date, Attachments, Assignees */}
      <div className="mt-4 flex items-center justify-between border-t border-[var(--color-border-light)] pt-3 text-xs">
        {/* Due Date & Meta */}
        <div className="flex items-center gap-3 text-[var(--color-text-muted)]">
          <span
            className={`inline-flex items-center gap-1 font-medium ${
              task.dueInDays < 0
                ? "text-[var(--color-danger)] font-bold"
                : task.dueInDays <= 2
                ? "text-orange-700 font-semibold"
                : ""
            }`}
          >
            <Clock size={12} strokeWidth={2} />
            {isCompleted
              ? "Completed"
              : task.dueInDays < 0
              ? `${Math.abs(task.dueInDays)}d overdue`
              : task.dueInDays === 0
              ? "Due today"
              : task.dueInDays === 1
              ? "Due tomorrow"
              : `In ${task.dueInDays} days`}
          </span>

          {task.attachmentsCount > 0 && (
            <span className="hidden items-center gap-0.5 sm:inline-flex">
              <Paperclip size={11} strokeWidth={2} />
              {task.attachmentsCount}
            </span>
          )}

          {task.commentsCount > 0 && (
            <span className="hidden items-center gap-0.5 sm:inline-flex">
              <MessageSquare size={11} strokeWidth={2} />
              {task.commentsCount}
            </span>
          )}
        </div>

        {/* Assignees Stack */}
        <div className="flex items-center -space-x-1.5">
          {task.assignees.map((assignee) => (
            <div
              key={assignee.id}
              className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white ring-2 ring-white"
              style={{ backgroundColor: assignee.avatarColor }}
              title={assignee.name}
            >
              {assignee.initials}
            </div>
          ))}

          {onMoveForward && !isCompleted && (
            <button
              type="button"
              onClick={onMoveForward}
              className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-background-soft)] text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary-dark)]"
              title="Advance to next stage"
            >
              <ArrowRight size={12} strokeWidth={2.4} />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
