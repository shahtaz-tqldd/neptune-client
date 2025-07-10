"use client";

import React from "react";
import Image from "next/image";
import heroShoe from "@/assets/images/hero.webp";
import Button from "@/components/buttons/primary-button";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#DFF2EB] via-[#B9E5E8] to-[#DFF2EB]">
      <div className="container mx-auto px-6 pb-32 pt-24 flbx gap-12">
        {/* Left: Text */}
        <div className="space-y-8 max-w-xl">
          <h4 className="text-5xl md:text-6xl font-black leading-[72px] text-black/80">
            Unlace the Ordinary,{" "}
            <span className="text-red-500">Lace Up the Hype.</span>
          </h4>
          <p className="text-xl text-zinc-300">
            Curated kicks crafted to turn heads. From daily hustle to weekend
            chill — wear what feels like you.
          </p>

          <div className="flex gap-8 mt-16">
            <Button>Shop Now</Button>
            <button className="text-red-500 text-lg underline underline-offset-4">
              Explore shops
            </button>
          </div>
        </div>

        {/* Right: Shoe Image */}
        <div className="relative">
          <div className="absolute -z-10 w-[400px] h-[400px] bg-red-500 blur-[120px] opacity-30 rounded-full top-1/3 left-1/3"></div>
          <Image
            src={heroShoe}
            alt="Cool Sneakers"
            className="h-[500px] w-[500px] object-contain drop-shadow-[0_50px_25px_rgba(0,0,0,0.5)]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
