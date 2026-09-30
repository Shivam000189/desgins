"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ChevronDown,
  User,
  Settings,
  ShieldCheck,
  LogOut,
  Sparkles,
} from "lucide-react";

interface UserProfileProps {
  name?: string;
  role?: string;
  initials?: string;
  email?: string;
}

export default function UserProfile({
  name = "Shivam Sharma",
  role = "Administrator",
  initials = "SS",
  email = "shivam@shivam.io",
}: UserProfileProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="User account menu"
        className={`
          flex
          h-10
          items-center
          gap-2.5
          rounded-xl
          border
          px-2.5
          py-1
          shadow-xs
          transition-all
          duration-200
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#648354]
          ${
            isOpen
              ? "border-[#648354] bg-white ring-2 ring-[#648354]/15 shadow-sm"
              : "border-[#dfe4dc] bg-[#f4f6f3] hover:border-[#648354] hover:bg-white hover:shadow-sm"
          }
        `}
      >
        {/* Avatar with status indicator */}
        <div className="relative shrink-0">
          <div
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg
              border
              border-[#648354]/30
              bg-[#e8efe5]
              text-[11px]
              font-bold
              text-[#3f5635]
              shadow-xs
            "
          >
            {initials}
          </div>

          {/* Active status dot */}
          <span
            className="
              absolute
              -bottom-0.5
              -right-0.5
              h-2
              w-2
              rounded-full
              border-2
              border-white
              bg-[#648354]
            "
          />
        </div>

        {/* User Info (hidden on mobile, visible on sm+) */}
        <div className="hidden text-left sm:block">
          <p className="max-w-[120px] truncate text-[12.5px] font-semibold leading-tight text-[#171a16]">
            {name}
          </p>

          <p className="text-[10px] font-medium leading-tight text-[#7b8178]">
            {role}
          </p>
        </div>

        {/* Chevron Icon */}
        <ChevronDown
          size={14}
          strokeWidth={2.2}
          className={`shrink-0 text-[#7b8178] transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#648354]" : "group-hover:text-[#171a16]"
          }`}
        />
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            role="menu"
            aria-orientation="vertical"
            className="
              absolute
              right-0
              top-[48px]
              z-50
              w-60
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe4dc]
              bg-white
              p-1.5
              shadow-[0_16px_40px_rgba(23,26,22,0.12)]
            "
          >
            {/* Header info */}
            <div className="border-b border-[#edf0eb] px-3.5 py-3 bg-[#fafbf9] rounded-t-xl mb-1">
              <div className="flex items-center justify-between gap-1.5">
                <p className="truncate text-[12.5px] font-semibold text-[#171a16]">
                  {name}
                </p>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-[#e8efe5] px-2 py-0.5 text-[9px] font-bold text-[#3f5635]">
                  <ShieldCheck size={10} strokeWidth={2.5} />
                  PRO
                </span>
              </div>
              <p className="truncate text-[11px] text-[#7b8178] mt-0.5">
                {email}
              </p>
            </div>

            {/* Menu Items */}
            <div className="py-1">
              <button
                type="button"
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="
                  flex
                  w-full
                  items-center
                  gap-2.5
                  rounded-xl
                  px-3
                  py-2
                  text-[12px]
                  font-medium
                  text-[#4f554d]
                  transition-colors
                  hover:bg-[#f4f6f3]
                  hover:text-[#171a16]
                "
              >
                <User size={15} strokeWidth={1.8} className="text-[#7b8178]" />
                <span>My Profile</span>
              </button>

              <button
                type="button"
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="
                  flex
                  w-full
                  items-center
                  gap-2.5
                  rounded-xl
                  px-3
                  py-2
                  text-[12px]
                  font-medium
                  text-[#4f554d]
                  transition-colors
                  hover:bg-[#f4f6f3]
                  hover:text-[#171a16]
                "
              >
                <Settings size={15} strokeWidth={1.8} className="text-[#7b8178]" />
                <span>Account Settings</span>
              </button>

              <button
                type="button"
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="
                  flex
                  w-full
                  items-center
                  gap-2.5
                  rounded-xl
                  px-3
                  py-2
                  text-[12px]
                  font-medium
                  text-[#4f554d]
                  transition-colors
                  hover:bg-[#f4f6f3]
                  hover:text-[#171a16]
                "
              >
                <Sparkles size={15} strokeWidth={1.8} className="text-[#648354]" />
                <span>What&apos;s New</span>
              </button>
            </div>

            {/* Logout button */}
            <div className="border-t border-[#edf0eb] pt-1 mt-1">
              <button
                type="button"
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="
                  flex
                  w-full
                  items-center
                  gap-2.5
                  rounded-xl
                  px-3
                  py-2
                  text-[12px]
                  font-medium
                  text-[#c86b6b]
                  transition-colors
                  hover:bg-[#faeaea]
                "
              >
                <LogOut size={15} strokeWidth={1.8} />
                <span>Log out</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
