import { DEMO_PRODUCTS } from "@/templates/products/demo-data";
import ProductCard from "@/templates/products/product-card";
import React from "react";

const Display = () => {
  const products = DEMO_PRODUCTS;
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard product={product} key={index} size="sm" />
      ))}
    </section>
  );
};

export default Display;
