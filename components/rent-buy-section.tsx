"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function RentBuySection() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Bloc du haut : Louez facilement et rapidement + fond blob à droite */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Louez facilement et rapidement
            </h2>
            <p className="mt-4 text-muted-foreground sm:mt-6 sm:text-lg">
              Trouvez des résidences meublées pour des séjours courts ou longs.
              Des annonces vérifiées, une mise en relation simple.
            </p>
            <div className="mt-6 flex flex-col gap-0 sm:mt-8">
              <Link
                href="#locations"
                className="inline-flex items-center gap-2 text-[#156EE4] font-semibold transition-colors hover:text-[#1259c7]"
              >
                Voir les locations
                {/* <ArrowRight className="h-5 w-5" /> */}
              </Link>
              <span className="mt-0.5 block h-0.5 w-[6.6875rem] bg-[#4262FF]" />
            </div>
          </div>

          {/* Zone à droite : image remplissant le blob */}
          <div className="relative flex items-center justify-end min-h-[210px] sm:min-h-[300px] md:min-h-[352px] lg:min-h-[380px] xl:min-h-[453px]">
            <div
              className="absolute right-0 top-1/2 h-[65vw] w-[88vw] max-h-[453px] max-w-[605px] -translate-y-1/2 overflow-hidden rounded-[33px]"
            >
              <div className="relative h-full w-full">
                <Image
                  src="/rent-by.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 88vw, 605px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bloc du bas : Carte Fauteuil design à gauche + Achetez en toute confiance à droite */}
        <div className="mt-20 grid gap-12 lg:mt-28 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="order-2 lg:order-1 flex justify-center">
            <div
              className="
                w-[320px] h-[450px]
                rounded-[48px]
                bg-[#ECF4FE]
                shadow-sm
                flex flex-col
                overflow-hidden
                p-0
                sm:w-[320px] sm:h-[450px]
                "
              style={{
                minWidth: "220px",
                maxWidth: "100%",
                minHeight: "340px",
                maxHeight: "100%",
              }}
            >
              <div
                className="
                  relative 
                  w-full 
                  h-[180px] 
                  sm:h-[180px] 
                  rounded-t-[48px] 
                  overflow-hidden 
                  bg-muted
                "
                style={{ minHeight: "120px" }}
              >
                <Image
                  src="/fauteuil.png"
                  alt="Fauteuil design - salon moderne"
                  fill
                  className="object-cover"
                  sizes="320px"
                  style={{
                    borderTopLeftRadius: "48px",
                    borderTopRightRadius: "48px",
                  }}
                  priority
                />
              </div>
              <div className="flex flex-col flex-1 px-6 py-4 sm:px-8">
                <h3 className="mt-1 text-xl font-bold text-foreground sm:text-2xl">
                  Fauteuil design
                </h3>
                <p className="mt-2 text-muted-foreground sm:mt-3 flex-1">
                  Fauteuil contemporain bleu et marron, idéal pour un salon
                  épuré. Confort et esthétique pour votre intérieur.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 flex flex-col justify-center lg:order-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Achetez en toute confiance
            </h2>
            <p className="mt-4 text-muted-foreground sm:mt-6 sm:text-lg">
              Devenez propriétaire en toute sérénité. Annonces vérifiées,
              accompagnement transparent pour chaque étape de votre achat.
            </p>
            <div className="mt-6 flex flex-col gap-0 sm:mt-8">
              <Link
                href="#ventes"
                className="inline-flex items-center gap-2 text-[#156EE4] font-semibold transition-colors hover:text-[#1259c7] "
              >
                Découvrir les ventes
                {/* <ArrowRight className="h-5 w-5" /> */}
              </Link>
              <span className="mt-0.5 block h-0.5 w-[6.6875rem] bg-[#4262FF]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
