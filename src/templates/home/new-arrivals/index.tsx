import React from "react";

import LinkButton from "@/components/buttons/link-button";
import ProductCrad from "@/templates/product-details/product-card";

import { DEMO_PRODUCTS } from "@/templates/product-details/demo-data";

const NewArrivals = () => {
  const products = DEMO_PRODUCTS?.slice(1, 6);
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="mb-12">New Arrivals</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <ProductCrad product={product} key={index} size="sm" />
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
