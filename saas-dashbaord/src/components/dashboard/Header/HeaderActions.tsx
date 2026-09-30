"use client";

import { motion } from "framer-motion";
import { MessageCircle, Bell } from "lucide-react";
import UserProfile from "./UserProfile";

interface HeaderActionsProps {
  unreadMessagesCount?: number;
  unreadNotificationsCount?: number;
}

export default function HeaderActions({
  unreadMessagesCount = 2,
  unreadNotificationsCount = 5,
}: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-2.5">
      {/* Messages Button */}
      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.95 }}
        className="
          relative
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
        "
        aria-label={`Messages (${unreadMessagesCount} unread)`}
      >
        <MessageCircle size={17} strokeWidth={2} />

        {unreadMessagesCount > 0 && (
          <span
            className="
              absolute
              right-2
              top-2
              flex
              h-2
              w-2
              rounded-full
              border-2
              border-white
              bg-[#648354]
            "
          />
        )}
      </motion.button>

      {/* Notifications Button */}
      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.95 }}
        className="
          relative
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
        "
        aria-label={`Notifications (${unreadNotificationsCount} unread)`}
      >
        <Bell size={17} strokeWidth={2} />

        {unreadNotificationsCount > 0 && (
          <span className="absolute right-2 top-2 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#648354] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full border-2 border-white bg-[#648354]" />
          </span>
        )}
      </motion.button>

      {/* Subtle Vertical Divider */}
      <div className="mx-0.5 sm:mx-1 h-6 w-px shrink-0 bg-[#e2e7e0]" />

      {/* User Profile */}
      <UserProfile />
    </div>
  );
}
