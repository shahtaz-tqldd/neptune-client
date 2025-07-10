import React from "react";
import ProductCrad from "@/templates/products/product-card";
import { DEMO_PRODUCTS } from "@/templates/products/demo-data";

const BestSeller = () => {
  const products = DEMO_PRODUCTS;
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h4 className="text-3xl md:text-4xl font-black mb-10">
          New Arrivals
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCrad product={product} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
