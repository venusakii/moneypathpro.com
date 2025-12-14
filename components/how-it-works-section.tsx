"use client"

import { ArrowRight } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Accounts",
      description: "Securely link your bank accounts, credit cards, and investments in just 2 minutes.",
      color: "from-primary/20 to-primary/5",
    },
    {
      number: "02",
      title: "Set Your Goals",
      description: "Tell us your financial dreams—buying a home, retiring early, or building an emergency fund.",
      color: "from-secondary/20 to-secondary/5",
    },
    {
      number: "03",
      title: "Get Your Path",
      description: "Our AI creates a personalized roadmap with actionable steps to reach your goals faster.",
      color: "from-accent/20 to-accent/5",
    },
    {
      number: "04",
      title: "Watch Growth Happen",
      description: "Track progress in real-time as automated tools work behind the scenes to build your wealth.",
      color: "from-primary/20 to-primary/5",
    },
  ]

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0F172A]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Journey to Financial Freedom
            <span className="text-primary"> in 4 Simple Steps</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Getting started is easier than you think. Join thousands who transformed their finances.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="flex flex-col md:flex-row items-start gap-6 p-8 rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0F172A] border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center border border-primary/30`}
                >
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed text-lg">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-primary/40 group-hover:text-primary transition-colors" />
                )}
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-primary/40 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
