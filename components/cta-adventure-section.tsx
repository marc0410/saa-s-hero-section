"use client"

import Image from "next/image"
import Link from "next/link"

export function CtaAdventureSection() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div
        className="mx-auto max-w-5xl rounded-[24px] px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-14 lg:py-20"
        style={{
          background: "linear-gradient(135deg, #0B0F3A 0%, #0D1B6B 100%)",
        }}
      >
        {/* Titre CTA */}
        <h2 className="mx-auto max-w-3xl text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight text-white sm:text-[clamp(2rem,4.5vw,3.5rem)]">
          Rejoignez l&apos;aventure Immo Plus aujourd&apos;hui.
        </h2>

        {/* Sous-texte */}
        <p className="mx-auto mt-4 max-w-xl text-base font-normal text-white/90 sm:mt-5 sm:text-lg lg:text-[18px]">
          L&apos;immobilier simplifié, c&apos;est maintenant. Téléchargez
          l&apos;application gratuitement.
        </p>

        {/* Boutons App Store / Google Play */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10 sm:gap-5">
          <Link
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-opacity hover:opacity-90"
          >
            <Image
              src="/download-as.png"
              alt="Télécharger sur l'App Store"
              width={160}
              height={52}
              className="h-11 w-auto object-contain sm:h-12"
              sizes="160px"
            />
          </Link>
          <Link
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-opacity hover:opacity-90"
          >
            <Image
              src="/download-gp.png"
              alt="Disponible sur Google Play"
              width={160}
              height={52}
              className="h-11 w-auto object-contain sm:h-12"
              sizes="160px"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
