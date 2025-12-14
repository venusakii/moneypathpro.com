"use client"

import { Users, MessageCircle, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CommunitySection() {
  const highlights = [
    {
      icon: Users,
      stat: "100,000+",
      label: "Active Creators",
    },
    {
      icon: MessageCircle,
      stat: "2M+",
      label: "Boards Created",
    },
    {
      icon: TrendingUp,
      stat: "98%",
      label: "Love Their Experience",
    },
  ]

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join the Creative
            <span className="text-primary"> Community</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with learners, educators, and creators using The Infinite Board. Share templates, get inspiration,
            and grow together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {highlights.map((item, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-card border-2 border-accent/20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
              <div className="text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-[#0F172A] px-8">
            Join the Community
          </Button>
        </div>

        <div className="max-w-md mx-auto bg-card border-2 border-accent/20 rounded-2xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-3 text-center">Stay Updated</h3>
          <p className="text-muted-foreground text-center mb-6">Get weekly tips, new templates, and feature updates</p>
          <div className="flex gap-2">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
