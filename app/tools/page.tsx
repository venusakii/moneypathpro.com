import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calculator, PieChart, Target, TrendingUp, CreditCard, Home } from "lucide-react"

export default function ToolsPage() {
  const tools = [
    {
      icon: Calculator,
      title: "Budget Calculator",
      description: "Track income and expenses with our smart budgeting tool",
      badge: "Popular",
    },
    {
      icon: Target,
      title: "Goal Planner",
      description: "Set and track your financial goals with precision",
      badge: "New",
    },
    {
      icon: TrendingUp,
      title: "Investment Tracker",
      description: "Monitor your portfolio performance in real-time",
      badge: null,
    },
    {
      icon: CreditCard,
      title: "Debt Payoff Calculator",
      description: "Create a strategic plan to eliminate your debt",
      badge: null,
    },
    {
      icon: Home,
      title: "Mortgage Calculator",
      description: "Calculate monthly payments and total interest",
      badge: null,
    },
    {
      icon: PieChart,
      title: "Retirement Planner",
      description: "Estimate how much you need to retire comfortably",
      badge: "Popular",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Smart <span className="gold-gradient-animate">Financial Tools</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
            Powerful calculators and planners to help you make informed financial decisions
          </p>
        </section>

        {/* Tools Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group p-8 bg-card border border-border rounded-3xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 relative"
              >
                {tool.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                    {tool.badge}
                  </span>
                )}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <tool.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                <p className="text-muted-foreground mb-6 text-pretty">{tool.description}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Launch Tool
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-3xl mx-auto p-12 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Tools?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Premium members get access to advanced tools and personalized recommendations
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground">
              Upgrade to Premium
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
