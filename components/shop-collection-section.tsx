import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
  {
    name: "Portable Foldable Study Board",
    price: "$49.99",
    image: "/portable-foldable-whiteboard.jpg",
    slug: "portable-foldable-study-board",
  },
  {
    name: "Smart Magnetic Planner Board",
    price: "$79.99",
    image: "/magnetic-planner-whiteboard.jpg",
    slug: "smart-magnetic-planner-board",
  },
  {
    name: "Eco Bamboo Writing Board",
    price: "$59.99",
    image: "/bamboo-writing-board.jpg",
    slug: "eco-bamboo-writing-board",
  },
  {
    name: "Projection Whiteboard Combo",
    price: "$129.99",
    image: "/projection-whiteboard.jpg",
    slug: "projection-whiteboard-combo",
  },
  {
    name: "Digital Sync Board",
    price: "$199.99",
    image: "/digital-sync-whiteboard-bluetooth.jpg",
    slug: "digital-sync-board",
  },
  {
    name: "Wall-Mount Glass Board",
    price: "$149.99",
    image: "/glass-wall-whiteboard.jpg",
    slug: "wall-mount-glass-board",
  },
  {
    name: "Mini Desktop Board Set",
    price: "$29.99",
    image: "/mini-desktop-whiteboard.jpg",
    slug: "mini-desktop-board-set",
  },
  {
    name: "Collaborative Team Board",
    price: "$299.99",
    image: "/large-collaborative-whiteboard.jpg",
    slug: "collaborative-team-board",
  },
  {
    name: "Student Lap Board",
    price: "$19.99",
    image: "/student-lap-whiteboard.jpg",
    slug: "student-lap-board",
  },
]

export function ShopCollectionSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Shop the Collection.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium boards designed for every learning style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={product.slug}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Product image */}
              <div className="relative h-64 bg-muted overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Quick add button */}
                <button className="absolute top-4 right-4 p-2 bg-background/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-primary hover:text-primary-foreground">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>

              {/* Product info */}
              <div className="p-6 flex flex-col h-full">
                <Link href="/boards" className="w-full mt-4">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
                    View Details →
                  </Button>
                </Link>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
        </div>
      </div>
    </section>
  )
}
