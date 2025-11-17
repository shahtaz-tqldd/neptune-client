"use client";
import React from "react";
import Image from "next/image";
import NavigateButton from "@/components/buttons/navigate-button";

import { DEMO_COLLECTIONS } from "./demo-data";
import { useRouter } from "next/navigation";
import Title from "@/components/ui/title";

const NewCollections = () => {
  const collections_data = DEMO_COLLECTIONS;
  const router = useRouter();
  return (
    <section className="py-12 md:py-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16">
        {/* LEFT SIDE */}
        <div className="space-y-10 md:space-y-16">
          <Title variant="xl">
            See our <span className="text-emerald-500">brand new</span>{" "}
            collections
          </Title>

          <div className="relative">
            <Image
              src={collections_data[0]?.image_url}
              alt="Cool Sneakers"
              className="w-full h-[350px] sm:h-[450px] md:h-[632px] object-cover rounded-2xl md:rounded-[40px]"
              width={800}
              height={800}
            />

            <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-3xl shadow-lg max-w-[70%] md:max-w-[50%] space-y-1 md:space-y-2">
              <h5 className="text-xl md:text-2xl font-bold text-green-900">
                {collections_data[0]?.name}
              </h5>
              <p className="text-sm md:text-base">
                {collections_data[0]?.description}
              </p>
              <NavigateButton className="mt-2 md:mt-4 text-sm md:text-base">
                Explore Urban
              </NavigateButton>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8 md:space-y-12">
          <div className="relative">
            <Image
              src={collections_data[1]?.image_url}
              alt="Cool Sneakers"
              className="w-full h-[350px] sm:h-[450px] md:h-[632px] object-cover rounded-2xl md:rounded-[40px] object-bottom"
              width={800}
              height={800}
            />

            <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-3xl shadow-lg max-w-[70%] md:max-w-[50%] space-y-1 md:space-y-2">
              <h5 className="text-xl md:text-2xl font-bold text-orange-900">
                {collections_data[1]?.name}
              </h5>
              <p className="text-sm md:text-base">
                {collections_data[1]?.description}
              </p>
              <NavigateButton className="mt-2 md:mt-4">
                Explore Trail
              </NavigateButton>
            </div>
          </div>

          <p className="text-xl md:text-2xl leading-relaxed">
            Most of our new shoes are for the open to try and enlighten your end
            of trips
          </p>

          <NavigateButton
            onClick={() => router.push("/collections")}
            className="w-full sm:w-auto"
          >
            More Collections
          </NavigateButton>
        </div>
      </div>
    </section>
  );
};

export default NewCollections;
