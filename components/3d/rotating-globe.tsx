"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface RotatingGlobeProps {
  className?: string
}

export function RotatingGlobe({ className }: RotatingGlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    if (!mountRef.current) return

    const width = mountRef.current.clientWidth
    const height = mountRef.current.clientHeight

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 8

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Create globe
    const globeGeometry = new THREE.SphereGeometry(2.5, 32, 32)
    const globeMaterial = new THREE.MeshPhongMaterial({
      color: 0x1e40af,
      transparent: true,
      opacity: 0.3,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.1,
      wireframe: true
    })
    const globe = new THREE.Mesh(globeGeometry, globeMaterial)
    scene.add(globe)

    // Create continents (simplified)
    const continentGeometry = new THREE.SphereGeometry(2.52, 16, 16)
    const continentMaterial = new THREE.MeshPhongMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.5,
      emissive: 0x10b981,
      emissiveIntensity: 0.05
    })
    const continents = new THREE.Mesh(continentGeometry, continentMaterial)
    continents.scale.set(1, 0.8, 1) // Flatten to simulate continents
    scene.add(continents)

    // Add glowing points for major cities/locations
    const cityPositions = [
      { lat: 39.9042, lon: 116.4074, color: 0xef4444 }, // Beijing
      { lat: 3.1390, lon: 101.6869, color: 0xf59e0b }, // Kuala Lumpur
      { lat: 41.0082, lon: 28.9784, color: 0x8b5cf6 }, // Istanbul
      { lat: 51.5074, lon: -0.1278, color: 0x3b82f6 }, // London
      { lat: 40.7128, lon: -74.0060, color: 0x06b6d4 }, // New York
    ]

    const cityMarkers: THREE.Mesh[] = []
    cityPositions.forEach((city) => {
      const markerGeometry = new THREE.SphereGeometry(0.1, 8, 8)
      const markerMaterial = new THREE.MeshPhongMaterial({
        color: city.color,
        emissive: city.color,
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: 0.8
      })
      const marker = new THREE.Mesh(markerGeometry, markerMaterial)
      
      // Convert lat/lon to 3D coordinates
      const phi = (90 - city.lat) * (Math.PI / 180)
      const theta = (city.lon + 180) * (Math.PI / 180)
      const radius = 2.6
      
      marker.position.x = -radius * Math.sin(phi) * Math.cos(theta)
      marker.position.y = radius * Math.cos(phi)
      marker.position.z = radius * Math.sin(phi) * Math.sin(theta)
      
      cityMarkers.push(marker)
      scene.add(marker)
    })

    // Add orbital rings
    const ringGeometry = new THREE.TorusGeometry(3.5, 0.02, 8, 32)
    const ringMaterial = new THREE.MeshPhongMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.3,
      emissive: 0x6366f1,
      emissiveIntensity: 0.1
    })
    
    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial)
    ring1.rotation.x = Math.PI / 4
    scene.add(ring1)
    
    const ring2 = new THREE.Mesh(ringGeometry, ringMaterial)
    ring2.rotation.y = Math.PI / 4
    scene.add(ring2)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
    directionalLight.position.set(5, 3, 5)
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0x3b82f6, 0.3)
    pointLight.position.set(-5, 0, 0)
    scene.add(pointLight)

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      // Rotate globe
      globe.rotation.y = elapsedTime * 0.1
      continents.rotation.y = elapsedTime * 0.12 // Slightly different speed for effect

      // Pulse city markers
      cityMarkers.forEach((marker, index) => {
        const scale = 1 + Math.sin(elapsedTime * 2 + index) * 0.2
        marker.scale.set(scale, scale, scale)
      })

      // Rotate rings
      ring1.rotation.z = elapsedTime * 0.05
      ring2.rotation.x = elapsedTime * 0.03

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return
      const newWidth = mountRef.current.clientWidth
      const newHeight = mountRef.current.clientHeight

      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className={className} />
}
