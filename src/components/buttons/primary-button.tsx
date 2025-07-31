import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@/assets/algo-icons";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent" | 'rubix' | 'alert-primary' | 'alert-secondary';
  size?: "xs" | "sm" | "md";
  role?: "button" | "a";
  onClick?: () => void;
  disabled?: boolean;
}

const variantClasses = {
  primary: "bg-secondary text-white group/button",
  secondary:
    "bg-blue-600/5 text-blue-900 dark:bg-white/10 dark:text-white border border-blue-600/15 dark:border-blue-600/30",
  accent:
    "bg-green-500 text-white font-semibold",
  rubix:
    "bg-green-700/10 text-green-600 font-semibold",
  
  "alert-primary":
      "bg-red-500 text-white font-semibold",

  "alert-secondary":
    "bg-red-500/10 text-red-500 font-semibold",
};

const sizeClasses = {
  xs: "py-2 pr-3 pl-6 text-sm",
  sm: "pl-10 pr-6 py-3 text-lg",
  md: "py-3 pr-5 pl-4",
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  size = "sm",
  ...props
}) => {
  const commonClasses = cn(
    "rounded-full inline-flex items-center justify-center gap-0 overflow-hidden tr",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  return (
    <button className={commonClasses} {...props}>
      <span
        className={cn(
          variant === "primary" &&
            "transition-all duration-300 transform group-hover/button:-translate-x-2"
        )}
      >
        {children}
      </span>
      {variant === "primary" && (
        <ArrowRight
          className={`opacity-0 transition-all duration-300 group-hover/button:opacity-100 group-hover/button:translate-x-1 ${size==="xs"?"translate-x-[-0.1rem]":"translate-x-[-0.25rem]"}`}
          size={size==="xs" ? 3 : 5}
          color="#fff"
        />
      )}
    </button>
  );
};

export default Button;
