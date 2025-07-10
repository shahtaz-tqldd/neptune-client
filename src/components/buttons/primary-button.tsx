import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "xs" | "sm" | "md";
  role?: "button" | "a";
  onClick?: () => void;
}

const variantClasses = {
  primary: "bg-secondary text-white",
  secondary:
    "bg-blue-600/5 text-blue-900 dark:bg-white/10 dark:text-white border-blue-600/15 dark:border-blue-600/30",
  accent:
    "bg-blue-600/5 text-blue-900 dark:bg-white/10 dark:text-white border-blue-600/15 dark:border-blue-600/30",
};

const sizeClasses = {
  xs: "py-1.5 pr-3 pl-2.5 text-xs",
  sm: "px-10 py-3 text-lg",
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
    "rounded-full",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  return (
    <button className={commonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
