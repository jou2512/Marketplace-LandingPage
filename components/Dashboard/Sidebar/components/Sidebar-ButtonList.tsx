// ButtonList.tsx
import { SidebarButtonProps, SidebarButton } from "@/components/altered-ui/sidebar-button";
import React from "react";

export interface ButtonListProps {
  buttons: SidebarButtonProps[];
}

export function ButtonList({ buttons }: ButtonListProps) {
  return (
    <div className="space-y-1">
      {buttons.map(({ icon, label }, index) => (
        <SidebarButton key={index} icon={icon} label={label} />
      ))}
    </div>
  );
}
