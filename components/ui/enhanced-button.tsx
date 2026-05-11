"use client"

import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "neon" | "glow" | "shimmer"
  size?: "default" | "lg" | "xl"
  children: React.ReactNode
  asChild?: boolean
}

const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, variant = "default", size = "default", children, asChild = false, ...props }, ref) => {
    const variants = {
      default: "",
      neon: "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]",
      glow: "bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.8)]",
      shimmer: "relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary text-white before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000"
    }

    const sizes = {
      default: "px-6 py-3",
      lg: "px-8 py-6 text-lg",
      xl: "px-12 py-8 text-xl"
    }

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button
          ref={ref}
          className={cn(
            "rounded-xl font-semibold transition-all duration-300 transform",
            variants[variant],
            sizes[size],
            className
          )}
          asChild={asChild}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    )
  }
)

EnhancedButton.displayName = "EnhancedButton"

export { EnhancedButton }
