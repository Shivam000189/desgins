"use client";

import { useState, useMemo } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import DashboardHeader from "@/components/dashboard/Header/DashboardHeader";

import TaskHeader from "@/components/tasks/TaskHeader";
import TaskStats from "@/components/tasks/TaskStats";
import TaskFilters from "@/components/tasks/TaskFilters";
import TaskKanbanView from "@/components/tasks/TaskKanbanView";
import TaskListView from "@/components/tasks/TaskListView";
import NewTaskModal from "@/components/tasks/NewTaskModal";
import TaskDetailModal from "@/components/tasks/TaskDetailModal";

import { initialTasksList } from "@/lib/dashboard/tasksData";
import type { TaskItem, TaskStatus } from "@/types/task";

export default function TasksPage() {
  const [tasks, setTasks] = useState<TaskItem[]>(initialTasksList);
  const [viewMode, setViewMode] = useState<"kanban" | "list">("kanban");

  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriority, setSelectedPriority] = useState("All");

  // Modals
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const [newTaskInitialStatus, setNewTaskInitialStatus] = useState<TaskStatus>("Backlog");
  const [selectedTask, setSelectedTask] = useState<TaskItem | null>(null);

  // Filtered tasks
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = task.title.toLowerCase().includes(q);
        const matchesDesc = task.description.toLowerCase().includes(q);
        const matchesTag = task.tags.some((tag) => tag.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesTag) return false;
      }

      // Category
      if (selectedCategory !== "All" && task.category !== selectedCategory) {
        return false;
      }

      // Priority
      if (selectedPriority !== "All" && task.priority !== selectedPriority) {
        return false;
      }

      return true;
    });
  }, [tasks, searchQuery, selectedCategory, selectedPriority]);

  const isFiltered =
    searchQuery !== "" ||
    selectedCategory !== "All" ||
    selectedPriority !== "All";

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedPriority("All");
  };

  // Toggle complete
  const handleToggleComplete = (taskId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === taskId) {
          const isNowCompleted = t.status !== "Completed";
          return {
            ...t,
            status: isNowCompleted ? "Completed" : "In Progress",
            progress: isNowCompleted ? 100 : 50,
            subtasks: t.subtasks.map((s) => ({ ...s, completed: isNowCompleted })),
          };
        }
        return t;
      })
    );
  };

  // Advance status to next stage
  const handleAdvanceStatus = (taskId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const order: TaskStatus[] = ["Backlog", "In Progress", "In Review", "Completed"];
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === taskId) {
          const currentIndex = order.indexOf(t.status);
          const nextIndex = Math.min(currentIndex + 1, order.length - 1);
          const nextStatus = order[nextIndex];
          return {
            ...t,
            status: nextStatus,
            progress: nextStatus === "Completed" ? 100 : t.progress,
          };
        }
        return t;
      })
    );
  };

  // Open New Task with pre-selected column
  const handleAddTaskToColumn = (status: TaskStatus) => {
    setNewTaskInitialStatus(status);
    setIsNewTaskOpen(true);
  };

  // Create Task
  const handleCreateTask = (newTaskData: Omit<TaskItem, "id" | "createdAt">) => {
    const newTask: TaskItem = {
      ...newTaskData,
      id: `tsk-${Date.now()}`,
      createdAt: new Date().toISOString().split("T")[0],
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  // Update Task
  const handleUpdateTask = (updatedTask: TaskItem) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
    setSelectedTask(updatedTask);
  };

  // Delete Task
  const handleDeleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
    if (selectedTask?.id === taskId) {
      setSelectedTask(null);
    }
  };

  return (
    <DashboardLayout sidebar={<Sidebar />} header={<DashboardHeader />}>
      <div className="space-y-5">
        {/* Header */}
        <TaskHeader
          onNewTask={() => {
            setNewTaskInitialStatus("Backlog");
            setIsNewTaskOpen(true);
          }}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          activeFilterCount={isFiltered ? 1 : 0}
        />

        {/* 4 KPI Summary Cards */}
        <TaskStats tasks={tasks} />

        {/* Search & Filter Bar */}
        <TaskFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedPriority={selectedPriority}
          onPriorityChange={setSelectedPriority}
          onReset={handleResetFilters}
          isFiltered={isFiltered}
        />

        {/* Main Content: Kanban or List View */}
        {viewMode === "kanban" ? (
          <TaskKanbanView
            tasks={filteredTasks}
            onSelectTask={setSelectedTask}
            onToggleComplete={handleToggleComplete}
            onAdvanceStatus={handleAdvanceStatus}
            onAddTaskToColumn={handleAddTaskToColumn}
          />
        ) : (
          <TaskListView
            tasks={filteredTasks}
            onSelectTask={setSelectedTask}
            onToggleComplete={handleToggleComplete}
          />
        )}

        {/* Modals */}
        <NewTaskModal
          isOpen={isNewTaskOpen}
          initialStatus={newTaskInitialStatus}
          onClose={() => setIsNewTaskOpen(false)}
          onCreateTask={handleCreateTask}
        />

        <TaskDetailModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </DashboardLayout>
  );
}
