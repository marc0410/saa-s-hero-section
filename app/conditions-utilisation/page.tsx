"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import {
  Search,
  Lock,
  FileText,
  Download,
  PenLine,
  Eraser,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

const ARTICLES = [
  { id: "parties", title: "1. Parties Contractantes" },
  { id: "article-1", title: "2. Objet et Services (Article 1)" },
  { id: "article-2", title: "3. Statut de la Plateforme (Article 2)" },
  { id: "article-3", title: "4. Responsabilités et Garanties (Article 3)" },
  { id: "article-4", title: "5. Obligations du Professionnel (Article 4)" },
  { id: "article-6-8", title: "6. Suspension et Résiliation (Articles 6, 7 & 8)" },
  { id: "article-9", title: "7. Conditions Financières (Article 9)" },
  { id: "article-10-11", title: "8. Validité et Droit (Articles 10 & 11)" },
]

export default function ConditionsUtilisationPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>("Suspension")
  const [signature, setSignature] = useState("")

  const checkScroll = () => {
    if (!containerRef.current) return
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 80
    setHasScrolledToBottom(isAtBottom)
  }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.addEventListener("scroll", checkScroll)
    checkScroll()
    return () => el.removeEventListener("scroll", checkScroll)
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F9FA" }}>
      {/* Barre de progression discrète */}
      <div className="sticky top-0 z-20 h-1 w-full bg-gray-200">
        <div
          className="h-full bg-[#156EE4] transition-all duration-500"
          style={{ width: hasScrolledToBottom ? "100%" : "15%" }}
        />
      </div>

      <div className="mx-auto flex max-w-6xl gap-8 px-4 py-8 lg:px-8">
        {/* Table des matières sticky */}
        <aside className="hidden shrink-0 lg:block lg:w-56">
          <nav className="sticky top-24 space-y-1 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
              Sommaire
            </p>
            {ARTICLES.map((a) => (
              <a
                key={a.id}
                href={`#${a.id}`}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-[#333] transition-colors hover:bg-gray-100 hover:text-[#156EE4]"
              >
                {a.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Contenu principal */}
        <main className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4 pb-6">
            <div>
              <h1 className="text-2xl font-bold text-[#333] sm:text-3xl">
                Contrat d&apos;adhésion professionnel – IMMO PLUS
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Document officiel – À lire avant signature
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-[#333] shadow-sm transition-colors hover:bg-gray-50"
            >
              <Download className="h-4 w-4" />
              Télécharger en PDF
            </Link>
          </div>

          <div
            ref={containerRef}
            className="max-h-[70vh] overflow-y-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
            style={{ lineHeight: 1.6 }}
          >
            <div className="prose prose-sm max-w-none text-[#333] sm:prose-base">
              {/* 1. Parties */}
              <section id="parties" className="mb-10 scroll-mt-24">
                <h2 className="mb-4 font-bold text-[#333] sm:text-lg">
                  1. Parties Contractantes
                </h2>
                <p className="text-sm text-[#333] sm:text-base">
                  Le présent contrat est conclu entre :
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#333] sm:text-base">
                  <li>
                    <strong>L&apos;Éditeur :</strong> La Société Afriq&apos;Solus Sarl, au capital
                    de <strong className="text-[#156EE4]">5 000 000 FCFA</strong>, dont le siège
                    social est à Angré Nouveau CHU, Abidjan, immatriculée au RCCM
                    CI-ABJ-03-2023-B12-04477. Représentée par M. MASSOKO MOUNE MOISE.
                  </li>
                  <li>
                    <strong>Le Professionnel (L&apos;Agence) :</strong> La société identifiée par
                    ses informations (Nom, Capital, Siège social, RCCM, NCC) saisies lors de
                    l&apos;adhésion.
                  </li>
                </ul>
              </section>

              {/* 2. Objet et Services — Cartes avec icônes */}
              <section id="article-1" className="mb-10 scroll-mt-24">
                <h2 className="mb-4 font-bold text-[#333] sm:text-lg">
                  2. Objet et Services (Article 1)
                </h2>
                <p className="mb-4 text-sm text-[#333] sm:text-base">
                  Le contrat encadre la publicité des biens de l&apos;agence sur la plateforme
                  IMMO PLUS. La plateforme s&apos;engage à :
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50/50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#156EE4]/10">
                      <Search className="h-5 w-5 text-[#156EE4]" />
                    </div>
                    <p className="text-sm text-[#333]">
                      Diffuser les annonces auprès des utilisateurs actifs et assurer leur
                      visibilité.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50/50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#156EE4]/10">
                      <FileText className="h-5 w-5 text-[#156EE4]" />
                    </div>
                    <p className="text-sm text-[#333]">
                      Fournir une version &quot;Pro&quot; dédiée incluant des outils de publication,
                      de gestion d&apos;annonces et de réception de demandes de contacts ou
                      visites.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50/50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#156EE4]/10">
                      <Lock className="h-5 w-5 text-[#156EE4]" />
                    </div>
                    <p className="text-sm text-[#333]">
                      Garantir un accès sécurisé à l&apos;espace professionnel.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. Statut */}
              <section id="article-2" className="mb-10 scroll-mt-24">
                <h2 className="mb-4 font-bold text-[#333] sm:text-lg">
                  3. Statut de la Plateforme (Article 2)
                </h2>
                <p className="text-sm text-[#333] sm:text-base">
                  IMMO PLUS agit en tant que courtier et agent immobilier intermédiaire
                  commercial pour la mise en relation, la visite et la négociation des biens.
                </p>
              </section>

              {/* 4. Responsabilités */}
              <section id="article-3" className="mb-10 scroll-mt-24">
                <h2 className="mb-4 font-bold text-[#333] sm:text-lg">
                  4. Responsabilités et Garanties (Article 3)
                </h2>
                <ul className="space-y-2 text-sm text-[#333] sm:text-base">
                  <li>
                    <strong>Accompagnement :</strong> IMMO PLUS accompagne le Professionnel en
                    cas de dégradations causées par des clients pour trouver une solution
                    amiable.
                  </li>
                  <li>
                    <strong>Responsabilité du Pro :</strong> Le Professionnel est le seul
                    responsable des préjudices causés aux clients par les biens, terrains ou
                    projets qu&apos;il propose.
                  </li>
                </ul>
              </section>

              {/* 5. Obligations */}
              <section id="article-4" className="mb-10 scroll-mt-24">
                <h2 className="mb-4 font-bold text-[#333] sm:text-lg">
                  5. Obligations du Professionnel (Article 4)
                </h2>
                <p className="mb-2 text-sm text-[#333] sm:text-base">
                  Le Professionnel s&apos;engage à :
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-[#333] sm:text-base">
                  <li>Fournir des biens conformes, propres, sécurisés et fidèles aux descriptions.</li>
                  <li>Respecter les prix affichés et les lois en vigueur en Côte d&apos;Ivoire.</li>
                  <li>Détenir un mandat de gestion ou être propriétaire des biens.</li>
                  <li>Réparer les préjudices en cas d&apos;informations inexactes.</li>
                </ul>
              </section>

              {/* 6. Suspension — Accordéon */}
              <section id="article-6-8" className="mb-10 scroll-mt-24">
                <h2 className="mb-4 font-bold text-[#333] sm:text-lg">
                  6. Suspension et Résiliation (Articles 6, 7 & 8)
                </h2>
                {[
                  {
                    title: "Suspension",
                    content:
                      "IMMO PLUS peut suspendre un compte immédiatement et sans préavis en cas de manquement ou de plaintes.",
                  },
                  {
                    title: "Faute Grave",
                    content:
                      "Résiliation immédiate sans indemnité pour fraude, logement insalubre, contournement de la plateforme ou atteinte à l'image d'IMMO PLUS.",
                  },
                  {
                    title: "Préavis",
                    content: (
                      <>
                        Hors faute grave, le contrat peut être rompu par écrit avec un préavis
                        de <strong className="text-[#156EE4]">sept (7) jours</strong> calendaires.
                      </>
                    ),
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-gray-200 last:border-0"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenAccordion(
                          openAccordion === item.title ? null : item.title
                        )
                      }
                      className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-[#333]"
                    >
                      {item.title}
                      {openAccordion === item.title ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    {openAccordion === item.title && (
                      <div className="pb-3 text-sm text-gray-600">
                        {typeof item.content === "string" ? item.content : item.content}
                      </div>
                    )}
                  </div>
                ))}
              </section>

              {/* 7. Bento Grid Commissions */}
              <section id="article-9" className="mb-10 scroll-mt-24">
                <h2 className="mb-4 font-bold text-[#333] sm:text-lg">
                  7. Conditions Financières (Article 9)
                </h2>
                <p className="mb-4 text-sm text-[#333] sm:text-base">
                  Les commissions dues à IMMO PLUS sur les transactions effectives sont :
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border-2 border-[#156EE4]/20 bg-[#156EE4]/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#156EE4]">
                      Gestion locative
                    </p>
                    <p className="mt-2 text-2xl font-bold text-[#333]">
                      <span className="text-[#156EE4]">25%</span> du mois d&apos;agence
                    </p>
                  </div>
                  <div className="rounded-xl border-2 border-[#156EE4]/20 bg-[#156EE4]/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#156EE4]">
                      Vente
                    </p>
                    <p className="mt-2 text-2xl font-bold text-[#333]">
                      Entre <span className="text-[#156EE4]">2,5%</span> et{" "}
                      <span className="text-[#156EE4]">10%</span> des honoraires perçus par
                      l&apos;agence
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-[#333]">
                  <strong>Paiement échelonné :</strong> La commission est alors perçue au
                  prorata.
                </p>
              </section>

              {/* 8. Validité */}
              <section id="article-10-11" className="mb-10 scroll-mt-24">
                <h2 className="mb-4 font-bold text-[#333] sm:text-lg">
                  8. Validité et Droit (Articles 10 & 11)
                </h2>
                <ul className="space-y-2 text-sm text-[#333] sm:text-base">
                  <li>
                    <strong>Signature :</strong> L&apos;acceptation électronique du contrat vaut
                    signature légale et opposable.
                  </li>
                  <li>
                    <strong>Litiges :</strong> Le contrat est soumis au droit ivoirien. À défaut
                    d&apos;accord amiable sous un mois, les juridictions compétentes seront
                    saisies.
                  </li>
                </ul>
              </section>

              {/* Zone signature */}
              <section className="mt-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-bold text-[#333]">Signature</h3>
                <div
                  className="flex min-h-[120px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-6"
                  onClick={() => document.getElementById("signature-input")?.focus()}
                >
                  {signature ? (
                    <p className="font-signature text-2xl text-[#333]">{signature}</p>
                  ) : (
                    <PenLine className="h-10 w-10 text-gray-400" />
                  )}
                  <input
                    id="signature-input"
                    type="text"
                    placeholder="Votre signature (nom ou initiales)"
                    value={signature}
                    onChange={(e) => setSignature(e.target.value)}
                    className="mt-3 w-full max-w-xs rounded-lg border border-gray-300 bg-white px-3 py-2 text-center text-sm text-[#333] placeholder:text-gray-400 focus:border-[#156EE4] focus:outline-none focus:ring-1 focus:ring-[#156EE4]"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSignature("")}
                    className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#156EE4]"
                  >
                    <Eraser className="h-4 w-4" />
                    Effacer
                  </button>
                  <p className="text-xs text-gray-500">
                    Fait à Abidjan, le 29 Janvier 2026
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* CTA Acceptation — scroll-to-accept */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              disabled={!hasScrolledToBottom}
              className="w-full rounded-xl bg-[#156EE4] px-6 py-4 text-base font-semibold text-white shadow-md transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none hover:bg-[#1259c7] sm:w-auto"
            >
              J&apos;accepte les termes et je signe le contrat
            </button>
            <Link
              href="/"
              className="text-center text-sm font-medium text-[#156EE4] hover:underline"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
