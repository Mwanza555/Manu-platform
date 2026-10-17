import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";
import ResponsiveImage from "../ui/ResponsiveImage";

type GalleryItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  image: {
    basePath: string;
    widths: number[];
    width: number;
    height: number;
  };
};

const galleryItems: GalleryItem[] = [
  {
    id: "01",
    title: "Identité visuelle",
    subtitle: "Aperçu temporaire — Identité visuelle",
    description:
      "Une identité pensée pour donner au projet une présence claire, forte et cohérente.",
    href: "/portfolio/identite-visuelle",
    image: {
      basePath: "/media/portfolio/project-01",
      widths: [480, 960, 1600],
      width: 1600,
      height: 1745,
    },
  },
  {
    id: "02",
    title: "Univers de marque",
    subtitle: "Aperçu temporaire — Exploration visuelle",
    description:
      "Un langage visuel capable de rendre la marque reconnaissable et mémorable.",
    href: "/portfolio",
    image: {
      basePath: "/media/services/identite-visuelle",
      widths: [480, 768, 1200],
      width: 1200,
      height: 1800,
    },
  },
  {
    id: "03",
    title: "Composition graphique",
    subtitle: "Aperçu temporaire — Design graphique",
    description:
      "Des compositions conçues pour hiérarchiser le message et attirer l’attention.",
    href: "/portfolio",
    image: {
      basePath: "/media/services/design-graphique",
      widths: [480, 768, 1200],
      width: 1200,
      height: 1800,
    },
  },
  {
    id: "04",
    title: "Communication visuelle",
    subtitle: "Aperçu temporaire — Communication visuelle",
    description:
      "Une communication cohérente, du support numérique aux formats imprimés.",
    href: "/portfolio",
    image: {
      basePath: "/media/services/communication",
      widths: [480, 768, 1200],
      width: 1200,
      height: 1801,
    },
  },
  {
    id: "05",
    title: "Direction créative",
    subtitle: "Aperçu temporaire — Direction créative",
    description:
      "Une direction visuelle commune pour donner du caractère à chaque point de contact.",
    href: "/portfolio",
    image: {
      basePath: "/media/services/direction-artistique",
      widths: [480, 768, 1200],
      width: 1200,
      height: 1800,
    },
  },
];

const cardPositions: Record<number, string> = {
  [-2]: "left-[-20%] top-[92px] h-[250px] w-[58%] opacity-0 md:left-[-12%] md:top-[min(118px,12svh)] md:h-[min(260px,32svh)] md:w-[min(28%,22svh)] lg:left-[calc(50%-min(43%,61svh))] lg:top-[min(136px,14svh)] lg:h-[min(250px,31svh)] lg:w-[min(15%,22svh)] lg:opacity-55",
  [-1]: "left-[-19%] top-[58px] h-[310px] w-[62%] opacity-55 md:left-[18%] md:top-[min(68px,7svh)] md:h-[min(370px,45svh)] md:w-[min(31%,34svh)] md:opacity-75 lg:left-[calc(50%-min(25%,36svh))] lg:h-[min(370px,44svh)] lg:w-[min(24%,34svh)]",
  0: "left-1/2 top-0 h-[410px] w-[82%] opacity-100 md:h-[min(480px,57svh)] md:w-[min(46%,50svh)] lg:h-[min(500px,57svh)] lg:w-[min(34%,49svh)]",
  1: "left-[119%] top-[58px] h-[310px] w-[62%] opacity-55 md:left-[82%] md:top-[min(68px,7svh)] md:h-[min(370px,45svh)] md:w-[min(31%,34svh)] md:opacity-75 lg:left-[calc(50%+min(25%,36svh))] lg:h-[min(370px,44svh)] lg:w-[min(24%,34svh)]",
  2: "left-[120%] top-[92px] h-[250px] w-[58%] opacity-0 md:left-[112%] md:top-[min(118px,12svh)] md:h-[min(260px,32svh)] md:w-[min(28%,22svh)] lg:left-[calc(50%+min(43%,61svh))] lg:top-[min(136px,14svh)] lg:h-[min(250px,31svh)] lg:w-[min(15%,22svh)] lg:opacity-55",
};

const getRelativePosition = (index: number, activeIndex: number) => {
  let position =
    (index - activeIndex + galleryItems.length) % galleryItems.length;

  if (position > Math.floor(galleryItems.length / 2)) {
    position -= galleryItems.length;
  }

  return position;
};

const HomePortfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const activeItem = galleryItems[activeIndex];

  const previousItem = () => {
    setActiveIndex((current) =>
      current === 0 ? galleryItems.length - 1 : current - 1,
    );
  };

  const nextItem = () => {
    setActiveIndex((current) =>
      current === galleryItems.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="portfolio"
      className="scroll-mt-24 overflow-hidden bg-[#f4f3f0] py-16 text-[#111111] sm:py-20 md:py-24"
    >
      <Container>
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#111111]/30" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/45">
              Portfolio
            </span>
          </div>

          <span className="text-[10px] font-medium tracking-[0.16em] text-[#111111]/35">
            {activeItem.id} / {String(galleryItems.length).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-7 min-h-[148px] sm:min-h-[164px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                ease: "easeOut",
              }}
              className="text-center"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/40">
                {activeItem.subtitle}
              </p>
              <h2 className="mx-auto mt-3 max-w-4xl text-[clamp(2.6rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
                {activeItem.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#111111]/48 sm:text-[15px]">
                {activeItem.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>

      <motion.div
        role="region"
        aria-label="Galerie de projets sélectionnés"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") previousItem();
          if (event.key === "ArrowRight") nextItem();
        }}
        drag={reduceMotion ? false : "x"}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.12}
        onPointerDown={(event) => {
          pointerStartX.current = event.clientX;
        }}
        onPointerUp={(event) => {
          if (pointerStartX.current === null) return;

          const distance = event.clientX - pointerStartX.current;
          pointerStartX.current = null;

          if (distance > 45) previousItem();
          if (distance < -45) nextItem();
        }}
        onPointerCancel={() => {
          pointerStartX.current = null;
        }}
        className="relative mx-auto mt-6 h-[430px] w-full max-w-[1500px] touch-pan-y outline-none sm:h-[450px] md:mt-8 md:h-[min(500px,57svh)] lg:h-[min(500px,57svh)]"
      >
        {galleryItems.map((item, index) => {
          const position = getRelativePosition(index, activeIndex);
          const isActive = position === 0;

          return (
            <motion.article
              key={item.id}
              layout={!reduceMotion}
              aria-hidden={!isActive}
              className={`absolute -translate-x-1/2 overflow-hidden rounded-[24px] bg-[#deddda] shadow-[0_24px_70px_rgba(17,17,17,0.12)] transition-all ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${cardPositions[position]} ${
                isActive
                  ? "z-30 duration-700"
                  : Math.abs(position) === 1
                    ? "z-20 cursor-pointer duration-700"
                    : "z-10 cursor-pointer duration-700"
              }`}
            >
              {isActive ? (
                <Link
                  to={item.href}
                  aria-label={`Voir le projet ${item.title}`}
                  className="group block h-full w-full"
                >
                  <GalleryImage item={item} active />
                </Link>
              ) : (
                <button
                  type="button"
                  tabIndex={-1}
                  aria-label={`Afficher ${item.title}`}
                  onClick={() => setActiveIndex(index)}
                  className="group block h-full w-full"
                >
                  <GalleryImage item={item} />
                </button>
              )}
            </motion.article>
          );
        })}
      </motion.div>

      <Container>
        <div className="mt-4 flex flex-col items-center justify-between gap-7 border-t border-[#111111]/10 pt-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previousItem}
              aria-label="Projet précédent"
              className="flex size-12 items-center justify-center rounded-full border border-[#111111]/15 text-[#111111]/65 transition-all duration-300 hover:border-[#111111] hover:bg-[#111111] hover:text-white"
            >
              <ArrowLeft size={18} strokeWidth={1.6} />
            </button>
            <button
              type="button"
              onClick={nextItem}
              aria-label="Projet suivant"
              className="flex size-12 items-center justify-center rounded-full border border-[#111111]/15 text-[#111111]/65 transition-all duration-300 hover:border-[#111111] hover:bg-[#111111] hover:text-white"
            >
              <ArrowRight size={18} strokeWidth={1.6} />
            </button>
          </div>

          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 text-sm font-semibold"
          >
            <span className="border-b border-[#111111]/25 pb-1 transition-colors group-hover:border-[#111111]">
              Voir tout le portfolio
            </span>
            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
};

const GalleryImage = ({
  item,
  active = false,
}: {
  item: GalleryItem;
  active?: boolean;
}) => (
  <>
    <ResponsiveImage
      basePath={item.image.basePath}
      widths={item.image.widths}
      sizes="(min-width: 1024px) 34vw, (min-width: 768px) 46vw, 82vw"
      alt={active ? item.title : ""}
      width={item.image.width}
      height={item.image.height}
      loading="lazy"
      draggable={false}
      pictureClassName="block h-full w-full"
      className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
        active ? "group-hover:scale-[1.025]" : "scale-105 grayscale-[20%]"
      }`}
    />

    <div
      className={`absolute inset-0 transition-colors duration-700 ${
        active
          ? "bg-gradient-to-t from-black/45 via-transparent to-black/[0.04]"
          : "bg-[#111111]/20 group-hover:bg-[#111111]/10"
      }`}
    />

    {active && (
      <>
        <span className="absolute left-5 top-5 text-[10px] font-semibold tracking-[0.2em] text-white/75 drop-shadow-sm">
          {item.id}
        </span>
        <span className="absolute bottom-5 right-5 flex size-11 items-center justify-center rounded-full bg-white/92 text-[#111111] shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
          <ArrowUpRight size={18} strokeWidth={1.7} />
        </span>
      </>
    )}
  </>
);

export default HomePortfolio;
