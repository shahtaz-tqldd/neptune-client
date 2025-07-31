"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DEMO_COLORS, DEMO_PRODUCTS, DEMO_SIZES } from "./demo-data";
import { productName } from "@/lib/sanitize";
import Button from "@/components/buttons/primary-button";
import Link from "next/link";

const ProductPage = () => {
  const pathname = usePathname(); // e.g. /products/zoomx-velocity
  const slug = pathname.split("/").pop(); // extract slug only

  const sizes = DEMO_SIZES
  const colors = DEMO_COLORS

  const product = DEMO_PRODUCTS.find((p) => productName(p.name) === slug);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-medium text-gray-500">Product not found.</p>
      </main>
    );
  }

  return (
    <main className="pb-20 pt-28 container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Product Image */}
        <div className="relative w-full h-[400px] md:h-[620px] rounded-3xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover bg-slate-200"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <span className="text-sm text-green-600 bg-green-100 px-4 py-2 rounded-full font-semibold">
            {product.discount} off
          </span>
          <h2 className="mt-4">{product.name}</h2>

          <p className="text-lg">{product.description}</p>

          <div className="flex items-end gap-4">
            <span className="text-red-500 text-5xl font-medium">
              {product.discountPrice}
            </span>
            <p className="line-through text-xl -translate-y-0.5">
              {product.price}
            </p>
          </div>
          <div>
             <div>
            <h4 className="mb-3 font-medium text-gray-900">Color</h4>
            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  // onClick={() => handleColorToggle(color.name)}
                  title={color.name}
                  className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-all duration-200`}
                    // filters.colors.includes(color.name)
                    //   ? 'border-blue-500 shadow-lg ring-2 ring-blue-200'
                    //   : 'border-gray-300 hover:border-gray-400'
  
                  style={{ 
                    backgroundColor: color.value,
                    ...(color.name === 'White' && { border: '2px solid #e5e7eb' })
                  }}
                >
                  {/* {filters.colors.includes(color.name) && (
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
                  )} */}
                </button>
              ))}
            </div>
          </div>
          </div>
          <div className="flx gap-4 mt-16">
            <Button className="px-7" size="sm" variant="rubix">
              Add to Cart
            </Button>
            <Link href="/checkout">
              <Button className="px-10" size="sm" variant="accent">
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
