import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { Project } from "../../types/project";
import Container from "../ui/Container";
import ResponsiveImage from "../ui/ResponsiveImage";

type PortfolioGalleryProps = {
  projects: Project[];
};

const PortfolioGallery = ({ projects }: PortfolioGalleryProps) => {
  const reduceMotion = useReducedMotion();
  const hasDemo = projects.some((project) => project.demo);

  return (
    <section
      id="selection"
      className="scroll-mt-20 overflow-hidden bg-[#f4f3ef] px-3 py-20 text-[#111111] sm:px-4 sm:py-24 md:py-28"
    >
      <Container>
        <div className="flex items-center justify-between gap-6 border-b border-[#111111]/15 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#111111]/30" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/45">
              La sélection
            </span>
          </div>
          <span className="text-[10px] font-medium tracking-[0.18em] text-[#111111]/35">
            {String(projects.length).padStart(2, "0")} projets
          </span>
        </div>

        <div className="grid gap-7 pb-14 pt-11 sm:pb-20 sm:pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
          <h2 className="max-w-[800px] text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
            Des formes qui
            <span className="block text-[#111111]/32">racontent.</span>
          </h2>
          <p className="max-w-lg text-sm leading-7 text-[#111111]/58 sm:text-base sm:leading-8 lg:justify-self-end lg:pb-2">
            {hasDemo
              ? "Les études fictives sont identifiées sur leurs images. Leurs visuels et leurs récits seront remplacés par les créations réelles de Manu."
              : "Une sélection de projets pour découvrir comment chaque intention trouve sa propre expression visuelle."}
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-12 md:gap-y-24">
          {projects.map((project, index) => {
            const placement =
              index === 0
                ? "md:col-span-12"
                : index % 2 === 1
                  ? "md:col-span-5 md:mt-4"
                  : "md:col-span-7 md:mt-20";

            return (
              <motion.article
                key={project.id}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  ease: "easeOut",
                }}
                className={placement}
              >
                <Link to={`/portfolio/${project.slug}`} className="group block">
                  <div className="relative aspect-[3/2] overflow-hidden bg-[#deddda]">
                    <ResponsiveImage
                      basePath={project.responsiveCover.basePath}
                      widths={project.responsiveCover.widths}
                      sizes={
                        index === 0
                          ? "(min-width: 1280px) 1216px, 100vw"
                          : index % 2 === 1
                            ? "(min-width: 768px) 42vw, 100vw"
                            : "(min-width: 768px) 58vw, 100vw"
                      }
                      width={project.responsiveCover.width}
                      height={project.responsiveCover.height}
                      alt={project.gallery[0]?.alt ?? project.title}
                      loading="lazy"
                      pictureClassName="block h-full w-full"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
                    />
                    {project.demo && (
                      <span className="absolute left-4 top-4 bg-[#111111]/80 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:left-5 sm:top-5">
                        Étude fictive
                      </span>
                    )}
                    <span className="absolute bottom-4 right-4 flex size-10 items-center justify-center rounded-full bg-white text-[#111111] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:bottom-5 sm:right-5">
                      <ArrowUpRight size={18} strokeWidth={1.8} />
                    </span>
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-5 border-t border-[#111111]/15 pt-4">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#111111]/40">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {project.category}
                      </span>
                      <h3 className="mt-3 text-[clamp(1.9rem,3.3vw,3.6rem)] font-medium leading-[0.95] tracking-[-0.055em]">
                        {project.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-[#111111]/56">
                        {project.shortDescription}
                      </p>
                    </div>
                    <span className="hidden shrink-0 pt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#111111]/35 sm:block">
                      Découvrir
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default PortfolioGallery;
