import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const offerings = [
  "Identité visuelle",
  "Visuels événementiels",
  "Création de contenu",
  "Vidéo",
];

const ServicesHero = () => {
  return (
    <section className="-mt-20 min-h-[100svh] overflow-hidden bg-[#111111] text-white">
      <div className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pb-5 pt-24 sm:px-8 sm:pb-8 sm:pt-28 md:px-12 lg:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[16%] top-[10%] size-[65vw] max-h-[760px] max-w-[760px] rounded-full bg-white/[0.025] blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[8%] top-0 h-full w-px bg-white/[0.055]"
        />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-5 sm:gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/25" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Services
              </span>
            </div>

            <h1 className="mt-4 max-w-4xl text-[clamp(2.65rem,6vw,6.3rem)] font-semibold leading-[0.86] tracking-[-0.07em] sm:mt-6">
              Une vision,
              <br />
              plusieurs façons de la rendre
              <span className="block text-white/38">visible.</span>
            </h1>

            <p className="mt-4 max-w-[510px] text-xs leading-6 text-white/55 sm:mt-6 sm:text-sm sm:leading-7 md:text-base md:leading-8">
              De l’identité d’une marque à ses contenus et ses images en
              mouvement, je donne forme à ce que vous souhaitez exprimer.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-8">
              <Link
                to="/contact"
                className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-[#111111] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Parler de votre projet
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                to="/portfolio"
                className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-white/20 px-6 text-sm font-medium text-white/70 transition-colors duration-300 hover:border-white/40 hover:bg-white/[0.06] hover:text-white max-sm:min-h-8 max-sm:border-0 max-sm:px-1 max-sm:text-xs"
              >
                Voir les réalisations
                <ArrowRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
            className="relative w-full max-w-[530px] lg:ml-auto"
          >
            <div className="flex items-center justify-between gap-5 border-b border-white/15 pb-3 sm:pb-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Quatre façons de créer
              </span>
              <span className="text-[10px] font-medium tracking-[0.16em] text-white/30">
                01 — 04
              </span>
            </div>

            <ol aria-label="Services proposés" className="mt-2">
              {offerings.map((offering, index) => (
                <li
                  key={offering}
                  className={`grid grid-cols-[32px_1fr] items-center gap-2 border-b border-white/10 py-3 sm:grid-cols-[42px_1fr] sm:py-5 lg:py-6 ${index % 2 === 1 ? "lg:pl-7" : ""}`}
                >
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-white/30">
                    0{index + 1}
                  </span>
                  <span className="text-[clamp(1.35rem,2.7vw,2.8rem)] font-medium leading-tight tracking-[-0.05em] text-white/82">
                    {offering}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-4 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30 sm:mt-6">
              <span>Du signe à l’image en mouvement</span>
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-white/35"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
