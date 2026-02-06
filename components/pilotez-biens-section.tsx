"use client"

import Link from "next/link"
import Image from "next/image"

export function PilotezBiensSection() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-18 lg:px-20 flex flex-col gap-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Pilotez vos biens comme un pro.
        </h2>

        <div className="mt-8 flex flex-row gap-6">
          <div className="mt-10 flex flex-col self-start justify-center w-2/4 ">
            <p className="text-muted-foreground sm:text-[16px] lg:max-w-xl">
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

          <div className="relative flex w-full items-center justify-end overflow-hidden rounded-[32px]">
            <Image
              src="/cpo-image.png"
              alt="Pilotez vos biens"
              width={701}
              height={515}
              className="w-full h-full max-w-[43.75rem] aspect-[701/515] rounded-[32px] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
