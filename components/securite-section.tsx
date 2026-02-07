"use client"

import Image from "next/image"
import { Check } from "lucide-react"

const points = [
  "Annonces vérifiées : Aucun faux profil, que du réel.",
  "Paiements sécurisés : Transactions garanties via l'application.",
  "Support local : Une équipe à Abidjan pour vous accompagner 7j/7.",
]

export function SecuriteSection() {
  return (
    <section className="relative bg-white py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Votre sécurité est notre priorité.
        </h2>

        <div className="mt-4 sm:mt-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
          <ul className="flex flex-col gap-4 sm:gap-5 w-full lg:w-1/2 lg:min-w-0 list-none p-0 m-0">
            {points.map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-black">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-sm sm:text-[14px] font-light text-[#05003899] leading-snug">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          {/* Zone image : fond gris, responsive */}
          <div
            className="relative flex w-full lg:w-1/2 shrink-0 items-center justify-center overflow-hidden rounded-2xl sm:rounded-[24px] p-5 sm:p-6 lg:p-8 min-h-[240px] sm:min-h-[280px] lg:min-h-[340px]"
            style={{ backgroundColor: "#F1F1F1" }}
          >
            <div className="relative w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[260px] aspect-[260/340] flex items-center justify-center">
              <Image
                src="/check-verify-s.png"
                alt="Vérification et sécurité"
                width={260}
                height={340}
                className="h-full w-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
