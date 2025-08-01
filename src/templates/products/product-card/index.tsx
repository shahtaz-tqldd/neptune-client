"use client"

import React from "react";
import Image from "next/image";

import NavigateButton from "@/components/buttons/navigate-button";
import { cn } from "@/lib/utils";

import type { ProductProps } from "../types";
import Link from "next/link";
import { productName } from "@/lib/sanitize";
import { Cart } from "@/assets/algo-icons";

interface ProductCardProps {
  product: ProductProps;
  size?: "sm" | "md";
}

const sizeStyles = {
  sm: {
    imageHeight: "h-[220px]",
    discountText: "text-xs",
    name: "scale-90 -ml-2",
    button: "scale-90 -ml-3",
    price: "text-base",
  },
  md: {
    imageHeight: "h-[320px]",
    discountText: "text-sm",
    name: "",
    button: "",
    price: "text-xl",
  },
};

const ProductCard = ({ product, size = "md" }: ProductCardProps) => {
  const styles = sizeStyles[size];

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // do cart logic
  };

  return (
    <Link href={`/products/${productName(product.name)}`} className="group">
      {/* Image + Discount Badge */}
      <div className={cn("relative w-full mb-4 overflow-hidden rounded-2xl", styles.imageHeight)}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover bg-gray-200 group-hover:scale-105 tr"
        />
        <div
          className={cn(
            "bg-black text-white absolute top-4 right-4 py-2 px-4 rounded-full",
            styles.discountText
          )}
        >
          {product.discount} Off
        </div>
      </div>

      {/* Product Name */}
      <h4 className={styles.name}>{product.name}</h4>

      {/* CTA + Price */}
      <div className="flbx mt-4">
        <NavigateButton onClick={handleAddToCart} className={styles.button} icon={Cart}>
          Add to Cart
        </NavigateButton>
        <h5 className={cn("font-semibold text-red-500", styles.price)}>
          {product.price}
        </h5>
      </div>
    </Link>
  );
};

export default ProductCard;
