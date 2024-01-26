// ScrollableSection.tsx
import { SidebarButton } from "@/components/altered-ui/sidebar-button";
import { SidebarSectionProps } from "./main-dashboard-sidebar-section";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface SingleIconSidebarSectionProps
  extends Omit<Omit<SidebarSectionProps, "buttons">, "key"> {
  icon: React.ReactNode;
  list: string[];
}

export function SingleIconSidebarSection({
  icon,
  isScrollable = false,
  title,
  list,
}: SingleIconSidebarSectionProps) {
  if (isScrollable) {
    return (
      <div className="px-3 py-2 flex-grow">
        <h2 className="relative px-7 text-lg font-semibold tracking-tight">
          {title}
        </h2>
        <ScrollArea className="h-[300px] px-1">
          <div className="space-y-1 p-2">
            {list?.map((label, i) => (
              <SidebarButton key={`${label}-${i}`} label={label} icon={icon} />
            ))}
          </div>
        </ScrollArea>
      </div>
    );
  } else {
    return (
      <div className="px-3 py-2 flex-grow">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          {title}
        </h2>
        <div className="space-y-1">
          {list?.map((label, i) => (
            <SidebarButton key={`${label}-${i}`} label={label} icon={icon} />
          ))}
        </div>
      </div>
    );
  }
}
