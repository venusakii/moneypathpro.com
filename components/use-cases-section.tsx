"use client"

import { GraduationCap, Lightbulb, Users, BookOpen, Presentation, Code } from "lucide-react"

export function UseCasesSection() {
  const useCases = [
    {
      icon: GraduationCap,
      title: "Study & Learning",
      description: "Take visual notes, create mind maps, and organize research all in one place",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Lightbulb,
      title: "Brainstorming",
      description: "Capture ideas freely with your team and connect concepts visually",
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Run workshops, retrospectives, and planning sessions together",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: BookOpen,
      title: "Teaching & Tutoring",
      description: "Explain concepts visually and keep students engaged with interactive lessons",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Presentation,
      title: "Presentations",
      description: "Create dynamic presentations that flow naturally and capture attention",
      color: "from-red-500/20 to-rose-500/20",
    },
    {
      icon: Code,
      title: "Design & Planning",
      description: "Sketch wireframes, map user flows, and plan projects visually",
      color: "from-indigo-500/20 to-violet-500/20",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Endless Possibilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From students to startups, see how people use The Infinite Board to think bigger
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border-2 border-accent/20 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground">{useCase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
