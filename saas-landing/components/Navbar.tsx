"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hideSections = document.querySelectorAll(
        "[data-navbar-hide], footer"
      );

      const darkSections = document.querySelectorAll(
        "[data-navbar-dark]"
      );

      /* =========================================================
         HIDE NAVBAR FROM TALK TO US & FOOTER
      ========================================================= */

      let shouldHide = false;
      hideSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 72) {
          shouldHide = true;
        }
      });

      setIsHidden(shouldHide);

      /* =========================================================
         DARK SECTION DETECTION
      ========================================================= */

      let overDark = false;

      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 72 && rect.bottom > 0) {
          overDark = true;
        }
      });

      setIsDark(overDark);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      style={{
        transform: isHidden
          ? "translateY(-100%)"
          : "translateY(0)",

        opacity: isHidden ? 0 : 1,

        pointerEvents: isHidden ? "none" : "auto",

        transition:
          "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease, background-color 0.5s ease, border-color 0.5s ease, color 0.5s ease",
      }}
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-md ${
        isDark
          ? "border-white/10 bg-[#111111]/90 text-white"
          : "border-neutral-100 bg-white/80 text-black"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6 md:px-12">
        {/* =====================================================
            LOGO
        ===================================================== */}

        <a
          href="#"
          className={`text-[18px] font-bold tracking-tight transition-colors duration-500 ${
            isDark ? "text-white" : "text-black"
          }`}
          style={{
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          FOMO
        </a>

        {/* =====================================================
            NAVIGATION
        ===================================================== */}

        <nav className="hidden items-center gap-8 md:flex">
          {[
            "customers",
            "projects",
            "services",
            "about",
            "blog",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-[14px] font-normal transition-colors duration-500 ${
                isDark
                  ? "text-white/60 hover:text-white"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* =====================================================
            CTA
        ===================================================== */}

        <button
          className={`rounded-full px-5 py-2.5 text-[13px] font-medium transition-all duration-500 ${
            isDark
              ? "bg-white text-black hover:bg-neutral-200"
              : "bg-black text-white hover:bg-neutral-800"
          }`}
        >
          Start a project
        </button>
      </div>
    </header>
  );
}