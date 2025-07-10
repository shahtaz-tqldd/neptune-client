import React from "react";
import Image from "next/image";
import { ArrowRight } from "@/assets/algo-icons";
import type { ProductProps } from "../types";
import NavigateButton from "@/components/buttons/navigate-button";

interface ProductCardProps {
  product: ProductProps;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div key={product.id} className="">
      <div className="relative w-full h-[320px] mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-2xl"
        />
        <div className="bg-black py-2 px-4 text-white absolute top-4 right-4 text-sm rounded-full">
          {product.discount} Off
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
      <div className="flbx mt-4">
        <NavigateButton>Add to Cart</NavigateButton>

        <h4 className="text-red-500 font-semibold text-lg">{product.price}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
