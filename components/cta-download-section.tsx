"use client"

import Image from "next/image"
import Link from "next/link"

export function CtaDownloadSection() {
  
  return (
    <section
      className="relative max-h-[448px] w-full overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 33%, #2F58F8 33%, #2F58F8 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[425px] flex-col px-4 py-12 sm:max-w-[90vw] sm:px-6 md:max-w-[768px] md:flex-row md:items-center md:justify-between md:gap-8 lg:max-w-[1024px] lg:gap-12 xl:max-w-[1200px]">
        {/* Gauche : texte + boutons (sur fond bleu visuellement) */}
        <div className="flex flex-1 flex-col justify-center md:order-1 md:py-12">
          <h2 className="w-4/6  text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
            Prêt à simplifier votre immobilier ?
          </h2>
          <p className="mt-3 text-white/90 sm:mt-4 sm:text-lg">
            Téléchargez l&apos;application dès maintenant.
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:gap-3">
            <Link
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-9 w-auto transition-opacity hover:opacity-90 sm:h-10"
            >
              <Image
                src="/download-as.png"
                alt="Télécharger sur l'App Store"
                width={120}
                height={40}
                className="h-9 w-auto object-contain sm:h-10"
                sizes="120px"
              />
            </Link>
            <Link
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-9 w-auto transition-opacity hover:opacity-90 sm:h-10"
            >
              <Image
                src="/download-gp.png"
                alt="Get it on Google Play"
                width={120}
                height={40}
                className="h-9 w-auto object-contain sm:h-10"
                sizes="120px"
              />
            </Link>
          </div>
        </div>

        {/* Droite : image — déplacer avec style top/bottom ci-dessous */}
        <div className="relative mt-8 flex flex-1 min-h-[320px] items-end justify-center md:order-2 md:mt-0 md:min-h-[420px] md:justify-end lg:min-h-[480px]">
          <div
            className="absolute left-1/2 h-[320px] w-full max-w-[280px] -translate-x-1/2 sm:h-[380px] sm:max-w-[320px] md:left-auto md:right-0 md:h-[420px] md:max-w-[360px] md:translate-x-0 lg:h-[480px] lg:max-w-[400px]"
            style={{
              // Vertical : utiliser soit top soit bottom (pas les deux)
              top: "-80px", // remonter l'image — ex: "-80px", "0", "1rem"
              // bottom: "0", // ou ancrer en bas — ex: "0", "1rem"
            }}
          >
            <Image
              src="/ment-with-f.png"
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
