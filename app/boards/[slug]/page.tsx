import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Product data - in a real app, this would come from a database
const products = [
  {
    slug: "portable-foldable-whiteboard",
    name: "Portable Foldable Whiteboard",
    price: "$89.99",
    category: "Travel",
    image: "/portable-foldable-whiteboard.jpg",
    rating: 4.8,
    reviews: 124,
    description:
      "Perfect for on-the-go professionals and students. This portable whiteboard folds into a compact size for easy transport while providing a full writing surface when open.",
    features: [
      "Folds to 12x9 inches for easy storage",
      "Smooth dry-erase surface",
      "Includes carrying case and markers",
      "Magnetic surface compatible",
      "Weighs only 2.5 lbs",
    ],
    inStock: true,
    dimensions: "24 x 18 inches when open",
    material: "High-quality melamine surface",
    amazonUrl: "https://www.amazon.com/s?k=portable+foldable+whiteboard&tag=youraffiliateID",
  },
  {
    slug: "magnetic-weekly-planner-whiteboard",
    name: "Magnetic Weekly Planner Whiteboard",
    price: "$129.99",
    category: "Planning",
    image: "/magnetic-planner-whiteboard.jpg",
    rating: 4.9,
    reviews: 87,
    description:
      "Stay organized with this magnetic weekly planner. Pre-printed grid layout helps you track tasks, appointments, and goals throughout the week.",
    features: [
      "Pre-printed weekly layout",
      "Strong magnetic backing",
      "Premium dry-erase surface",
      "Includes 6 colorful magnets",
      "Easy to clean",
    ],
    inStock: true,
    dimensions: "36 x 24 inches",
    material: "Porcelain steel surface",
    amazonUrl: "https://www.amazon.com/s?k=magnetic+weekly+planner+whiteboard&tag=youraffiliateID",
  },
  {
    slug: "bamboo-eco-writing-board",
    name: "Bamboo Eco Writing Board",
    price: "$149.99",
    category: "Eco-Friendly",
    image: "/bamboo-writing-board.jpg",
    rating: 4.7,
    reviews: 56,
    description:
      "Sustainable and stylish bamboo frame with eco-friendly writing surface. Perfect for environmentally conscious professionals.",
    features: [
      "100% sustainable bamboo frame",
      "Eco-friendly writing surface",
      "Natural wood aesthetic",
      "Easy to mount",
      "Includes bamboo marker holder",
    ],
    inStock: true,
    dimensions: "32 x 24 inches",
    material: "Bamboo frame with melamine surface",
    amazonUrl: "https://www.amazon.com/s?k=bamboo+eco+whiteboard&tag=youraffiliateID",
  },
  {
    slug: "smart-projection-whiteboard",
    name: "Smart Projection Whiteboard",
    price: "$299.99",
    category: "Technology",
    image: "/projection-whiteboard.jpg",
    rating: 4.9,
    reviews: 143,
    description:
      "Transform any space into an interactive presentation area. Compatible with projectors and features a smooth, non-glare surface.",
    features: [
      "Projection-optimized surface",
      "Anti-glare coating",
      "Touch-interactive compatible",
      "USB connectivity",
      "Wireless screen sharing",
    ],
    inStock: true,
    dimensions: "72 x 48 inches",
    material: "Specialty projection surface",
    amazonUrl: "https://www.amazon.com/s?k=smart+projection+whiteboard&tag=youraffiliateID",
  },
  {
    slug: "glass-wall-mounted-board",
    name: "Glass Wall-Mounted Board",
    price: "$199.99",
    category: "Premium",
    image: "/modern-glass-whiteboard.jpg",
    rating: 4.6,
    reviews: 92,
    description:
      "Modern tempered glass board that adds elegance to any office. Ultra-smooth writing experience with ghosting-free erasing.",
    features: [
      "Tempered safety glass",
      "Frameless modern design",
      "Ghost-free erasing",
      "Magnetic accessory tray",
      "Hidden mounting hardware",
    ],
    inStock: true,
    dimensions: "48 x 36 inches",
    material: "6mm tempered glass",
    amazonUrl: "https://www.amazon.com/s?k=glass+wall+mounted+whiteboard&tag=youraffiliateID",
  },
  {
    slug: "kids-educational-board-set",
    name: "Kids Educational Board Set",
    price: "$69.99",
    category: "Education",
    image: "/colorful-kids-whiteboard.jpg",
    rating: 4.8,
    reviews: 201,
    description:
      "Colorful, child-friendly whiteboard set designed for young learners. Includes educational templates and safe, easy-to-grip markers.",
    features: [
      "Kid-safe rounded corners",
      "Colorful border design",
      "Pre-printed alphabet guide",
      "Includes 8 washable markers",
      "Lightweight and portable",
    ],
    inStock: true,
    dimensions: "24 x 18 inches",
    material: "Child-safe melamine",
    amazonUrl: "https://www.amazon.com/s?k=kids+educational+whiteboard&tag=youraffiliateID",
  },
  {
    slug: "standing-mobile-whiteboard",
    name: "Standing Mobile Whiteboard",
    price: "$179.99",
    category: "Office",
    image: "/mobile-standing-whiteboard.jpg",
    rating: 4.7,
    reviews: 78,
    description:
      "Double-sided mobile whiteboard on wheels. Perfect for meeting rooms, classrooms, and collaborative workspaces.",
    features: [
      "Double-sided writing surface",
      "Smooth-rolling casters with locks",
      "Height adjustable",
      "Aluminum frame construction",
      "Includes marker tray",
    ],
    inStock: true,
    dimensions: "72 x 40 inches",
    material: "Porcelain steel both sides",
    amazonUrl: "https://www.amazon.com/s?k=standing+mobile+whiteboard&tag=youraffiliateID",
  },
  {
    slug: "digital-interactive-board",
    name: "Digital Interactive Board",
    price: "$449.99",
    category: "Technology",
    image: "/digital-interactive-whiteboard.jpg",
    rating: 4.9,
    reviews: 165,
    description:
      "State-of-the-art interactive digital board with touch sensitivity and cloud connectivity. Perfect for modern smart offices and classrooms.",
    features: [
      "Multi-touch capabilities",
      "Cloud storage integration",
      "Screen recording feature",
      "Wireless device connectivity",
      "Built-in collaboration tools",
    ],
    inStock: true,
    dimensions: "65 inch diagonal",
    material: "LED touchscreen display",
    amazonUrl: "https://www.amazon.com/s?k=digital+interactive+whiteboard&tag=youraffiliateID",
  },
  {
    slug: "mini-desktop-whiteboard",
    name: "Mini Desktop Whiteboard",
    price: "$24.99",
    category: "Compact",
    image: "/mini-desktop-whiteboard.jpg",
    rating: 4.5,
    reviews: 312,
    description:
      "Compact desktop whiteboard perfect for quick notes and reminders. Ideal for home offices and study spaces.",
    features: [
      "Compact 12x9 inch size",
      "Built-in stand",
      "Magnetic surface",
      "Includes mini markers",
      "Easy to position anywhere",
    ],
    inStock: true,
    dimensions: "12 x 9 inches",
    material: "Melamine surface with stand",
    amazonUrl: "https://www.amazon.com/s?k=mini+desktop+whiteboard&tag=youraffiliateID",
  },
]

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <section className="container mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/boards" className="hover:text-primary transition-colors">
              Boards
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted border-2 border-border">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Product Badge */}
              <div className="absolute top-6 right-6 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                {product.category}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-8 text-pretty">{product.description}</p>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-8">
                <div className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
                <span className="text-sm font-medium">{product.inStock ? "In Stock" : "Out of Stock"}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <Link href={product.amazonUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 rounded-xl"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy on Amazon
                  </Button>
                </Link>
              </div>

              {/* Product Details */}
              <div className="border-t border-border pt-8">
                <h3 className="text-lg font-semibold mb-4">Product Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dimensions:</span>
                    <span className="font-medium">{product.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Material:</span>
                    <span className="font-medium">{product.material}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card border-2 border-border rounded-2xl hover:border-primary/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Back to Boards */}
          <div className="text-center">
            <Link href="/boards">
              
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
