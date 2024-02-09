import { Sidebar } from "@/components/Dashboard/Sidebar/Sidebar";
import { DashboardLinks } from "@/config/NavBarConfig";
import React from "react";
import { DashboardNavbar } from "@/components/Dashboard/Navbar/Navbar";
import { SidebarConfig } from "@/config/SidebarConfig";
import Breadcrumb from "./BreadCrumbs/Breadcrumb";

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
    <>
      <div className="hidden relative flex-col md:flex w-full bg-background">
        <div className="fixed top-0 left-0 right-0 border-b">
          <DashboardNavbar links={navbarContent} />
        </div>
        <div className="fixed top-[65px] left-0 bottom-0">
          <div className="grid grid-cols-8 bg-background h-full">
            <Sidebar
              config={sidebarConfig}
              className="hidden lg:block col-span-1 w-full h-full"
            />
            <div className="w-full col-start-2 col-end-9 h-full overflow-y-auto">
              <div className="relative">
                <div className="sticky top-0 z-10">
                  <Breadcrumb />
                </div>
                <div>{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
