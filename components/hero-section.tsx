"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Users, Building2, CreditCard, BarChart3, ChevronDown, BadgeCheck, Play } from "lucide-react"
import { CountUp } from "@/components/count-up"
import { Button } from "@/components/ui/button"

const rotatingTexts = [
  "Publiez • Gerez • Encaissez",
  "Meubles • Residences • Locations",
]

// Sample avatars for social proof
const avatars = [
  "https://i.pravatar.cc/32?img=1",
  "https://i.pravatar.cc/32?img=2", 
  "https://i.pravatar.cc/32?img=3",
  "https://i.pravatar.cc/32?img=4",
]

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Rotating text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
        setIsAnimating(false)
      }, 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative min-h-screen overflow-hidden"
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
            {/* Animated Badge */}
            <div
              className={`mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-200/0 backdrop-blur-md border border-white/40 shadow-sm hover:shadow-md hover:shadow-[#156EE4]/10 transition-all duration-300 cursor-default">
                <span 
                  className={`text-sm font-semibold text-foreground transition-all duration-300 ${
                    isAnimating ? "opacity-0 translate-y-2 blur-sm" : "opacity-100 translate-y-0 blur-0"
                  }`}
                >
                  {rotatingTexts[currentTextIndex]}
                </span>
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

            {/* CTA Buttons */}
            <div
              className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                size="lg"
                className="bg-[#156EE4] hover:bg-[#1259c7] text-white rounded-3xl px-8 py-6 text-base font-semibold  transition-all duration-300 hover:-translate-y-0.5"
              >
                Telecharger l'application
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-3xl px-8 py-6 text-base font-semibold border-2 border-foreground/20 hover:border-foreground/40 hover:bg-white/50 transition-all duration-300 hover:-translate-y-0.5 bg-transparent"
              >
                <Play className="w-4 h-4 mr-2" />
                Regardez Demo
              </Button>
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
                <div className="relative rounded-[2.5rem] overflow-hidden bg-white">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground rounded-b-2xl z-10" />
                  
                  {/* Dashboard Image */}
                  <Image
                    src="/screen.png"
                    alt="immo+ Dashboard - Interface de gestion immobiliere"
                    width={360}
                    height={720}
                    className="w-full h-auto"
                    priority
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
