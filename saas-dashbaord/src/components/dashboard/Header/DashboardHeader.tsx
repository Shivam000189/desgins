"use client";

import { Menu } from "lucide-react";
import HeaderActions from "./HeaderActions";
import { useMobileMenu } from "../DashboardLayout";

export default function DashboardHeader() {
  const { openMenu } = useMobileMenu();

  return (
    <div className="flex h-full w-full items-center justify-between gap-3 px-4 sm:px-6 lg:px-7">
      {/* Left section: Mobile menu toggle */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <button
          type="button"
          onClick={openMenu}
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-[var(--color-border)]
            bg-[var(--color-background-soft)]
            text-[var(--color-text-secondary)]
            shadow-xs
            transition-colors
            duration-200
            hover:border-[var(--color-primary)]
            hover:bg-white
            hover:text-[var(--color-text-primary)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[var(--color-primary)]
            lg:hidden
          "
          aria-label="Open navigation menu"
        >
          <Menu size={18} strokeWidth={2.2} />
        </button>
      </div>

      {/* Right section: Action icon buttons and User Profile */}
      <div className="flex shrink-0 items-center ml-auto">
        <HeaderActions />
      </div>
    </div>
  );
}
