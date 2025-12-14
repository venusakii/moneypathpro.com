"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function BoardHeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const router = useRouter()

  const scrollToDemo = () => {
    const demoSection = document.querySelector('[data-section="demo"]')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const elements = [
      { x: 0.2, y: 0.3, type: "note", color: "#FEEA82" },
      { x: 0.7, y: 0.25, type: "note", color: "#9AF7CA" },
      { x: 0.5, y: 0.6, type: "circle", color: "#A4D7F5" },
      { x: 0.15, y: 0.7, type: "arrow", color: "#1F1F1F" },
      { x: 0.8, y: 0.65, type: "underline", color: "#9AF7CA" },
    ]

    let frame = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      elements.forEach((el, i) => {
        const offsetY = Math.sin(frame * 0.02 + i) * 10
        const x = el.x * canvas.width
        const y = el.y * canvas.height + offsetY

        ctx.save()

        if (el.type === "note") {
          ctx.fillStyle = el.color
          ctx.globalAlpha = 0.6
          ctx.fillRect(x - 40, y - 30, 80, 60)
          ctx.strokeStyle = el.color
          ctx.lineWidth = 2
          ctx.strokeRect(x - 40, y - 30, 80, 60)
        } else if (el.type === "circle") {
          ctx.strokeStyle = el.color
          ctx.lineWidth = 3
          ctx.globalAlpha = 0.5
          ctx.beginPath()
          ctx.arc(x, y, 30, 0, Math.PI * 2)
          ctx.stroke()
        } else if (el.type === "arrow") {
          ctx.strokeStyle = el.color
          ctx.lineWidth = 2
          ctx.globalAlpha = 0.4
          ctx.beginPath()
          ctx.moveTo(x - 30, y)
          ctx.lineTo(x + 30, y)
          ctx.lineTo(x + 20, y - 10)
          ctx.moveTo(x + 30, y)
          ctx.lineTo(x + 20, y + 10)
          ctx.stroke()
        } else if (el.type === "underline") {
          ctx.strokeStyle = el.color
          ctx.lineWidth = 3
          ctx.globalAlpha = 0.6
          ctx.beginPath()
          ctx.moveTo(x - 40, y)
          ctx.lineTo(x + 40, y)
          ctx.stroke()
        }

        ctx.restore()
      })

      frame++
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        style={{ background: "linear-gradient(135deg, #FAFAF9 0%, #F5F5F4 100%)" }}
      />

      <div className="absolute inset-0 sketch-grid opacity-30" />

      <div className="relative container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight write-in">
            Where Ideas Take{" "}
            <span className="relative inline-block">
              <span className="text-primary">Shape.</span>
              <svg
                className="absolute -bottom-4 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7 Q 50 2, 100 6 T 195 7"
                  stroke="#9AF7CA"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  className="animate-[chalk-underline_1.5s_ease-out]"
                />
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Collaborative boards for study, planning, and creative work.
            <br />
            <span className="text-foreground font-medium">Turn learning into interaction.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/boards">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                Explore Boards →
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToDemo}
              className="text-lg px-8 py-6 rounded-2xl border-2 hover:bg-muted bg-transparent"
            >
              <Play className="w-5 h-5 mr-2" />
              See in Action
            </Button>
          </div>

          <div className="pt-12 flex flex-wrap justify-center gap-8 items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✏️</span>
              <span>10,000+ Boards Created</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <span>5,000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
