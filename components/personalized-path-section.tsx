"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Store, Package, TrendingUp, Rocket } from "lucide-react"

const goals = [
  {
    id: "setup",
    icon: Store,
    title: "Store Setup",
    description: "Launch your Shopify or WooCommerce store with optimized templates",
    bgClass: "from-blue-500/20 to-cyan-500/20",
    particles: "ripple",
  },
  {
    id: "products",
    icon: Package,
    title: "Find Products",
    description: "Discover trending products with high margins and low competition",
    bgClass: "from-primary/20 to-yellow-500/20",
    particles: "stream",
  },
  {
    id: "scale",
    icon: TrendingUp,
    title: "Scale Sales",
    description: "Optimize marketing funnels and scale to 6-figure revenue",
    bgClass: "from-green-500/20 to-emerald-500/20",
    particles: "float",
  },
  {
    id: "automate",
    icon: Rocket,
    title: "Automate Business",
    description: "Build systems and hire VAs to run your store on autopilot",
    bgClass: "from-purple-500/20 to-pink-500/20",
    particles: "orbit",
  },
]

export function PersonalizedPathSection() {
  const [selectedGoal, setSelectedGoal] = useState(goals[0])

  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-balance">
            Your <span className="text-primary">Dropshipping</span> Journey
          </h2>

          {/* Goal Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {goals.map((goal) => {
              const Icon = goal.icon
              return (
                <Button
                  key={goal.id}
                  variant={selectedGoal.id === goal.id ? "default" : "outline"}
                  className={`h-auto py-6 flex flex-col items-center gap-3 ${
                    selectedGoal.id === goal.id ? "bg-primary text-primary-foreground" : ""
                  }`}
                  onClick={() => setSelectedGoal(goal)}
                >
                  <Icon className="w-8 h-8" />
                  <span className="font-semibold text-sm text-center">{goal.title}</span>
                </Button>
              )
            })}
          </div>

          {/* Goal Display */}
          <div
            className={`relative rounded-3xl p-12 bg-gradient-to-br ${selectedGoal.bgClass} backdrop-blur-sm border border-border overflow-hidden min-h-[400px] flex items-center justify-center transition-all duration-500`}
          >
            {/* Animated Background Effect */}
            <div className="absolute inset-0">
              {selectedGoal.particles === "ripple" && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-32 h-32 border-2 border-primary/30 rounded-full animate-ping"
                      style={{
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: "3s",
                      }}
                    />
                  ))}
                </div>
              )}
              {selectedGoal.particles === "stream" && (
                <div className="absolute inset-0">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-20 bg-gradient-to-b from-primary/50 to-transparent animate-pulse"
                      style={{
                        left: `${(i * 5) % 100}%`,
                        bottom: "-20px",
                        animation: `float-up ${3 + Math.random() * 2}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              )}
              {selectedGoal.particles === "float" && (
                <div className="absolute inset-0">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-8 h-8 bg-primary rounded-full animate-bounce"
                      style={{
                        left: `${(i * 10) % 100}%`,
                        bottom: "-20px",
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  ))}
                </div>
              )}
              {selectedGoal.particles === "orbit" && (
                <div className="absolute inset-0">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 bg-primary rounded-full animate-orbit"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) rotate(${i * 45}deg) translate(100px)`,
                        animationDuration: "10s",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <selectedGoal.icon className="w-24 h-24 mx-auto mb-6 text-primary animate-pulse" />
              <h3 className="text-4xl font-bold mb-4">{selectedGoal.title}</h3>
              <p className="text-xl text-muted-foreground max-w-md mx-auto">{selectedGoal.description}</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(100vh);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px);
            opacity: 0;
          }
        }
        @keyframes animate-orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translate(100px);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translate(100px);
          }
        }
      `}</style>
    </section>
  )
}
