"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DEMO_PRODUCTS } from "./demo-data";
import { productName } from "@/lib/sanitize";
import Button from "@/components/buttons/primary-button";
import Link from "next/link";

const ProductPage = () => {
  const pathname = usePathname(); // e.g. /products/zoomx-velocity
  const slug = pathname.split("/").pop(); // extract slug only

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
            className="object-cover"
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
          <div className="flx gap-4 mt-16">
            <Button className="px-7" size="sm" variant="accent">
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
