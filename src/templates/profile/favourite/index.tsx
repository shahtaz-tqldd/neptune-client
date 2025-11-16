import React from "react";
import MyProfileLayout from "../profile-layout";
import { DEMO_PRODUCTS } from "@/templates/product-details/demo-data";
import ProductCard from "@/templates/product-details/product-card";

const FavouritePage = () => {
  return (
    <MyProfileLayout>
      <div>
        <h3>Favourite</h3>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 mt-8">
        {DEMO_PRODUCTS.map((product, index) => (
          <ProductCard product={product} key={index} size="sm" />
        ))}
      </section>
    </MyProfileLayout>
  );
};

export default FavouritePage;
