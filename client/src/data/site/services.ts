import type { Service } from "../../types";

export const services: Service[] = [
  {
    id: "identity",
    title: "Identité visuelle",
    description:
      "Création de systèmes visuels cohérents pour rendre une marque plus claire et mémorable.",
    deliverables: ["Logo", "Palette", "Typographies", "Guide d'usage"],
  },
  {
    id: "print",
    title: "Supports imprimés",
    description:
      "Conception de supports élégants pour cartes, affiches, flyers et documents commerciaux.",
    deliverables: ["Carte de visite", "Affiche", "Flyer", "Brochure"],
  },
  {
    id: "digital",
    title: "Design digital",
    description:
      "Création de visuels adaptés aux canaux numériques et aux campagnes de communication.",
    deliverables: ["Réseaux sociaux", "Bannières", "Présentations", "Assets web"],
  },
];
