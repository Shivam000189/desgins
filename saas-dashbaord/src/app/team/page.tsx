"use client";

import { useState, useMemo } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import DashboardHeader from "@/components/dashboard/Header/DashboardHeader";

import TeamHeader from "@/components/team/TeamHeader";
import TeamStats from "@/components/team/TeamStats";
import TeamFilters from "@/components/team/TeamFilters";
import TeamGridView from "@/components/team/TeamGridView";
import TeamTableView from "@/components/team/TeamTableView";
import InviteMemberModal from "@/components/team/InviteMemberModal";
import MemberDetailModal from "@/components/team/MemberDetailModal";

import { initialTeamList } from "@/lib/dashboard/teamData";
import type { TeamMemberItem, MemberStatus } from "@/types/team";

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMemberItem[]>(initialTeamList);
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  // Modals
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMemberItem | null>(null);

  // Filtered members list
  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = member.name.toLowerCase().includes(q);
        const matchesRole = member.role.toLowerCase().includes(q);
        const matchesEmail = member.email.toLowerCase().includes(q);
        const matchesSkill = member.skills.some((s) => s.toLowerCase().includes(q));
        if (!matchesName && !matchesRole && !matchesEmail && !matchesSkill) return false;
      }

      // Department
      if (selectedDepartment !== "All" && member.department !== selectedDepartment) {
        return false;
      }

      // Status
      if (selectedStatus !== "All" && member.status !== selectedStatus) {
        return false;
      }

      return true;
    });
  }, [members, searchQuery, selectedDepartment, selectedStatus]);

  const isFiltered =
    searchQuery !== "" ||
    selectedDepartment !== "All" ||
    selectedStatus !== "All";

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedDepartment("All");
    setSelectedStatus("All");
  };

  // Invite member
  const handleInviteMember = (newMemberData: Omit<TeamMemberItem, "id" | "joinedDate">) => {
    const newMember: TeamMemberItem = {
      ...newMemberData,
      id: `tm-${Date.now()}`,
      joinedDate: "Today",
    };
    setMembers((prev) => [newMember, ...prev]);
  };

  // Update status
  const handleUpdateStatus = (memberId: string, status: MemberStatus) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === memberId ? { ...m, status } : m))
    );
    if (selectedMember?.id === memberId) {
      setSelectedMember((prev) => (prev ? { ...prev, status } : null));
    }
  };

  // Remove member
  const handleRemoveMember = (memberId: string) => {
    setMembers((prev) => prev.filter((m) => m.id !== memberId));
    if (selectedMember?.id === memberId) {
      setSelectedMember(null);
    }
  };

  // Message member
  const handleMessageMember = (member: TeamMemberItem, e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Opening direct conversation with ${member.name} (${member.email})...`);
  };

  return (
    <DashboardLayout sidebar={<Sidebar />} header={<DashboardHeader />}>
      <div className="space-y-5">
        {/* Header */}
        <TeamHeader
          onInvite={() => setIsInviteOpen(true)}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {/* 4 KPI Summary Cards */}
        <TeamStats members={members} />

        {/* Filter Controls */}
        <TeamFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedDepartment={selectedDepartment}
          onDepartmentChange={setSelectedDepartment}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          onReset={handleResetFilters}
          isFiltered={isFiltered}
        />

        {/* Content: Grid or Table View */}
        {viewMode === "grid" ? (
          <TeamGridView
            members={filteredMembers}
            onSelectMember={setSelectedMember}
            onMessageMember={handleMessageMember}
          />
        ) : (
          <TeamTableView
            members={filteredMembers}
            onSelectMember={setSelectedMember}
            onMessageMember={handleMessageMember}
          />
        )}

        {/* Modals */}
        <InviteMemberModal
          isOpen={isInviteOpen}
          onClose={() => setIsInviteOpen(false)}
          onInviteMember={handleInviteMember}
        />

        <MemberDetailModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
          onUpdateStatus={handleUpdateStatus}
          onRemoveMember={handleRemoveMember}
        />
      </div>
    </DashboardLayout>
  );
}
