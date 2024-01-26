import { Sidebar } from "@/components/Dashboard/Sidebar/Sidebar";
import { DashboardLinks } from "@/config/NavBarConfig";
import React from "react";
import { DashboardNavbar } from "@/components/Dashboard/Navbar/Navbar";
import { SidebarConfig } from "@/config/SidebarConfig";

interface DashboardLayoutProps {
  navbarContent: DashboardLinks[];
  children: React.ReactNode;
  sidebarConfig: SidebarConfig;
}

const Dashboard: React.FC<DashboardLayoutProps> = ({
  navbarContent,
  sidebarConfig,
  children,
}) => {
  return (
    <div className="hidden flex-col md:flex h-screen w-full fixed overflow-hidden">
      <div className="border-b">
        <DashboardNavbar links={navbarContent} />
      </div>
      <div className=" h-full">
        <div className="grid grid-cols-8 bg-background h-full ">
          <Sidebar
            config={sidebarConfig}
            className="hidden lg:block col-span-1 w-full "
          />
        <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
