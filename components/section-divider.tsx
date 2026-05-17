"use client"

import { motion } from "framer-motion"

export function SectionDivider() {
  return (
    <motion.div 
      className="relative py-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      </div>
    </motion.div>
  )
}
