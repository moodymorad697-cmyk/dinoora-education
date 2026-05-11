"use client"

import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { motion, type MotionProps } from "framer-motion"

interface EnhancedCardProps extends MotionProps {
  variant?: "default" | "glass" | "neon" | "gradient"
  hover?: boolean
  glow?: boolean
  children: React.ReactNode
  className?: string
}

const EnhancedCard = forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({ className, variant = "default", hover = true, glow = false, children, ...props }, ref) => {
    const variants = {
      default: "bg-card/50 border-border/40 backdrop-blur-sm",
      glass: "bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-md",
      neon: "bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.3)]",
      gradient: "bg-gradient-to-br from-primary/10 via-card/30 to-accent/10 border-primary/30 backdrop-blur-sm"
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative rounded-3xl border p-6 transition-all duration-500",
          variants[variant],
          hover && "hover:scale-105 hover:shadow-2xl hover:shadow-primary/20",
          glow && "animate-glow",
          className
        )}
        whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        {...props}
      >
        {glow && (
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-accent/20 blur-xl opacity-50" />
        )}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    )
  }
)

EnhancedCard.displayName = "EnhancedCard"

export { EnhancedCard }
