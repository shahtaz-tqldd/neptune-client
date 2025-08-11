
import React, { useState, useCallback, useMemo } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { RangeSlider } from "@/components/ui/slider";
import Button from "@/components/buttons/primary-button";
import { FilterProps, FilterState } from "../types";
import { DEMO_COLORS, DEMO_SIZES } from "@/templates/products/demo-data";

const sizes = DEMO_SIZES
const colors = DEMO_COLORS

const Filter: React.FC<FilterProps> = ({
  onFiltersChange,
  onApplyFilters,
  filters,
  setFilters,
  defaultFilters,
  initialFilters
}) => {
  // Track if filters have been modified from initial state
  const [hasUnappliedChanges, setHasUnappliedChanges] = useState(false);
  const [lastAppliedFilters, setLastAppliedFilters] = useState<FilterState>({
    ...defaultFilters,
    ...initialFilters,
  });

  // Check if current filters are different from default
  const hasActiveFilters = useMemo(() => {
    return (
      filters.categories.length > 0 ||
      filters.sizes.length > 0 ||
      filters.colors.length > 0 ||
      filters.priceRange[0] !== defaultFilters.priceRange[0] ||
      filters.priceRange[1] !== defaultFilters.priceRange[1]
    );
  }, [filters, defaultFilters]);

  // Check if current filters are different from last applied
  const filtersChanged = useMemo(() => {
    return JSON.stringify(filters) !== JSON.stringify(lastAppliedFilters);
  }, [filters, lastAppliedFilters]);

  // Update filters and notify parent
  const updateFilters = useCallback((newFilters: FilterState) => {
    setFilters(newFilters);
    setHasUnappliedChanges(true);
    onFiltersChange?.(newFilters);
  }, [onFiltersChange, setFilters]);

  // Handle category checkbox changes
  const handleCategoryChange = useCallback((category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category);
    
    updateFilters({ ...filters, categories: newCategories });
  }, [filters, updateFilters]);

  // Handle price range changes
  const handlePriceRangeChange = useCallback((minVal: number, maxVal: number) => {
    updateFilters({ ...filters, priceRange: [minVal, maxVal] });
  }, [filters, updateFilters]);

  // Handle size selection
  const handleSizeToggle = useCallback((size: string) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter(s => s !== size)
      : [...filters.sizes, size];
    
    updateFilters({ ...filters, sizes: newSizes });
  }, [filters, updateFilters]);

  // Handle color selection
  const handleColorToggle = useCallback((colorName: string) => {
    const newColors = filters.colors.includes(colorName)
      ? filters.colors.filter(c => c !== colorName)
      : [...filters.colors, colorName];
    
    updateFilters({ ...filters, colors: newColors });
  }, [filters, updateFilters]);

  // Apply filters
  const handleApplyFilters = useCallback(() => {
    setLastAppliedFilters(filters);
    setHasUnappliedChanges(false);
    onApplyFilters?.(filters);
  }, [filters, onApplyFilters]);

  // Clear all filters
  const handleClearAll = useCallback(() => {
    const clearedFilters = { ...defaultFilters };
    setFilters(clearedFilters);
    setLastAppliedFilters(clearedFilters);
    setHasUnappliedChanges(false);
    onFiltersChange?.(clearedFilters);
    onApplyFilters?.(clearedFilters);
  }, [onFiltersChange, onApplyFilters, defaultFilters, setFilters]);

  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="mb-3 font-medium text-gray-900">Category</h4>
        <div className="space-y-3">
          {["Men", "Women", "Kids"].map((category) => (
            <label
              key={category}
              htmlFor={category}
              className="flex items-center gap-3 cursor-pointer text-sm hover:text-gray-900 transition-colors"
            >
              <Checkbox 
                id={category}
                checked={filters.categories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, !!checked)}
              />
              <span className={filters.categories.includes(category) ? 'font-medium' : ''}>
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="mb-3 font-medium text-gray-900">Price Range</h4>
        <RangeSlider
          min={0}
          max={100}
          minVal={filters.priceRange[0]}
          maxVal={filters.priceRange[1]}
          onChange={handlePriceRangeChange}
          step={1}
          formatLabel={(value) => `$${value}`}
          className="mb-3"
        />
        <div className="text-sm text-gray-600 font-medium mt-8">
          ${filters.priceRange[0]}.00 - ${filters.priceRange[1]}.00
        </div>
      </div>

      {/* Size */}
      <div>
        <h4 className="mb-3 font-medium text-gray-900">Size</h4>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeToggle(size)}
              className={`h-8 w-8 rounded-full border-2 text-sm pt-[1px] font-medium transition-all duration-200 ${
                filters.sizes.includes(size)
                  ? 'bg-green-500 text-white border-green-500 shadow-md'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-100'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        {filters.sizes.length > 0 && (
          <div className="text-sm text-gray-600 font-medium mt-4">
            Selected: {filters.sizes.join(', ')}
          </div>
        )}
      </div>

      {/* Color */}
      <div>
        <h4 className="mb-3 font-medium text-gray-900">Color</h4>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => handleColorToggle(color.name)}
              title={color.name}
              className={`w-7 h-7 rounded-full border-3 cursor-pointer transition-all duration-200 ${
                filters.colors.includes(color.name)
                  ? 'border-green-500'
                  : 'border-black/15 hover:border-green-500/20'
              }`}
              style={{ 
                backgroundColor: color.value,
                ...(color.name === 'Black' && { borderColor: '#cfcfcfff' })
              }}
            >
              {filters.colors.includes(color.name) && (
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  <svg 
                    className={`w-4 h-4 ${color.name === 'White' || color.name === 'Yellow' ? 'text-gray-800' : 'text-white'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
        {filters.colors.length > 0 && (
          <div className="text-sm text-gray-600 font-medium mt-4">
            Selected: {filters.colors.join(', ')}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4 border-t border-gray-200">
        <Button 
          size="xs" 
          variant="rubix" 
          className="w-1/2 px-5"
          onClick={handleApplyFilters}
          disabled={!filtersChanged}
        >
          {hasUnappliedChanges ? 'Apply Filters' : 'Filters Applied'}
        </Button>
        
        <Button 
          size="xs" 
          variant="alert-secondary" 
          className="w-1/2 px-5"
          onClick={handleClearAll}
          disabled={!hasActiveFilters}
        >
          Clear All
        </Button>
      </div>     
    </div>
  );
};

export default Filter;
