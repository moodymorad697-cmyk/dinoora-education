"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedBackgroundProps {
  className?: string
  variant?: "particles" | "waves" | "gradient" | "orbital"
  intensity?: "light" | "medium" | "strong"
}

export function AnimatedBackground({ 
  className, 
  variant = "particles", 
  intensity = "medium" 
}: AnimatedBackgroundProps) {
  const intensities = {
    light: "opacity-30",
    medium: "opacity-50", 
    strong: "opacity-70"
  }

  const variants = {
    particles: (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    ),
    waves: (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full bg-gradient-to-b from-primary/10 to-transparent"
            style={{
              top: `${i * 30}%`,
            }}
            animate={{
              y: [0, 20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    ),
    gradient: (
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"
        animate={{
          background: [
            "linear-gradient(to bottom right, rgba(59,130,246,0.2), transparent, rgba(168,85,247,0.2))",
            "linear-gradient(to top right, rgba(168,85,247,0.2), transparent, rgba(59,130,246,0.2))",
            "linear-gradient(to bottom right, rgba(59,130,246,0.2), transparent, rgba(168,85,247,0.2))",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ),
    orbital: (
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-32 h-32 border-2 border-primary/30 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-48 h-48 border-2 border-accent/30 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-64 h-64 border-2 border-primary/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>
    )
  }

  return (
    <div className={cn("absolute inset-0 pointer-events-none", intensities[intensity], className)}>
      {variants[variant]}
    </div>
  )
}
