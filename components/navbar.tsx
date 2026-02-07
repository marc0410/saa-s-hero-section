"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { getDownloadUrl, APP_STORE_URL } from "@/lib/app-links"

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Pourquoi nous", href: "#why-choose" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const [downloadUrl, setDownloadUrl] = useState(APP_STORE_URL)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setDownloadUrl(getDownloadUrl())
  }, [])

  return (
    <nav
      className={`fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 transition-all duration-300 ease-out sm:top-5 ${
        isScrolled ? "top-3 sm:top-4" : "top-4 sm:top-5"
      }`}
    >
      {/* Pilule glassmorphism — desktop */}
      <div
        className={`hidden items-center justify-between gap-4 rounded-full border border-white/40 bg-white/70 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 md:flex ${
          isScrolled ? "py-2 px-4" : "py-2.5 px-4"
        }`}
        style={{
          boxShadow: "0 8px 32px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.5) inset",
        }}
      >
        {/* Logo — icône seule, coins arrondis */}
        <Link
          href="/"
          className="flex shrink-0 items-center justify-center rounded-2xl transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo.png"
            alt="Immo+"
            width={40}
            height={40}
            className="h-9 w-9 rounded-2xl object-contain sm:h-10 sm:w-10"
          />
        </Link>

        {/* Liens centrés — espacement équilibré */}
        <div className="flex flex-1 items-center justify-center gap-6 sm:gap-8">
          {navLinks.map((link, index) => {
            const isActive = index === 0
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 text-[13px] font-medium text-neutral-700 transition-colors duration-200 sm:text-sm"
              >
                {/* Hover : pilule highlight qui suit le curseur visuellement */}
                <span className="absolute inset-0 rounded-full bg-white/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <span className="relative z-10">{link.label}</span>
                {/* Indicateur actif : point lumineux sous le lien actif */}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-1/2 h-0.5 w-1 -translate-x-1/2 rounded-full bg-[#156EE4] opacity-70"
                    aria-hidden
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Bouton Télécharger — redirige vers Play Store ou App Store selon l'appareil */}
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-[#156EE4] px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#1259c7] hover:shadow-md hover:shadow-[#156EE4]/25 sm:text-sm"
        >
          Télécharger
        </a>
      </div>

      {/* Mobile : barre simple + menu */}
      <div className="flex items-center justify-between rounded-full border border-white/40 bg-white/70 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl md:hidden">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Immo+"
            width={40}
            height={40}
            className="h-9 w-9 rounded-2xl object-contain"
          />
        </Link>
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-full p-2 text-neutral-600 transition-colors hover:bg-white/50"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menu mobile — glassmorphism */}
      {isMobileMenuOpen && (
        <div
          className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-white/40 bg-white/80 p-4 shadow-xl backdrop-blur-xl md:hidden"
          style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.1)" }}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-white/70"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-[#156EE4] py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#1259c7]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Télécharger
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
