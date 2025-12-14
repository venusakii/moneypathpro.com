"use client"

import { Check, X } from "lucide-react"

export function FeaturesComparisonSection() {
  const features = [
    {
      name: "Infinite Canvas",
      infinite: true,
      traditional: false,
    },
    {
      name: "Cloud Sync",
      infinite: true,
      traditional: false,
    },
    {
      name: "Real-time Collaboration",
      infinite: true,
      traditional: false,
    },
    {
      name: "Template Library",
      infinite: true,
      traditional: false,
    },
    {
      name: "Version History",
      infinite: true,
      traditional: false,
    },
    {
      name: "Export to Multiple Formats",
      infinite: true,
      traditional: false,
    },
    {
      name: "Requires Cleaning",
      infinite: false,
      traditional: true,
    },
    {
      name: "Limited Space",
      infinite: false,
      traditional: true,
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Why Go Digital?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how The Infinite Board compares to traditional whiteboards
          </p>
        </div>

        <div className="bg-card rounded-3xl border-2 border-accent/20 overflow-hidden shadow-xl">
          <div className="grid grid-cols-3 gap-0 border-b-2 border-accent/20 bg-accent/5">
            <div className="p-6"></div>
            <div className="p-6 text-center border-x-2 border-accent/20 bg-primary/5">
              <h3 className="font-bold text-lg text-primary">Infinite Board</h3>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-bold text-lg text-muted-foreground">Traditional</h3>
            </div>
          </div>

          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={`grid grid-cols-3 gap-0 ${
                index !== features.length - 1 ? "border-b border-accent/10" : ""
              } hover:bg-accent/5 transition-colors`}
            >
              <div className="p-6 font-medium text-foreground">{feature.name}</div>
              <div className="p-6 flex justify-center items-center border-x border-accent/10">
                {feature.infinite ? (
                  <Check className="w-6 h-6 text-primary" />
                ) : (
                  <X className="w-6 h-6 text-muted-foreground/30" />
                )}
              </div>
              <div className="p-6 flex justify-center items-center">
                {feature.traditional ? (
                  <Check className="w-6 h-6 text-muted-foreground" />
                ) : (
                  <X className="w-6 h-6 text-muted-foreground/30" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
