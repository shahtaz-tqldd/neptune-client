"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Button from "@/components/buttons/primary-button";
import Link from "next/link";
import { productName } from "@/lib/sanitize";

const HOT_DEALS = [
  {
    name: "X Shoe New Hope",
    img_url:
      "https://png.pngtree.com/png-clipart/20240703/original/pngtree-running-shoes-with-a-cushioned-sole-and-laces-tied-png-image_15473358.png",
    price: 120,
    discountPrice: 89,
    offerEndsIn: 3600, // in seconds
  },
  {
    name: "Green Turbo Sprint",
    img_url:
      "https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-green-transparent-sports-shoes-png-image_6687298.png",
    price: 100,
    discountPrice: 74,
    offerEndsIn: 5400, // in seconds
  },
];

function formatTime(seconds: number) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

const HotDeals = () => {
  const [timers, setTimers] = useState(
    HOT_DEALS.map((deal) => deal.offerEndsIn)
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
                "relative rounded-3xl overflow-hidden p-8 flex items-center gap-8 transition-all group",
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
                  src={product.img_url}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="relative z-10 h-full w-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="flex-1">
                <span className="text-sm bg-yellow-200 text-yellow-900 font-medium px-3 py-1.5 rounded-full">
                  Save{" "}
                  {(
                    ((product.price - product.discountPrice) / product.price) *
                    100
                  ).toFixed(0)}
                  %
                </span>
                <h4 className="my-4">{product.name}</h4>
                <div className="flex items-end gap-4 mb-8">
                  <span
                    className={`text-3xl font-bold ${
                      index % 2 === 0 ? "text-indigo-900" : "text-teal-900"
                    }`}
                  >
                    ${product.discountPrice?.toFixed(2)}
                  </span>
                  <span className="line-through text-gray-500 -translate-y-1">
                    ${product.price?.toFixed(2)}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDeals;
