import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

const services = [
  {
    number: "01",
    title: "Identité visuelle",
    description:
      "Je construis des identités visuelles fortes et cohérentes qui permettent à une marque d'être reconnue et mémorisée.",
    image: "/services/identite-visuelle.jpg",
  },
  {
    number: "02",
    title: "Design graphique",
    description:
      "Je transforme les idées en compositions graphiques fortes, pensées pour attirer l'attention et transmettre un message.",
    image: "/services/design-graphique.jpg",
  },
  {
    number: "03",
    title: "Supports de communication",
    description:
      "Je conçois des supports adaptés aux besoins de chaque marque, du digital à l'impression.",
    image: "/services/communication.jpg",
  },
  {
    number: "04",
    title: "Direction artistique",
    description:
      "Je donne une direction visuelle cohérente aux projets afin que chaque élément participe à la même histoire.",
    image: "/services/direction-artistique.jpg",
  },
];

const HomeServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentService = services[activeIndex];

  const previousService = () => {
    setActiveIndex((current) =>
      current === 0 ? services.length - 1 : current - 1,
    );
  };

  const nextService = () => {
    setActiveIndex((current) =>
      current === services.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="overflow-hidden bg-[#111111] px-3 py-14 text-white sm:px-4 sm:py-16 md:py-20">
      <Container>
        {/* En-tête */}
        <div className="mb-7 flex flex-col justify-between gap-5 md:mb-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/30" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Services
              </span>
            </div>

            <h2 className="mt-4 max-w-2xl text-[clamp(2.7rem,5.5vw,5.5rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              Je donne
              <br />
              <span className="text-white/35">forme aux idées.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/45 md:text-right">
            Des identités visuelles aux supports de communication, je crée des
            univers graphiques pensés pour donner du caractère aux marques.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Ligne décorative */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-1/2 hidden h-px w-full bg-white/[0.07] md:block"
          />

          <div className="relative mx-auto flex min-h-[370px] max-w-[1050px] items-center justify-center sm:min-h-[390px]">
            {/* Carte précédente */}
            <motion.div
              key={`previous-${activeIndex}`}
              initial={{ opacity: 0, x: -60, scale: 0.8 }}
              animate={{ opacity: 0.16, x: -285, scale: 0.7 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="absolute hidden h-[300px] w-[215px] overflow-hidden rounded-[22px] border border-white/10 md:block"
            >
              <img
                src={
                  services[
                    activeIndex === 0
                      ? services.length - 1
                      : activeIndex - 1
                  ].image
                }
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
            </motion.div>

            {/* Carte principale */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.number}
                initial={{
                  opacity: 0,
                  scale: 0.88,
                  rotate: -3,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.88,
                  rotate: 3,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-20 w-full max-w-[680px]"
              >
                <div className="grid overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] shadow-[0_25px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl md:grid-cols-[0.9fr_1.1fr]">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[360px]">
                    <motion.img
                      key={currentService.image}
                      initial={{ scale: 1.06 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7 }}
                      src={currentService.image}
                      alt={currentService.title}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                    <span className="absolute left-5 top-5 text-[10px] font-medium tracking-[0.2em] text-white/70">
                      {currentService.number} / 04
                    </span>
                  </div>

                  {/* Texte */}
                  <div className="flex flex-col justify-between p-6 sm:p-8 md:p-9">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                        Ce que je fais
                      </span>

                      <h3 className="mt-5 max-w-md text-[clamp(2rem,3.5vw,3.5rem)] font-medium leading-[0.9] tracking-[-0.06em]">
                        {currentService.title}
                      </h3>

                      <p className="mt-6 max-w-md text-sm leading-7 text-white/45 md:text-[15px] md:leading-7">
                        {currentService.description}
                      </p>
                    </div>

                    <Link
                      to="/contact"
                      className="group mt-7 inline-flex w-fit items-center gap-3 text-sm font-semibold"
                    >
                      <span className="border-b border-white/25 pb-1 transition-colors group-hover:border-white">
                        Parlons de votre projet
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carte suivante */}
            <motion.div
              key={`next-${activeIndex}`}
              initial={{ opacity: 0, x: 60, scale: 0.8 }}
              animate={{ opacity: 0.16, x: 285, scale: 0.7 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="absolute hidden h-[300px] w-[215px] overflow-hidden rounded-[22px] border border-white/10 md:block"
            >
              <img
                src={
                  services[
                    activeIndex === services.length - 1
                      ? 0
                      : activeIndex + 1
                  ].image
                }
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
            </motion.div>
          </div>

          {/* Contrôles */}
          <div className="relative z-30 mt-3 flex items-center justify-between border-t border-white/10 pt-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-medium tracking-[-0.04em]">
                {currentService.number}
              </span>

              <span className="text-xs text-white/25">/ 04</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousService}
                aria-label="Service précédent"
                className="flex size-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-[#111111]"
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextService}
                aria-label="Service suivant"
                className="flex size-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-[#111111]"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeServices;