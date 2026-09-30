"use client";

import { CheckCircle2, Circle, Clock } from "lucide-react";
import type { TaskItem, TaskPriority, TaskStatus } from "@/types/task";

interface TaskListViewProps {
  tasks: TaskItem[];
  onSelectTask: (task: TaskItem) => void;
  onToggleComplete: (taskId: string, e: React.MouseEvent) => void;
}

const statusBadge: Record<TaskStatus, string> = {
  Backlog: "bg-neutral-100 text-neutral-700",
  "In Progress": "bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]",
  "In Review": "bg-blue-50 text-blue-700",
  Completed: "bg-emerald-50 text-emerald-700",
};

const priorityBadge: Record<TaskPriority, string> = {
  Urgent: "bg-red-50 text-red-700 border-red-200",
  High: "bg-orange-50 text-orange-700 border-orange-200",
  Medium: "bg-amber-50 text-amber-800 border-amber-200",
  Low: "bg-neutral-100 text-neutral-600 border-neutral-200",
};

export default function TaskListView({
  tasks,
  onSelectTask,
  onToggleComplete,
}: TaskListViewProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-white shadow-xs">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          {/* Header */}
          <thead className="border-b border-[var(--color-border-light)] bg-[var(--color-background-soft)] text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
            <tr>
              <th scope="col" className="w-12 px-4 py-3.5 text-center">
                Done
              </th>
              <th scope="col" className="px-4 py-3.5">
                Task Name
              </th>
              <th scope="col" className="px-4 py-3.5">
                Category
              </th>
              <th scope="col" className="px-4 py-3.5">
                Priority
              </th>
              <th scope="col" className="px-4 py-3.5">
                Status
              </th>
              <th scope="col" className="px-4 py-3.5">
                Progress
              </th>
              <th scope="col" className="px-4 py-3.5">
                Due Date
              </th>
              <th scope="col" className="px-4 py-3.5 text-right">
                Assignees
              </th>
            </tr>
          </thead>

          {/* Rows */}
          <tbody className="divide-y divide-[var(--color-border-light)]">
            {tasks.map((task) => {
              const isCompleted = task.status === "Completed";

              return (
                <tr
                  key={task.id}
                  onClick={() => onSelectTask(task)}
                  className={`group cursor-pointer transition-colors hover:bg-[var(--color-background-soft)] ${
                    isCompleted ? "bg-white/60 opacity-75" : ""
                  }`}
                >
                  {/* Complete Checkbox */}
                  <td
                    className="px-4 py-3.5 text-center"
                    onClick={(e) => onToggleComplete(task.id, e)}
                  >
                    <button
                      type="button"
                      className={`inline-flex h-5 w-5 items-center justify-center rounded-md transition-colors ${
                        isCompleted
                          ? "text-[var(--color-success)] bg-[var(--color-success-light)]"
                          : "text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                      }`}
                      aria-label={isCompleted ? "Mark incomplete" : "Mark complete"}
                    >
                      {isCompleted ? (
                        <CheckCircle2 size={16} strokeWidth={2.4} />
                      ) : (
                        <Circle size={15} strokeWidth={2} />
                      )}
                    </button>
                  </td>

                  {/* Task Name */}
                  <td className="px-4 py-3.5 min-w-[240px]">
                    <div className="flex flex-col">
                      <span
                        className={`text-xs font-semibold leading-snug group-hover:text-[var(--color-primary-dark)] ${
                          isCompleted
                            ? "line-through text-[var(--color-text-muted)]"
                            : "text-[var(--color-text-primary)]"
                        }`}
                      >
                        {task.title}
                      </span>
                      <span className="text-[11px] text-[var(--color-text-muted)] line-clamp-1 mt-0.5">
                        {task.description}
                      </span>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span className="rounded-md bg-[var(--color-background-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--color-text-secondary)]">
                      {task.category}
                    </span>
                  </td>

                  {/* Priority */}
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold ${
                        priorityBadge[task.priority]
                      }`}
                    >
                      {task.priority}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold ${
                        statusBadge[task.status]
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>

                  {/* Progress */}
                  <td className="px-4 py-3.5 whitespace-nowrap min-w-[120px]">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-[var(--color-border-light)]">
                        <div
                          className={`h-full rounded-full ${
                            isCompleted
                              ? "bg-[var(--color-success)]"
                              : "bg-[var(--color-primary)]"
                          }`}
                          style={{ width: `${task.progress}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-bold tabular-nums text-[var(--color-text-muted)]">
                        {task.progress}%
                      </span>
                    </div>
                  </td>

                  {/* Due Date */}
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span
                      className={`flex items-center gap-1 text-[11px] font-medium ${
                        task.dueInDays < 0
                          ? "text-[var(--color-danger)] font-bold"
                          : task.dueInDays <= 2
                          ? "text-orange-700 font-semibold"
                          : "text-[var(--color-text-muted)]"
                      }`}
                    >
                      <Clock size={11} strokeWidth={2} />
                      {task.dueDate}
                    </span>
                  </td>

                  {/* Assignees */}
                  <td className="px-4 py-3.5 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end -space-x-1.5">
                      {task.assignees.map((assignee) => (
                        <div
                          key={assignee.id}
                          className="flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold text-white ring-2 ring-white"
                          style={{ backgroundColor: assignee.avatarColor }}
                          title={assignee.name}
                        >
                          {assignee.initials}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}

            {tasks.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="px-6 py-12 text-center text-xs text-[var(--color-text-muted)]"
                >
                  No tasks matching your current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
