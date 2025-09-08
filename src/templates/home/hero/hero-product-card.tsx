import React from "react";
import Button from "@/components/buttons/primary-button";

import { Star } from "@/assets/algo-icons";
import type { ProductProps } from "@/templates/product-details/types";
import Link from "next/link";
import { productName } from "@/lib/sanitize";

interface HeroProductCardProps {
  className: string;
  product: ProductProps| undefined;
}

const HeroProductCard = ({ className, product }: HeroProductCardProps) => {
  if (!product) return null;
  return (
    <div
      className={`bg-white/80 backdrop-blur-xl rounded-3xl p-5 shadow-lg w-72 tr ${className}`}
    >
      <h5 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h5>
      {/* Rating */}
      <div className="flex items-center gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={3.5} className="fill-[#1C274C]" />
        ))}
        <span className="text-sm text-gray-500 ml-1">
          ({product.numReviews} reviews)
        </span>
      </div>
      {/* Price */}
      <div className="text-2xl font-extrabold text-gray-900 mb-4">
        {product.price}
      </div>
      {/* Color Options */}
      <div className="flex gap-2 mb-5">
        <div className="w-5 h-5 rounded-full bg-red-500 border-3 border-white"></div>
        <div className="w-5 h-5 rounded-full bg-green-500 border-3 border-white"></div>
        <div className="w-5 h-5 rounded-full bg-blue-500 border-3 border-white"></div>
      </div>
      {/* Buttons */}
      <div className="flex gap-3">
        <Link href={`/products/${productName(product.name)}`}>
          <Button size="xs">See Product</Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroProductCard;
