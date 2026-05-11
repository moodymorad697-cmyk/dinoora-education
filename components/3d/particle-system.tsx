"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ParticleSystemProps {
  className?: string
}

export function ParticleSystem({ className }: ParticleSystemProps) {
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
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Create particles with optimized count for better performance
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 80 // Optimized from 300 to 80
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15 // Reduced range from 20 to 15
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    // Particle material with increased size and opacity
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05, // Increased from 0.02 to 0.05
      color: 0x4f46e5,
      transparent: true,
      opacity: 0.8, // Increased from 0.6 to 0.8
      blending: THREE.AdditiveBlending
    })

    // Create particle system
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Add floating education-themed objects with optimized count for performance
    const educationObjects: THREE.Mesh[] = []
    const geometries = [
      new THREE.ConeGeometry(0.12, 0.25, 8),
      new THREE.SphereGeometry(0.12, 8, 8),
      new THREE.TorusGeometry(0.12, 0.04, 8, 16),
    ]

    const materials = [
      new THREE.MeshPhongMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.4 }),
      new THREE.MeshPhongMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.4 }),
      new THREE.MeshPhongMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.4 }),
    ]

    for (let i = 0; i < 6; i++) { // Reduced from 15 to 6
      const geometry = geometries[i % geometries.length]
      const material = materials[i % materials.length]
      const mesh = new THREE.Mesh(geometry, material)
      
      mesh.position.x = (Math.random() - 0.5) * 10 // Reduced range
      mesh.position.y = (Math.random() - 0.5) * 8 // Reduced range
      mesh.position.z = (Math.random() - 0.5) * 6 // Reduced range
      
      mesh.rotation.x = Math.random() * Math.PI
      mesh.rotation.y = Math.random() * Math.PI
      
      educationObjects.push(mesh)
      scene.add(mesh)
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x4f46e5, 0.5)
    pointLight.position.set(2, 3, 4)
    scene.add(pointLight)

    // Animation with optimized speed for better performance
    const clock = new THREE.Clock()

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      // Rotate particles with optimized speed
      particlesMesh.rotation.y = elapsedTime * 0.05 // Reduced from 0.15 to 0.05
      particlesMesh.rotation.x = elapsedTime * 0.02 // Reduced from 0.08 to 0.02

      // Animate floating objects with optimized movement
      educationObjects.forEach((obj, index) => {
        obj.rotation.x += 0.01 // Reduced from 0.03 to 0.01
        obj.rotation.y += 0.01 // Reduced from 0.03 to 0.01
        obj.rotation.z += 0.005 // Reduced from 0.02 to 0.005
        
        // Optimized floating motion
        obj.position.y += Math.sin(elapsedTime * 0.5 + index) * 0.002 // Reduced amplitude and speed
        obj.position.x += Math.cos(elapsedTime * 0.4 + index) * 0.001 // Reduced amplitude and speed
      })

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
