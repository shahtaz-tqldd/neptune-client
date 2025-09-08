import React from "react";

import NavigateButton from "@/components/buttons/navigate-button";
import TrendingProductCard from "./trending-product-card";

import { DEMO_PRODUCTS } from "@/templates/product-details/demo-data";

const Trending = () => {
  const products = DEMO_PRODUCTS.slice(5, 8);

  return (
    <section className="container pt-24 pb-36">
      <div className="grid grid-cols-5 items-center">
        {/* Left: Product Cards */}
        <div className="col-span-3 relative h-[500px]">
          {products.map((product, index) => (
            <TrendingProductCard 
              key={index} 
              index={index}
              product={product} 
            />
          ))}
        </div>

        {/* Right: Title */}
        <div className="col-span-2 space-y-8">
          <p className="uppercase font-medium tracking-[2px]">
            pick the bestseller
          </p>
          <h1 className="max-w-lg">
            Discover Our <span className="text-green-500">Trending</span> Shoes
          </h1>
          <p className="text-2xl">
            Our latest collection combines comfort and cutting-edge design. Step
            up your style game with these top picks.
          </p>
          <NavigateButton className="mt-24">Explore More</NavigateButton>
        </div>
      </div>
    </section>
  );
};

export default Trending;
