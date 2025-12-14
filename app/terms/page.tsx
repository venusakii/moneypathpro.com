import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service - The Infinite Board",
  description: "Terms of service and conditions for using The Infinite Board platform",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Terms of Service</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using The Infinite Board website and services, you accept and agree to be bound by the
                terms and provision of this agreement. If you do not agree to these terms, please do not use our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on The Infinite Board's website
                for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                title.
              </p>
              <p className="mt-4">Under this license you may not:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or public display</li>
                <li>Attempt to reverse engineer any software contained on The Infinite Board's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Product Information</h2>
              <p>
                The Infinite Board strives to provide accurate product descriptions and pricing. However, we do not
                warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current,
                or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Purchase and Payment</h2>
              <p>
                All purchases are subject to product availability. We reserve the right to limit quantities and to
                refuse service to anyone. Payment must be received in full before products are dispatched.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Amazon Associate Disclosure</h2>
              <p>
                The Infinite Board is a participant in the Amazon Services LLC Associates Program, an affiliate
                advertising program designed to provide a means for sites to earn advertising fees by advertising and
                linking to Amazon.com. We may earn commissions from qualifying purchases made through our links.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Shipping and Returns</h2>
              <p>
                Shipping times and costs vary by location and product. Return policies are subject to the terms of
                individual retailers and manufacturers. Please refer to specific product pages for detailed return
                information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p>
                In no event shall The Infinite Board or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on The Infinite Board's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Privacy</h2>
              <p>
                Your use of The Infinite Board is also governed by our Privacy Policy. Please review our Privacy Policy,
                which also governs the site and informs users of our data collection practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to Terms</h2>
              <p>
                The Infinite Board reserves the right to revise these terms of service at any time without notice. By
                using this website, you agree to be bound by the current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
              <address className="not-italic mt-2">
                The Infinite Board
                <br />
                783 American Drive
                <br />
                Pensacola, Florida 32526
                <br />
                United States
                <br />
                Phone: +1 850-941-5924
              </address>
            </section>

            <p className="text-sm mt-8 pt-8 border-t border-border">Last updated: January 2025</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
