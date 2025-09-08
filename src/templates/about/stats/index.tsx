"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface Stat {
  number: number;
  label: string;
  badge: string;
  year: string;
  bgColor: string;
}

const stats: Stat[] = [
  {
    number: 25,
    label: "Years of Craftsmanship",
    badge: "Legacy",
    year: "/2023",
    bgColor: "bg-green-50",
  },
  {
    number: 1200,
    label: "Shoes Designed",
    badge: "Creative",
    year: "/2023",
    bgColor: "bg-blue-50",
  },
  {
    number: 300,
    label: "Happy Clients",
    badge: "Satisfied",
    year: "/2023",
    bgColor: "bg-yellow-50",
  },
  {
    number: 15,
    label: "Awards Won",
    badge: "Prestige",
    year: "/2023",
    bgColor: "bg-pink-50",
  },
];

const AboutStats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Our Legacy Tale
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat }: { stat: Stat }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  React.useEffect(() => {
    import("framer-motion").then(({ animate }) => {
      const controls = animate(0, stat.number, {
        duration: 1.5,
        onUpdate: (latest) => count.set(latest),
      });
      return () => controls.stop();
    });
  }, [stat.number, count]);

  return (
    <motion.div
      className={`p-6 border border-gray-200 rounded-3xl`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-fit border border-green-500/20 text-green-500 font-semibold py-1 px-3 rounded-full text-xs">
        {stat.badge}
      </div>

      <p className="text-gray-500 text-sm mb-2 mt-6">{stat.label}</p>
      <div className="flex items-end">
        <motion.h2>{rounded}</motion.h2>
        <div className="text-gray-400 text-xs mb-2.5 ml-2">{stat.year}</div>
      </div>
    </motion.div>
  );
};

export default AboutStats;
