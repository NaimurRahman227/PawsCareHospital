import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="hidden md:flex items-center gap-3 w-96 px-4 py-2 rounded-lg border bg-white">
      <Search
        size={18}
        className="text-gray-500"
      />

      <input
        type="text"
        placeholder="Search..."
        className="flex-1 outline-none bg-transparent"
      />
    </div>
  );
};

export default SearchBar;