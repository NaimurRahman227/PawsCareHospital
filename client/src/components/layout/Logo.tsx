import { HeartPulse } from "lucide-react";
import clsx from "clsx";

import { useUIStore } from "../../store/uiStore";

const Logo = () => {
  const { sidebarOpen } = useUIStore();

  return (
    <div
      className={clsx(
        "border-b h-20 flex items-center transition-all duration-300",
        sidebarOpen
          ? "justify-start px-6"
          : "justify-center"
      )}
    >
      <HeartPulse
        size={34}
        className="text-blue-600 shrink-0"
      />

      {sidebarOpen && (
        <div className="ml-3 overflow-hidden">
          <h1 className="text-lg font-bold whitespace-nowrap">
            Sylhet Pet Care
          </h1>

          <p className="text-xs text-gray-500 whitespace-nowrap">
            Veterinary Management
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;