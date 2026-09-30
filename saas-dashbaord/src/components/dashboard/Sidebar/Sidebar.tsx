"use client";

import { motion } from "framer-motion";
import { ChevronsUpDown } from "lucide-react";

import Logo from "./Logo";
import SidebarMenu from "./SidebarMenu";
import MobileAppCard from "./MobileAppCard";

export default function Sidebar() {
  return (
    <div className="flex h-full min-h-full flex-col justify-between px-3.5 py-5 sm:py-6">
      <div className="flex flex-col">
        {/* Logo */}
        <div className="mb-6">
          <Logo />
        </div>

        {/* Navigation */}
        <SidebarMenu />
      </div>

      <div className="mt-auto pt-5">
        {/* Mobile App Card */}
        <MobileAppCard />

        {/* Workspace selector */}
        <motion.button
          whileHover={{ backgroundColor: "var(--color-background-soft)" }}
          whileTap={{ scale: 0.98 }}
          className="
            mt-3
            flex
            w-full
            items-center
            justify-between
            rounded-xl
            border
            border-[var(--color-border-light)]
            bg-white
            px-2.5
            py-1.5
            text-left
            shadow-[0_1px_2px_rgba(0,0,0,0.02)]
            transition-colors
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[var(--color-primary)]
          "
          aria-label="Switch workspace"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
            <span className="truncate text-[11px] font-semibold text-[var(--color-text-primary)]">
              Donezo Pro
            </span>
          </div>

          <ChevronsUpDown size={12} className="shrink-0 text-[var(--color-text-muted)]" />
        </motion.button>
      </div>
    </div>
  );
}
