"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input"> & {
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};

function Input({
  className,
  type = "text",
  label,
  icon,
  iconPosition = "left",
  id,
  ...props
}: InputProps) {
  const inputId = id || React.useId();

  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && iconPosition === "left" && (
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500 pointer-events-none">
            {icon}
          </span>
        )}

        <input
          id={inputId}
          type={type}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-black/20 flex h-10 w-full min-w-0 rounded-md border bg-white px-3 py-2 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]",
            "aria-invalid:ring-red-500/20",
            icon && iconPosition === "left" ? "pl-10" : "",
            icon && iconPosition === "right" ? "pr-10" : "",
            className
          )}
          {...props}
        />

        {icon && iconPosition === "right" && (
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 pointer-events-none">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
}

export { Input };
