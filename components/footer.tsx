"use client"

import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"

const servicesLinks = [
  { label: "Résidences Meublées", href: "#" },
  { label: "Locations Longue Durée", href: "#" },
  { label: "Achat de Terrains", href: "#" },
  { label: "Vente de Maisons", href: "#" },
  { label: "Espace Professionnel", href: "#", active: true },
]

const assistanceLinks = [
  { label: "Comment ça marche ?", href: "#" },
  { label: "Support Client", href: "#" },
  { label: "Vérification des Biens", href: "#" },
  { label: "Conditions d'Utilisation", href: "/conditions-utilisation" },
  { label: "Politique de Confidentialité", href: "/politique-confidentialite" },
  { label: "Suppression des données", href: "/suppression-donnees" },
]

export function Footer() {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: "#0B0B0B", color: "#EAEAEA" }}
    >
      {/* Zone principale — grille 5 colonnes */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[auto_1fr_1fr_1fr_1fr] lg:gap-10"
          style={{ alignItems: "start" }}
        >
          {/* Colonne 1 — Logo */}
          <a href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="immo+"
            width={48}
            height={48}
            className="h-12 w-12 rounded-xl object-contain"
          />
        </a>

          {/* Colonne 2 — Nos Services */}
          <div>
            <h3 className="mb-4 text-base font-bold text-white sm:text-[17px]">
              Nos Services
            </h3>
            <ul className="space-y-2.5">
              {servicesLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`text-[15px] transition-colors hover:text-white sm:text-base ${
                      item.active
                        ? "font-medium text-[#3B82F6] underline decoration-[#3B82F6] underline-offset-2"
                        : "text-[#B4B4B4]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Assistance */}
          <div>
            <h3 className="mb-4 text-base font-bold text-white sm:text-[17px]">
              Assistance
            </h3>
            <ul className="space-y-2.5">
              {assistanceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-[#B4B4B4] transition-colors hover:text-white sm:text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 — Contact */}
          <div>
            <h3 className="mb-4 text-base font-bold text-white sm:text-[17px]">
              Contact
            </h3>
            <ul className="space-y-2.5 text-[15px] text-[#B4B4B4] sm:text-base">
              <li>Email: contact@immoplus.ci</li>
              <li>WhatsApp: +225 XX XX XX XX XX</li>
              <li>Adresse: Abidjan, Côte d&apos;Ivoire</li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-white"
                >
                  Recrutement / Partenariat
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 5 — Suivez nous */}
          <div>
            <h3 className="mb-4 text-base font-bold text-white sm:text-[17px]">
              Suivez nous
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B4B4B4] transition-colors hover:text-white"
                aria-label="Twitter / X"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-6 w-6 items-center justify-center rounded-full border border-[#B4B4B4] text-[10px] font-bold text-[#B4B4B4] transition-colors hover:border-white hover:text-white sm:h-7 sm:w-7 sm:text-xs"
                aria-label="Facebook"
              >
                f
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Séparateur */}
      <div
        className="w-full"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      />

      {/* Sous-footer */}
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-[#B4B4B4] sm:flex-row">
          <span>© 2026 Immo Plus. Tous droits réservés.</span>
          <span>L&apos;immobilier simplifié en Côte d&apos;Ivoire.</span>
        </div>
      </div>
    </footer>
  )
}
