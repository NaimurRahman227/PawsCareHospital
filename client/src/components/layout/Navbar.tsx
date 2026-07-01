import { Menu } from "lucide-react";

import { useUIStore } from "../../store/uiStore";

import SearchBar from "./SearchBar";
import Breadcrumb from "./Breadcrumb";
import NotificationButton from "./NotificationButton";
import ThemeToggle from "./ThemeToggle";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const toggleSidebar =
    useUIStore(
      (state) =>
        state.toggleSidebar
    );

  return (
    <header
      className="
      sticky
      top-0
      z-40
      h-16
      border-b
      bg-white
      flex
      items-center
      justify-between
      px-6
      "
    >
      {/* Left */}

      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="
          h-10
          w-10
          rounded-lg
          hover:bg-gray-100
          transition-colors
          flex
          items-center
          justify-center
          "
        >
          <Menu size={22} />
        </button>

        <Breadcrumb />

        <SearchBar />
      </div>

      {/* Right */}

      <div className="flex items-center gap-2">
        <ThemeToggle />

        <NotificationButton />

        <UserDropdown />
      </div>
    </header>
  );
};

export default Navbar;