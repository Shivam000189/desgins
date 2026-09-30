"use client";

import { motion } from "framer-motion";
import DashboardIntro from "./DashboardIntro";
import DashboardActions from "./DashboardActions";

interface DashboardOverviewProps {
  onNewTask?: () => void;
  onAddProject?: () => void;
}

export default function DashboardOverview({
  onNewTask,
  onAddProject,
}: DashboardOverviewProps) {
  return (
    <motion.section
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
        flex
        flex-col
        gap-5
        sm:flex-row
        sm:items-end
        sm:justify-between
      "
    >
      <DashboardIntro />

      <DashboardActions onNewTask={onNewTask} onAddProject={onAddProject} />
    </motion.section>
  );
}
