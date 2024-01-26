import { SidebarConfig } from "@/config/SidebarConfig";
import { DashboardLinks } from "@/config/NavBarConfig";

import { DashboardIcon } from "@radix-ui/react-icons";
import { BsShopWindow } from "react-icons/bs";
import { LuFolderTree } from "react-icons/lu";
import { FaRegCreditCard } from "react-icons/fa6";
import { TbSettings } from "react-icons/tb";
import { FaRegUserCircle, FaQuestionCircle } from "react-icons/fa";
import { ImExit } from "react-icons/im";

const MainButtons  = [
  {
    icon: <DashboardIcon />,
    label: "Dashboard Home",
  },
  {
    icon: <BsShopWindow />,
    label: "Marketplace",
  },
  {
    icon: <LuFolderTree />,
    label: "Projects Overview",
  },
  // Add other discovery buttons as needed
];

const ProfileButtons = [
  {
    icon: <FaRegCreditCard />,
    label: "Billing & Subscriptions",
  },
  {
    icon: <TbSettings />,
    label: "Settings",
  },
  {
    icon: <FaRegUserCircle />,
    label: "Profile",
  },
  {
    icon: <FaQuestionCircle />,
    label: "Support/FAQ",
  },
  {
    icon: <ImExit />,
    label: "Logout",
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
  /*{
    type: "customComponent",
    component: () => {
      return <h1>hello</h1>;
    },
    // Add other properties specific to your custom component
  },*/
  // Add more sections or custom components as needed
];

export const MainDashboardNavbarConfig: DashboardLinks[] = [
  { href: "/examples/dashboard", text: "Overview" },
  { href: "/examples/dashboard", text: "Customers" },
  { href: "/examples/dashboard", text: "Products" },
  { href: "/examples/dashboard", text: "Settings" },
];