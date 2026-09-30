"use client";

import { motion } from "framer-motion";
import {
  FolderKanban,
  ArrowUpRight,
  Plus,
  AlertCircle,
  FolderOpen,
} from "lucide-react";

import ProjectItem from "./ProjectItem";
import { initialProjects } from "@/lib/dashboard/data";
import type { Project } from "@/types/dashboard";

interface ProjectListProps {
  items?: Project[];
  isLoading?: boolean;
  error?: string | null;
  onRetry?: () => void;
}

export default function ProjectList({
  items = initialProjects,
  isLoading = false,
  error = null,
  onRetry,
}: ProjectListProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        delay: 0.12,
        ease: "easeOut",
      }}
      className="
        w-full
        min-w-0
        rounded-2xl
        border
        border-[var(--color-border-light)]
        bg-white
        p-4
        sm:p-5
        lg:p-6
        shadow-[0_1px_3px_rgba(23,26,22,0.03)]
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[var(--color-primary-light)]
              text-[var(--color-primary)]
            "
          >
            <FolderKanban
              size={17}
              strokeWidth={2}
            />
          </div>

          <div>
            <h2 className="text-[15px] font-semibold text-[var(--color-text-primary)]">
              Projects
            </h2>

            <p className="text-[11px] text-[var(--color-text-muted)]">
              Your recent projects and team assignments
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{
            x: 2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            flex
            items-center
            gap-1
            text-[11px]
            font-medium
            text-[var(--color-primary)]
            hover:text-[var(--color-primary-dark)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[var(--color-primary)]
            rounded-md
            px-1
          "
        >
          <span>View all</span>

          <ArrowUpRight
            size={13}
            strokeWidth={2}
          />
        </motion.button>
      </div>

      {/* States: Loading / Error / Empty / List */}

      {isLoading ? (
        <div className="mt-4 divide-y divide-[var(--color-border-light)]">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex animate-pulse items-center justify-between py-3.5 px-3">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-[var(--color-border-light)]" />
                <div className="space-y-1.5">
                  <div className="h-3 w-32 rounded bg-[var(--color-border-light)]" />
                  <div className="h-2.5 w-20 rounded bg-[var(--color-border-light)]" />
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-4">
                <div className="h-6 w-16 rounded-full bg-[var(--color-border-light)]" />
                <div className="h-2 w-28 rounded bg-[var(--color-border-light)]" />
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="my-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-[var(--color-danger)]/30 bg-[var(--color-danger-light)]/40 p-6 text-center">
          <AlertCircle size={24} className="text-[var(--color-danger)]" />
          <p className="mt-2 text-[13px] font-semibold text-[var(--color-text-primary)]">
            Couldn&apos;t load projects
          </p>
          <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
            {error || "An unexpected error occurred while fetching your projects."}
          </p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-3 rounded-xl bg-[var(--color-primary)] px-3 py-1.5 text-[11px] font-medium text-white hover:bg-[var(--color-primary-dark)]"
            >
              Try again
            </button>
          )}
        </div>
      ) : items.length === 0 ? (
        <div className="my-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-[var(--color-border-dark)] p-8 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
            <FolderOpen size={20} />
          </div>
          <p className="mt-2.5 text-[13px] font-semibold text-[var(--color-text-primary)]">
            No projects yet
          </p>
          <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5 max-w-[280px]">
            Get started by creating your first project to organize your team&apos;s tasks.
          </p>
          <button className="mt-3.5 inline-flex items-center gap-1.5 rounded-xl bg-[var(--color-primary)] px-3.5 py-1.5 text-[11px] font-medium text-white hover:bg-[var(--color-primary-dark)]">
            <Plus size={13} strokeWidth={2.2} />
            <span>Create project</span>
          </button>
        </div>
      ) : (
        <div className="mt-4 divide-y divide-[var(--color-border-light)]">
          {items.map((project) => (
            <ProjectItem
              key={project.id || project.name}
              {...project}
            />
          ))}
        </div>
      )}
    </motion.section>
  );
}
