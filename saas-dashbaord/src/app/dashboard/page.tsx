"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import DashboardHeader from "@/components/dashboard/Header/DashboardHeader";

import DashboardOverview from "@/components/dashboard/Overview/DashboardOverview";
import ProjectStats from "@/components/dashboard/Overview/ProjectStats";
import DashboardGrid from "@/components/dashboard/DashboardGrid";
import NewTaskModal from "@/components/tasks/NewTaskModal";
import NewProjectModal from "@/components/dashboard/Projects/NewProjectModal";

import { initialProjects } from "@/lib/dashboard/data";
import type { TaskItem } from "@/types/task";
import type { Project } from "@/types/dashboard";

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const [isNewProjectOpen, setIsNewProjectOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCreateTask = (taskData: Omit<TaskItem, "id" | "createdAt">) => {
    setToastMessage(`Task "${taskData.title}" created successfully!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleCreateProject = (projectData: Omit<Project, "id">) => {
    const newProject: Project = {
      ...projectData,
      id: `p-${Date.now()}`,
    };
    setProjects((prev) => [newProject, ...prev]);
    setToastMessage(`Project "${newProject.name}" added successfully!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <DashboardLayout
      sidebar={<Sidebar />}
      header={<DashboardHeader />}
    >
      <div className="space-y-5">
        {/* =========================================
            PAGE INTRO with Action Triggers
        ========================================= */}
        <DashboardOverview
          onNewTask={() => setIsNewTaskOpen(true)}
          onAddProject={() => setIsNewProjectOpen(true)}
        />

        {/* =========================================
            STATISTICS
        ========================================= */}
        <ProjectStats />

        {/* =========================================
            DASHBOARD GRID
        ========================================= */}
        <DashboardGrid
          projects={projects}
          onNewTask={() => setIsNewTaskOpen(true)}
          onAddProject={() => setIsNewProjectOpen(true)}
        />

        {/* =========================================
            NEW TASK MODAL
        ========================================= */}
        <NewTaskModal
          isOpen={isNewTaskOpen}
          onClose={() => setIsNewTaskOpen(false)}
          onCreateTask={handleCreateTask}
        />

        {/* =========================================
            NEW PROJECT MODAL
        ========================================= */}
        <NewProjectModal
          isOpen={isNewProjectOpen}
          onClose={() => setIsNewProjectOpen(false)}
          onCreateProject={handleCreateProject}
        />

        {/* =========================================
            TOAST NOTIFICATION
        ========================================= */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-xl border border-[var(--color-primary)] bg-[var(--color-primary-dark)] px-4 py-3 text-xs font-semibold text-white shadow-xl"
            >
              <CheckCircle2 size={16} className="text-emerald-300" />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
}
