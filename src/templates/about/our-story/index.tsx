import React from "react";

export default function AboutStory() {
  const IMAGE_SRC =
    "https://images.unsplash.com/photo-1520639888713-7851133b1ed0";

  return (
    <section className="container py-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image Side */}
        <div className="relative h-[600px] lg:h-[680px]">
          {/* Decorative background element */}
          <div className="absolute -top-8 -left-8 w-full h-full border-2 border-gray-200 transition-all duration-700" />

          {/* Main image */}
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={IMAGE_SRC}
              alt="Our Story"
              className="w-full h-full object-cover object-top transition-transform duration-700"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-700" />
          </div>

          {/* Accent corner */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary" />
        </div>

        {/* Content Side */}
        <div className="space-y-8">
          {/* Label */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-emerald-500" />
            <span className="text-sm uppercase tracking-[3px] text-gray-400">
              Our Story
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-light leading-tight">
            Crafting <span className="text-emerald-500">Excellence</span> Since
            Day One
          </h2>

          {/* Story Content */}
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              What began as a simple passion for footwear has evolved into a
              commitment to redefine comfort and style. Every sneaker we create
              tells a story of innovation, craftsmanship, and attention to
              detail.
            </p>

            <p>
              We believe that great design shouldn't compromise functionality.
              That's why each pair is engineered with precision, tested
              rigorously, and crafted to accompany you through every step of
              your journey.
            </p>

            <p>
              From the drawing board to your feet, we pour our expertise into
              creating sneakers that don't just meet expectations—they exceed
              them. This is more than footwear. This is our legacy.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500K+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Happy Customers
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Unique Designs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
