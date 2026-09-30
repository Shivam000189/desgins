"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, UserPlus } from "lucide-react";
import type { Department, AccessLevel, TeamMemberItem } from "@/types/team";

interface InviteMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInviteMember: (member: Omit<TeamMemberItem, "id" | "joinedDate">) => void;
}

const departments: Department[] = [
  "Product & Design",
  "Frontend Engineering",
  "Backend & Infra",
  "Mobile Engineering",
  "QA & Security",
];

const avatarColors = ["#3a5030", "#648354", "#4d7c0f", "#c2410c", "#0369a1", "#b45309"];

export default function InviteMemberModal({
  isOpen,
  onClose,
  onInviteMember,
}: InviteMemberModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Frontend Engineer");
  const [department, setDepartment] = useState<Department>("Frontend Engineering");
  const [accessLevel, setAccessLevel] = useState<AccessLevel>("Member");
  const [location, setLocation] = useState("San Francisco, USA");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const initials = name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    const randomColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];

    onInviteMember({
      name,
      initials,
      avatarColor: randomColor,
      role,
      department,
      accessLevel,
      status: "Online",
      email,
      location,
      timezone: "Local (UTC)",
      activeTasksCount: 0,
      completedTasksCount: 0,
      skills: ["General", department.split(" ")[0]],
    });

    setName("");
    setEmail("");
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
          className="fixed inset-0 bg-black/45 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg rounded-2xl border border-[var(--color-border-light)] bg-white p-5 shadow-2xl z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[var(--color-border-light)] pb-3">
            <div>
              <h2 className="text-base font-bold text-[var(--color-text-primary)]">
                Invite Team Member
              </h2>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                Grant access to projects, repositories, and sprint planning.
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
            {/* Full Name */}
            <div>
              <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Maya Lin"
                className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background-soft)] px-3 text-xs text-[var(--color-text-primary)] focus:bg-white focus:border-[var(--color-primary)] focus-visible:outline-none"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. maya@shivam.io"
                className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background-soft)] px-3 text-xs text-[var(--color-text-primary)] focus:bg-white focus:border-[var(--color-primary)] focus-visible:outline-none"
              />
            </div>

            {/* Role & Department */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                  Role Title
                </label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Senior Frontend Dev"
                  className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-white px-3 text-xs text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus-visible:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                  Department
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value as Department)}
                  className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-white px-2.5 text-xs text-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus-visible:outline-none"
                >
                  {departments.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Access Level & Location */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                  Access Level
                </label>
                <select
                  value={accessLevel}
                  onChange={(e) => setAccessLevel(e.target.value as AccessLevel)}
                  className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-white px-2.5 text-xs text-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus-visible:outline-none"
                >
                  <option value="Member">Member</option>
                  <option value="Admin">Admin</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. London, UK"
                  className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-white px-3 text-xs text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus-visible:outline-none"
                />
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
                <UserPlus size={15} strokeWidth={2.4} />
                Send Invitation
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
