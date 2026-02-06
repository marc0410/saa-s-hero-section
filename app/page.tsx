import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { RentBuySection } from "@/components/rent-buy-section"
import { PilotezBiensSection } from "@/components/pilotez-biens-section"
import { SecuriteSection } from "@/components/securite-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaAdventureSection } from "@/components/cta-adventure-section"
import { CtaDownloadSection } from "@/components/cta-download-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RentBuySection />
      <CtaDownloadSection />
      <PilotezBiensSection />
      <SecuriteSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CtaAdventureSection />
      <Footer />
    </main>
  )
}
