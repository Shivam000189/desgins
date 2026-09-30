"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  Circle,
  Clock,
  Trash2,
  Plus,
  CheckSquare,
} from "lucide-react";
import type { TaskItem, TaskStatus } from "@/types/task";

interface TaskDetailModalProps {
  task: TaskItem | null;
  onClose: () => void;
  onUpdateTask: (updatedTask: TaskItem) => void;
  onDeleteTask: (taskId: string) => void;
}

const statusOptions: TaskStatus[] = [
  "Backlog",
  "In Progress",
  "In Review",
  "Completed",
];

export default function TaskDetailModal({
  task,
  onClose,
  onUpdateTask,
  onDeleteTask,
}: TaskDetailModalProps) {
  const [newSubtaskTitle, setNewSubtaskTitle] = useState("");

  if (!task) return null;

  const handleStatusChange = (newStatus: TaskStatus) => {
    const isNowCompleted = newStatus === "Completed";
    const updatedSubtasks = isNowCompleted
      ? task.subtasks.map((s) => ({ ...s, completed: true }))
      : task.subtasks;

    const completedCount = updatedSubtasks.filter((s) => s.completed).length;
    const progress =
      updatedSubtasks.length > 0
        ? Math.round((completedCount / updatedSubtasks.length) * 100)
        : isNowCompleted
        ? 100
        : task.progress;

    onUpdateTask({
      ...task,
      status: newStatus,
      progress: isNowCompleted ? 100 : progress,
      subtasks: updatedSubtasks,
    });
  };

  const handleToggleSubtask = (subtaskId: string) => {
    const updatedSubtasks = task.subtasks.map((s) =>
      s.id === subtaskId ? { ...s, completed: !s.completed } : s
    );
    const completedCount = updatedSubtasks.filter((s) => s.completed).length;
    const progress = Math.round((completedCount / updatedSubtasks.length) * 100);

    onUpdateTask({
      ...task,
      subtasks: updatedSubtasks,
      progress,
      status:
        progress === 100
          ? "Completed"
          : task.status === "Completed"
          ? "In Progress"
          : task.status,
    });
  };

  const handleAddSubtask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubtaskTitle.trim()) return;

    const newSubtask = {
      id: `st-${Date.now()}`,
      title: newSubtaskTitle.trim(),
      completed: false,
    };

    const updatedSubtasks = [...task.subtasks, newSubtask];
    const completedCount = updatedSubtasks.filter((s) => s.completed).length;
    const progress = Math.round((completedCount / updatedSubtasks.length) * 100);

    onUpdateTask({
      ...task,
      subtasks: updatedSubtasks,
      progress,
    });

    setNewSubtaskTitle("");
  };

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
          className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-white shadow-2xl z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[var(--color-border-light)] px-5 py-3.5 bg-[var(--color-background-soft)]">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-white border border-[var(--color-border-light)] px-2 py-0.5 text-[11px] font-semibold text-[var(--color-text-secondary)]">
                {task.category}
              </span>

              {/* Status Selector */}
              <div className="flex items-center gap-1 rounded-xl bg-white border border-[var(--color-border)] p-0.5">
                {statusOptions.map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => handleStatusChange(status)}
                    className={`rounded-lg px-2 py-1 text-[11px] font-bold transition-colors ${
                      task.status === status
                        ? "bg-[var(--color-primary-dark)] text-white shadow-xs"
                        : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => {
                  if (confirm("Delete this task?")) {
                    onDeleteTask(task.id);
                    onClose();
                  }
                }}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-text-muted)] hover:bg-red-50 hover:text-red-600 transition-colors"
                title="Delete task"
              >
                <Trash2 size={15} />
              </button>

              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-text-muted)] hover:bg-white hover:text-[var(--color-text-primary)] transition-colors"
              >
                <X size={17} />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 text-xs">
            {/* Title & Description */}
            <div>
              <h2 className="text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
                {task.title}
              </h2>
              <p className="mt-2 text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                {task.description}
              </p>
            </div>

            {/* Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-background-soft)] p-3.5">
              <div>
                <span className="text-[10px] uppercase font-bold text-[var(--color-text-muted)]">
                  Priority
                </span>
                <p className="mt-1 font-semibold text-[var(--color-text-primary)]">
                  {task.priority}
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-[var(--color-text-muted)]">
                  Due Date
                </span>
                <p className="mt-1 font-semibold text-[var(--color-text-primary)] flex items-center gap-1">
                  <Clock size={12} className="text-[var(--color-primary-dark)]" />
                  {task.dueDate}
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-[var(--color-text-muted)]">
                  Progress
                </span>
                <p className="mt-1 font-bold text-[var(--color-primary-dark)] tabular-nums">
                  {task.progress}%
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-[var(--color-text-muted)]">
                  Assignees
                </span>
                <div className="mt-1 flex items-center -space-x-1">
                  {task.assignees.map((a) => (
                    <div
                      key={a.id}
                      className="flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold text-white ring-1 ring-white"
                      style={{ backgroundColor: a.avatarColor }}
                      title={a.name}
                    >
                      {a.initials}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subtasks Checklist */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-sm text-[var(--color-text-primary)]">
                  <CheckSquare size={16} className="text-[var(--color-primary-dark)]" />
                  <span>Subtasks</span>
                  <span className="text-xs font-normal text-[var(--color-text-muted)]">
                    ({task.subtasks.filter((s) => s.completed).length}/{task.subtasks.length})
                  </span>
                </div>

                <div className="h-2 w-32 overflow-hidden rounded-full bg-[var(--color-border-light)]">
                  <div
                    className="h-full rounded-full bg-[var(--color-primary)] transition-all duration-300"
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
              </div>

              <div className="divide-y divide-[var(--color-border-light)] rounded-xl border border-[var(--color-border-light)] bg-white">
                {task.subtasks.map((subtask) => (
                  <button
                    key={subtask.id}
                    type="button"
                    onClick={() => handleToggleSubtask(subtask.id)}
                    className="flex w-full items-center gap-3 p-3 text-left transition-colors hover:bg-[var(--color-background-soft)]"
                  >
                    <div className="shrink-0 text-[var(--color-text-muted)]">
                      {subtask.completed ? (
                        <CheckCircle2
                          size={17}
                          className="text-[var(--color-success)]"
                          strokeWidth={2.4}
                        />
                      ) : (
                        <Circle size={17} strokeWidth={1.8} />
                      )}
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        subtask.completed
                          ? "line-through text-[var(--color-text-muted)]"
                          : "text-[var(--color-text-primary)]"
                      }`}
                    >
                      {subtask.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Add Subtask input */}
              <form onSubmit={handleAddSubtask} className="flex gap-2">
                <input
                  type="text"
                  value={newSubtaskTitle}
                  onChange={(e) => setNewSubtaskTitle(e.target.value)}
                  placeholder="Add a new subtask..."
                  className="h-8 flex-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-soft)] px-3 text-xs text-[var(--color-text-primary)] focus:bg-white focus:border-[var(--color-primary)] focus-visible:outline-none"
                />
                <button
                  type="submit"
                  className="flex h-8 items-center gap-1 rounded-xl bg-[var(--color-primary-light)] px-3 text-xs font-semibold text-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                >
                  <Plus size={14} />
                  Add
                </button>
              </form>
            </div>

            {/* Tags */}
            <div>
              <span className="text-xs font-bold text-[var(--color-text-primary)] mb-2 block">
                Tags & Labels
              </span>
              <div className="flex flex-wrap gap-1.5">
                {task.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--color-background-soft)] border border-[var(--color-border-light)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-text-secondary)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
