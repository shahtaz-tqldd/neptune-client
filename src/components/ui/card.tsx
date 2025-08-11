import * as React from "react"

import { cn } from "@/lib/utils"

interface CardProps{
    children: React.ReactNode; 
    className?: string;
}

function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        // "bg-gradient-to-br from-[#DFF2EB] via-[#B9E5E8] to-[#DFF2EB] rounded-xl p-8 shadow-sm",
        "bg-gradient-to-br from-[#DFF2EB]/35 via-[#B9E5E8]/20 to-red-500/5 rounded-xl p-8 pt-6",
        className
      )}
      {...props}
    >
        {children}
    </div>
  )
}

export { Card }
