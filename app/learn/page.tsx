import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, TrendingUp, PiggyBank, Target } from "lucide-react"

export default function LearnPage() {
  const learningPaths = [
    {
      icon: BookOpen,
      title: "Financial Basics",
      description: "Master the fundamentals of personal finance, budgeting, and saving",
      modules: 12,
      duration: "4 weeks",
    },
    {
      icon: TrendingUp,
      title: "Investing 101",
      description: "Learn about stocks, bonds, ETFs, and building your investment portfolio",
      modules: 16,
      duration: "6 weeks",
    },
    {
      icon: PiggyBank,
      title: "Debt Management",
      description: "Strategies to pay off debt and improve your credit score",
      modules: 8,
      duration: "3 weeks",
    },
    {
      icon: Target,
      title: "Retirement Planning",
      description: "Plan for your future with 401(k)s, IRAs, and retirement strategies",
      modules: 10,
      duration: "5 weeks",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Learn to Master Your <span className="gold-gradient-animate">Financial Future</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
            Expert-curated courses designed to take you from financial basics to advanced wealth-building strategies
          </p>
        </section>

        {/* Learning Paths */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="group p-8 bg-card border border-border rounded-3xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <path.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{path.title}</h3>
                <p className="text-muted-foreground mb-6 text-pretty">{path.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span>{path.modules} modules</span>
                  <span>•</span>
                  <span>{path.duration}</span>
                </div>
                <Button className="w-full">Start Learning</Button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-3xl mx-auto p-12 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Join thousands of learners who have transformed their financial lives
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground">
              Get Started Free
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
