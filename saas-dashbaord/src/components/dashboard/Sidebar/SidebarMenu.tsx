"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import {
  LayoutDashboard,
  ListTodo,
  CalendarDays,
  BarChart3,
  UsersRound,
  Settings,
  CircleHelp,
  LogOut,
} from "lucide-react";

interface MenuItem {
  label: string;
  icon: React.ElementType;
  href: string;
  badge?: string;
  isLogout?: boolean;
}

const mainMenu: MenuItem[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Tasks",
    icon: ListTodo,
    href: "/tasks",
    badge: "12+",
  },
  {
    label: "Calendar",
    icon: CalendarDays,
    href: "/calendar",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    label: "Team",
    icon: UsersRound,
    href: "/team",
  },
];

const generalMenu: MenuItem[] = [
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    label: "Help",
    icon: CircleHelp,
    href: "#help",
  },
  {
    label: "Logout",
    icon: LogOut,
    href: "#logout",
    isLogout: true,
  },
];

function MenuItemComponent({
  item,
  index,
  active = false,
}: {
  item: MenuItem;
  index: number;
  active?: boolean;
}) {
  const Icon = item.icon;
  const prefersReducedMotion = useReducedMotion();
  const isLogout = item.isLogout;

  const content = (
    <motion.div
      initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.3,
        delay: prefersReducedMotion ? 0 : 0.04 + index * 0.02,
        ease: "easeOut",
      }}
      whileHover={{
        x: prefersReducedMotion ? 0 : 2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={`
        group
        relative
        flex
        h-10
        w-full
        items-center
        gap-3
        rounded-xl
        px-3
        text-left
        transition-colors
        duration-200
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--color-primary)]
        ${
          active
            ? "bg-[var(--color-primary-light)] text-[var(--color-primary-darker)] font-semibold"
            : isLogout
            ? "text-[var(--color-text-secondary)] font-medium hover:bg-[#faeaea] hover:text-[var(--color-danger)]"
            : "text-[var(--color-text-secondary)] font-medium hover:bg-[var(--color-background-soft)] hover:text-[var(--color-text-primary)]"
        }
      `}
      aria-current={active ? "page" : undefined}
    >
      {/* Active indicator bar */}
      {active && (
        <span
          className="
            absolute
            -left-3.5
            top-1/2
            h-6
            w-[3.5px]
            -translate-y-1/2
            rounded-r-full
            bg-[var(--color-primary)]
          "
        />
      )}

      <Icon
        size={18}
        strokeWidth={active ? 2.2 : 1.8}
        className={`
          shrink-0
          transition-transform
          duration-200
          group-hover:translate-x-0.5
          ${
            active
              ? "text-[var(--color-primary)]"
              : isLogout
              ? "text-[var(--color-text-muted)] group-hover:text-[var(--color-danger)]"
              : "text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)]"
          }
        `}
      />

      <span className="flex-1 text-[13px]">{item.label}</span>

      {item.badge && (
        <span
          className="
            rounded-full
            bg-[var(--color-primary)]
            px-2
            py-0.5
            text-[9px]
            font-bold
            leading-none
            text-white
            transition-transform
            duration-200
            group-hover:scale-105
          "
        >
          {item.badge}
        </span>
      )}
    </motion.div>
  );

  if (item.href.startsWith("/")) {
    return (
      <Link href={item.href} className="block w-full">
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        if (item.isLogout) {
          alert("Logged out successfully.");
        }
      }}
      className="block w-full text-left"
    >
      {content}
    </button>
  );
}

export default function SidebarMenu() {
  const pathname = usePathname();

  const isItemActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/" || pathname === "/dashboard";
    }
    if (href.startsWith("/")) {
      return pathname === href || pathname.startsWith(href + "/");
    }
    return false;
  };

  return (
    <nav className="flex flex-col gap-6" aria-label="Main Navigation">
      {/* MENU */}
      <div>
        <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-text-light)]">
          Menu
        </p>

        <div className="flex flex-col gap-1">
          {mainMenu.map((item, index) => (
            <MenuItemComponent
              key={item.label}
              item={item}
              index={index}
              active={isItemActive(item.href)}
            />
          ))}
        </div>
      </div>

      {/* GENERAL */}
      <div>
        <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-text-light)]">
          General
        </p>

        <div className="flex flex-col gap-1">
          {generalMenu.map((item, index) => (
            <MenuItemComponent
              key={item.label}
              item={item}
              index={index + mainMenu.length}
              active={isItemActive(item.href)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
