"use client";

import { AnimatePresence } from "framer-motion";
import { Plus, CheckCircle2, Clock, CircleDot, Inbox } from "lucide-react";
import TaskCard from "./TaskCard";
import type { TaskItem, TaskStatus } from "@/types/task";

interface TaskKanbanViewProps {
  tasks: TaskItem[];
  onSelectTask: (task: TaskItem) => void;
  onToggleComplete: (taskId: string, e: React.MouseEvent) => void;
  onAdvanceStatus: (taskId: string, e: React.MouseEvent) => void;
  onAddTaskToColumn: (status: TaskStatus) => void;
}

const columns: Array<{
  status: TaskStatus;
  title: string;
  icon: React.ElementType;
  badgeClass: string;
  accentBorder: string;
}> = [
  {
    status: "Backlog",
    title: "Backlog",
    icon: Inbox,
    badgeClass: "bg-neutral-100 text-neutral-700",
    accentBorder: "border-t-neutral-400",
  },
  {
    status: "In Progress",
    title: "In Progress",
    icon: Clock,
    badgeClass: "bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]",
    accentBorder: "border-t-[var(--color-primary)]",
  },
  {
    status: "In Review",
    title: "In Review",
    icon: CircleDot,
    badgeClass: "bg-blue-50 text-blue-700",
    accentBorder: "border-t-blue-500",
  },
  {
    status: "Completed",
    title: "Completed",
    icon: CheckCircle2,
    badgeClass: "bg-emerald-50 text-emerald-700",
    accentBorder: "border-t-emerald-600",
  },
];

export default function TaskKanbanView({
  tasks,
  onSelectTask,
  onToggleComplete,
  onAdvanceStatus,
  onAddTaskToColumn,
}: TaskKanbanViewProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 items-start">
      {columns.map((col) => {
        const colTasks = tasks.filter((t) => t.status === col.status);
        const Icon = col.icon;

        return (
          <div
            key={col.status}
            className={`
              flex
              flex-col
              rounded-2xl
              border
              border-[var(--color-border-light)]
              border-t-4
              bg-[var(--color-background-soft)]
              p-3
              sm:p-3.5
              min-h-[420px]
              ${col.accentBorder}
            `}
          >
            {/* Column Header */}
            <div className="mb-3 flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <Icon size={16} className="text-[var(--color-text-secondary)]" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                  {col.title}
                </h2>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${col.badgeClass}`}
                >
                  {colTasks.length}
                </span>
              </div>

              <button
                type="button"
                onClick={() => onAddTaskToColumn(col.status)}
                className="flex h-6 w-6 items-center justify-center rounded-lg text-[var(--color-text-muted)] transition-colors hover:bg-white hover:text-[var(--color-primary-dark)]"
                title={`Add task to ${col.title}`}
              >
                <Plus size={14} strokeWidth={2.4} />
              </button>
            </div>

            {/* Task Cards Column Body */}
            <div className="flex flex-1 flex-col gap-2.5">
              <AnimatePresence mode="popLayout">
                {colTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onClick={() => onSelectTask(task)}
                    onToggleComplete={(e) => onToggleComplete(task.id, e)}
                    onMoveForward={
                      col.status !== "Completed"
                        ? (e) => onAdvanceStatus(task.id, e)
                        : undefined
                    }
                  />
                ))}
              </AnimatePresence>

              {colTasks.length === 0 && (
                <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-[var(--color-border)] p-6 text-center text-xs text-[var(--color-text-muted)]">
                  <p>No tasks in {col.title}</p>
                  <button
                    type="button"
                    onClick={() => onAddTaskToColumn(col.status)}
                    className="mt-2 text-xs font-semibold text-[var(--color-primary-dark)] hover:underline"
                  >
                    + Add a task
                  </button>
                </div>
              )}
            </div>

            {/* Quick add footer */}
            <button
              type="button"
              onClick={() => onAddTaskToColumn(col.status)}
              className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border border-dashed border-[var(--color-border)] py-2 text-xs font-medium text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-primary)] hover:bg-white hover:text-[var(--color-primary-dark)]"
            >
              <Plus size={13} strokeWidth={2.4} />
              <span>Add Task</span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
