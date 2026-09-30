"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FolderKanban, Users, Tag, Calendar, Percent } from "lucide-react";
import type { Project, ProjectStatus } from "@/types/dashboard";

interface NewProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateProject: (project: Omit<Project, "id">) => void;
}

const categories = [
  "Product Design",
  "Development",
  "Mobile App",
  "Infrastructure",
  "Security & Compliance",
  "Marketing",
];

const availableMembers = [
  { id: "SS", name: "Shivam Sharma", color: "#3a5030" },
  { id: "AK", name: "Alex Kumar", color: "#648354" },
  { id: "RM", name: "Rahul Mehta", color: "#4d7c0f" },
  { id: "PK", name: "Priya Kapoor", color: "#c2410c" },
  { id: "ER", name: "Elena Rostova", color: "#0369a1" },
];

export default function NewProjectModal({
  isOpen,
  onClose,
  onCreateProject,
}: NewProjectModalProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Product Design");
  const [status, setStatus] = useState<ProjectStatus>("Running");
  const [progress, setProgress] = useState(15);
  const [dueDate, setDueDate] = useState("Nov 15, 2026");
  const [selectedMembers, setSelectedMembers] = useState<string[]>(["SS", "AK"]);

  if (!isOpen) return null;

  const toggleMember = (id: string) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onCreateProject({
      name: name.trim(),
      category,
      status,
      progress: Number(progress),
      dueDate,
      members: selectedMembers.length > 0 ? selectedMembers : ["SS"],
    });

    setName("");
    setProgress(15);
    onClose();
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
          className="fixed inset-0 bg-neutral-900/50 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-[var(--color-border)] bg-white p-5 sm:p-6 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[var(--color-border-light)] pb-3.5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]">
                <FolderKanban size={18} strokeWidth={2.2} />
              </div>
              <div>
                <h2 className="text-base font-bold text-[var(--color-text-primary)]">
                  Add New Project
                </h2>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                  Initialize a new sprint initiative or client milestone
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-xl text-[var(--color-text-muted)] hover:bg-[var(--color-background-soft)] hover:text-[var(--color-text-primary)] transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs">
            {/* Project Name */}
            <div>
              <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                Project Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. NextGen Biometric Checkout"
                className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background-soft)] px-3 text-xs text-[var(--color-text-primary)] placeholder-[var(--color-text-light)] focus:bg-white focus:border-[var(--color-primary)] focus:outline-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="flex items-center gap-1.5 font-semibold text-[var(--color-text-secondary)] mb-1.5">
                <Tag size={13} />
                Category
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`rounded-xl border px-2.5 py-1.5 text-center text-[11px] font-semibold transition-all ${
                      category === cat
                        ? "border-[var(--color-primary)] bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] shadow-xs"
                        : "border-[var(--color-border-light)] bg-[var(--color-background-soft)] text-[var(--color-text-muted)] hover:bg-neutral-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Status & Due Date */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                  Initial Status
                </label>
                <div className="flex gap-1.5">
                  {(["Running", "Pending", "Completed"] as ProjectStatus[]).map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setStatus(st)}
                      className={`flex-1 rounded-xl border py-1.5 text-center text-[11px] font-semibold transition-all ${
                        status === st
                          ? "border-[var(--color-primary)] bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]"
                          : "border-[var(--color-border-light)] bg-[var(--color-background-soft)] text-[var(--color-text-muted)]"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-center gap-1.5 font-semibold text-[var(--color-text-secondary)] mb-1">
                  <Calendar size={13} />
                  Target Due Date
                </label>
                <input
                  type="text"
                  required
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  placeholder="e.g. Nov 15, 2026"
                  className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background-soft)] px-3 text-xs text-[var(--color-text-primary)] focus:bg-white focus:border-[var(--color-primary)] focus:outline-none"
                />
              </div>
            </div>

            {/* Progress Slider */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="flex items-center gap-1.5 font-semibold text-[var(--color-text-secondary)]">
                  <Percent size={13} />
                  Initial Progress
                </label>
                <span className="font-bold text-[var(--color-primary-dark)] tabular-nums">
                  {progress}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="w-full accent-[var(--color-primary)] cursor-pointer"
              />
            </div>

            {/* Team Members */}
            <div>
              <label className="flex items-center gap-1.5 font-semibold text-[var(--color-text-secondary)] mb-1.5">
                <Users size={13} />
                Assign Team Members
              </label>
              <div className="flex flex-wrap gap-1.5">
                {availableMembers.map((member) => {
                  const isSelected = selectedMembers.includes(member.id);
                  return (
                    <button
                      key={member.id}
                      type="button"
                      onClick={() => toggleMember(member.id)}
                      className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-all ${
                        isSelected
                          ? "border-[var(--color-primary)] bg-[var(--color-primary-light)] font-bold text-[var(--color-primary-dark)]"
                          : "border-[var(--color-border-light)] bg-white text-[var(--color-text-secondary)] hover:bg-[var(--color-background-soft)]"
                      }`}
                    >
                      <span
                        style={{ backgroundColor: member.color }}
                        className="flex h-4 w-4 items-center justify-center rounded-full text-[9px] text-white"
                      >
                        {member.id}
                      </span>
                      <span>{member.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-[var(--color-border-light)]">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl px-4 py-2 text-xs font-semibold text-[var(--color-text-secondary)] hover:bg-[var(--color-background-soft)] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-xl bg-[var(--color-primary-dark)] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[var(--color-primary)]"
              >
                Create Project
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
