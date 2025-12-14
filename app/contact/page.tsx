import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "support@moneypathpro.com",
      action: "Send Email",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Available Mon-Fri, 9am-6pm EST",
      action: "Start Chat",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+1 850-941-5924",
      action: "Call Now",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            We're Here to <span className="gold-gradient-animate">Help</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
            Have questions? Need support? Our team is ready to assist you on your financial journey
          </p>
        </section>

        {/* Contact Methods */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card border border-border rounded-3xl hover:border-primary/50 transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <method.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                <p className="text-muted-foreground mb-6 text-pretty">{method.description}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  {method.action}
                </Button>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mt-12">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Office</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-lg">783 American Drive</p>
                    <p className="text-lg">Pensacola, Florida 32526</p>
                    <p className="text-lg">United States</p>
                    <p className="text-lg mt-4">
                      <span className="font-semibold text-foreground">Phone:</span> +1 850-941-5924
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-2 text-center">Send Us a Message</h2>
            <p className="text-muted-foreground text-center mb-8 text-pretty">
              Fill out the form below and we'll get back to you within 24 hours
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing Question</option>
                  <option>Feature Request</option>
                  <option>Partnership Opportunity</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <Button size="lg" className="w-full bg-primary text-primary-foreground">
                Send Message
              </Button>
            </form>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-3xl mx-auto p-12 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking for Quick Answers?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Check out our FAQ section for instant answers to common questions
            </p>
            <Button size="lg" variant="outline">
              Browse FAQ
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
