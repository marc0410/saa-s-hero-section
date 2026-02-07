"use client"

import Image from "next/image"
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/app-links"

const features = [
  {
    title: "Trouvez votre futur logement",
    description:
      "Parcourez des milliers d'annonces vérifiées en un clic. Que ce soit pour une nuit ou pour la vie, trouvez le bien qui vous correspond.",
  },
  {
    title: "Pilotez votre activité immobilière",
    description:
      "Une interface intuitive pour gérer vos biens en temps réel. Publiez, communiquez et encaissez vos revenus en toute sérénité.",
  },
  {
    title: "Un partenaire de confiance",
    description:
      "Nous connectons particuliers et professionnels dans un environnement sécurisé pour faciliter toutes vos transactions immobilières.",
  },
]

export function FeaturesSection() {
  return (
    <section id="fonctionnalites" className="relative bg-white py-16 sm:py-20 lg:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        {/* Titre principal */}

        {/* Titre — pleine largeur sur mobile, largeur contenue sur desktop */}
        <h2 className="w-full max-w-2xl mx-auto lg:max-w-none lg:w-2/5 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl sm:max-w-xl md:text-4xl lg:text-5xl">
          Une solution complète pour tous.
        </h2>

        {/* Grille des 3 blocs */}
        <div className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col  p-6  sm:p-8"
            >
              <h3 className="text-lg font-bold text-foreground sm:text-xl">
                {feature.title}
              </h3>
              <p className="mt-3 flex-1 text-muted-foreground sm:mt-4 sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
{/* flex flex-col rounded-xl hover:border-blue-600 border border-border/50 bg-card/30 p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 */}
        {/* Boutons App Store & Google Play (images cliquables) */}
        <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:mt-10 sm:flex-row">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-11 w-auto transition-opacity hover:opacity-90 sm:h-12 md:h-14 lg:h-16"
          >
            <Image
              src="/download-as.png"
              alt="Télécharger sur l'App Store"
              width={140}
              height={48}
              className="h-11 w-auto object-contain sm:h-12 md:h-14 lg:h-16"
            />
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-11 w-auto transition-opacity hover:opacity-90 sm:h-12 md:h-14 lg:h-16"
          >
            <Image
              src="/download-gp.png"
              alt="Get it on Google Play"
              width={140}
              height={48}
              className="h-11 w-auto object-contain sm:h-12 md:h-14 lg:h-16"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
