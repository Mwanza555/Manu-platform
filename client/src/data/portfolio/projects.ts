import type { Project } from "../../types/project";

export const projects: Project[] = [
  {
    id: "project-01",
    slug: "identite-visuelle",
    title: "Identité visuelle",
    category: "Branding",
    year: "2025",

    shortDescription:
      "Une identité visuelle pensée pour donner au projet une présence forte et cohérente.",

    description:
      "J'ai travaillé sur la direction visuelle de cette marque afin de construire un univers graphique cohérent, reconnaissable et adapté à son positionnement.",

    coverImage: "/portfolio/project-01.png",
    responsiveCover: {
      basePath: "/media/portfolio/project-01",
      widths: [480, 960, 1600],
      width: 1600,
      height: 1745,
    },

    gallery: [
      {
        src: "/portfolio/project-01.png",
        alt: "Projet d'identité visuelle",
      },
    ],

    client: "Nom du client",
    services: ["Direction artistique", "Identité visuelle", "Design graphique"],

    featured: true,
  },

  {
    id: "project-02",
    slug: "direction-artistique",
    title: "Direction artistique",
    category: "Direction artistique",
    year: "2025",

    shortDescription:
      "Un univers graphique construit autour d'une direction artistique forte.",

    description:
      "J'ai développé une direction artistique permettant de donner au projet une personnalité visuelle distinctive et cohérente.",

    coverImage: "/manu_complet_N.png",
    responsiveCover: {
      basePath: "/media/brand/manu-complet-n",
      widths: [320, 960, 1600],
      width: 1600,
      height: 937,
    },

    gallery: [
      {
        src: "/manu_complet_N.png",
        alt: "Projet de direction artistique",
      },
    ],

    client: "Nom du client",
    services: ["Direction artistique", "Design graphique"],

    featured: true,
  },

  {
    id: "project-03",
    slug: "design-graphique",
    title: "Design graphique",
    category: "Graphic Design",
    year: "2024",

    shortDescription:
      "Une approche graphique expressive et pensée pour renforcer l'identité du projet.",

    description:
      "J'ai conçu différents éléments graphiques en cherchant à créer un langage visuel simple, impactant et cohérent.",

    coverImage: "/manu_complet_B.png",
    responsiveCover: {
      basePath: "/media/brand/manu-complet-b",
      widths: [320, 960, 1600],
      width: 1600,
      height: 976,
    },

    gallery: [
      {
        src: "/manu_complet_B.png",
        alt: "Projet de design graphique",
      },
    ],

    client: "Nom du client",
    services: ["Design graphique", "Direction artistique"],
  },
];
