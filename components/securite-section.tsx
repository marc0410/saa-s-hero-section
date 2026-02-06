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
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-18 lg:px-20 flex flex-col gap-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Votre sécurité est notre priorité.
            </h2>


        <div className="p-8 mt-8 flex flex-row gap-8">
            <ul className="self-center mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {points.map((text, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-black">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="sm:text-[14px] font-light text-[#05003899]">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

          {/* Zone à droite : fond avec image centrée */}
          <div
            className="relative flex w-full items-center justify-center overflow-hidden rounded-[24px] p-5 sm:p-6 lg:p-8"
            style={{ backgroundColor: "#F1F1F1" }}
          >
            <div className="relative flex h-[340px] w-[260px] max-w-full items-center justify-center sm:rounded-[26px]">
              <Image
                src="/check-verify-s.png"
                alt="Vérification et sécurité"
                width={260}
                height={340}
                className="h-auto w-full max-w-full object-contain"
              />
            </div>
          </div>
     </div>
      </div>
    </section>
  )
}
