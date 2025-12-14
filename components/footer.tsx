import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative mt-32 bg-background border-t border-border overflow-hidden sketch-grid">
      {/* Sketch grid pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" />

      <div className="relative container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h3 className="text-3xl font-bold mb-4 text-balance text-foreground">Join the classroom of tomorrow.</h3>
          <p className="text-muted-foreground mb-6">Get board inspiration, learning tips, and new template ideas.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center mb-12">
          <div>
            <ul className="flex gap-4">
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © 2025 MoneyPathPro.com — All rights reserved. As an Amazon Associate, we earn from qualifying purchases.
            </p>
            <p className="flex items-center gap-2">🍪 We use cookies responsibly (and compost them digitally).</p>
          </div>
        </div>
      </div>

      {/* Glowing line animation at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 glow-line" />
    </footer>
  )
}
