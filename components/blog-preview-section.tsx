import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    title: "5 Habits of Sustainable Wealth",
    excerpt: "Discover the daily practices that compound into financial freedom",
    category: "Wealth Building",
    readTime: "8 min read",
    image: "/wealth-building-habits.jpg",
  },
  {
    title: "What AI Can Teach You About Investing",
    excerpt: "Machine learning insights that are transforming portfolio management",
    category: "AI & Finance",
    readTime: "6 min read",
    image: "/ai-investing-technology.jpg",
  },
  {
    title: "The Psychology of Saving",
    excerpt: "Understanding the mental models that make or break your savings goals",
    category: "Psychology",
    readTime: "10 min read",
    image: "/psychology-saving-money.jpg",
  },
]

export function BlogPreviewSection() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 text-balance">
            Learn. Grow. <span className="text-primary">Evolve.</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Insights and strategies to elevate your financial journey
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link href="/blog" key={index}>
                <Card className="group overflow-hidden bg-card hover:bg-accent/5 border-2 border-border hover:border-primary/50 transition-all duration-300 cursor-pointer h-full">
                  {/* Image with Ripple Effect */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.excerpt}</p>
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
