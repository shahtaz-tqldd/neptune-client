"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, Variants } from "framer-motion";

interface AboutHeroProps {
  imageUrl: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ imageUrl }) => {
  const [animationStarted, setAnimationStarted] = useState(false);

  // Constants
  const MAIN_TEXT = "ABOUT";
  const SUB_TEXT = "SHOEHUB";
  const ANIMATION_DELAY = 400;

  // Animation variants - memoized to prevent recreation
  const letterVariants: Variants = useMemo(
    () => ({
      hidden: {
        y: 100,
        opacity: 0,
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
      },
      visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay: i * 0.08,
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }),
    }),
    []
  );

  const lineVariants: Variants = useMemo(
    () => ({
      hidden: { width: 0 },
      visible: {
        width: "120px",
        transition: {
          delay: 0.2,
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    }),
    []
  );

  const descriptionVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.6,
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    }),
    []
  );

  const imageVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.8,
          duration: 1,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    }),
    []
  );

  // Custom mask styles - memoized to prevent recreation
  const maskStyles = useMemo(
    () => ({
      backgroundImage: `url(${imageUrl})`,
      maskImage: `
      linear-gradient(black, black),
      linear-gradient(black, black),
      linear-gradient(black, black)
    `,
      maskSize: `60% 100%, 40% 80%, 40% 20%`,
      maskPosition: `0% 0%, 100% 0%, 100% 80%`,
      maskRepeat: "no-repeat, no-repeat, no-repeat",
      maskComposite: "add",
      WebkitMaskImage: `
      linear-gradient(black, black),
      linear-gradient(black, black),
      linear-gradient(black, black)
    `,
      WebkitMaskSize: `60% 100%, 40% 80%, 40% 20%`,
      WebkitMaskPosition: `0% 0%, 100% 0%, 100% 80%`,
      WebkitMaskRepeat: "no-repeat, no-repeat, no-repeat",
      WebkitMaskComposite: "source-over",
    }),
    [imageUrl]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, ANIMATION_DELAY);

    return () => clearTimeout(timer);
  }, []);

  // Render animated letters component
  const AnimatedLetters = ({
    text,
    startIndex = 0,
    className,
  }: {
    text: string;
    startIndex?: number;
    className: string;
  }) => (
    <div className="flex overflow-hidden">
      {text.split("").map((letter, index) => (
        <motion.span
          key={`${text}-${index}`}
          custom={index + startIndex}
          variants={letterVariants}
          initial="hidden"
          animate={animationStarted ? "visible" : "hidden"}
          className={`${className} inline-block`}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );

  return (
    <div className="min-h-[85vh] center pt-28 pb-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1 lg:col-span-3">
            {/* Top Description */}
            <motion.p
              variants={descriptionVariants}
              initial="hidden"
              animate={animationStarted ? "visible" : "hidden"}
              className="text-xl w-full mt-4 pb-20"
            >
              Our family's dedication to this noble material reflects a deep
              respect for its history and potential.
            </motion.p>

            {/* Main Title Section */}
            <div className="absolute bg-white z-10 pr-10 pt-6 -mt-20">
              <div className="relative overflow-hidden">
                <div className="space-y-4">
                  {/* ABOUT Text */}
                  <AnimatedLetters
                    text={MAIN_TEXT}
                    className="text-6xl sm:text-8xl lg:text-9xl font-bold text-gray-700"
                  />

                  {/* Line and SUB Text */}
                  <div className="flex items-center space-x-8">
                    <motion.div
                      variants={lineVariants}
                      initial="hidden"
                      animate={animationStarted ? "visible" : "hidden"}
                      className="h-1 bg-black"
                      aria-hidden="true"
                    />

                    <AnimatedLetters
                      text={SUB_TEXT}
                      startIndex={MAIN_TEXT.length + 2}
                      className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Section */}
          <div className="order-1 lg:order-2 lg:col-span-8">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={animationStarted ? "visible" : "hidden"}
              className="relative"
            >
              {/* Image Container */}
              <div className="relative w-full h-96 sm:h-[500px] lg:h-[600px]">
                {/* Masked Image */}
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={maskStyles}
                  role="img"
                  aria-label="About ShoeHub showcase image"
                />

                {/* Gap Overlays */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="absolute left-[60%] top-0 w-4 h-full bg-white" />
                  <div className="absolute left-[26%] top-0 w-4 h-full bg-white" />
                </div>
              </div>

              {/* Bottom Description */}
              <motion.p
                variants={descriptionVariants}
                initial="hidden"
                animate={animationStarted ? "visible" : "hidden"}
                className="-mt-20 text-lg max-w-xs ml-auto text-right"
              >
                we've been crafting the legacy of metal transforming it from a
                raw material into timeless art.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
