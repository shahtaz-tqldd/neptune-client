import React from "react";
import Image from "next/image";
import NavigateButton from "@/components/buttons/navigate-button";
import { DEMO_PRODUCTS } from "@/templates/products/demo-data";
import Link from "next/link";
import { productName } from "@/lib/sanitize";

const Trending = () => {
  const products = DEMO_PRODUCTS.slice(0, 3);

  return (
    <section className="container pt-24 pb-36">
      <div className="grid grid-cols-5 items-center">
        {/* Left: Product Cards */}
        <div className="col-span-3 relative h-[500px]">
          {products.map((product, index) => (
            <Link
              href={`/products/${productName(product.name)}`}
              key={product.id}
              className={`cursor-pointer absolute p-4 w-72 h-[380px] rounded-3xl shadow-xl bg-white transition-transform duration-300 hover:-translate-y-2
                ${index === 0 ? "top-0 left-0 rotate-[-6deg]" : ""}
                ${index === 1 ? "top-20 left-48 z-10 rotate-0" : ""}
                ${index === 2 ? "top-40 left-96 rotate-[6deg] z-10" : ""}
              `}
            >
              <div className="w-full h-56 relative mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <h5 className="font-semibold text-lg mb-1">{product.name}</h5>
              <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                {product.description}
              </p>
              <span className="text-md font-bold">{product.price}</span>
            </Link>
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
