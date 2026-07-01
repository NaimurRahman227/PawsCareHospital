import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

import { useUIStore } from "../../store/uiStore";

interface SidebarItemProps {
  title: string;
  path: string;
  icon: LucideIcon;
}

const SidebarItem = ({
  title,
  path,
  icon: Icon,
}: SidebarItemProps) => {
  const { sidebarOpen } = useUIStore();

  return (
    <NavLink
      to={path}
      title={!sidebarOpen ? title : undefined}
      className={({ isActive }) =>
        clsx(
          "flex items-center rounded-lg transition-all duration-200",
          sidebarOpen
            ? "gap-3 px-5 py-3 justify-start"
            : "justify-center py-3",

          isActive
            ? "bg-blue-600 text-white"
            : "text-gray-700 hover:bg-gray-100"
        )
      }
    >
      <Icon
        size={20}
        className="shrink-0"
      />

      {sidebarOpen && (
        <span className="whitespace-nowrap">
          {title}
        </span>
      )}
    </NavLink>
  );
};

export default SidebarItem;