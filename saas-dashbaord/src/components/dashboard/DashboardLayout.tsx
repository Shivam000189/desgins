"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  type ReactNode,
} from "react";
import { X } from "lucide-react";

interface MobileMenuContextType {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

const MobileMenuContext = createContext<MobileMenuContextType>({
  isOpen: false,
  openMenu: () => {},
  closeMenu: () => {},
});

export const useMobileMenu = () => useContext(MobileMenuContext);

interface DashboardLayoutProps {
  sidebar: ReactNode;
  header: ReactNode;
  children: ReactNode;
}

export default function DashboardLayout({
  sidebar,
  header,
  children,
}: DashboardLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <MobileMenuContext.Provider value={{ isOpen, openMenu, closeMenu }}>
      <div className="min-h-screen bg-[var(--color-background-soft)] p-2 sm:p-3.5 lg:p-5">
        <div className="mx-auto flex min-h-[calc(100vh-16px)] sm:min-h-[calc(100vh-28px)] max-w-[1600px] overflow-hidden rounded-[18px] sm:rounded-[24px] border border-[var(--color-border-light)] bg-white shadow-[0_8px_36px_rgba(23,26,22,0.04)]">
          {/* =========================================
              DESKTOP SIDEBAR
          ========================================= */}

          <aside
            className="
              hidden
              w-[210px]
              xl:w-[224px]
              shrink-0
              border-r
              border-[var(--color-border-light)]
              bg-white
              lg:flex
              lg:flex-col
            "
          >
            {sidebar}
          </aside>

          {/* =========================================
              MAIN CONTENT AREA
          ========================================= */}

          <main className="flex min-w-0 flex-1 flex-col">
            {/* HEADER */}

            <header className="h-[68px] shrink-0 border-b border-[#e2e7e0] bg-white">
              {header}
            </header>

            {/* CONTENT */}

            <section
              className="
                min-w-0
                flex-1
                overflow-x-hidden
                bg-[var(--color-background-soft)]
                p-3.5
                sm:p-5
                lg:p-6
                xl:p-7
              "
            >
              {children}
            </section>
          </main>
        </div>

        {/* =========================================
            MOBILE DRAWER & BACKDROP
        ========================================= */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                key="mobile-drawer-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMenu}
                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
                aria-hidden="true"
              />

              <motion.aside
                key="mobile-drawer"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation drawer"
                initial={prefersReducedMotion ? false : { x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 280 }}
                className="fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col bg-white shadow-2xl lg:hidden"
              >
                {/* Drawer Header */}
                <div className="flex h-[56px] items-center justify-between border-b border-[var(--color-border-light)] px-4">
                  <span className="text-[12px] font-semibold text-[var(--color-text-secondary)]">
                    Navigation
                  </span>
                  <button
                    type="button"
                    onClick={closeMenu}
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      text-[var(--color-text-muted)]
                      transition-colors
                      hover:bg-[var(--color-background-soft)]
                      hover:text-[var(--color-text-primary)]
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[var(--color-primary)]
                    "
                    aria-label="Close navigation menu"
                  >
                    <X size={17} strokeWidth={2} />
                  </button>
                </div>

                {/* Drawer Content */}
                <div
                  className="flex-1 overflow-y-auto"
                  onClick={(e) => {
                    // Close drawer if clicking interactive elements inside
                    const target = e.target as HTMLElement;
                    if (target.closest("button") || target.closest("a")) {
                      closeMenu();
                    }
                  }}
                >
                  {sidebar}
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>
    </MobileMenuContext.Provider>
  );
}
