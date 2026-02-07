"use client"

import Link from "next/link"
import { Trash2, Mail, FileText, Shield, Smartphone } from "lucide-react"

const SECTIONS = [
  { id: "demande", title: "1. Demande de suppression de compte" },
  { id: "apres-demande", title: "2. Que se passe-t-il après votre demande ?" },
  { id: "conservation", title: "3. Données pouvant être conservées" },
  { id: "application", title: "4. Suppression via l'application" },
  { id: "contact", title: "5. Contact" },
]

export default function SuppressionDonneesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="mx-auto flex max-w-6xl gap-8 px-4 py-8 lg:px-8">
        {/* Table des matières sticky */}
        <aside className="hidden shrink-0 lg:block lg:w-56">
          <nav className="sticky top-24 space-y-1 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
              Sommaire
            </p>
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-[#333] transition-colors hover:bg-gray-100 hover:text-[#156EE4]"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Contenu principal */}
        <main className="min-w-0 flex-1">
          <div className="pb-6">
            <h1 className="text-2xl font-bold text-[#333] sm:text-3xl">
              Suppression des données utilisateur – ImmoPlus
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Dernière mise à jour : 6 février 2026
            </p>
          </div>

          <div
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
            style={{ lineHeight: 1.6 }}
          >
            <p className="mb-10 text-[#333]">
              Chez ImmoPlus, nous respectons votre droit à la confidentialité et au contrôle de vos données personnelles.
            </p>

            {/* 1. Demande de suppression */}
            <section id="demande" className="mb-10 scroll-mt-24">
              <h2 className="mb-4 flex items-center gap-2 font-bold text-[#333] sm:text-lg">
                <Trash2 className="h-5 w-5 text-[#156EE4]" />
                1. Demande de suppression de compte
              </h2>
              <p className="mb-4 text-sm text-[#333] sm:text-base">
                Vous pouvez demander à tout moment la suppression de votre compte et de vos données personnelles associées.
              </p>
              <p className="mb-3 text-sm font-medium text-[#333] sm:text-base">
                Pour cela :
              </p>
              <div className="mb-4 flex flex-wrap items-center gap-2 rounded-xl border border-[#156EE4]/20 bg-[#156EE4]/5 p-4">
                <Mail className="h-5 w-5 text-[#156EE4]" />
                <span className="text-[#333]">Envoyez un email à :</span>
                <a
                  href="mailto:support@immoplusci.com"
                  className="font-medium text-[#156EE4] hover:underline"
                >
                  support@immoplusci.com
                </a>
              </div>
              <p className="mb-2 text-sm font-medium text-[#333] sm:text-base">
                Objet du message : <span className="font-normal text-[#333]">Suppression de données</span>
              </p>
              <div>
                <p className="mb-2 text-sm font-medium text-[#333] sm:text-base">
                  Informations à inclure :
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-[#333] sm:text-base">
                  <li>Votre nom</li>
                  <li>L&apos;adresse email utilisée pour votre compte</li>
                  <li>(Optionnel) Votre numéro de téléphone lié au compte</li>
                </ul>
              </div>
            </section>

            {/* 2. Après la demande */}
            <section id="apres-demande" className="mb-10 scroll-mt-24">
              <h2 className="mb-4 flex items-center gap-2 font-bold text-[#333] sm:text-lg">
                <FileText className="h-5 w-5 text-[#156EE4]" />
                2. Que se passe-t-il après votre demande ?
              </h2>
              <p className="mb-3 text-sm text-[#333] sm:text-base">
                Après réception de votre demande :
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-[#333] sm:text-base">
                <li>Nous vérifions votre identité pour protéger votre compte</li>
                <li>Votre compte sera désactivé</li>
                <li>Vos données personnelles seront supprimées de nos systèmes dans un délai maximum de 30 jours, sauf obligation légale contraire</li>
              </ul>
            </section>

            {/* 3. Données conservées */}
            <section id="conservation" className="mb-10 scroll-mt-24">
              <h2 className="mb-4 flex items-center gap-2 font-bold text-[#333] sm:text-lg">
                <Shield className="h-5 w-5 text-[#156EE4]" />
                3. Données pouvant être conservées
              </h2>
              <p className="mb-3 text-sm text-[#333] sm:text-base">
                Certaines informations peuvent être conservées temporairement si la loi l&apos;exige (ex : obligations fiscales, prévention de fraude, litiges).
              </p>
              <p className="text-sm text-[#333] sm:text-base">
                Ces données ne seront plus utilisées à des fins commerciales.
              </p>
            </section>

            {/* 4. Suppression via l'app */}
            <section id="application" className="mb-10 scroll-mt-24">
              <h2 className="mb-4 flex items-center gap-2 font-bold text-[#333] sm:text-lg">
                <Smartphone className="h-5 w-5 text-[#156EE4]" />
                4. Suppression via l&apos;application
              </h2>
              <p className="text-sm text-[#333] sm:text-base">
                Si la suppression directe du compte devient disponible dans l&apos;application, cette page sera mise à jour avec les instructions.
              </p>
            </section>

            {/* 5. Contact */}
            <section id="contact" className="scroll-mt-24">
              <h2 className="mb-4 font-bold text-[#333] sm:text-lg">
                5. Contact
              </h2>
              <p className="mb-3 text-sm text-[#333] sm:text-base">
                Pour toute question concernant vos données personnelles :
              </p>
              <div className="flex flex-wrap items-center gap-2 rounded-xl border border-[#156EE4]/20 bg-[#156EE4]/5 p-4">
                <Mail className="h-5 w-5 text-[#156EE4]" />
                <a
                  href="mailto:support@immoplusci.com"
                  className="font-medium text-[#156EE4] hover:underline"
                >
                  support@immoplusci.com
                </a>
              </div>
            </section>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#156EE4] hover:underline"
            >
              ← Retour à l&apos;accueil
            </Link>
            <Link
              href="/politique-confidentialite"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#156EE4] hover:underline"
            >
              Politique de Confidentialité
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
