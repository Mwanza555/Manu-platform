import type { Project } from "../../types/project";

// Études temporaires : remplacer les visuels et les textes par les projets
// documentés de Manu dès qu'ils seront disponibles.
export const projects: Project[] = [
  {
    id: "demo-identite",
    slug: "identite-visuelle",
    title: "Système d’identité",
    category: "Identité visuelle",
    shortDescription:
      "Une étude graphique autour d’un langage visuel simple, expressif et reconnaissable.",
    description:
      "Étude fictive créée pour prévisualiser la présentation d’un projet d’identité visuelle. Les images, le contexte et les choix de design seront remplacés par une réalisation documentée de Manu.",
    coverImage: "/media/portfolio/demo-identite-1536.webp",
    responsiveCover: {
      basePath: "/media/portfolio/demo-identite",
      widths: [480, 960, 1536],
      width: 1536,
      height: 1024,
    },
    gallery: [
      {
        src: "/media/portfolio/demo-identite-1536.webp",
        alt: "Étude fictive d’un système d’identité graphique noir, ivoire et bleu",
        caption: "Visuel de démonstration — à remplacer par le projet réel.",
      },
    ],
    services: ["Identité visuelle"],
    featured: true,
    demo: true,
  },
  {
    id: "demo-evenement",
    slug: "visuels-evenementiels",
    title: "Un temps fort, une image",
    category: "Visuels événementiels",
    shortDescription:
      "Une étude d’affiche où formes, contraste et rythme donnent le ton d’un événement imaginaire.",
    description:
      "Étude fictive créée pour prévisualiser la présentation de visuels événementiels. Aucun événement réel n’est représenté ; le projet de Manu prendra sa place dès réception des éléments.",
    coverImage: "/media/portfolio/demo-evenement-1536.webp",
    responsiveCover: {
      basePath: "/media/portfolio/demo-evenement",
      widths: [480, 960, 1536],
      width: 1536,
      height: 1024,
    },
    gallery: [
      {
        src: "/media/portfolio/demo-evenement-1536.webp",
        alt: "Affiche événementielle fictive aux formes orange et bordeaux",
        caption: "Visuel de démonstration — à remplacer par le projet réel.",
      },
    ],
    services: ["Visuels événementiels"],
    demo: true,
  },
  {
    id: "demo-contenu",
    slug: "creation-contenu",
    title: "Présence éditoriale",
    category: "Création de contenu",
    shortDescription:
      "Une étude de contenus visuels cohérents, capables de varier sans perdre leur signature.",
    description:
      "Étude fictive créée pour prévisualiser la présentation d’une série de contenus visuels. Les créations de Manu et leur contexte réel remplaceront cet exemple temporaire.",
    coverImage: "/media/portfolio/demo-contenu-1536.webp",
    responsiveCover: {
      basePath: "/media/portfolio/demo-contenu",
      widths: [480, 960, 1536],
      width: 1536,
      height: 1024,
    },
    gallery: [
      {
        src: "/media/portfolio/demo-contenu-1536.webp",
        alt: "Série fictive de compositions éditoriales vert foncé, ivoire et lavande",
        caption: "Visuel de démonstration — à remplacer par le projet réel.",
      },
    ],
    services: ["Création de contenu"],
    demo: true,
  },
];
