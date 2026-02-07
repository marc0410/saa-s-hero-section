"use client"

import Link from "next/link"
import { Shield, Mail } from "lucide-react"

const SECTIONS = [
  { id: "donnees", title: "1. Données que nous collectons" },
  { id: "utilisation", title: "2. Utilisation des données" },
  { id: "partage", title: "3. Partage des données" },
  { id: "stockage", title: "4. Stockage et sécurité" },
  { id: "duree", title: "5. Durée de conservation" },
  { id: "droits", title: "6. Vos droits" },
  { id: "cookies", title: "7. Cookies et technologies similaires" },
  { id: "modifications", title: "8. Modifications de la politique" },
  { id: "contact", title: "9. Contact" },
]

export default function PolitiqueConfidentialitePage() {
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
              Politique de Confidentialité – ImmoPlus
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
              ImmoPlus attache une grande importance à la protection des données personnelles de ses utilisateurs. Cette politique explique quelles informations nous collectons, comment nous les utilisons et quels sont vos droits.
            </p>

            {/* 1. Données collectées */}
            <section id="donnees" className="mb-10 scroll-mt-24">
              <h2 className="mb-4 flex items-center gap-2 font-bold text-[#333] sm:text-lg">
                <Shield className="h-5 w-5 text-[#156EE4]" />
                1. Données que nous collectons
              </h2>
              <p className="mb-4 text-sm text-[#333] sm:text-base">
                Lorsque vous utilisez ImmoPlus, nous pouvons collecter :
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-[#333]">Données fournies directement</h3>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-[#333] sm:text-base">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Informations liées aux biens immobiliers publiés</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-[#333]">Données collectées automatiquement</h3>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-[#333] sm:text-base">
                    <li>Adresse IP</li>
                    <li>Type d&apos;appareil et système d&apos;exploitation</li>
                    <li>Données de navigation dans l&apos;application</li>
                    <li>Localisation approximative (si autorisée)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2. Utilisation */}
            <section id="utilisation" className="mb-10 scroll-mt-24">
              <h2 className="mb-4 font-bold text-[#333] sm:text-lg">
                2. Utilisation des données
              </h2>
              <p className="mb-3 text-sm text-[#333] sm:text-base">
                Nous utilisons vos informations pour :
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-[#333] sm:text-base">
                <li>Créer et gérer votre compte</li>
                <li>Publier et afficher des annonces immobilières</li>
                <li>Vous mettre en relation avec d&apos;autres utilisateurs</li>
                <li>Améliorer l&apos;application et l&apos;expérience utilisateur</li>
                <li>Assurer la sécurité et prévenir les fraudes</li>
                <li>Envoyer des notifications importantes liées au service</li>
              </ul>
            </section>

            {/* 3. Partage */}
            <section id="partage" className="mb-10 scroll-mt-24">
              <h2 className="mb-4 font-bold text-[#333] sm:text-lg">
                3. Partage des données
              </h2>
              <p className="mb-3 text-sm text-[#333] sm:text-base">
                Nous ne vendons pas vos données personnelles.
              </p>
              <p className="mb-3 text-sm text-[#333] sm:text-base">
                Vos informations peuvent être partagées uniquement avec :
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-[#333] sm:text-base">
                <li>Nos prestataires techniques (hébergement, base de données, analytics)</li>
                <li>Les autorités légales si la loi l&apos;exige</li>
              </ul>
              <p className="mt-3 text-sm text-[#333] sm:text-base">
                Tous nos partenaires sont tenus de protéger vos données.
              </p>
            </section>

            {/* 4. Stockage */}
            <section id="stockage" className="mb-10 scroll-mt-24">
              <h2 className="mb-4 font-bold text-[#333] sm:text-lg">
                4. Stockage et sécurité
              </h2>
              <ul className="list-disc space-y-1 pl-5 text-sm text-[#333] sm:text-base">
                <li>Vos données sont stockées sur des serveurs sécurisés.</li>
                <li>Nous mettons en place des mesures techniques et organisationnelles pour empêcher tout accès non autorisé, perte ou divulgation.</li>
              </ul>
            </section>

            {/* 5. Durée */}
            <section id="duree" className="mb-10 scroll-mt-24">
              <h2 className="mb-4 font-bold text-[#333] sm:text-lg">
                5. Durée de conservation
              </h2>
              <ul className="list-disc space-y-1 pl-5 text-sm text-[#333] sm:text-base">
                <li>Nous conservons vos données aussi longtemps que votre compte est actif.</li>
                <li>Vous pouvez demander la suppression de votre compte à tout moment.</li>
              </ul>
            </section>

            {/* 6. Vos droits */}
            <section id="droits" className="mb-10 scroll-mt-24">
              <h2 className="mb-4 font-bold text-[#333] sm:text-lg">
                6. Vos droits
              </h2>
              <p className="mb-3 text-sm text-[#333] sm:text-base">
                Conformément aux lois sur la protection des données, vous avez le droit de :
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-[#333] sm:text-base">
                <li>Accéder à vos données</li>
                <li>Corriger vos informations</li>
                <li>Demander la suppression de vos données</li>
                <li>Vous opposer à certains traitements</li>
              </ul>
              <p className="mt-4 text-sm text-[#333] sm:text-base">
                Pour exercer ces droits, contactez-nous à :{" "}
                <a
                  href="mailto:contact@immoplusci.com"
                  className="font-medium text-[#156EE4] hover:underline"
                >
                  contact@immoplusci.com
                </a>
              </p>
            </section>

            {/* 7. Cookies */}
            <section id="cookies" className="mb-10 scroll-mt-24">
              <h2 className="mb-4 font-bold text-[#333] sm:text-lg">
                7. Cookies et technologies similaires
              </h2>
              <p className="mb-3 text-sm text-[#333] sm:text-base">
                ImmoPlus peut utiliser des cookies ou technologies similaires pour :
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-[#333] sm:text-base">
                <li>Mémoriser vos préférences</li>
                <li>Analyser l&apos;usage de l&apos;application</li>
                <li>Améliorer les performances</li>
              </ul>
              <p className="mt-3 text-sm text-[#333] sm:text-base">
                Vous pouvez gérer ces paramètres depuis votre appareil ou navigateur.
              </p>
            </section>

            {/* 8. Modifications */}
            <section id="modifications" className="mb-10 scroll-mt-24">
              <h2 className="mb-4 font-bold text-[#333] sm:text-lg">
                8. Modifications de la politique
              </h2>
              <p className="text-sm text-[#333] sm:text-base">
                Nous pouvons mettre à jour cette politique. En cas de changement important, vous serez informé via l&apos;application ou par email.
              </p>
            </section>

            {/* 9. Contact */}
            <section id="contact" className="scroll-mt-24">
              <h2 className="mb-4 font-bold text-[#333] sm:text-lg">
                9. Contact
              </h2>
              <p className="mb-3 text-sm text-[#333] sm:text-base">
                Pour toute question concernant cette politique :
              </p>
              <div className="flex flex-wrap items-center gap-2 rounded-xl border border-[#156EE4]/20 bg-[#156EE4]/5 p-4">
                <Mail className="h-5 w-5 text-[#156EE4]" />
                <span className="font-semibold text-[#333]">ImmoPlus</span>
                <span className="text-gray-500">–</span>
                <a
                  href="mailto:contact@immoplusci.com"
                  className="font-medium text-[#156EE4] hover:underline"
                >
                  contact@immoplusci.com
                </a>
              </div>
            </section>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#156EE4] hover:underline"
            >
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
