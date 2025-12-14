import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "The Infinite Board — Boards That Think With You",
  description:
    "Interactive collaborative boards for study, planning, and creative work. Turn learning into interaction with smart whiteboard solutions.",
  generator: "v0.app",
  keywords: [
    "whiteboard",
    "study boards",
    "collaborative learning",
    "interactive boards",
    "education",
    "planning tools",
  ],
  authors: [{ name: "The Infinite Board" }],
  icons: {
    icon: "/favicon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
