"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Search, Grid, List } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function BoardsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const boards = [
    {
      id: 1,
      slug: "portable-foldable-whiteboard",
      name: "Portable Foldable Whiteboard",
      price: "$89.99",
      category: "Travel",
      image: "/portable-foldable-whiteboard.jpg",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      slug: "magnetic-weekly-planner-whiteboard",
      name: "Magnetic Weekly Planner Whiteboard",
      price: "$129.99",
      category: "Planning",
      image: "/magnetic-planner-whiteboard.jpg",
      rating: 4.9,
      reviews: 87,
    },
    {
      id: 3,
      slug: "bamboo-eco-writing-board",
      name: "Bamboo Eco Writing Board",
      price: "$149.99",
      category: "Eco-Friendly",
      image: "/bamboo-writing-board.jpg",
      rating: 4.7,
      reviews: 56,
    },
    {
      id: 4,
      slug: "smart-projection-whiteboard",
      name: "Smart Projection Whiteboard",
      price: "$299.99",
      category: "Technology",
      image: "/projection-whiteboard.jpg",
      rating: 4.9,
      reviews: 143,
    },
    {
      id: 5,
      slug: "glass-wall-mounted-board",
      name: "Glass Wall-Mounted Board",
      price: "$199.99",
      category: "Premium",
      image: "/modern-glass-whiteboard.jpg",
      rating: 4.6,
      reviews: 92,
    },
    {
      id: 6,
      slug: "kids-educational-board-set",
      name: "Kids Educational Board Set",
      price: "$69.99",
      category: "Education",
      image: "/colorful-kids-whiteboard.jpg",
      rating: 4.8,
      reviews: 201,
    },
    {
      id: 7,
      slug: "standing-mobile-whiteboard",
      name: "Standing Mobile Whiteboard",
      price: "$179.99",
      category: "Office",
      image: "/mobile-standing-whiteboard.jpg",
      rating: 4.7,
      reviews: 78,
    },
    {
      id: 8,
      slug: "digital-interactive-board",
      name: "Digital Interactive Board",
      price: "$449.99",
      category: "Technology",
      image: "/digital-interactive-whiteboard.jpg",
      rating: 4.9,
      reviews: 165,
    },
    {
      id: 9,
      slug: "mini-desktop-whiteboard",
      name: "Mini Desktop Whiteboard",
      price: "$24.99",
      category: "Compact",
      image: "/mini-desktop-whiteboard.jpg",
      rating: 4.5,
      reviews: 312,
    },
  ]

  const categories = ["All", "Eco-Friendly", "Premium", "Office"]

  const filteredBoards = boards.filter((board) => {
    const matchesCategory = selectedCategory === "All" || board.category === selectedCategory
    const matchesSearch = board.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Explore Our <span className="text-primary">Board Collection</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Find the perfect whiteboard for your needs. From portable solutions to smart technology, we have boards
              for every space and purpose.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search boards..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="flex gap-2 border border-border rounded-xl p-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className={`rounded-lg ${viewMode === "grid" ? "bg-primary text-primary-foreground" : ""}`}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className={`rounded-lg ${viewMode === "list" ? "bg-primary text-primary-foreground" : ""}`}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  category === selectedCategory
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Boards Grid */}
          <div
            className={
              viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-6"
            }
          >
            {filteredBoards.map((board) => (
              <div
                key={board.id}
                className={`group bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl ${
                  viewMode === "list" ? "flex flex-row" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-muted ${
                    viewMode === "list" ? "w-64 h-48 flex-shrink-0" : "h-64"
                  }`}
                >
                  <Image
                    src={board.image || "/placeholder.svg"}
                    alt={board.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {board.category}
                  </div>
                </div>
                <div className={`p-6 flex flex-col ${viewMode === "list" ? "flex-1 justify-between" : "h-40"}`}>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {board.name}
                    </h3>
                    {viewMode === "list" && (
                      <p className="text-muted-foreground text-sm mb-4">
                        Perfect for your creative workspace. High-quality materials with smooth writing surface.
                      </p>
                    )}
                  </div>

                  <Link href={`/boards/${board.slug}`}>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
                      View Details →
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12"></div>
        </section>

        {/* CTA Section */}
      </main>
      <Footer />
    </>
  )
}
