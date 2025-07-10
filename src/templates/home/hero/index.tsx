"use client";

import React from "react";
import Image from "next/image";
import heroShoe from "@/assets/images/hero.webp";
import Button from "@/components/buttons/primary-button";
import { Star } from "@/assets/algo-icons";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#DFF2EB] via-[#B9E5E8] to-[#DFF2EB]">
      <div className="container mx-auto px-6 pb-16 pt-36 flex flex-wrap md:flex-nowrap gap-12">
        {/* Left: Text */}
        <div className="space-y-8 max-w-xl">
          <h4 className="text-5xl md:text-6xl font-black leading-[72px] text-black/80">
            Unlace the Ordinary,{" "}
            <span className="text-red-500">Lace Up the Hype.</span>
          </h4>
          <p className="text-xl text-zinc-600">
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
          {/* Red blurred background */}
          <div className="absolute w-[600px] h-[600px] bg-yellow-500 blur-[120px] opacity-20 rounded-full top-1/3 left-1/3"></div>

          {/* Product Card */}
          <div className="absolute top-4 right-4 -translate-x-32 bg-white/70 backdrop-blur-xl rounded-3xl p-5 shadow-lg border border-white/30 w-72 transition-all duration-300">
            <h5 className="font-bold text-lg text-gray-800 mb-2">
              Air Zoom HyperPulse
            </h5>
            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={5} className="fill-[#1C274C]" />
              ))}
              <span className="text-sm text-gray-500 ml-1">(120 reviews)</span>
            </div>
            {/* Price */}
            <div className="text-2xl font-extrabold text-gray-900 mb-4">$189.00</div>
            {/* Color Options */}
            <div className="flex gap-2 mb-5">
              <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-white"></div>
              <div className="w-5 h-5 rounded-full bg-black border-2 border-white"></div>
              <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white"></div>
            </div>
            {/* Buttons */}
            <div className="flex gap-3">
              <Button size="xs">Add to Cart</Button>
              
            </div>
          </div>

          <Image
            src={heroShoe}
            alt="Cool Sneakers"
            className="h-[500px] w-[500px] object-contain drop-shadow-[0_50px_25px_rgba(0,0,0,0.5)] translate-x-24 pointer-events-none"
            // priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
