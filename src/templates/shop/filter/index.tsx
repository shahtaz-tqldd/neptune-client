"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import Button from "@/components/buttons/primary-button";

const brands = ["Nike", "Adidas", "Puma", "Reebok"];
const sizes = ["6", "7", "8", "9", "10", "11"];
const colors = ["Black", "White", "Red", "Blue"];

const Filter = () => {
  const [priceRange, setPriceRange] = React.useState([30]);

  return (
    <div className="space-y-6">
      <div>
        <h4 className="mb-2">Category</h4>
        <div className="space-y-2">
          {["Men", "Women", "Kids"].map((category) => (
            <label
              key={category}
              htmlFor={category}
              className="flex items-center gap-2 cursor-pointer text-sm"
            >
              <Checkbox id={category} />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Brand */}
      {/* <Collapsible>
        <CollapsibleTrigger asChild>
          <div className="flbx">
            <h4>Brand</h4>
            <button className="h-8 w-8 bg-gray-100 rounded-full center text-xl">
              +
            </button>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2 mt-2">
          {brands.map((brand) => (
            <label
              key={brand}
              htmlFor={brand}
              className="flex items-center gap-2 cursor-pointer text-sm"
            >
              <Checkbox id={brand} />
              {brand}
            </label>
          ))}
        </CollapsibleContent>
      </Collapsible>
 */}
      {/* Price Range */}
      <div>
        <h4 className="mb-2">Price Range</h4>
        <Slider
          defaultValue={[30]}
          max={200}
          step={10}
          value={priceRange}
          onValueChange={setPriceRange}
        />
        <div className="text-xs text-muted-foreground mt-1">
          Up to ${priceRange[0]}
        </div>
      </div>

      {/* Size */}
      <div>
        <h4 className="mb-2">Size</h4>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className="bg-gray-100 h-8 w-8 center rounded-full"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color */}
      <div>
        <h4 className="mb-2">Color</h4>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <span
              key={color}
              title={color}
              className={`w-6 h-6 rounded-full border border-gray-300 cursor-pointer`}
              style={{ backgroundColor: color.toLowerCase() }}
            />
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <Button size="xs" variant="accent" className="mt-4 px-5">
        Clear All
      </Button>
    </div>
  );
};

export default Filter;
