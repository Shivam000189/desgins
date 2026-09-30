"use client";

import { Menu } from "lucide-react";
import SearchBar from "./SearchBar";
import HeaderActions from "./HeaderActions";
import { useMobileMenu } from "../DashboardLayout";

export default function DashboardHeader() {
  const { openMenu } = useMobileMenu();

  return (
    <div className="flex h-full w-full items-center justify-between gap-3 px-4 sm:px-6 lg:px-7">
      {/* Left section: Mobile menu toggle + Search bar */}
      <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
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
            border-[#dfe4dc]
            bg-[#f4f6f3]
            text-[#4f554d]
            shadow-xs
            transition-all
            duration-200
            hover:border-[#648354]
            hover:bg-white
            hover:text-[#171a16]
            hover:shadow-sm
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#648354]
            lg:hidden
          "
          aria-label="Open navigation menu"
        >
          <Menu size={18} strokeWidth={2.2} />
        </button>

        <SearchBar />
      </div>

      {/* Right section: Action icon buttons and User Profile */}
      <div className="flex shrink-0 items-center">
        <HeaderActions />
      </div>
    </div>
  );
}
