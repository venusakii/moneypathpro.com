"use client"

import { Pencil, Users, Download, Sparkles } from "lucide-react"

export function HowItWorksWhiteboardSection() {
  const steps = [
    {
      icon: Pencil,
      number: "01",
      title: "Create Your Board",
      description: "Start with a blank canvas or choose from dozens of pre-made templates",
    },
    {
      icon: Sparkles,
      number: "02",
      title: "Add Your Ideas",
      description: "Draw, write, add sticky notes, images, and shape - everything you need to visualize",
    },
    {
      icon: Users,
      number: "03",
      title: "Collaborate in Real-time",
      description: "Invite team members to brainstorm together, see changes instantly",
    },
    {
      icon: Download,
      number: "04",
      title: "Save & Share",
      description: "Export as PDF, PNG, or share a live link - your work is always accessible",
    },
  ]

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start creating in minutes with our intuitive interface
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              <div className="bg-card border-2 border-accent/20 rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center font-bold text-primary-foreground shadow-lg">
                  {step.number}
                </div>

                <div className="mb-6 mt-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
