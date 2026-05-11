"use client"

import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

interface RTLLayoutProps {
  children: React.ReactNode
  className?: string
}

export function RTLLayout({ children, className }: RTLLayoutProps) {
  const { dir } = useLanguage()

  return (
    <div dir={dir} className={cn("w-full", className)}>
      {children}
    </div>
  )
}

// Helper function for RTL-aware styling
export function rtlStyles(dir: "ltr" | "rtl") {
  return {
    textAlign: dir === "rtl" ? "right" : "left" as const,
    marginLeft: dir === "rtl" ? "auto" : undefined,
    marginRight: dir === "rtl" ? undefined : "auto",
    transform: dir === "rtl" ? "scaleX(-1)" : undefined,
  }
}

// Helper for margin/padding in RTL
export function rtlSpacing(dir: "ltr" | "rtl", property: "left" | "right", value: string) {
  if (dir === "rtl") {
    const opposite = property === "left" ? "right" : "left"
    return { [opposite]: value }
  }
  return { [property]: value }
}
