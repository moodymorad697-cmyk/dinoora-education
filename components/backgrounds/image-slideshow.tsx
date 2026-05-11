"use client"

import { useState, useEffect } from 'react'

interface ImageSlideshowProps {
  images: string[]
  className?: string
  interval?: number
  opacity?: number
  zoomEffect?: boolean
}

export function ImageSlideshow({ 
  images, 
  className = "", 
  interval = 5000,
  opacity = 0.3,
  zoomEffect = true
}: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (images.length === 0) return

    // Preload images
    const preloadImages = images.map(src => {
      const img = new Image()
      img.src = src
      return img
    })

    Promise.all(preloadImages.map(img => 
      new Promise((resolve) => {
        if (img.complete) {
          resolve(true)
        } else {
          img.onload = () => resolve(true)
          img.onerror = () => resolve(true) // Still resolve on error
        }
      })
    )).then(() => {
      setIsLoaded(true)
    })

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images, interval])

  if (!isLoaded || images.length === 0) {
    return <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 ${className}`} />
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: index === currentIndex ? opacity : 0,
            transform: index === currentIndex && zoomEffect ? 'scale(1.05)' : 'scale(1)',
            transition: 'opacity 1000ms ease-in-out, transform 10000ms ease-in-out'
          }}
        >
          <img
            src={image}
            alt={`Background ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}
