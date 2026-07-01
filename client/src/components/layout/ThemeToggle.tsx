import { Moon } from "lucide-react";

const ThemeToggle = () => {
  return (
    <button
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
      <Moon size={20} />
    </button>
  );
};

export default ThemeToggle;