import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BoardHeroSection } from "@/components/board-hero-section"
import { MeetBoardSection } from "@/components/meet-board-section"
import { ShopCollectionSection } from "@/components/shop-collection-section"
import { FeaturesComparisonSection } from "@/components/features-comparison-section"
import { HowItWorksWhiteboardSection } from "@/components/how-it-works-whiteboard-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CommunitySection } from "@/components/community-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BoardHeroSection />
        <div data-section="demo">
          <MeetBoardSection />
        </div>
        <ShopCollectionSection />
        <FeaturesComparisonSection />
        <HowItWorksWhiteboardSection />
        <UseCasesSection />
        <TestimonialsSection />
        <FaqSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  )
}
