"use client";

import React from "react";
import Image from "next/image";

import Button from "@/components/buttons/primary-button";
import LinkButton from "@/components/buttons/link-button";
import HeroProductCard from "./hero-product-card";

import Link from "next/link";
import { DEMO_PRODUCTS } from "@/templates/product-details/demo-data";
import type { ProductProps } from "@/templates/product-details/types";

const Hero = () => {
  const product_data: ProductProps | undefined = DEMO_PRODUCTS?.find(
    (p) => p.is_hero_product
  );

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#DFF2EB] via-[#B9E5E8] to-[#DFF2EB]">
      <div className="container mx-auto px-6 pb-16 pt-36 flex flex-wrap md:flex-nowrap gap-12 relative z-10">
        {/* Left: Text */}
        <div className="space-y-8 max-w-xl">
          <h1>
            Unlace the Ordinary,{" "}
            <span className="text-gradient">Lace Up the Hype.</span>
          </h1>
          <p className="text-xl">
            Curated kicks crafted to turn heads. From daily hustle to weekend
            chill — wear what feels like you.
          </p>

          <div className="flx gap-8 mt-16">
            <Link href="/shop">
              <Button>Shop Now</Button>
            </Link>
            <LinkButton>Explore Collection</LinkButton>
          </div>
        </div>

        {/* Right: Shoe Image */}
        <div className="mx-auto relative group">
          {/* Product Card */}
          <HeroProductCard
            className="absolute top-8 right-4 -translate-x-40 group-hover:-translate-x-44 group-hover:-translate-y-2"
            product={product_data}
          />
          <Image
            src={product_data?.image || "/placeholder.png"}
            alt={product_data?.name || "Product image"}
            className="h-[500px] w-[500px] group-hover:rotate-[5deg] group-hover:translate-x-8 group-hover:translate-y-6 tr object-contain drop-shadow-[0_50px_25px_rgba(0,0,0,0.5)] pointer-events-none"
            priority
          />
        </div>
      </div>

      <div className="absolute z-0 -top-[28rem] -right-[28rem] h-[56rem] w-[56rem] center border-2 border-white/25 rounded-full">
        <div className="absolute h-[44rem] w-[44rem] center border-2 border-white/30 rounded-full">
          <div className="absolute h-[32rem] w-[32rem] center border-2 border-white/35 rounded-full">
            <div className="absolute h-[20rem] w-[20rem] center border-3 border-white/40 rounded-full">
              <div className="absolute h-[10rem] w-[10rem] border-3 border-white/45 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
