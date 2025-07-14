"use client";

import Image from "next/image";
import React from "react";

import { DETAILS_DATA } from "./demo-data";

const Details = () => {
  const detailsData = DETAILS_DATA
  return (
    <section className="py-24">
      <p className="uppercase tracking-[2px] text-lg text-center">
        Why would you choose us
      </p>
      <h2 className="text-center mb-16 mt-4">
        Details Down to <span className="text-green-500">Sneaker Level</span>
      </h2>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {detailsData.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} rounded-3xl p-6 flex flex-col items-center relative group ${
              item.textPosition === "top"
                ? "justify-between pb-0"
                : item.textPosition === "side"
                ? "gap-6 justify-between"
                : "pt-0"
            }`}
          >
            {/* Conditionally render Text */}
            {item.textPosition === "top" && (
              <p className="text-lg text-center max-w-xs z-10">{item.text}</p>
            )}

            {/* Image */}
            <Image
              src={item.img}
              alt="shoe"
              height={400}
              width={400}
              className={`z-10 ${
                item.textPosition === "side"
                  ? "ml-auto"
                  : item.textPosition === "top"
                  ? ""
                  : "pt-8 mr-auto"
              }`}
              style={{ width: item.imageWidth }}
            />

            {/* SVG */}
            <svg
              className={`absolute ${
                item.textPosition === "top"
                  ? "top-28 -translate-x-1/4"
                  : item.textPosition === "side"
                  ? "top-28 left-0"
                  : "translate-y-48 left-1/2 -translate-x-1/2"
              }`}
              width="200"
              height="200"
              viewBox="0 0 200 200"
            >
              <path
                d={item.svgPath}
                stroke="rgb(148 163 184)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Conditionally render Text */}
            {item.textPosition === "bottom" && (
              <p className="text-lg text-right text-gray-700 dark:text-gray-200 max-w-xs">
                {item.text}
              </p>
            )}
            {item.textPosition === "side" && (
              <p className="text-lg max-w-xs">{item.text}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Details;
