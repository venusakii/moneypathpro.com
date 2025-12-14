"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Is The Infinite Board free to use?",
      answer:
        "Yes! We offer a free plan with unlimited boards and basic features. Premium plans unlock advanced collaboration tools, larger file uploads, and priority support starting at $9.99/month.",
    },
    {
      question: "Can I collaborate with my team in real-time?",
      answer:
        "Invite unlimited collaborators to your boards. Everyone can draw, write, and add content simultaneously. You'll see each other's cursors and changes appear instantly.",
    },
    {
      question: "What devices can I use The Infinite Board on?",
      answer:
        "The Infinite Board works on any device with a web browser - desktop, laptop, tablet, or smartphone. We also offer native apps for iOS and Android with full touch and stylus support.",
    },
    {
      question: "How is this different from other whiteboard apps?",
      answer:
        "Unlike traditional whiteboard apps, we focus on the creative learning experience. Our boards are truly infinite, with smart templates, embedded media support, and AI-powered organization that helps you structure your ideas naturally.",
    },
    {
      question: "Can I export my boards?",
      answer:
        "Yes! Export your boards as high-resolution PNG, PDF, or SVG files. You can also share live links that update in real-time, or embed boards directly into websites and presentations.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Absolutely. All data is encrypted in transit and at rest. Your private boards stay private, and you control exactly who has access. We never use your content for training or advertising.",
    },
  ]

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0F172A]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked
            <span className="text-primary"> Questions</span>
          </h2>
          <p className="text-white/70 text-lg">Everything you need to know about The Infinite Board</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-primary/20 rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0F172A] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-white/70 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
