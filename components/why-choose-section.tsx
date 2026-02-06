"use client"

const stats = [
  {
    value: "100%",
    description: "Annonces vérifiées.",
  },
  {
    value: "+500",
    description: "Biens disponibles partout en Côte d'Ivoire.",
  },
  {
    value: "0",
    description: "Frais cachés, transparence totale.",
  },
]

export function WhyChooseSection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: "#FFD700" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Zone 1 : Titre principal */}
        <h2
          className="mx-auto max-w-2xl text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-tight"
          style={{ color: "#0A1C3F" }}
        >
          Pourquoi choisir Immo Plus ?
        </h2>

        {/* Zone 2 : Grille de statistiques (3 colonnes) */}
        <div className="mt-14 grid grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-3 sm:gap-8 lg:mt-20 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <span
                className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tabular-nums leading-none"
                style={{ color: "#0A1C3F" }}
              >
                {stat.value}
              </span>
              <p
                className="max-w-[240px] text-base font-medium sm:text-[15px] lg:text-[17px]"
                style={{ color: "#0A1C3F" }}
              >
                {stat.value} {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Zone 3 : Message fort (support client) */}
        <p
          className="mt-14 text-[clamp(1.75rem,4vw,2.75rem)] font-bold italic sm:mt-16 lg:mt-20"
          style={{ color: "#0A1C3F" }}
        >
          24/7 Support client à votre écoute.
        </p>
      </div>
    </section>
  )
}


