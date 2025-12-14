"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "The Infinite Board transformed how I organize my study notes. Everything is connected and visual now!",
    author: "Emma Wilson",
    role: "University Student",
    avatar: "/diverse-female-student.png",
  },
  {
    quote: "Our team's brainstorming sessions are 10x more productive with real-time collaboration features.",
    author: "James Chen",
    role: "Product Manager",
    avatar: "/male-professional.png",
  },
  {
    quote:
      "Finally, a digital whiteboard that actually feels natural to use. It's like writing on paper, but infinite.",
    author: "Sofia Martinez",
    role: "UX Designer",
    avatar: "/female-designer.png",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 text-balance">
            Loved by Learners & <span className="text-primary">Creators</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            See how The Infinite Board is changing how people think and collaborate
          </p>

          <div className="relative">
            {/* Waveform Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="flex items-end gap-1 h-32">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-primary animate-pulse"
                    style={{
                      height: `${30 + Math.random() * 70}%`,
                      animationDelay: `${i * 0.05}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Testimonial Cards */}
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className={`transition-all duration-500 p-12 ${
                    index === activeIndex
                      ? "opacity-100 scale-100 relative"
                      : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
                  }`}
                >
                  <Quote className="w-12 h-12 text-primary mb-6" />
                  <blockquote className="text-2xl md:text-3xl font-medium mb-8 text-pretty leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full border-2 border-primary"
                    />
                    <div>
                      <div className="font-bold text-lg">{testimonial.author}</div>
                      <div className="text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
