import React from "react";

interface IconButtonProps {
  icon: React.ElementType;
  onClick?: ()=> void;
}

export default function IconButton({ icon: Icon, onClick }: IconButtonProps) {
  return (
    <button onClick={onClick} className="relative overflow-hidden group flex items-center gap-2 px-3 py-3 rounded-full">
      {/* Animated circle */}
      <div className="absolute bottom-1.5 right-1.5 h-3 w-3 bg-[#DFF2EB] rounded-full z-0 transition-all duration-300 ease-in-out group-hover:w-full group-hover:h-full group-hover:bottom-0 group-hover:right-0"></div>

      {/* Icon */}
      <div className="relative z-10 flex items-center gap-2">
        <Icon size={6} />
      </div>
    </button>
  );
}
