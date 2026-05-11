"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageWithFallbackProps {
  src: string
  alt: string
  fallback?: string
  className?: string
  priority?: boolean
  quality?: number
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
}

export function ImageWithFallback({
  src,
  alt,
  fallback = "/images/placeholder.jpg",
  className,
  priority = false,
  quality = 85,
  fill = false,
  width,
  height,
  sizes,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (imgSrc !== fallback) {
      setImgSrc(fallback)
      setHasError(true)
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/40 animate-pulse" />
      )}
      <Image
        src={imgSrc}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        quality={quality}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          hasError && "object-cover"
        )}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
          <div className="text-center p-4">
            <div className="text-4xl mb-2">{'\ud83d\udcf7'}</div>
            <div className="text-sm text-muted-foreground">Image not available</div>
          </div>
        </div>
      )}
    </div>
  )
}
