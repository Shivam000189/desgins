"use client";

import { motion } from "framer-motion";

import ProjectAnalytics from "./Analytics/ProjectAnalytics";
import ReminderCard from "./Reminders/ReminderCard";
import ProjectList from "./Projects/ProjectList";

import TeamCollaboration from "./Team/TeamCollaboration";
import ProjectProgress from "./Progress/ProjectProgress";
import TimeTracker from "./TimeTracker/TimeTracker";
import type { Project } from "@/types/dashboard";

interface DashboardGridProps {
  onNewTask?: () => void;
  onAddProject?: () => void;
  projects?: Project[];
}

export default function DashboardGrid({
  onNewTask,
  onAddProject,
  projects,
}: DashboardGridProps) {
  return (
    <div className="space-y-4 sm:space-y-5">
      {/* =========================================
          TOP ROW: ANALYTICS + REMINDERS
      ========================================= */}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="
          grid
          grid-cols-1
          gap-4
          sm:gap-5
          lg:grid-cols-[1.8fr_1fr]
          xl:grid-cols-[2.1fr_1fr]
        "
      >
        {/* Analytics */}

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 10,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          className="min-w-0"
        >
          <ProjectAnalytics />
        </motion.div>

        {/* Reminders */}

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 10,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          className="min-w-0"
        >
          <ReminderCard />
        </motion.div>
      </motion.div>

      {/* =========================================
          MIDDLE ROW: PROJECT LIST (FULL WIDTH)
      ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.35,
          delay: 0.16,
        }}
        className="w-full min-w-0"
      >
        <ProjectList
          items={projects}
          onNewTask={onNewTask}
          onAddProject={onAddProject}
        />
      </motion.div>

      {/* =========================================
          BOTTOM ROW: TEAM + PROGRESS + TRACKER
      ========================================= */}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="
          grid
          grid-cols-1
          gap-4
          sm:gap-5
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {/* Team Collaboration */}

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 10,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          className="min-w-0 md:col-span-2 lg:col-span-1"
        >
          <TeamCollaboration />
        </motion.div>

        {/* Project Progress */}

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 10,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          className="min-w-0"
        >
          <ProjectProgress />
        </motion.div>

        {/* Time Tracker */}

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 10,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          className="min-w-0"
        >
          <TimeTracker />
        </motion.div>
      </motion.div>
    </div>
  );
}
