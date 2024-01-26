import { SidebarConfig } from "@/config/SidebarConfig";
import { DashboardLinks } from "@/config/NavBarConfig";

import { DashboardIcon } from "@radix-ui/react-icons";
import { BsShopWindow } from "react-icons/bs";
import { LuFolderTree } from "react-icons/lu";
import { FaRegCreditCard } from "react-icons/fa6";
import { TbSettings } from "react-icons/tb";
import { FaRegUserCircle, FaQuestionCircle } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import LogoutButton from "components/Dashboard/Sidebar/ui/LogoutButton";

const baseUrl = "/dashboards/main-dashboard/";

const MainButtons = [
  {
    icon: <DashboardIcon />,
    label: "Dashboard Home",
    href: `${baseUrl}`,
  },
  {
    icon: <BsShopWindow />,
    label: "Marketplace",
    href: `${baseUrl}marketplace`,
  },
  {
    icon: <LuFolderTree />,
    label: "Projects Overview",
    href: `${baseUrl}projects`,
  },
  // Add other discovery buttons as needed
];

const ProfileButtons = [
  {
    icon: <FaRegCreditCard />,
    label: "Billing & Subscriptions",
    href: `${baseUrl}billing`,
  },
  {
    icon: <TbSettings />,
    label: "Settings",
    href: `${baseUrl}settings`,
  },
  {
    icon: <FaRegUserCircle />,
    label: "Profile",
    href: `${baseUrl}profile`,
  },
  {
    icon: <FaQuestionCircle />,
    label: "Support/FAQ",
    href: `${baseUrl}support`,
  },
  // Add other library buttons as needed
];

export const MainDashboardSidebarConfig: SidebarConfig = [
  {
    type: "section",
    title: "Main",
    buttons: MainButtons,
    isScrollable: false,
  },
  {
    type: "section",
    title: "Profile",
    buttons: ProfileButtons,
    isScrollable: false,
  },
  {
    type: "customComponent",
    component: () => <LogoutButton />,
    // Add other properties specific to your custom component
  },
  // Add more sections or custom components as needed
];

export const MainDashboardNavbarConfig: DashboardLinks[] = [
  { href: "/examples/dashboard", text: "Overview" },
  { href: "/examples/dashboard", text: "Customers" },
  { href: "/examples/dashboard", text: "Products" },
  { href: "/examples/dashboard", text: "Settings" },
];
