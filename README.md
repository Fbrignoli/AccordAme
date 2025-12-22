# Accord'Âme - École de Musique à Lyon

Ce projet est le site web vitrine pour l'école de musique Accord'Âme, proposant des cours de violon et d'alto à Lyon, basés sur la pédagogie Suzuki.

## Stack Technique

Le site utilise une stack moderne, propre et sécurisée, sans dépendances superflues :

- **Framework** : [Next.js 15+](https://nextjs.org/) (App Router)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styles** : [Tailwind CSS](https://tailwindcss.com/)
- **Composants UI** : [Shadcn UI](https://ui.shadcn.com/) (basé sur Radix UI)
- **Animations** : Lucide React (icônes) et transitions CSS personnalisées.

## Migration et Sécurité

Le projet a été nettoyé pour retirer l'ensemble de la stack Firebase/Genkit initiale. Cela permet de :
- Réduire la surface d'attaque et les vulnérabilités potentielles liées aux SDK tiers.
- Alléger le poids du bundle final.
- Faciliter le déploiement sur n'importe quel hébergeur Node.js (Vercel, Netlify, VPS, etc.).
- Utiliser les dernières versions stables de React (v19) et Next.js (v15).

## Structure du Projet

- `src/app/` : Routes et pages Next.js.
- `src/components/landing/` : Sections de la page d'accueil (one-page).
- `src/components/ui/` : Composants UI réutilisables (boutons, carrousels, etc.).
- `src/lib/` : Utilitaires et données statiques.
- `public/img/` : Assets images du site.

## Développement

Pour lancer le serveur de développement :

```bash
npm run dev
```

Pour construire le projet pour la production :

```bash
npm run build
```

## Licence

Tous droits réservés - Accord'Âme.
