"use client"

import { useEffect, useRef, useState } from "react"

export function GrowthVisualizationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 text-balance">
            Visualize Growth in <span className="text-primary">Real Time</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Understand your finances at a glance. Let visuals tell your story.
          </p>

          <div className="relative">
            <div className="w-full h-[400px] rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1e293b] border border-primary/20 p-8 relative overflow-hidden">
              {/* Animated Grid Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full grid grid-cols-10 grid-rows-8">
                  {Array.from({ length: 80 }).map((_, i) => (
                    <div key={i} className="border border-primary/20" />
                  ))}
                </div>
              </div>

              {/* SVG Growth Chart */}
              <svg className="w-full h-full relative z-10" viewBox="0 0 800 300" preserveAspectRatio="none">
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E4C77D" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#E4C77D" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="fillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#E4C77D" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#E4C77D" stopOpacity="0" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Area Fill with Animation */}
                <path
                  d="M 0 250 Q 200 200 400 120 T 800 40 L 800 300 L 0 300 Z"
                  fill="url(#fillGradient)"
                  className={isVisible ? "animate-[fadeIn_1.5s_ease-out]" : "opacity-0"}
                />

                {/* Main Growth Line with Animation */}
                <path
                  d="M 0 250 Q 200 200 400 120 T 800 40"
                  stroke="url(#pathGradient)"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#glow)"
                  className={isVisible ? "animate-[drawLine_2s_ease-out]" : "opacity-0"}
                  style={{
                    strokeDasharray: 1200,
                    strokeDashoffset: isVisible ? 0 : 1200,
                    transition: "stroke-dashoffset 2s ease-out",
                  }}
                />

                {/* Data Points */}
                {[
                  { x: 0, y: 250 },
                  { x: 200, y: 200 },
                  { x: 400, y: 120 },
                  { x: 600, y: 80 },
                  { x: 800, y: 40 },
                ].map((point, i) => (
                  <g key={i}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="6"
                      fill="#E4C77D"
                      className={isVisible ? "animate-[pulse_2s_ease-in-out_infinite]" : "opacity-0"}
                      style={{
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="10"
                      fill="none"
                      stroke="#E4C77D"
                      strokeWidth="2"
                      opacity="0.5"
                      className={isVisible ? "animate-[ping_2s_ease-in-out_infinite]" : "opacity-0"}
                      style={{
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                  </g>
                ))}

                {/* Value Labels */}
                {[
                  { x: 0, y: 250, value: "$10K" },
                  { x: 200, y: 200, value: "$25K" },
                  { x: 400, y: 120, value: "$55K" },
                  { x: 600, y: 80, value: "$85K" },
                  { x: 800, y: 40, value: "$120K" },
                ].map((point, i) => (
                  <text
                    key={i}
                    x={point.x}
                    y={point.y - 20}
                    fill="#E4C77D"
                    fontSize="14"
                    fontWeight="600"
                    textAnchor="middle"
                    className={isVisible ? "animate-[fadeIn_1s_ease-out]" : "opacity-0"}
                    style={{
                      animationDelay: `${i * 0.3 + 0.5}s`,
                    }}
                  >
                    {point.value}
                  </text>
                ))}
              </svg>

              {/* Floating Stats Cards */}
              <div
                className={`absolute top-8 right-8 bg-background/80 backdrop-blur-sm rounded-xl p-4 border border-primary/20 ${isVisible ? "animate-[fadeIn_1s_ease-out_1s]" : "opacity-0"}`}
              >
                <div className="text-sm text-muted-foreground">Total Growth</div>
                <div className="text-2xl font-bold text-primary">+1,100%</div>
              </div>
            </div>

            {/* Time Period Labels */}
            <div className="flex justify-between mt-6 px-4 text-sm text-muted-foreground">
              <span>1 Year</span>
              <span>3 Years</span>
              <span>5 Years</span>
              <span>10 Years</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
