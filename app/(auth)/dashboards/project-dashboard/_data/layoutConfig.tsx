import { SidebarConfig } from "@/config/SidebarConfig";
import Image from "next/image";
import Logo from "@/../assets/icon1.svg";
import { DashboardLinks } from "@/config/NavBarConfig";

const baseUrl = "/dashboards/project-dashboard/";

export const ProjectDashboardSidebarConfig: SidebarConfig = [
  {
    type: "section",
    title: "Discover",
    buttons: [
      {
        label: "Button 3",
        icon: <Logo />,
        href: `${baseUrl}`,
      },
      {
        label: "Button 2",
        icon: <Logo />,
        href: `${baseUrl}testing`,
      },
    ],
    isScrollable: true,
  },
  {
    type: "customComponent",
    component: () => {
      return <h1>hello</h1>;
    },
    // Add other properties specific to your custom component
  },
  // Add more sections or custom components as needed
];

export const ProjectDashboardNavbarConfig: DashboardLinks[] = [
  { href: "/examples/dashboard", text: "Project specific" },
  { href: "/examples/dashboard", text: "news" },
  { href: "/examples/dashboard", text: "Lol" },
  { href: "/examples/dashboard", text: "Yess" },
];
