"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Users, Building2, CreditCard, BarChart3, ChevronDown, BadgeCheck, Upload, LayoutGrid, Banknote } from "lucide-react"
import { CountUp } from "@/components/count-up"
import { Button } from "@/components/ui/button"
import { getDownloadUrl, APP_STORE_URL } from "@/lib/app-links"

const badgeSteps = [
  { num: "01", label: "Publiez", icon: Upload },
  { num: "02", label: "Gerez", icon: LayoutGrid },
  { num: "03", label: "Encaissez", icon: Banknote },
]

// Avatars équipe pour la preuve sociale (images locales)
const avatars = [
  { src: "/1_hr_director.jpg", alt: "Directeur RH" },
  { src: "/1_hr_fem.png", alt: "Responsable RH" },
  { src: "/1_support_director.jpg", alt: "Directeur Support" },
]

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [downloadUrl, setDownloadUrl] = useState(APP_STORE_URL)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    setDownloadUrl(getDownloadUrl())
  }, [])

  // Cycle active step
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % badgeSteps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="accueil"
      className="relative min-h-screen overflow-hidden scroll-mt-20"
      style={{
        background: "linear-gradient(180.91deg, #FFFFFF 35.36%, #A4F0FF 64.43%, #A0ECFE 69.28%, #156EE4 99.21%)",
        
      }}
    >


      {/* Subtle glow effects */}
      {/* <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#A4F0FF]/20 rounded-full blur-3xl pointer-events-none" /> */}
      {/* <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#156EE4]/15 rounded-full blur-3xl pointer-events-none" /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Centered Content - à gauche */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-1">
            {/* Badge Glassmorphism + Staged Layout — responsive */}
            <div
              className={`mb-6 sm:mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {/* Bordure dégradé (blanc → transparent) */}
              <div
                className="rounded-2xl sm:rounded-full p-[1px] transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(21,110,228,0.12)] w-fit max-w-full"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                  boxShadow: "0 4px 24px rgba(21, 110, 228, 0.08)",
                }}
              >
                {/* Fond glass + shimmer */}
                <div
                  className="relative overflow-hidden rounded-2xl sm:rounded-full py-1.5 px-3 sm:py-2 sm:px-5 backdrop-blur-[10px]"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  {/* Lueur de balayage (shimmer) toutes les 5s */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-30 animate-shimmer"
                    style={{
                      background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
                      backgroundSize: "200% 100%",
                    }}
                  />
                  <div className="relative flex flex-wrap items-center justify-center sm:justify-start gap-y-1 gap-x-0 sm:gap-x-0">
                    {badgeSteps.map((step, index) => {
                      const Icon = step.icon
                      const isActive = activeStepIndex === index
                      const isHovered = hoveredStep === index
                      return (
                        <div key={step.num} className="flex items-center gap-0">
                          {index > 0 && (
                            <span
                              className="mx-0.5 sm:mx-1 h-2.5 sm:h-3 w-px shrink-0 rounded-full bg-current opacity-40 min-h-[10px] sm:min-h-[12px]"
                              aria-hidden
                            />
                          )}
                          <span
                            className="flex cursor-default items-center gap-1 sm:gap-1.5 rounded-lg py-0.5 px-1.5 sm:py-1 sm:px-2 transition-colors duration-200 hover:bg-white/50"
                            onMouseEnter={() => setHoveredStep(index)}
                            onMouseLeave={() => setHoveredStep(null)}
                          >
                            <span className="flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-[#156EE4]/10 text-[9px] sm:text-[10px] font-bold text-[#156EE4]">
                              {step.num}
                            </span>
                            <Icon
                              key={`${index}-${isHovered}`}
                              className={`shrink-0 w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0A1C3F] ${isHovered ? "animate-bounce-soft" : ""}`}
                              strokeWidth={2}
                            />
                            <span
                              className={`text-xs sm:text-sm transition-all duration-200 whitespace-nowrap ${
                                isActive ? "font-bold text-[#0A1C3F]" : "font-medium text-[#0A1C3F]/80"
                              }`}
                            >
                              {step.label}
                            </span>
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight text-balance max-w-4xl transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              La gestion immobiliere, enfin{" "}
              <span className="text-[#156EE4]">simple</span> et{" "}
              <span className="text-[#156EE4]">intelligente</span>.
            </h1>

            {/* Subtitle */}
            <p
              className={`mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Gerez biens, clients, contrats et paiements depuis une seule plateforme moderne.
            </p>

            {/* CTA + Social proof */}
            <div
              className={`mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                size="lg"
                asChild
                className="bg-[#156EE4] hover:bg-[#1259c7] text-white rounded-3xl px-8 py-6 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 shrink-0"
              >
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Télécharger maintenant
                </a>
              </Button>

              {/* Social proof: avatars + stats */}
              <div
                className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 transition-all duration-500 delay-[400ms] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                }`}
              >
              {/* Avatars: 3 visages équipe + 1 logo agence */}
              <div className="flex items-center -space-x-2 shrink-0">
                {avatars.map((avatar, i) => (
                  <div
                    key={avatar.src}
                    className="relative w-6 h-6 rounded-full border-2 border-white shadow-sm overflow-hidden bg-muted ring-0"
                    style={{ zIndex: avatars.length - i }}
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      width={26}
                      height={26}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div
                  className="relative w-6 h-6 rounded-full border-2 border-white shadow-sm bg-[#156EE4] flex items-center justify-center ring-0"
                  style={{ zIndex: 0 }}
                  aria-hidden
                >
                  <Building2 className="w-3 h-3 text-white" />
                </div>
              </div>
              {/* Texte preuve sociale avec séparateur */}
              <p
                className={` text-xs font-light text-gray-600 tracking-wide transition-all duration-500 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                }`}
              >
                <span>10K+ Utilisateurs actifs</span>
                {/* <span className="inline-block w-px h-4 bg-gray-300 mx-3 align-middle" aria-hidden /> */}
                {/* <span>146+ agences certifiées</span> */}
              </p>
              </div>
            </div>
          </div>

          {/* Phone Mockup Section - à droite */}
          <div
            className={`relative mt-16 lg:mt-0 lg:flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
          {/* Left KPI Widget - Users */}
          {/* <div
            className="absolute left-4 sm:left-8 lg:left-1/4 top-1/3 z-20 animate-fade-in"
            style={{ animationDelay: "800ms", animationFillMode: "both" }}
          >
            <div className="bg-white rounded-2xl p-4 shadow-xl shadow-black/10 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {avatars.map((avatar, i) => (
                    <Image
                      key={i}
                      src={avatar || "/placeholder.svg"}
                      alt="User avatar"
                      width={28}
                      height={28}
                      className="rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">
                    <CountUp end={8000} suffix="+" />
                  </div>
                  <div className="text-xs text-muted-foreground">utilisateurs actifs</div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Right KPI Widget - Agencies */}
          {/* <div
            className="absolute right-4 sm:right-8 lg:right-1/4 top-1/2 z-20 animate-fade-in"
            style={{ animationDelay: "1000ms", animationFillMode: "both" }}
          >
            <div className="bg-white rounded-2xl p-4 shadow-xl shadow-black/10 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#156EE4]/10 flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-[#156EE4]" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">
                    <CountUp end={100} suffix="+" />
                  </div>
                  <div className="text-xs text-muted-foreground">agences certifiees</div>
                </div>
              </div>
            </div>
          </div> */}


          {/* Phone Mockup */}
          <div className="
          relative 
          
       
                
             
           ">
          <div className="relative w-[180px] sm:w-[220px] lg:w-[260px]">

              {/* Phone frame */}
              <div className="relative bg-foreground rounded-[3rem] p-2 shadow-2xl shadow-black/40">
                {/* Screen */}
                <div className="relative rounded-[2.5rem] overflow-hidden bg-white aspect-[9/19]">
                  {/* Notch — responsive : suit la largeur du téléphone (180 → 220 → 260px) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 sm:w-28 sm:h-5 lg:w-32 lg:h-6 bg-foreground rounded-b-xl sm:rounded-b-2xl z-10" />
                  
                  {/* Dashboard Video */}
                  <video
                    src="https://image2url.com/r2/default/videos/1770388652329-37e7f8cc-af63-488e-8f3c-ff718abaf655.mp4"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label="immo+ Dashboard - Interface de gestion immobilière"
                  />
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#A4F0FF]/40 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#156EE4]/25 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>

          {/* Floating Notification Cards */}
          {/* <div
            className="absolute left-8 sm:left-16 lg:left-1/3 bottom-1/4 z-20 animate-fade-in hidden sm:block"
            style={{ animationDelay: "1100ms", animationFillMode: "both" }}
          >
            <div className="bg-white rounded-xl p-3 shadow-lg shadow-black/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-medium text-foreground">Paiement recu</div>
                  <div className="text-xs text-muted-foreground">+1,250.00 EUR</div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div
            className="absolute right-8 sm:right-16 lg:right-1/3 bottom-1/3 z-20 animate-fade-in hidden sm:block"
            style={{ animationDelay: "1300ms", animationFillMode: "both" }}
          >
            <div className="bg-white rounded-xl p-3 shadow-lg shadow-black/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-[#156EE4]" />
                </div>
                <div>
                  <div className="text-xs font-medium text-foreground">Taux occupation</div>
                  <div className="text-xs text-[#156EE4] font-bold">94.5%</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        </div>
      </div>

      
    </section>
  )
}
