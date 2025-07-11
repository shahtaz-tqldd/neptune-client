import React, { ReactNode } from "react";
import Link from "next/link";

interface LinkButtonProps {
  children: ReactNode;
  link?: string;
  className?: string;
}

export default function LinkButton({
  children,
  link = "/",
  className = "",
}: LinkButtonProps) {
  return (
    <Link
      href={link}
      className={`text-teal-900 font-semibold text-lg underline underline-offset-5 ${className}`}
    >
      {children}
    </Link>
  );
}
