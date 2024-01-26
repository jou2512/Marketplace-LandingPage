
import { Key } from "react";
import { Button, ButtonProps } from "@/components/shadcn-ui/button";

export interface SidebarButtonProps extends ButtonProps {
  icon: React.ReactNode;
  label: string;
  key?: Key | null | undefined;
}

export function SidebarButton({ icon, label, key }: SidebarButtonProps) {
  return (
    <Button key={key} variant="secondary" className="w-full justify-start">
      <div className="pr-2">{icon}</div>
      <div className="pl-2">{label}</div>
    </Button>
  );
}