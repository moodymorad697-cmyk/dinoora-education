"use client"

import dynamic from 'next/dynamic'
import { Loader2 } from 'lucide-react'

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-full w-full">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
)

// Lazy loaded background components
export const LazyVideoBackground = dynamic(
  () => import('@/components/backgrounds/video-background').then(mod => ({ default: mod.VideoBackground })),
  { 
    loading: LoadingFallback,
    ssr: false 
  }
)

export const LazyImageSlideshow = dynamic(
  () => import('@/components/backgrounds/image-slideshow').then(mod => ({ default: mod.ImageSlideshow })),
  { 
    loading: LoadingFallback,
    ssr: false 
  }
)
