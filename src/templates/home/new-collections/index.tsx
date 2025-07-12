import React from "react";
import Image from "next/image";
import NavigateButton from "@/components/buttons/navigate-button";

import { DEMO_COLLECTIONS } from "./demo-data";

const NewCollections = () => {
  const collections_data = DEMO_COLLECTIONS;
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
              src={collections_data[0]?.image_url}
              alt="Cool Sneakers"
              className="w-full h-[632px] object-cover rounded-[40px]"
              width={800}
              height={800}
            />
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur px-6 py-4 rounded-3xl shadow-lg max-w-[50%] space-y-2">
              <h5 className="text-2xl font-bold text-green-900">
                {collections_data[0]?.name}
              </h5>
              <p>{collections_data[0]?.description}</p>
              <NavigateButton className="mt-4">Explore Urban</NavigateButton>
            </div>
          </div>
        </div>
        <div className="space-y-12">
          <div className="relative">
            <Image
              src={collections_data[1]?.image_url}
              alt="Cool Sneakers"
              className="w-full h-[632px] object-cover rounded-[40px] object-bottom"
              width={800}
              height={800}
            />
            <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur px-6 py-4 rounded-3xl shadow-lg max-w-[50%] space-y-2">
              <h5 className="text-2xl font-bold text-orange-900">
                {collections_data[0]?.name}
              </h5>
              <p>{collections_data[1]?.description}</p>
              <NavigateButton className="mt-4">Explore Trail</NavigateButton>
            </div>
          </div>
          <p className="text-2xl">
            Most of our new shoes are for the open to try and enlighten your end
            of trips
          </p>
          <NavigateButton>More Collections</NavigateButton>
        </div>
      </div>
    </section>
  );
};

export default NewCollections;
