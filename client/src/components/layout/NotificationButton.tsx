import { Bell } from "lucide-react";

const NotificationButton = () => {
  return (
    <button
      className="
      relative
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
      <Bell size={20} />

      <span
        className="
        absolute
        top-2
        right-2
        h-2
        w-2
        rounded-full
        bg-red-500
        "
      />
    </button>
  );
};

export default NotificationButton;