import type { HomeHeroContent } from "../../types";

export const homeHero: HomeHeroContent = {
  label: "Studio créatif indépendant",
  discipline: "Design graphique & direction artistique",
  title: "Donner vie à vos idées.",
  accentWord: "idées",
  description:
    "Designer graphique passionné, Manu aide les marques à raconter leur histoire à travers des identités visuelles fortes et des expériences mémorables.",
  primaryCta: {
    label: "Voir mon portfolio →",
    href: "/portfolio",
  },
  secondaryCta: {
    label: "Parler de mon projet",
    href: "/contact",
  },
  visual: {
    image: "/manu_sans_ecrit.png",
    alt: "Placeholder graphique de Manu",
    label: "Portrait temporaire",
  },
  recentWorks: [
    {
      id: "brand-system",
      title: "Système de marque minimal",
      category: "Identité visuelle",
      image: "/manu_complet_N.png",
      href: "/portfolio/systeme-de-marque-minimal",
      theme: "light",
    },
    {
      id: "editorial-poster",
      title: "Affiche éditoriale",
      category: "Print",
      image: "/manu_sans_titre_N.png",
      href: "/portfolio/affiche-editoriale",
      theme: "light",
    },
    {
      id: "brand-mark-light",
      title: "Signature visuelle",
      category: "Branding",
      image: "/manu_complet_B.png",
      href: "/portfolio/signature-visuelle",
      theme: "dark",
    },
    {
      id: "symbol-system",
      title: "Système de symbole",
      category: "Logo design",
      image: "/manu_sans_titre_B.png",
      href: "/portfolio/systeme-de-symbole",
      theme: "dark",
    },
  ],
  stats: [
    { label: "Clients accompagnés", value: "50+", isPlaceholder: true },
    { label: "Projets réalisés", value: "120+", isPlaceholder: true },
    { label: "Années d'expérience", value: "5+", isPlaceholder: true },
    { label: "Univers explorés", value: "15+", isPlaceholder: true },
  ],
};
