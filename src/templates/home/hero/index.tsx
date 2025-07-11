"use client";

import React from "react";
import Image from "next/image";

import Button from "@/components/buttons/primary-button";
import LinkButton from "@/components/buttons/link-button";
import HeroProductCard from "./hero-product-card";

import { HERO_PRODUCT } from "./demo-data";

const Hero = () => {
  const product_data = HERO_PRODUCT;
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#DFF2EB] via-[#B9E5E8] to-[#DFF2EB]">
      <div className="container mx-auto px-6 pb-16 pt-36 flex flex-wrap md:flex-nowrap gap-12">
        {/* Left: Text */}
        <div className="space-y-8 max-w-xl">
          <h1>
            Unlace the Ordinary,{" "}
            <span className="text-green-500">Lace Up the Hype.</span>
          </h1>
          <p className="text-xl">
            Curated kicks crafted to turn heads. From daily hustle to weekend
            chill — wear what feels like you.
          </p>

          <div className="flx gap-8 mt-16">
            <Button>Shop Now</Button>
            <LinkButton>Explore Collection</LinkButton>
          </div>
        </div>

        {/* Right: Shoe Image */}
        <div className="relative group">
          {/* Product Card */}
          <HeroProductCard
            className="absolute top-8 right-4 -translate-x-16 group-hover:-translate-x-[72px] group-hover:-translate-y-2"
            product={product_data}
          />
          <Image
            src={product_data?.image}
            alt="Cool Sneakers"
            className="h-[500px] w-[500px] translate-x-36 group-hover:rotate-[5deg] group-hover:translate-x-[152px] group-hover:translate-y-6 tr object-contain drop-shadow-[0_50px_25px_rgba(0,0,0,0.5)] pointer-events-none"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
