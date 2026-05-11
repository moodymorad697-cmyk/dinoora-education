"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GraduationCap, BookOpen, Award, Globe, Users, Building2 } from 'lucide-react'

interface FloatingIconsProps {
  className?: string
}

export function FloatingIcons({ className }: FloatingIconsProps) {
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
    camera.position.z = 10

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Create floating 3D education icons
    const educationObjects: THREE.Mesh[] = []
    
    // Different geometries for education themes
    const geometries = [
      new THREE.ConeGeometry(0.3, 0.6, 8), // Graduation cap shape
      new THREE.BoxGeometry(0.4, 0.6, 0.1), // Book shape
      new THREE.TorusGeometry(0.3, 0.1, 8, 16), // Award ring
      new THREE.SphereGeometry(0.3, 16, 16), // Globe
      new THREE.CylinderGeometry(0.2, 0.2, 0.5, 8), // People pillar
      new THREE.OctahedronGeometry(0.3), // Building diamond
    ]

    const materials = [
      new THREE.MeshPhongMaterial({ 
        color: 0x3b82f6, 
        transparent: true, 
        opacity: 0.4,
        emissive: 0x3b82f6,
        emissiveIntensity: 0.1
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x8b5cf6, 
        transparent: true, 
        opacity: 0.4,
        emissive: 0x8b5cf6,
        emissiveIntensity: 0.1
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x06b6d4, 
        transparent: true, 
        opacity: 0.4,
        emissive: 0x06b6d4,
        emissiveIntensity: 0.1
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x10b981, 
        transparent: true, 
        opacity: 0.4,
        emissive: 0x10b981,
        emissiveIntensity: 0.1
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xf59e0b, 
        transparent: true, 
        opacity: 0.4,
        emissive: 0xf59e0b,
        emissiveIntensity: 0.1
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xef4444, 
        transparent: true, 
        opacity: 0.4,
        emissive: 0xef4444,
        emissiveIntensity: 0.1
      }),
    ]

    for (let i = 0; i < 12; i++) {
      const geometry = geometries[i % geometries.length]
      const material = materials[i % materials.length]
      const mesh = new THREE.Mesh(geometry, material)
      
      // Position objects in a circular pattern
      const angle = (i / 12) * Math.PI * 2
      const radius = 4 + Math.random() * 2
      
      mesh.position.x = Math.cos(angle) * radius
      mesh.position.y = (Math.random() - 0.5) * 6
      mesh.position.z = Math.sin(angle) * radius - 5
      
      mesh.rotation.x = Math.random() * Math.PI
      mesh.rotation.y = Math.random() * Math.PI
      
      // Add custom animation properties
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        floatSpeed: 0.001 + Math.random() * 0.002,
        floatAmount: 0.5 + Math.random() * 0.5
      }
      
      educationObjects.push(mesh)
      scene.add(mesh)
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x3b82f6, 0.3)
    pointLight1.position.set(5, 5, 5)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 0.3)
    pointLight2.position.set(-5, -5, 5)
    scene.add(pointLight2)

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      // Animate education objects with individual rotation and floating
      educationObjects.forEach((obj) => {
        obj.rotation.x += obj.userData.rotationSpeed.x
        obj.rotation.y += obj.userData.rotationSpeed.y
        obj.rotation.z += obj.userData.rotationSpeed.z
        
        // Floating motion
        obj.position.y += Math.sin(elapsedTime * obj.userData.floatSpeed) * obj.userData.floatAmount * 0.01
      })

      // Slow camera rotation
      camera.rotation.y = elapsedTime * 0.02

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
