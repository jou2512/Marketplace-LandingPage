import { ThemeSwitch } from "@/components/altered-ui/ThemeSwitch";
import Logo from "@/components/altered-ui/logo";
import { cn } from "@/lib/utils";
import { MainNavLinksProps, MainNavLinks } from "./components/Navbar-links";
import { UserNav } from "./components/Navbar-usernav";
import { Search } from "./components/Navbar-search";


export function DashboardNavbar({ links, className, ...props }: MainNavLinksProps) {
  return (
    <div className={cn("flex h-16 items-center px-4", className)}>
      <Logo />
      <MainNavLinks links={links} className="ml-40" />
      <div className="ml-auto flex items-center space-x-4">
        <Search />
        <UserNav />
        <ThemeSwitch className="pr-2 pl-3" />
      </div>
    </div>
  );
}
