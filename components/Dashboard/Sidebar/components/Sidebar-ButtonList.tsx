// ButtonList.tsx
import { SidebarButtonProps, SidebarButton } from "@/components/altered-ui/sidebar-button";
import React from "react";

export interface ButtonListProps {
  buttons: SidebarButtonProps[];
}

export function ButtonList({ buttons }: ButtonListProps) {
  return (
    <div className="space-y-1">
      {buttons.map(({ icon, label, href, ...props }, index) => (
        <SidebarButton
          key={index}
          icon={icon}
          label={label}
          href={href}
          {...props}
        />
      ))}
    </div>
  );
}
