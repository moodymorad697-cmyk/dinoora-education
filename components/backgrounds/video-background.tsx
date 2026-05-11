"use client"

import { useState, useEffect, useRef } from 'react'

interface VideoBackgroundProps {
  videoSrc: string
  fallbackImageSrc: string
  className?: string
  opacity?: number
  blur?: number
}

export function VideoBackground({ 
  videoSrc, 
  fallbackImageSrc, 
  className = "", 
  opacity = 0.3,
  blur = 0 
}: VideoBackgroundProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [useFallback, setUseFallback] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsVideoLoaded(true)
      video.play().then(() => {
        setIsVideoPlaying(true)
      }).catch(() => {
        setUseFallback(true)
      })
    }

    const handleError = () => {
      setUseFallback(true)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('error', handleError)

    // Attempt to load video
    video.load()

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('error', handleError)
    }
  }, [videoSrc])

  if (useFallback) {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <img
          src={fallbackImageSrc}
          alt="Background"
          className="w-full h-full object-cover"
          style={{ opacity, filter: `blur(${blur}px)` }}
        />
      </div>
    )
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Video element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        style={{ 
          opacity: isVideoPlaying ? opacity : 0,
          filter: `blur(${blur}px)`,
          transition: 'opacity 1s ease-in-out'
        }}
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
      </video>

      {/* Fallback image (shown until video loads) */}
      {!isVideoPlaying && (
        <img
          src={fallbackImageSrc}
          alt="Background"
          className="w-full h-full object-cover absolute inset-0"
          style={{ opacity, filter: `blur(${blur}px)` }}
        />
      )}

      {/* Loading overlay */}
      {!isVideoLoaded && !useFallback && (
        <div className="absolute inset-0 bg-background/20" />
      )}
    </div>
  )
}
