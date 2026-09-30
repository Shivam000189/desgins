"use client";

import { useRef, useEffect, useState } from "react";
import { Search, Command, X } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Global shortcut: ⌘K or Ctrl+K to focus search
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="group relative w-full max-w-[240px] xs:max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]">
      {/* Search Icon */}
      <Search
        size={16}
        strokeWidth={2.2}
        className="
          pointer-events-none
          absolute
          left-3.5
          top-1/2
          -translate-y-1/2
          text-[#7b8178]
          transition-colors
          duration-200
          group-focus-within:text-[#648354]
        "
      />

      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search projects, tasks, or team members"
        placeholder="Search anything..."
        className="
          h-10
          w-full
          rounded-xl
          border
          border-[#dfe4dc]
          bg-[#f4f6f3]
          pl-10
          pr-10
          sm:pr-14
          text-[13px]
          font-normal
          text-[#171a16]
          placeholder:text-[#7b8178]
          shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]
          transition-all
          duration-200
          hover:border-[#cbd3c7]
          hover:bg-white
          focus:border-[#648354]
          focus:bg-white
          focus:shadow-[0_0_0_3px_rgba(100,131,84,0.14)]
          focus:outline-none
        "
      />

      {/* Clear button (when query is present) */}
      {query ? (
        <button
          type="button"
          onClick={() => {
            setQuery("");
            inputRef.current?.focus();
          }}
          className="
            absolute
            right-2.5
            top-1/2
            flex
            h-5
            w-5
            -translate-y-1/2
            items-center
            justify-center
            rounded-md
            text-[#7b8178]
            transition-colors
            hover:bg-[#e8efe5]
            hover:text-[#171a16]
          "
          aria-label="Clear search query"
        >
          <X size={13} strokeWidth={2.2} />
        </button>
      ) : (
        /* Keyboard shortcut badge */
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-2.5
            top-1/2
            hidden
            -translate-y-1/2
            items-center
            gap-1
            rounded-md
            border
            border-[#dce2d8]
            bg-white
            px-1.5
            py-0.5
            text-[10px]
            font-medium
            text-[#7b8178]
            shadow-xs
            sm:flex
          "
        >
          <Command size={10} strokeWidth={2.2} />
          <span className="font-mono">K</span>
        </div>
      )}
    </div>
  );
}
