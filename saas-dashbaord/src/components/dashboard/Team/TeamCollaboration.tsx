"use client";

import { motion } from "framer-motion";
import {
  UsersRound,
  Plus,
  ArrowUpRight,
} from "lucide-react";

import TeamMember from "./TeamMember";
import { initialTeamMembers } from "@/lib/dashboard/data";

export default function TeamCollaboration() {
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
        delay: 0.15,
        ease: "easeOut",
      }}
      className="
        flex
        h-full
        min-w-0
        flex-col
        justify-between
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
            <UsersRound
              size={17}
              strokeWidth={2}
            />
          </div>

          <div>
            <h2 className="text-[15px] font-semibold text-[var(--color-text-primary)]">
              Team Collaboration
            </h2>

            <p className="text-[11px] text-[var(--color-text-muted)]">
              People working on your projects
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{
            x: 2,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            flex
            items-center
            gap-1
            rounded-lg
            px-2
            py-1
            text-[11px]
            font-medium
            text-[var(--color-primary)]
            hover:text-[var(--color-primary-dark)]
            hover:bg-[var(--color-primary-light)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[var(--color-primary)]
            transition-colors
          "
          aria-label="View all team members"
        >
          <span>View all</span>

          <ArrowUpRight
            size={13}
            strokeWidth={2}
          />
        </motion.button>
      </div>

      {/* Team Members */}

      <div className="my-3 flex flex-1 flex-col justify-center gap-1">
        {initialTeamMembers.map((member) => (
          <TeamMember
            key={member.id}
            {...member}
          />
        ))}
      </div>

      {/* Add Member */}

      <motion.button
        whileHover={{
          y: -1,
          borderColor: "var(--color-primary)",
          backgroundColor: "var(--color-background-soft)",
          color: "var(--color-primary)",
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          flex
          h-9
          w-full
          items-center
          justify-center
          gap-1.5
          rounded-xl
          border
          border-dashed
          border-[var(--color-border-dark)]
          text-[11px]
          font-medium
          text-[var(--color-text-secondary)]
          transition-colors
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[var(--color-primary)]
        "
        aria-label="Add team member"
      >
        <Plus
          size={14}
          strokeWidth={2}
        />

        <span>Add team member</span>
      </motion.button>
    </motion.section>
  );
}
