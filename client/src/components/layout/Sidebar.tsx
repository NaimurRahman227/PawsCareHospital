import clsx from "clsx";

import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

import { useUIStore } from "../../store/uiStore";

import type { MenuItem } from "../../types/menu";

interface SidebarProps {
  items: MenuItem[];
}

const Sidebar = ({
  items,
}: SidebarProps) => {
  const { sidebarOpen } = useUIStore();

  return (
    <aside
      className={clsx(
        "h-screen bg-white border-r flex flex-col transition-all duration-300",
        sidebarOpen ? "w-72" : "w-20"
      )}
    >
      <Logo />

      <nav className="flex-1 px-3 py-5 space-y-2 overflow-y-auto">
        {items.map((item) => (
          <SidebarItem
            key={item.path}
            {...item}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;