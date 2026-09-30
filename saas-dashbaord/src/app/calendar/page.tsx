"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import DashboardHeader from "@/components/dashboard/Header/DashboardHeader";
import CalendarHeader from "@/components/calendar/CalendarHeader";
import CalendarKPIs from "@/components/calendar/CalendarKPIs";
import CalendarGrid from "@/components/calendar/CalendarGrid";
import CalendarAgendaView from "@/components/calendar/CalendarAgendaView";
import NewEventModal from "@/components/calendar/NewEventModal";
import EventDetailModal from "@/components/calendar/EventDetailModal";
import { initialCalendarEvents } from "@/lib/dashboard/calendarData";
import type { CalendarEventItem, CalendarViewMode } from "@/types/calendar";

export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEventItem[]>(initialCalendarEvents);
  const [viewMode, setViewMode] = useState<CalendarViewMode>("month");
  const [currentMonthIndex, setCurrentMonthIndex] = useState(9); // 0-indexed: 9 = October
  const [currentYear, setCurrentYear] = useState(2026);

  const [isNewEventModalOpen, setIsNewEventModalOpen] = useState(false);
  const [selectedDateForNewEvent, setSelectedDateForNewEvent] = useState("2026-10-01");
  const [selectedEvent, setSelectedEvent] = useState<CalendarEventItem | null>(null);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonthName = `${monthNames[currentMonthIndex]} ${currentYear}`;

  const handlePrevMonth = () => {
    if (currentMonthIndex === 0) {
      setCurrentMonthIndex(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonthIndex((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIndex === 11) {
      setCurrentMonthIndex(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonthIndex((m) => m + 1);
    }
  };

  const handleToday = () => {
    setCurrentMonthIndex(9); // October
    setCurrentYear(2026);
  };

  const handleAddEvent = (newEvent: CalendarEventItem) => {
    setEvents((prev) => [newEvent, ...prev]);
  };

  const handleDeleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  const handleOpenAddOnDate = (dateStr: string) => {
    setSelectedDateForNewEvent(dateStr);
    setIsNewEventModalOpen(true);
  };

  return (
    <DashboardLayout sidebar={<Sidebar />} header={<DashboardHeader />}>
      <div className="space-y-6">
        {/* Header with Title, Month Nav, View Mode, New Event */}
        <CalendarHeader
          currentMonthName={currentMonthName}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
          onToday={handleToday}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onNewEvent={() => {
            setSelectedDateForNewEvent("2026-10-01");
            setIsNewEventModalOpen(true);
          }}
        />

        {/* Calendar KPI summary cards */}
        <CalendarKPIs events={events} />

        {/* View Switcher: Month Grid or Agenda List */}
        {viewMode === "month" ? (
          <CalendarGrid
            events={events}
            onSelectEvent={setSelectedEvent}
            onAddEventOnDate={handleOpenAddOnDate}
          />
        ) : (
          <CalendarAgendaView
            events={events}
            onSelectEvent={setSelectedEvent}
          />
        )}

        {/* Modals */}
        <NewEventModal
          isOpen={isNewEventModalOpen}
          onClose={() => setIsNewEventModalOpen(false)}
          onAddEvent={handleAddEvent}
          defaultDate={selectedDateForNewEvent}
        />

        <EventDetailModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onDelete={handleDeleteEvent}
        />
      </div>
    </DashboardLayout>
  );
}
