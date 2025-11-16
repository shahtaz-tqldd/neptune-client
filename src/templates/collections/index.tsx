"use client";
import Button from "@/components/buttons/primary-button";
import React, { useState } from "react";
import { COLLECTIONS } from "./demo-data";
import Image from "next/image";

export default function CollectionsPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[3px] text-gray-400 mb-4">
            Explore Our Range
          </p>
          <h1 className="text-5xl md:text-7xl font-light mb-6">
            Curated <span className="text-emerald-500">Collections</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Each collection tells a unique story. Find the perfect pair that
            matches your lifestyle and personality.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {COLLECTIONS.map((collection, index) => {
            const isHovered = hoveredId === collection.id;

            return (
              <div
                key={index}
                className="h-[640px] group relative overflow-hidden rounded-3xl cursor-pointer"
                onMouseEnter={() => setHoveredId(collection.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                    }}
                    height={500}
                    width={500}
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80 transition-opacity duration-500"
                    style={{
                      opacity: isHovered ? 0.9 : 0.75,
                    }}
                  />
                </div>

                {/* Tag */}
                <div className="absolute top-6 right-6 z-10">
                  <div
                    className="px-4 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm transition-all duration-300"
                    style={{
                      backgroundColor: collection.accentColor,
                    }}
                  >
                    {collection.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 z-10">
                  {/* Items Count */}
                  <div
                    className="text-white/70 text-sm mb-4 transition-all duration-500"
                    style={{
                      transform: isHovered
                        ? "translateY(0)"
                        : "translateY(10px)",
                      opacity: isHovered ? 1 : 0.8,
                    }}
                  >
                    {collection.items}
                  </div>

                  {/* Collection Name */}
                  <h3
                    className="!text-white mb-2 transition-all duration-500"
                    style={{
                      transform: isHovered
                        ? "translateY(-5px)"
                        : "translateY(0)",
                    }}
                  >
                    {collection.name}
                  </h3>

                  {/* Tagline */}
                  <p className="!text-white/90 text-lg font-medium mb-4">
                    {collection.tagline}
                  </p>

                  {/* Description */}
                  <p
                    className="!text-white/80 text-sm leading-relaxed mb-6 max-w-md transition-all duration-500"
                    style={{
                      maxHeight: isHovered ? "100px" : "0px",
                      opacity: isHovered ? 1 : 0,
                      overflow: "hidden",
                    }}
                  >
                    {collection.description}
                  </p>

                  {/* CTA Button */}
                  <div
                    className="transition-all duration-300"
                    style={{
                      transform: isHovered
                        ? "translateY(0)"
                        : "translateY(20px)",
                      opacity: isHovered ? 1 : 0,
                    }}
                  >
                    <button className="flex items-center gap-2 text-white font-medium group/btn">
                      <span>Explore Collection</span>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Accent Line */}
                  <div
                    className="h-1 mt-6 rounded-full transition-all duration-500"
                    style={{
                      backgroundColor: collection.accentColor,
                      width: isHovered ? "200px" : "60px",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center py-20 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-light mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-600 mb-8">
              Our team can help you discover the perfect pair. Get personalized
              recommendations based on your style and needs.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="md" className="w-60" variant="accent">
                Chat with Assistance
              </Button>
              <Button size="md" className="w-60">
                View All Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
