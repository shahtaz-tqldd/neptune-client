import React from "react";

import LinkButton from "@/components/buttons/link-button";
import ProductCrad from "@/templates/products/product-card";

import { DEMO_PRODUCTS } from "@/templates/products/demo-data";

const NewArrivals = () => {
  const products = DEMO_PRODUCTS?.slice(0, 4);
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="mb-12">New Arrivals</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCrad product={product} key={index} />
          ))}
        </div>
        <div className="text-center mt-16">
          <LinkButton link="/shop">View More</LinkButton>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
