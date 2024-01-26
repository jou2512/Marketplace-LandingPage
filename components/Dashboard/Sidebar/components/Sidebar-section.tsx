// SidebarSection.tsx multiple icons
import { ScrollArea } from "@/components/ui/scroll-area";
import { ButtonList, ButtonListProps } from "@/components/Dashboard/Sidebar/components/Sidebar-ButtonList";


export interface SidebarSectionProps extends ButtonListProps {
  isScrollable?: boolean;
  title?: string;
}

export function SidebarSection({
  isScrollable = false,
  title,
  buttons,
}: SidebarSectionProps) {
  if (isScrollable) {
    return (
      <div className="px-3 py-2 flex-grow">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          {title}
        </h2>
        <ScrollArea className="h-[300px] px-1">
          <div className="space-y-1 p-2">
            <ButtonList buttons={buttons} />
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
          <ButtonList buttons={buttons} />
        </div>
      </div>
    );
  }
}
