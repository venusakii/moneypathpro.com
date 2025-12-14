"use client"

import { Package, Shield, TrendingUp, Target, Zap, Users } from "lucide-react"

export function FeaturesGridSection() {
  const features = [
    {
      icon: Package,
      title: "Product Sourcing",
      description: "Access thousands of winning products from verified suppliers with fast shipping times.",
    },
    {
      icon: Shield,
      title: "Supplier Verification",
      description: "Every supplier is vetted for quality, reliability, and customer satisfaction ratings.",
    },
    {
      icon: TrendingUp,
      title: "Sales Analytics",
      description: "Track orders, revenue, and profit margins with real-time dashboards and insights.",
    },
    {
      icon: Target,
      title: "Niche Discovery",
      description: "AI-powered market research to find profitable niches with low competition.",
    },
    {
      icon: Zap,
      title: "Automated Fulfillment",
      description: "Orders automatically sync to suppliers for seamless dropshipping workflow.",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join thousands of successful dropshippers sharing strategies and supplier recommendations.",
    },
  ]

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1e293b] to-[#0F172A]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to
            <span className="text-primary"> Launch Your Store</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Powerful features designed to simplify dropshipping and accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0F172A] border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
