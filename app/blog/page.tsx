import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const articles = [
    {
      category: "Investing",
      title: "10 Investment Mistakes to Avoid in 2024",
      excerpt: "Learn from common pitfalls and protect your portfolio with these expert insights",
      author: "Sarah Chen",
      date: "Mar 15, 2024",
      readTime: "8 min",
      image: "/investment-chart.png",
    },
    {
      category: "Budgeting",
      title: "The 50/30/20 Rule: A Simple Guide to Budgeting",
      excerpt: "Master this proven budgeting framework to take control of your finances",
      author: "Michael Torres",
      date: "Mar 12, 2024",
      readTime: "6 min",
      image: "/budgeting-calculator.jpg",
    },
    {
      category: "Retirement",
      title: "How Much Should You Save for Retirement?",
      excerpt: "Calculate your retirement number and create a plan to reach it",
      author: "Jennifer Lee",
      date: "Mar 10, 2024",
      readTime: "10 min",
      image: "/retirement-planning.png",
    },
    {
      category: "Debt",
      title: "Snowball vs Avalanche: Which Debt Method Wins?",
      excerpt: "Compare the two most popular debt payoff strategies and find the best one for you",
      author: "David Kumar",
      date: "Mar 8, 2024",
      readTime: "7 min",
      image: "/debt-payoff.png",
    },
    {
      category: "Savings",
      title: "Emergency Fund: How Much is Enough?",
      excerpt: "Build financial security with the right emergency fund size for your situation",
      author: "Emma Rodriguez",
      date: "Mar 5, 2024",
      readTime: "5 min",
      image: "/emergency-savings.jpg",
    },
    {
      category: "Investing",
      title: "Index Funds vs ETFs: What's the Difference?",
      excerpt: "Understand the pros and cons of each investment vehicle",
      author: "Ryan Park",
      date: "Mar 3, 2024",
      readTime: "9 min",
      image: "/stock-market-graph.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Financial <span className="gold-gradient-animate">Insights & Guides</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
            Expert advice, practical tips, and actionable strategies to help you build wealth
          </p>
        </section>

        {/* Articles Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="group bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold mt-3 mb-3 group-hover:text-primary transition-colors text-balance">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 text-pretty">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary/10">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto p-12 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Weekly Financial Tips</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Join 50,000+ subscribers receiving expert insights every week
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button size="lg" className="bg-primary text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
