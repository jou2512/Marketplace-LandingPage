import {
  SidebarConfig,
  SidebarSectionConfig,
  SingleIconSidebarSectionConfig,
} from "@/config/SidebarConfig";
import React from 'react'
import { SidebarSection } from '@/components/Dashboard/Sidebar/components/Sidebar-section';
import { SingleIconSidebarSection } from "@/components/Dashboard/Sidebar/components/Sidebar-section-singleIcon";
import { cn } from '@/lib/utils';

// Sidebar.tsx
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  config: SidebarConfig;
}

export function Sidebar({ config, className, ...props }: SidebarProps) {
  return (
    <div className={cn("py-12 h-full border-r", className)} {...props}>
      <div className="h-full flex flex-col">
        {config.map((item, index) => {
          if (item.type === "section") {
            const { title, buttons, isScrollable }: SidebarSectionConfig = item;
            return (
              <SidebarSection
                key={index}
                title={title}
                buttons={buttons}
                isScrollable={isScrollable}
              />
            );
          } else if (item.type === "singleIconSection") {
            const { title, list, icon, isScrollable }: SingleIconSidebarSectionConfig = item;
            return (
              <SingleIconSidebarSection
                key={index}
                title={title}
                list={list}
                icon={icon}
                isScrollable={isScrollable}
              />
            );
          } else if (item.type === "customComponent") {
            const CustomComponent: React.ComponentType<any> = item.component;
            // You can pass additional props to the custom component if needed
            return <CustomComponent key={index} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Sidebar;