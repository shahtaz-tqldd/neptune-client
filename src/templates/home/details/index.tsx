import Image from "next/image";
import React from "react";

const Details = () => {
  const img1 =
    "https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com_.png";
  const img2 =
    "https://static.vecteezy.com/system/resources/previews/034/610/241/non_2x/ai-generative-pair-of-sneaker-shoes-on-transparent-background-image-png.png";
  const img3 = "https://www.pngmart.com/files/1/Nike-Shoes-Transparent-PNG.png";

  return (
    <section className="py-24">
      <p className="uppercase tracking-[2px] text-lg text-center">Why would you choose us</p>
      <h2 className="text-center mb-16 mt-4">Details Down to <span className="text-green-500"> Sneaker Level</span></h2>
      <div className="container grid md:grid-cols-3 gap-10 relative z-10">
        {/* Card 1 - Text below */}
        <div className="bg-teal-50 rounded-3xl p-6 pt-0 flex flex-col items-center relative group">
          <Image
            src={img1}
            alt="shoe"
            height={400}
            width={400}
            className="w-[80%] pt-8 z-10 mr-auto"
          />
          {/* SVG Line */}
          <svg
            className="absolute translate-y-48 left-1/2 transform -translate-x-1/2"
            width="200"
            height="200"
            viewBox="0 0 200 200"
          >
            <path
              d="M 100 0 L 100 40 Q 100 50 110 50 L 140 50 Q 150 50 150 60 L 150 120"
              stroke="rgb(148 163 184)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          {/* Text */}
          <p className="text-lg text-right text-gray-700 dark:text-gray-200 max-w-xs">
            Padded heel engineered for all terrain comfort and unmatched ankle
            support
          </p>
        </div>

        {/* Card 2 - Text above */}
        <div className="bg-cyan-50 rounded-3xl p-6 pb-0 flex flex-col justify-between items-center relative group">
          {/* Text */}
          <p className="text-lg text-center max-w-xs z-10">
            The outsole pattern is inspired by metamorphosis to adapt with your
            every step.
          </p>
          {/* SVG Line - from bottom to top */}
          <svg
            className="absolute top-28 -translate-x-1/4 transform"
            width="200"
            height="200"
            viewBox="0 0 200 200"
          >
            <path
              d="M 100 120 L 100 40 Q 100 30 110 30 L 140 30 Q 150 30 150 20 L 150 0"
              stroke="rgb(148 163 184)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <Image
            src={img2}
            alt="shoe"
            height={400}
            width={400}
            className="w-[85%] z-10"
          />
        </div>

        {/* Card 3 - Text on the left */}
        <div className="bg-rose-50/60 rounded-3xl p-6 flex flex-col items-center gap-6 relative group justify-between">
          {/* Text */}
          <svg
            className="absolute top-28 left-0 transform"
            width="200"
            height="200"
            viewBox="0 0 200 200"
          >
            <path
              d="M 100 200 L 100 40 Q 100 30 110 30 L 180 30"
              stroke="rgb(148 163 184)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          {/* Image */}
          <Image
            src={img3}
            alt="shoe"
            height={400}
            width={400}
            className="w-[70%] ml-auto z-10"
          />

          <p className="text-lg max-w-xs">
            Engineered cushioning that hugs your feet all day, reducing fatigue
            with every step.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
