"use client";

import { motion } from "framer-motion";

import DashboardIntro from "./DashboardIntro";
import DashboardActions from "./DashboardActions";

export default function DashboardOverview() {
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

      <DashboardActions />
    </motion.section>
  );
}
