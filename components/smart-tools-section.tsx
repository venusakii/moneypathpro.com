"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Search, BarChart3, Truck } from "lucide-react"

const tools = [
  {
    id: "product-finder",
    icon: Search,
    title: "Product Finder",
    description: "AI-powered product research to discover winning items",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "profit-calculator",
    icon: BarChart3,
    title: "Profit Calculator",
    description: "Calculate margins, shipping costs, and breakeven points",
    color: "from-primary to-yellow-500",
  },
  {
    id: "order-tracker",
    icon: Truck,
    title: "Order Tracker",
    description: "Monitor fulfillment status and customer delivery updates",
    color: "from-green-500 to-emerald-500",
  },
]

export function SmartToolsSection() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null)

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 text-balance">
            Smart Tools That <span className="text-primary">Scale Your Store</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Powerful automation, data-driven insights, effortless management
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool) => {
              const Icon = tool.icon
              const isHovered = hoveredTool === tool.id

              return (
                <Card
                  key={tool.id}
                  className="relative p-8 bg-card hover:bg-accent/5 border-2 border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group overflow-hidden"
                  onMouseEnter={() => setHoveredTool(tool.id)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon with Pulse */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center transition-transform duration-300 ${
                        isHovered ? "scale-110" : "scale-100"
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {isHovered && (
                      <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/50 to-transparent animate-ping" />
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{tool.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{tool.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
