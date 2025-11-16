import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@/assets/algo-icons";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "rubix"
    | "alert-primary"
    | "alert-secondary"
    | "deccent"
    | "ghost";
  size?: "xs" | "sm" | "md" | "lg";
  link?: string | null;
  onClick?: () => void;
  disabled?: boolean;
  isArrow?: boolean;
  type?: "button" | "submit" | "reset";
}

const variantClasses = {
  primary: "bg-emerald-900 text-white group/button",
  secondary:
    "bg-blue-600/5 text-blue-900 dark:bg-white/10 dark:text-white border border-blue-600/15 dark:border-blue-600/30",
  accent: "border-2 border-primary/60 bg-primary/5 text-primary hover:bg-primary/10",
  deccent: "border-2 border-gray-500 bg-transparent text-black hover:bg-gray-100/80",
  rubix: "bg-primary/10 hover:bg-primary/15 text-primary font-medium tr",
  "alert-primary": "bg-red-500 text-white font-semibold",
  "alert-secondary": "bg-red-500/10 hover:bg-red-500/15 text-red-500 font-medium tr",
  ghost: "bg-gray-100"
};

const sizeClasses = {
  xs: "py-2 pr-3.5 pl-6 text-sm",
  sm: "pl-10 pr-6 py-3 text-lg",
  md: "py-3 pr-5 pl-4",
  lg: "px-8 py-4 font-semibold",
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  size = "sm",
  link = null,
  isArrow = true,
  type = "button",
  ...props
}) => {
  const commonClasses = cn(
    "rounded-full inline-flex items-center justify-center overflow-hidden tr",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const textClasses = cn(
    variant === "primary" && isArrow
      ? "transition-all duration-300 transform group-hover/button:-translate-x-2"
      : ""
  );

  const arrowClasses = cn(
    "transition-all -ml-2 duration-300",
    isArrow ? "opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-1" : "hidden",
    size === "xs" ? "translate-x-[-2px]" : "translate-x-[-0.25rem]"
  );

  if (link) {
    return (
      <Link href={link} className={commonClasses}>
        <span className={textClasses}>{children}</span>
        {variant === "primary" && isArrow && (
          <ArrowRight
            className={arrowClasses}
            size={size === "xs" ? 4 : 5}
            color="#fff"
          />
        )}
      </Link>
    );
  }

  return (
    <button type={type} className={commonClasses} {...props}>
      <span className={textClasses}>{children}</span>
      {variant === "primary" && isArrow && (
        <ArrowRight
          className={arrowClasses}
          size={size === "xs" ? 4 : 5}
          color="#fff"
        />
      )}
    </button>
  );
};

export default Button;
