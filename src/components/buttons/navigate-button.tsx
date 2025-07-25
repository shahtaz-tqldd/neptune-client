"use client"

import { ArrowRight } from "@/assets/algo-icons";
import React, { ReactNode } from "react";

interface NavigateButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function NavigateButton({
  children,
  className = "",
  onClick = () => {},
}: NavigateButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden group flex items-center gap-2 px-4 py-2 rounded-full -translate-x-2 ${className}`}
    >
      <div className="absolute left-1.5 top-0 h-10 w-10 bg-[#DFF2EB] rounded-full z-0 transition-all duration-300 ease-in-out group-hover:w-full group-hover:h-full"></div>

      <div className="relative z-10 flex items-center gap-2">
        <ArrowRight size={5} />
        <span className="font-medium">{children}</span>
      </div>
    </button>
  );
}
