'use client'

import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  loading?: 'eager' | 'lazy'
  sizes?: string
  quality?: number
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading = 'lazy',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 80,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Add quality parameter for Unsplash images
  const optimizedSrc = src.includes('unsplash.com') 
    ? `${src.split('?')[0]}?w=${width || 800}&q=${quality}&auto=format&fit=crop`
    : src

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Placeholder / Loading state */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-slate-800/20 animate-pulse"
          style={{ 
            aspectRatio: width && height ? `${width}/${height}` : '16/9'
          }}
        />
      )}
      
      {/* Actual image */}
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        className={`
          w-full h-full object-cover
          transition-opacity duration-300
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined,
        }}
        sizes={sizes}
      />
    </div>
  )
}

// Hero image with blur-up effect
export function HeroImage({
  src,
  alt,
  className = '',
}: {
  src: string
  alt: string
  className?: string
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Low quality placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-pulse" />
      )}
      
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        onLoad={() => setIsLoaded(true)}
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-opacity duration-500 ease-out
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </div>
  )
}

// Background image optimized for performance
export function OptimizedBackground({
  src,
  alt,
  children,
  className = '',
  overlay = true,
}: {
  src: string
  alt: string
  children: React.ReactNode
  className?: string
  overlay?: boolean
}) {
  return (
    <div className={`relative ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ willChange: 'transform' }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/85 to-slate-950/90" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
