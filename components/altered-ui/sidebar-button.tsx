"use client"

import { Key } from "react";
import { Button, ButtonProps } from "@/components/shadcn-ui/button";

export interface SidebarButtonProps extends ButtonProps {
  icon: React.ReactNode;
  label: string;
  key?: Key | null | undefined;
  href: string;
}

export function SidebarButton({ icon, label, key, href, ...props }: SidebarButtonProps) {
  return (
    <Button
      key={key}
      variant="secondary"
      className="w-full justify-start"
      onClick={() => {
        console.log(`${label} clicked`);
        window.location.href = href;
      }}
      {...props}
    >
      <div className="pr-2">{icon}</div>
      <div className="pl-2">{label}</div>
    </Button>
  );
}