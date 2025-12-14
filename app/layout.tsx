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
  title: "MoneyPathPro — Boards That Think With You",
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
  authors: [{ name: "MoneyPathPro" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' fontSize='90'>✏️</text></svg>",
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
