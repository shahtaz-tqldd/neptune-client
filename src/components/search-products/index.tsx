"use client";

import { SearchIcon } from "@/assets/algo-icons";
import { LucideMessageSquareDot } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function SearchProducts() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`
        fixed right-8 z-50 h-14 w-14 center
        border-2 border-emerald-900/30
        transition-all duration-500 ease-in-out text-black/75
        bg-emerald-900/80 backdrop-blur-sm rounded-full shadow-xl font-medium
        ${
          visible
            ? "bottom-6 translate-y-0 opacity-100"
            : "-bottom-20 translate-y-10 opacity-0"
        }
      `}
    >
      <LucideMessageSquareDot size={20} className="text-white" />
    </button>
  );
}
