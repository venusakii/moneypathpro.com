import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, Users, Shield, Award } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Empowerment First",
      description: "We believe everyone deserves access to quality financial education",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by real people who understand real financial challenges",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Honest advice with no hidden agendas or conflicts of interest",
    },
    {
      icon: Award,
      title: "Excellence Always",
      description: "Expert-vetted content that meets the highest standards",
    },
  ]

  const team = [
    {
      name: "Alex Rodriguez",
      role: "Founder & CEO",
      bio: "Former educator with 15+ years helping students and professionals organize their ideas",
      image: "/professional-woman-diverse.png",
    },
    {
      name: "David Kim",
      role: "Head of Product Design",
      bio: "Industrial designer passionate about creating intuitive learning tools",
      image: "/professional-man.jpg",
    },
    {
      name: "Emma Watson",
      role: "Chief Innovation Officer",
      bio: "Award-winning education technology expert and productivity consultant",
      image: "/professional-woman-journalist.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Making Finance <span className="gold-gradient-animate">Accessible</span> for Everyone
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
            We're on a mission to transform how people think about and manage their money
          </p>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-pretty">
                MoneyPathPro was born from a simple observation: financial advice shouldn't feel intimidating,
                complicated, or reserved for the wealthy. In 2020, our founder Alex Rodriguez left her career as an
                educator to build something different.
              </p>
              <p className="text-pretty">
                We've helped over 100,000 people take control of their financial futures, from paying off debt to
                building retirement portfolios. Our approach combines expert knowledge with modern technology to create
                an experience that's both powerful and approachable.
              </p>
              <p className="text-pretty">
                Today, we're proud to serve a diverse community of learners who are transforming their relationship with
                money—one smart decision at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card border border-border rounded-3xl hover:border-primary/50 transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground text-pretty">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-3xl mx-auto p-12 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Start your financial transformation today with personalized guidance
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
