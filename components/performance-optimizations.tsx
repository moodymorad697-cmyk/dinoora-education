'use client'

import { useEffect } from 'react'

// Lazy load non-critical images
export function LazyLoadImages() {
  useEffect(() => {
    // Intersection Observer for lazy loading below-fold images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute('data-src')
              img.classList.add('loaded')
            }
            observer.unobserve(img)
          }
        })
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      })

      // Observe images with data-src attribute
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img)
      })

      return () => {
        imageObserver.disconnect()
      }
    }
  }, [])

  return null
}

// Prefetch visible links
export function PrefetchLinks() {
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.href && target.hostname === location.hostname) {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = target.href
        document.head.appendChild(link)
      }
    }

    // Add event listener with delay to avoid excessive prefetches
    let timeoutId: NodeJS.Timeout
    const delayedHandler = (e: MouseEvent) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => handleMouseOver(e), 100)
    }

    document.addEventListener('mouseover', delayedHandler, { passive: true })

    return () => {
      document.removeEventListener('mouseover', delayedHandler)
      clearTimeout(timeoutId)
    }
  }, [])

  return null
}

// Optimize CLS by reserving space for dynamic content
export function CLSOptimizer() {
  useEffect(() => {
    // Add min-height to common layout elements to prevent CLS
    const style = document.createElement('style')
    style.textContent = `
      /* Reserve space for images to prevent CLS */
      img {
        max-width: 100%;
        height: auto;
      }
      
      /* Reserve space for common components */
      [data-cls-reserve="true"] {
        min-height: var(--min-height, 0);
      }
      
      /* Optimize animations for performance */
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
      
      /* GPU acceleration for animated elements */
      .gpu-accelerate {
        transform: translateZ(0);
        backface-visibility: hidden;
        will-change: transform;
      }
      
      /* Contain layout for complex sections */
      .layout-contain {
        contain: layout style paint;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}

// Reduce INP by debouncing expensive operations
export function INPOptimizer() {
  useEffect(() => {
    // Use requestIdleCallback for non-critical work
    const scheduleIdleWork = (callback: () => void) => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(callback, { timeout: 2000 })
      } else {
        setTimeout(callback, 1)
      }
    }

    // Example: Schedule analytics or non-critical scripts
    scheduleIdleWork(() => {
      // Analytics initialization can happen here
      console.log('Idle work scheduled')
    })
  }, [])

  return null
}

// Combined performance component
export function PerformanceOptimizations() {
  return (
    <>
      <LazyLoadImages />
      <PrefetchLinks />
      <CLSOptimizer />
      <INPOptimizer />
    </>
  )
}
