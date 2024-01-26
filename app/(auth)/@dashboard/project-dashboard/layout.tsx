import Dashboard from "@/components/Dashboard/Dashboard";
import React from "react";
import { ProjectDashboardNavbarConfig, ProjectDashboardSidebarConfig } from "./_data/layoutConfig";

export default function ProjectDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Dashboard
        navbarContent={ProjectDashboardNavbarConfig}
        sidebarConfig={ProjectDashboardSidebarConfig}
      >
        {children}
      </Dashboard>
    </>
  );
}
