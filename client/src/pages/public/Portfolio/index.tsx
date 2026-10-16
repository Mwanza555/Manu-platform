import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { projects } from "../../../data";
import Container from "../../../components/ui/Container";
import ResponsiveImage from "../../../components/ui/ResponsiveImage";

const Portfolio = () => {
  return (
    <main className="overflow-hidden bg-[#f4f3ef] text-[#111111]">
      {/* ─────────────────────────────
          INTRODUCTION
      ───────────────────────────── */}
      <section className="relative px-4 pb-14 pt-28 sm:px-6 md:pb-16 md:pt-32 lg:px-8">
        {/* Élément graphique */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-8%] top-20 h-64 w-64 rounded-full border border-[#111111]/[0.06]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[2%] top-32 h-40 w-40 rounded-full border border-[#111111]/[0.04]"
        />

        <Container>
          <div className="relative max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#111111]/40" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#111111]/45">
                  Portfolio
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-[clamp(3.5rem,9vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
                Je donne forme
                <br />
                <span className="text-[#111111]/35">aux idées.</span>
              </h1>

              <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <p className="max-w-lg text-sm leading-7 text-[#111111]/55 md:text-base md:leading-8">
                  Une sélection de projets sur lesquels j'ai mis ma vision, ma
                  créativité et mon approche du design au service de différentes
                  marques.
                </p>

                <span className="hidden text-[10px] uppercase tracking-[0.18em] text-[#111111]/30 md:block">
                  {String(projects.length).padStart(2, "0")} réalisations
                </span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────
          GALERIE
      ───────────────────────────── */}
      <section className="px-4 pb-24 sm:px-6 md:pb-32 lg:px-8">
        <Container>
          <div className="grid gap-x-6 gap-y-14 md:grid-cols-12 md:gap-y-24">
            {projects.map((project, index) => {
              const isLarge = index % 3 === 0;

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.65,
                    ease: "easeOut",
                  }}
                  className={
                    isLarge ? "md:col-span-7" : "md:col-span-5 md:mt-20"
                  }
                >
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="group block"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#deddda]">
                      <ResponsiveImage
                        basePath={project.responsiveCover.basePath}
                        widths={project.responsiveCover.widths}
                        sizes={
                          isLarge
                            ? "(min-width: 1280px) 700px, (min-width: 768px) 58vw, calc(100vw - 32px)"
                            : "(min-width: 1280px) 500px, (min-width: 768px) 42vw, calc(100vw - 32px)"
                        }
                        alt={project.title}
                        width={project.responsiveCover.width}
                        height={project.responsiveCover.height}
                        loading="lazy"
                        pictureClassName="block h-full w-full"
                        className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-[#111111]/0 transition-colors duration-500 group-hover:bg-[#111111]/[0.08]" />

                      {/* Numéro */}
                      <span className="absolute left-5 top-5 text-[10px] font-semibold tracking-[0.18em] text-white opacity-70 drop-shadow-md">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Bouton */}
                      <span className="absolute bottom-5 right-5 flex size-11 translate-y-3 items-center justify-center rounded-full bg-white text-[#111111] opacity-0 shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="text-lg">↗</span>
                      </span>
                    </div>

                    {/* Informations */}
                    <div className="mt-4 flex items-start justify-between gap-5">
                      <div>
                        <h2 className="text-xl font-medium tracking-[-0.04em] md:text-2xl">
                          {project.title}
                        </h2>

                        <p className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.17em] text-[#111111]/40">
                          {project.category}
                        </p>
                      </div>

                      <span className="pt-1 text-xs text-[#111111]/35">
                        {project.year}
                      </span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────
          FIN DE PAGE
      ───────────────────────────── */}
      <section className="border-t border-[#111111]/10 px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/35">
                Une idée ?
              </p>

              <h2 className="mt-4 max-w-2xl text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
                Et si on créait
                <br />
                quelque chose ensemble ?
              </h2>
            </div>

            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-4 border-b border-[#111111]/20 pb-2 text-sm font-semibold"
            >
              Parlons de votre projet
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Portfolio;
