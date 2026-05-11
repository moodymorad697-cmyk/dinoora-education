"use client"

import dynamic from 'next/dynamic'
import { Loader2 } from 'lucide-react'

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-full w-full">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
)

// Lazy loaded 3D components
export const LazyParticleSystem = dynamic(
  () => import('@/components/3d/particle-system').then(mod => ({ default: mod.ParticleSystem })),
  { 
    loading: LoadingFallback,
    ssr: false 
  }
)

export const LazyFloatingIcons = dynamic(
  () => import('@/components/3d/floating-icons').then(mod => ({ default: mod.FloatingIcons })),
  { 
    loading: LoadingFallback,
    ssr: false 
  }
)

export const LazyRotatingGlobe = dynamic(
  () => import('@/components/3d/rotating-globe').then(mod => ({ default: mod.RotatingGlobe })),
  { 
    loading: LoadingFallback,
    ssr: false 
  }
)

export const LazyAnimatedTimeline = dynamic(
  () => import('@/components/3d/animated-timeline').then(mod => ({ default: mod.AnimatedTimeline })),
  { 
    loading: LoadingFallback,
    ssr: false 
  }
)
