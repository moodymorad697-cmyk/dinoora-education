"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface AnimatedTimelineProps {
  className?: string
}

export function AnimatedTimeline({ className }: AnimatedTimelineProps) {
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

    // Create animated timeline path
    const timelinePoints: THREE.Vector3[] = []
    const numPoints = 20
    
    for (let i = 0; i < numPoints; i++) {
      const t = i / (numPoints - 1)
      const x = (t - 0.5) * 15
      const y = Math.sin(t * Math.PI * 2) * 2
      const z = Math.cos(t * Math.PI * 3) * 1
      timelinePoints.push(new THREE.Vector3(x, y, z))
    }

    // Create timeline curve
    const curve = new THREE.CatmullRomCurve3(timelinePoints)
    const curveGeometry = new THREE.TubeGeometry(curve, 100, 0.05, 8, false)
    const curveMaterial = new THREE.MeshPhongMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.3,
      emissive: 0x6366f1,
      emissiveIntensity: 0.1
    })
    const timelineCurve = new THREE.Mesh(curveGeometry, curveMaterial)
    scene.add(timelineCurve)

    // Create milestone points along the timeline
    const milestoneGroup = new THREE.Group()
    const milestones: THREE.Mesh[] = []
    
    for (let i = 0; i < numPoints; i += 3) {
      const point = timelinePoints[i]
      
      // Create milestone sphere
      const sphereGeometry = new THREE.SphereGeometry(0.15, 16, 16)
      const sphereMaterial = new THREE.MeshPhongMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.6,
        emissive: 0x3b82f6,
        emissiveIntensity: 0.2
      })
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
      sphere.position.copy(point)
      sphere.userData = {
        originalScale: 1,
        pulseSpeed: 0.5 + Math.random() * 0.5,
        pulsePhase: Math.random() * Math.PI * 2
      }
      
      milestones.push(sphere)
      milestoneGroup.add(sphere)
      
      // Add connecting rings
      const ringGeometry = new THREE.TorusGeometry(0.3, 0.02, 8, 16)
      const ringMaterial = new THREE.MeshPhongMaterial({
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0.2,
        emissive: 0x8b5cf6,
        emissiveIntensity: 0.1
      })
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      ring.position.copy(point)
      ring.rotation.x = Math.PI / 2
      milestoneGroup.add(ring)
    }
    
    scene.add(milestoneGroup)

    // Create floating particles along the path
    const particles: THREE.Points[] = []
    for (let i = 0; i < 5; i++) {
      const particleGeometry = new THREE.BufferGeometry()
      const particleCount = 50
      const positions = new Float32Array(particleCount * 3)
      
      for (let j = 0; j < particleCount; j++) {
        const t = j / particleCount
        const point = curve.getPoint(t)
        positions[j * 3] = point.x + (Math.random() - 0.5) * 0.5
        positions[j * 3 + 1] = point.y + (Math.random() - 0.5) * 0.5
        positions[j * 3 + 2] = point.z + (Math.random() - 0.5) * 0.5
      }
      
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: [0x3b82f6, 0x8b5cf6, 0x06b6d4, 0x10b981, 0xf59e0b][i],
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending
      })
      
      const particleSystem = new THREE.Points(particleGeometry, particleMaterial)
      particleSystem.userData = { offset: i * 0.2 }
      particles.push(particleSystem)
      scene.add(particleSystem)
    }

    // Create flowing data streams
    const streamGroup = new THREE.Group()
    for (let i = 0; i < 3; i++) {
      const streamGeometry = new THREE.BufferGeometry()
      const streamPoints = []
      const streamLength = 30
      
      for (let j = 0; j < streamLength; j++) {
        const t = j / streamLength
        const point = curve.getPoint((t + i * 0.3) % 1)
        streamPoints.push(point.x, point.y, point.z)
      }
      
      streamGeometry.setAttribute('position', new THREE.Float32BufferAttribute(streamPoints, 3))
      
      const streamMaterial = new THREE.LineBasicMaterial({
        color: [0x06b6d4, 0x10b981, 0xf59e0b][i],
        transparent: true,
        opacity: 0.3,
        linewidth: 2
      })
      
      const streamLine = new THREE.Line(streamGeometry, streamMaterial)
      streamLine.userData = { speed: 0.001 + i * 0.0005 }
      streamGroup.add(streamLine)
    }
    scene.add(streamGroup)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
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

      // Animate timeline curve
      timelineCurve.rotation.y = elapsedTime * 0.02
      timelineCurve.rotation.z = Math.sin(elapsedTime * 0.01) * 0.1

      // Animate milestones with pulsing effect
      milestones.forEach((milestone, index) => {
        const pulse = Math.sin(elapsedTime * milestone.userData.pulseSpeed + milestone.userData.pulsePhase)
        const scale = milestone.userData.originalScale + pulse * 0.2
        milestone.scale.set(scale, scale, scale)
        milestone.rotation.y += 0.01
      })

      // Animate particles flowing along the path
      particles.forEach((particle) => {
        particle.rotation.y = elapsedTime * 0.05
        const positions = particle.geometry.attributes.position.array as Float32Array
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(elapsedTime + i) * 0.001
        }
        particle.geometry.attributes.position.needsUpdate = true
      })

      // Animate data streams
      streamGroup.children.forEach((stream) => {
        const line = stream as THREE.Line
        const positions = line.geometry.attributes.position.array as Float32Array
        for (let i = 0; i < positions.length; i += 3) {
          const t = (i / 3) / (positions.length / 3)
          const point = curve.getPoint((t + elapsedTime * stream.userData.speed) % 1)
          positions[i] = point.x
          positions[i + 1] = point.y
          positions[i + 2] = point.z
        }
        line.geometry.attributes.position.needsUpdate = true
      })

      // Slow camera movement
      camera.position.x = Math.sin(elapsedTime * 0.05) * 2
      camera.position.y = Math.cos(elapsedTime * 0.03) * 1
      camera.lookAt(0, 0, 0)

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
