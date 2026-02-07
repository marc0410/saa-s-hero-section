# Immo+ — Landing page

Site vitrine et landing page pour **Immo+** (Immo Plus), application de gestion immobilière en Côte d'Ivoire. Présentation des fonctionnalités, appels à l'action et liens vers les stores (iOS / Android).

**Production** : à déployer sur [https://immoplus.ci/](https://immoplus.ci/).

## Stack technique

- **Framework** : [Next.js 16](https://nextjs.org/) (App Router)
- **UI** : [React 19](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/)
- **Composants** : [shadcn/ui](https://ui.shadcn.com/)
- **Langage** : TypeScript
- **Icônes** : [Lucide React](https://lucide.dev/)

## Démarrage

### Prérequis

- Node.js 18+
- [pnpm](https://pnpm.io/) (recommandé) ou npm / yarn

### Installation

```bash
# Cloner le repo (si besoin)
git clone <url-du-repo>
cd saa-s-hero-section

# Installer les dépendances
pnpm install
```

### Lancer en développement

```bash
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

### Build et production

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

## Structure du projet

```
saa-s-hero-section/
├── app/
│   ├── page.tsx              # Page d'accueil (sections)
│   ├── layout.tsx
│   ├── globals.css
│   ├── conditions-utilisation/   # CGU
│   ├── politique-confidentialite/ # Politique de confidentialité
│   └── suppression-donnees/      # Demande de suppression des données
├── components/
│   ├── navbar.tsx            # Barre de navigation (desktop + mobile)
│   ├── hero-section.tsx      # Hero avec CTA et mockup app
│   ├── features-section.tsx  # Fonctionnalités + boutons stores
│   ├── rent-buy-section.tsx   # Louer / Acheter
│   ├── pilotez-biens-section.tsx
│   ├── securite-section.tsx
│   ├── why-choose-section.tsx # Pourquoi nous choisir
│   ├── testimonials-section.tsx
│   ├── cta-adventure-section.tsx
│   ├── cta-download-section.tsx
│   ├── footer.tsx
│   └── ui/                   # Composants shadcn/ui
├── lib/
│   ├── app-links.ts         # URLs stores + réseaux sociaux + détection appareil
│   └── utils.ts
├── public/                  # Images et assets statiques
└── ...
```

## Contenu principal

- **Accueil** : hero avec slogan, badge « Publiez / Gerez / Encaissez », CTA « Télécharger maintenant », mockup téléphone avec vidéo.
- **Fonctionnalités** : grille 3 blocs (logement, activité immobilière, partenaire) + boutons App Store / Google Play.
- **Louer / Acheter**, **Pilotez vos biens**, **Sécurité**, **Pourquoi nous choisir**, **Témoignages**, **CTA** et **Footer**.

La navbar permet d’ancrer vers : **Accueil** (`#accueil`), **Fonctionnalités** (`#fonctionnalites`), **Pourquoi nous** (`#why-choose`).

## Liens et stores

Les liens (stores et réseaux) sont centralisés dans `lib/app-links.ts` :

- **App Store** : Immo+ Pro (iOS)
- **Google Play** : Immo+ Pro (Android)
- **Instagram** : [immoplus_lapp](https://www.instagram.com/immoplus_lapp)
- **Facebook** : page Immo Plus

Le bouton **Télécharger** (navbar et hero) redirige automatiquement vers **Google Play** sur Android et **App Store** sur iOS / autres appareils (`getDownloadUrl()`).

## Pages légales

- `/conditions-utilisation` — Conditions d’utilisation
- `/politique-confidentialite` — Politique de confidentialité
- `/suppression-donnees` — Demande de suppression des données

Accessibles depuis le footer (lien Assistance).

## Licence

Projet privé. Tous droits réservés.
