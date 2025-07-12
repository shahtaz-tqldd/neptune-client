"use client";

import { SearchIcon } from "@/assets/algo-icons";
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
        fixed left-8 z-50
        flx gap-1.5 border-t-2 border-yellow-400
        transition-all duration-500 ease-in-out text-black/75
        bg-white/80 backdrop-blur-sm py-3 pr-5 pl-3 rounded-full shadow-xl font-medium
        ${
          visible
            ? "bottom-6 translate-y-0 opacity-100"
            : "-bottom-20 translate-y-10 opacity-0"
        }
      `}
    >
      <SearchIcon size={5.5} className="translate-y-0.5" />
      Search Shoes
    </button>
  );
}
