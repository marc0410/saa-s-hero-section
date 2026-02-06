"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    badge: "Avis 1 : Le Locataire",
    text: "Je cherchais une résidence à Assinie en urgence. Avec Immo Plus, j'ai trouvé et réservé en moins de 2 minutes. Les photos sont claires, les prix transparents et l'interface ultra-fluide. C'est devenu mon application n°1 pour tous mes séjours en Côte d'Ivoire.",
    name: "Koffi Ange",
    initials: "KA",
  },
  {
    badge: "Avis 2 : Le Propriétaire",
    text: "Gérer mes appartements était un vrai casse-tête. Grâce à l'Espace Pro, je pilote tout depuis mon téléphone : je mets à jour mes disponibilités et je reçois mes paiements en toute sécurité. Je gagne un temps précieux chaque jour.",
    name: "Lauraine Yao",
    initials: "LY",
  },
  {
    badge: "Avis 3 : L'Acheteur",
    text: "Acheter un terrain est souvent stressant, mais Immo Plus m'a rassuré avec ses annonces rigoureusement vérifiées. J'ai pu acquérir mon lot à Grand-Bassam en toute sérénité. Enfin une plateforme qui privilégie la confiance !",
    name: "Jean Kouadio",
    initials: "JK",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <h2
          className="text-center text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-tight"
          style={{ color: "#0A1C3F" }}
        >
          Ils nous font confiance.
        </h2>

        {/* Grille de 3 témoignages */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-14 lg:mt-16 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl p-6 sm:p-7"
            >
              {/* Badge pill outline bleu */}
              <span
                className="mb-4 inline-block self-start rounded-full border-[1px] px-5 py-2 text-sm font-semibold"
                style={{
                  borderColor: "#4262FF",
                  color: "#4262FF",
                  backgroundColor: "#FFFFFF",
                }}
              >
                {item.badge}
              </span>

              {/* Texte témoignage */}
              <p
                className="mb-5 text-left text-[15px] leading-relaxed sm:text-base"
                style={{ color: "#64748B" }}
              >
                {item.text}
              </p>

              {/* Bloc auteur : avatar + nom */}
              <div className="mt-auto flex w-full items-center gap-3">
                <Avatar className="h-10 w-10 shrink-0 border-2 border-white ">
                  <AvatarFallback
                    className="text-sm font-medium"
                    style={{ backgroundColor: "#E0E7FF", color: "#0A1C3F" }}
                  >
                    {item.initials}
                  </AvatarFallback>
                </Avatar>
                <span
                  className="font-semibold"
                  style={{ color: "#0A1C3F" }}
                >
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
