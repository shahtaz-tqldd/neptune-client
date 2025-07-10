import NavigateButton from "@/components/buttons/navigate-button";
import Button from "@/components/buttons/primary-button";
import Image from "next/image";
import React from "react";

const NewCollections = () => {
  const LEFT_IMAGE =
    "https://ecommercephotographyindia.com/info/wp-content/uploads/2022/01/Shoe-Photography-with-background.jpg";
  const RIGHT_IMAGE =
    "https://i.pinimg.com/736x/16/d0/63/16d063993108cd0951ba07a6fb2b0ba6.jpg";
  return (
    <section className="py-20 ">
      <div className="grid grid-cols-2 gap-x-16 container">
        <div className="space-y-16">
          <h1>
            See our brand{" "}
            <span className="text-green-500"> new collections</span>
          </h1>
          <div className="relative">
            <Image
              src={LEFT_IMAGE}
              alt="Cool Sneakers"
              className="w-full h-[632px] object-cover rounded-[40px]"
              width={800}
              height={800}
            />
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur px-6 py-4 rounded-3xl shadow-lg max-w-[50%] space-y-2">
              <h3 className="text-2xl font-bold text-green-900">Urban Terrain</h3>
              <p>Bold silhouettes, engineered for the street and beyond.</p>
              <NavigateButton className="mt-4">Explore Urban</NavigateButton>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="relative">
            <Image
              src={RIGHT_IMAGE}
              alt="Cool Sneakers"
              className="w-full h-[632px] object-cover rounded-[40px] object-bottom"
              width={800}
              height={800}
            />
            <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur px-6 py-4 rounded-3xl shadow-lg max-w-[50%] space-y-2">
              <h3 className="text-2xl font-bold text-orange-900">Trail Blazer</h3>
              <p>Rugged shoes built for adventures and explorations.</p>
              <NavigateButton className="mt-4">Explore Trail</NavigateButton>
            </div>
          </div>
          <p className="text-2xl">
            Most of our new shoes are for the open to try and enlighten your end
            of trips
          </p>
          <NavigateButton>Explore Collections</NavigateButton>
        </div>
      </div>
    </section>
  );
};

export default NewCollections;
