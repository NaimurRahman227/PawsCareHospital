import { ChevronDown } from "lucide-react";
import { useAuthStore } from "../../store/authStore";

const UserDropdown = () => {
  const user = useAuthStore(
    (state) => state.user
  );

  return (
    <button
      className="
        flex
        items-center
        gap-3
        rounded-lg
        px-2
        py-1
        hover:bg-gray-100
        transition-colors
      "
    >
      <div
        className="
          h-10
          w-10
          rounded-full
          bg-blue-600
          text-white
          flex
          items-center
          justify-center
          font-semibold
        "
      >
        {user?.name?.charAt(0) ?? "U"}
      </div>

      <div className="hidden md:block text-left">
        <h4 className="font-medium">
          {user?.name}
        </h4>

        <p className="text-xs text-gray-500 capitalize">
          {user?.role}
        </p>
      </div>

      <ChevronDown
        size={18}
        className="hidden md:block text-gray-500"
      />
    </button>
  );
};

export default UserDropdown;