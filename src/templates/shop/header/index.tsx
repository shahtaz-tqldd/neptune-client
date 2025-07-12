import { SearchIcon } from "@/assets/algo-icons";
import React from "react";

const Header = () => {
  const categories = ["All", "Shoe", "Sneaker", "Sandal", "Boot"];
  return (
    <div className="space-y-4">
      <div className="flbx">
        <h3>Products</h3>
        <div className="relative">
          <SearchIcon size={6} className="absolute top-3 left-2.5" />
          <input
            placeholder="Search shoe"
            className="py-2 pl-10 pr-4 rounded-full border-2 border-black/15"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className="py-2 px-5 rounded-full text-sm bg-gray-100 font-medium"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
