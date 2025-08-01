import React, { useState } from "react";
import { SearchIcon } from "@/assets/algo-icons";
import { HeaderProps } from "../types";

const Header: React.FC<HeaderProps> = ({
  hasActiveFilters, 
  filters,
  onSearch,
  onCategorySelect
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Shoe", "Sneaker", "Sandal", "Boot"];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    onSearch?.(value);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    // onCategorySelect?.(category);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="text-2xl font-bold">Products</h3>
        </div>
        <div className="relative max-w-[340px] w-full">
          <SearchIcon size={6} className="absolute top-3 left-2.5" />
          <input
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Search shoe"
            className="py-2 pl-10 pr-4 rounded-full w-full border-2 border-black/15 focus:border-green-500 focus:outline-none tr"
          />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`py-2 px-5 rounded-full text-sm font-medium tr ${
              activeCategory === category
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Active Filter Tags */}
      {hasActiveFilters && (
        <div className="flx gap-6">
          <div className="text-sm font-medium text-gray-700">Active Filters</div>
          <div className="flex flex-wrap gap-2">
            {filters.categories.length > 0 && (
              <div className="inline-flex border border-green-100 items-center gap-1 py-1 pl-4 pr-2 bg-green-50 text-green-800 rounded-full text-sm">
                <span><span className="opacity-75">Categories:</span> {filters.categories.join(', ')}</span>
                <button 
                  onClick={() => {/* Handle individual filter removal */}}
                  className="hover:bg-red-200 text-red-500 rounded-full h-5 w-5 center text-lg"
                >
                  ×
                </button>
              </div>
            )}
            {(filters.priceRange[0] !== 0 || filters.priceRange[1] !== 100) && (
              <div className="inline-flex border border-green-100 items-center gap-1 py-1 pl-4 pr-2 bg-green-50 text-green-800 rounded-full text-sm">
                <span><span className="opacity-75">Price:</span> ${filters.priceRange[0]} - ${filters.priceRange[1]}</span>
                <button 
                  onClick={() => {/* Handle individual filter removal */}}
                  className="hover:bg-red-200 text-red-500 rounded-full h-5 w-5 center text-lg"
                >
                  ×
                </button>
              </div>
            )}
            {filters.sizes.length > 0 && (
              <div className="inline-flex border border-green-100 items-center gap-1 py-1 pl-4 pr-2 bg-green-50 text-green-800 rounded-full text-sm">
                <span><span className="opacity-75">Sizes:</span> {filters.sizes.join(', ')}</span>
                <button 
                  onClick={() => {/* Handle individual filter removal */}}
                  className="hover:bg-red-200 text-red-500 rounded-full h-5 w-5 center text-lg"
                >
                  ×
                </button>
              </div>
            )}
            {filters.colors.length > 0 && (
              <div className="inline-flex border border-green-100 items-center gap-1 py-1 pl-4 pr-2 bg-green-50 text-green-800 rounded-full text-sm">
                <span><span className="opacity-75">Colors:</span> {filters.colors.join(', ')}</span>
                <button 
                  onClick={() => {/* Handle individual filter removal */}}
                  className="hover:bg-red-200 text-red-500 rounded-full h-5 w-5 center text-lg"
                >
                  ×
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;