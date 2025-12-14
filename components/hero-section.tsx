"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationFrame: number
    let progress = 0

    const drawGoldenPath = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw golden line that forms "MoneyPathPro"
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      ctx.strokeStyle = `rgba(228, 199, 125, ${Math.min(progress / 100, 0.8)})`
      ctx.lineWidth = 3
      ctx.shadowBlur = 20
      ctx.shadowColor = "#E4C77D"

      ctx.beginPath()

      // Animated path drawing
      const pathLength = progress * 10
      for (let i = 0; i < pathLength; i++) {
        const angle = (i / 100) * Math.PI * 2
        const radius = 100 + Math.sin(i / 20) * 50
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.stroke()

      // Continue animation
      if (progress < 100) {
        progress += 0.5
        animationFrame = requestAnimationFrame(drawGoldenPath)
      }
    }

    drawGoldenPath()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById("vision-section")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0F172A] to-background">
      {/* Animated Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance text-[#FAFAF9]">
          Build Your <span className="gold-gradient-animate">E-Commerce Empire</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto text-pretty">
          Success in dropshipping is not a gamble — it's a proven path with the right tools and suppliers.
        </p>
        <Button
          size="lg"
          onClick={scrollToNext}
          className="pulse-soft bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full"
        >
          Start Your Store
          <ArrowDown className="ml-2 w-5 h-5" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
