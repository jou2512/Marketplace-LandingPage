import React from "react";
import Dashboard from "@/components/Dashboard/Dashboard";
import { MainDashboardNavbarConfig, MainDashboardSidebarConfig } from "./_data/layoutConfig";

export default function MainDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Dashboard
        navbarContent={MainDashboardNavbarConfig}
        sidebarConfig={MainDashboardSidebarConfig}
      >
        {children}
      </Dashboard>
    </>
  );
}
