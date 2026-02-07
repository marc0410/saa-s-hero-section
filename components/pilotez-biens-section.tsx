"use client"

import Link from "next/link"
import Image from "next/image"

export function PilotezBiensSection() {
  return (
    <section className="relative bg-white py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Pilotez vos biens comme un pro.
        </h2>

        <div className="mt-6 sm:mt-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex flex-col justify-center w-full lg:w-1/2 lg:min-w-0">
            <p className="text-muted-foreground text-base sm:text-[16px] lg:max-w-xl">
              Une interface dédiée pour suivre vos réservations, mettre à jour
              vos prix et échanger avec vos locataires en temps réel.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link
                href="#en-savoir-plus"
                className="inline-flex items-center gap-2 text-[#156EE4] font-normal transition-colors hover:text-[#1259c7]"
              >
                En savoir plus →
              </Link>
              <span className="mt-0.5 block h-[1px] w-[6.6875rem] bg-[#4262FF]" />
            </div>
          </div>

          <div className="relative flex w-full lg:w-1/2 shrink-0 items-center justify-center overflow-hidden rounded-2xl sm:rounded-[32px] min-h-0">
            <Image
              src="/cpo-image.png"
              alt="Pilotez vos biens"
              width={701}
              height={515}
              className="w-full h-auto max-w-full aspect-[701/515] rounded-2xl sm:rounded-[32px] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
