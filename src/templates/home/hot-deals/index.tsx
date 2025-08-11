"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Button from "@/components/buttons/primary-button";
import Link from "next/link";
import { productName } from "@/lib/sanitize";
import { DEMO_PRODUCTS } from "@/templates/products/demo-data";
import { formatTime } from "@/lib/date-time";
import { ProductProps } from "@/templates/products/types";

const HotDeals = () => {
  const HOT_DEALS: ProductProps[] = DEMO_PRODUCTS.filter((p) => p.hot_deals);
  const [timers, setTimers] = useState<number[]>(
    HOT_DEALS.map((deal) => Number(deal.offerEndsIn) || 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) => prev.map((t) => (t > 0 ? t - 1 : 0)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-center mb-2">Hot Deals</h2>
        <p className="text-center text-2xl mb-16">
          Grab your chances before it's too late!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {HOT_DEALS.map((product, index) => (
            <div
              key={index}
              className={clsx(
                "relative rounded-3xl overflow-hidden p-8 flex items-center gap-8 transition-all group relative",
                index % 2 === 0 ? "bg-indigo-50" : "bg-teal-100/60"
              )}
            >
              {/* Image with layered circles */}
              <div className="relative w-72 h-72 shrink-0">
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  {/* Layered Circles */}
                  <div
                    className={`absolute w-60 h-60 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-500 ${
                      index % 2 === 0 ? "bg-indigo-200" : "bg-green-200"
                    }`}
                  ></div>
                  <div
                    className={`absolute w-48 h-48 rounded-full opacity-60 group-hover:scale-115 transition-transform duration-500 delay-100 ${
                      index % 2 === 0 ? "bg-indigo-300" : "bg-green-300"
                    }`}
                  ></div>
                  <div
                    className={`absolute w-32 h-32 rounded-full opacity-80 group-hover:scale-105 transition-transform duration-500 delay-200 ${
                      index % 2 === 0 ? "bg-indigo-400" : "bg-green-400"
                    }`}
                  ></div>
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="relative z-10 h-full w-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="flex-1 relative z-10">
                <span className="text-sm bg-yellow-200 text-yellow-900 font-medium px-3 py-1.5 rounded-full">
                  Save {product.discount}
                </span>
                <h4 className="my-4">{product.name}</h4>
                <div className="flex items-end gap-4 mb-8">
                  <span
                    className={`text-3xl font-bold ${
                      index % 2 === 0 ? "text-indigo-900" : "text-teal-900"
                    }`}
                  >
                    {product.discountPrice}
                  </span>
                  <span className="line-through text-gray-500 -translate-y-1">
                    {product.price}
                  </span>
                </div>
                <div className="text-gray-600 text-lg mb-4">
                  Offer ends in:{" "}
                  <span className="font-mono text-xl text-red-500">
                    {formatTime(timers[index])}
                  </span>
                </div>
                <Link href={`/products/${productName(product.name)}`}>
                  <Button size="xs">Buy Now</Button>
                </Link>
              </div>

              <div className="absolute z-0 -top-48 -right-48 h-100 w-100 center border-2 border-white/20 rounded-full">
                <div className="absolute h-80 w-80 center border-2 border-white/40 rounded-full">
                  <div className="absolute h-60 w-60 center border-3 border-white/60 rounded-full">
                    <div className="absolute h-36 w-36 border-3 border-white/80 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDeals;
