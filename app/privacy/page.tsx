import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - The Infinite Board",
  description: "Privacy policy and data protection information for The Infinite Board",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg">
              At The Infinite Board, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              and protect your personal information when you use our website and services.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p>We collect several types of information from and about users of our website:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address, shipping address, and phone number when
                  you make a purchase or subscribe to our newsletter
                </li>
                <li>
                  <strong>Payment Information:</strong> Credit card details processed securely through third-party
                  payment processors
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you access and use our website, including IP
                  address, browser type, pages visited, and time spent on pages
                </li>
                <li>
                  <strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Send you updates about your orders and account</li>
                <li>Improve our website and services</li>
                <li>Send you promotional emails and newsletters (with your consent)</li>
                <li>Respond to your customer service requests</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Cookie Policy</h2>
              <p>
                We use cookies responsibly to enhance your experience on our website. Cookies help us remember your
                preferences, understand how you use our site, and provide personalized content. You can control cookie
                settings through your browser, but disabling cookies may affect website functionality.
              </p>
              <p className="mt-4">Types of cookies we use:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for the website to function properly
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your settings and preferences
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Amazon Associate Program</h2>
              <p>
                As an Amazon Associate, we earn from qualifying purchases. When you click on affiliate links and make a
                purchase, Amazon may collect information about your visit. This data collection is governed by Amazon's
                Privacy Policy, not ours. We do not receive any personal information from Amazon about these
                transactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information
                with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Third-party companies that help us operate our business (payment
                  processors, shipping companies, email service providers)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission
                is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights and Choices</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Disable cookies through your browser settings</li>
                <li>Object to certain data processing activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Children's Privacy</h2>
              <p>
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you believe we have collected information from a child under 13,
                please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. International Users</h2>
              <p>
                If you are accessing our website from outside the United States, please be aware that your information
                may be transferred to, stored, and processed in the United States where our servers are located.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our website
                after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
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
                <br />
                Email: privacy@theinfiniteboard.com
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
