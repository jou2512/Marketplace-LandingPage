import Link from "next/link";

import { cn } from "@/lib/utils";
import { DashboardLinks } from "@/config/NavBarConfig";

export interface MainNavLinksProps extends React.HTMLAttributes<HTMLElement> {
  links: DashboardLinks[];
}

export function MainNavLinks({ links, className, ...props }: MainNavLinksProps) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {links.map(({ href, text }, index) => {
        if (index==0) {
          return (<Link
            href={href}
            key={index}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {text}
          </Link>)
        } else {
          return (
            <Link
              href={href}
              key={index}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {text}
            </Link>
          );
        }
      })}
    </nav>
  );
}