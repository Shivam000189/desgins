"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus } from "lucide-react";
import { taskAssignees } from "@/lib/dashboard/tasksData";
import type { TaskCategory, TaskItem, TaskPriority, TaskStatus } from "@/types/task";

interface NewTaskModalProps {
  isOpen: boolean;
  initialStatus?: TaskStatus;
  onClose: () => void;
  onCreateTask: (task: Omit<TaskItem, "id" | "createdAt">) => void;
}

const categories: TaskCategory[] = [
  "Product Design",
  "Frontend",
  "Backend API",
  "Mobile App",
  "Security",
  "Analytics",
];

export default function NewTaskModal({
  isOpen,
  initialStatus = "Backlog",
  onClose,
  onCreateTask,
}: NewTaskModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<TaskCategory>("Frontend");
  const [priority, setPriority] = useState<TaskPriority>("Medium");
  const [status, setStatus] = useState<TaskStatus>(initialStatus);
  const [dueDate, setDueDate] = useState("Oct 08, 2026");
  const [selectedAssigneeIds, setSelectedAssigneeIds] = useState<string[]>([
    taskAssignees[0].id,
  ]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const assignees = taskAssignees.filter((a) =>
      selectedAssigneeIds.includes(a.id)
    );

    onCreateTask({
      title,
      description,
      category,
      priority,
      status,
      dueDate,
      dueInDays: 7,
      progress: status === "Completed" ? 100 : status === "In Progress" ? 25 : 0,
      assignees: assignees.length > 0 ? assignees : [taskAssignees[0]],
      subtasks: [
        { id: `st-${Date.now()}-1`, title: "Define specifications", completed: false },
        { id: `st-${Date.now()}-2`, title: "Initial implementation", completed: false },
      ],
      attachmentsCount: 0,
      commentsCount: 0,
      tags: [category, priority],
    });

    setTitle("");
    setDescription("");
    onClose();
  };

  const toggleAssignee = (id: string) => {
    setSelectedAssigneeIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
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
          className="fixed inset-0 bg-black/40 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-[var(--color-border-light)] bg-white p-5 shadow-2xl z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[var(--color-border-light)] pb-3">
            <div>
              <h2 className="text-base font-bold text-[var(--color-text-primary)]">
                Create New Task
              </h2>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                Add a new task to your sprint workflow.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-text-muted)] hover:bg-[var(--color-background-soft)] hover:text-[var(--color-text-primary)]"
            >
              <X size={17} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs">
            {/* Title */}
            <div>
              <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                Task Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Design recurring billing notification drawer"
                className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background-soft)] px-3 text-xs text-[var(--color-text-primary)] focus:bg-white focus:border-[var(--color-primary)] focus-visible:outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                Description
              </label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Outline requirements, acceptance criteria, or design links..."
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background-soft)] p-3 text-xs text-[var(--color-text-primary)] focus:bg-white focus:border-[var(--color-primary)] focus-visible:outline-none"
              />
            </div>

            {/* Category & Priority Grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as TaskCategory)}
                  className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-white px-2.5 text-xs text-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus-visible:outline-none"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                  Priority
                </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as TaskPriority)}
                  className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-white px-2.5 text-xs text-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus-visible:outline-none"
                >
                  <option value="Urgent">Urgent</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>

            {/* Status & Due Date */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                  Initial Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as TaskStatus)}
                  className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-white px-2.5 text-xs text-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus-visible:outline-none"
                >
                  <option value="Backlog">Backlog</option>
                  <option value="In Progress">In Progress</option>
                  <option value="In Review">In Review</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                  Due Date
                </label>
                <input
                  type="text"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  placeholder="e.g. Oct 12, 2026"
                  className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-white px-3 text-xs text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus-visible:outline-none"
                />
              </div>
            </div>

            {/* Assignees */}
            <div>
              <label className="block font-semibold text-[var(--color-text-secondary)] mb-1.5">
                Assign Team Members
              </label>
              <div className="flex flex-wrap gap-2">
                {taskAssignees.map((assignee) => {
                  const isSelected = selectedAssigneeIds.includes(assignee.id);
                  return (
                    <button
                      key={assignee.id}
                      type="button"
                      onClick={() => toggleAssignee(assignee.id)}
                      className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 transition-all ${
                        isSelected
                          ? "bg-[var(--color-primary-dark)] text-white shadow-xs"
                          : "bg-[var(--color-background-soft)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border-light)]"
                      }`}
                    >
                      <div
                        className="flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold text-white"
                        style={{ backgroundColor: assignee.avatarColor }}
                      >
                        {assignee.initials}
                      </div>
                      <span className="text-[11px] font-medium">{assignee.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center justify-end gap-2.5 border-t border-[var(--color-border-light)] pt-4">
              <button
                type="button"
                onClick={onClose}
                className="h-9 rounded-xl border border-[var(--color-border)] px-4 font-semibold text-[var(--color-text-secondary)] hover:bg-[var(--color-background-soft)]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex h-9 items-center gap-1.5 rounded-xl bg-[var(--color-primary-dark)] px-4 font-semibold text-white shadow-xs hover:bg-[var(--color-primary)]"
              >
                <Plus size={15} strokeWidth={2.4} />
                Create Task
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
