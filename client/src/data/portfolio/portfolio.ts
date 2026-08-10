import type { PortfolioItem } from "../../types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "brand-system",
    title: "Système de marque minimal",
    slug: "systeme-de-marque-minimal",
    category: "Identité visuelle",
    description:
      "Exploration temporaire pour une identité sobre, élégante et facilement déclinable.",
    image: "/manu_complet_N.png",
    tools: ["Illustrator", "Photoshop", "InDesign"],
    isPublished: true,
  },
  {
    id: "editorial-poster",
    title: "Affiche éditoriale",
    slug: "affiche-editoriale",
    category: "Print",
    description:
      "Composition typographique pensée pour une communication claire et premium.",
    image: "/manu_sans_titre_N.png",
    tools: ["Illustrator", "Photoshop"],
    isPublished: true,
  },
];
