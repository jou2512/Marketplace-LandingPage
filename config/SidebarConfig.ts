import { SidebarSectionProps } from "@/components/Dashboard/Sidebar/components/Sidebar-section";
import { SingleIconSidebarSectionProps } from "@/components/Dashboard/Sidebar/components/Sidebar-section-singleIcon";

export interface SidebarSectionConfig extends SidebarSectionProps{
  type: "section";
}

export interface SingleIconSidebarSectionConfig extends SingleIconSidebarSectionProps{
  type: "singleIconSection";
}

export interface CustomComponentConfig<T> {
  type: "customComponent";
  component: React.ComponentType<T>;
}

export type SidebarConfig = (SidebarSectionConfig | SingleIconSidebarSectionConfig | CustomComponentConfig<any>)[];
