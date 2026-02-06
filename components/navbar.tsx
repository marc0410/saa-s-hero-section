"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "Fonctionnalites", href: "#fonctionnalites" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Contact", href: "#contact" },
    // { label: "Agences", href: "#agences" },
  ]

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[98%] max-w-7xl transition-all duration-300 ${
        isScrolled ? "top-2" : "top-4"
      }`}
    >
      <div
        className={`flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-300 
         `}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="immo+"
            width={48}
            height={48}
            className="h-12 w-12 rounded-xl object-contain"
          />
        </a>

        {/* Desktop Navigation - Floating Capsule */}
        <div className="hidden md:flex items-center">
  <nav className="flex items-center gap-1 px-2 py-2 rounded-full border border-[#4262FF]/60 shadow-lg shadow-blue-500/5">
    {navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="relative text-sm font-semibold text-gray-700 hover:text-white hover:bg-blue-600 px-4 py-2 rounded-full transition-all duration-300 selection:group"
      >
        {link.label}
        {/* Optionnel : petite barre de soulignement animée */}
        {/* <span className="absolute inset-x-4 bottom-1 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" /> */}
      </a>
    ))}
  </nav>
</div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-[#156EE4] hover:bg-[#1259c7] text-white rounded-3xl px-6 font-medium  shadow-xl shadow-[#4262FF]/5  transition-all duration-300"
          >
            Télécharger
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-white/90 backdrop-blur-xl -lg shadow-black/5shadow">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="bg-[#156EE4] hover:bg-[#1259c7] text-white rounded-xl w-full font-medium mt-2"
            >
              Commencer
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
