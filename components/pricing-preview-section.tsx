"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingPreviewSection() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for beginners starting their financial journey",
      features: [
        "Basic budget tracking",
        "Expense categorization",
        "Monthly reports",
        "Mobile app access",
        "Community support",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$12",
      period: "/month",
      description: "Advanced tools for serious wealth builders",
      features: [
        "Everything in Starter",
        "AI-powered insights",
        "Investment tracking",
        "Goal planning & automation",
        "Priority support",
        "Custom reports",
        "Multi-account sync",
      ],
      highlighted: true,
    },
    {
      name: "Elite",
      price: "$29",
      period: "/month",
      description: "Premium features for financial mastery",
      features: [
        "Everything in Pro",
        "Personal financial advisor",
        "Tax optimization strategies",
        "Unlimited accounts",
        "Advanced analytics",
        "Early feature access",
        "White-glove onboarding",
      ],
      highlighted: false,
    },
  ]

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b] via-[#0F172A] to-[#1e293b]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple Pricing for
            <span className="text-primary"> Every Stage</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl border transition-all duration-300 hover:scale-105 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-primary/10 to-transparent border-primary shadow-2xl shadow-primary/20"
                  : "bg-gradient-to-br from-[#1e293b] to-[#0F172A] border-primary/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-sm font-semibold text-[#0F172A]">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/60 text-sm mb-4">{plan.description}</p>
                
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90 text-[#0F172A]"
                    : "bg-primary/10 hover:bg-primary/20 text-primary"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
