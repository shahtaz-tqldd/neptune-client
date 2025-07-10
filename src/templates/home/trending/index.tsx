import { DEMO_PRODUCTS } from "@/templates/products/demo-data";
import Image from "next/image";
import React from "react";

const Trending = () => {
  const products = DEMO_PRODUCTS.slice(0, 3); // Only show 3 products

  return (
    <section className="container py-20">
      <div className="grid grid-cols-5 items-center">
        {/* Left: Product Cards */}
        <div className="col-span-3 relative h-[500px]">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`absolute p-4 w-80 h-[400px] rounded-3xl shadow-xl bg-white transition-transform duration-300 hover:-translate-y-2
                ${index === 0 ? "top-0 left-0 rotate-[-6deg]" : ""}
                ${index === 1 ? "top-20 left-48 z-10 rotate-0" : ""}
                ${index === 2 ? "top-40 left-96 rotate-[6deg]" : ""}
              `}
            >
              <div className="w-full h-60 relative mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <h5 className="font-semibold text-lg mb-1">{product.name}</h5>
              <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
              <span className="text-md font-bold">{product.price}</span>
            </div>
          ))}
        </div>

        {/* Right: Title */}
        <div className="col-span-2">
          <h4 className="text-5xl md:text-6xl font-bold max-w-lg leading-tight">
            Discover Our <span className="text-green-500">Trending</span> Shoes
          </h4>
          <p className="mt-6 text-2xl">
            Our latest collection combines comfort and cutting-edge design. Step up your style game with these top picks loved by sneaker enthusiasts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trending;
