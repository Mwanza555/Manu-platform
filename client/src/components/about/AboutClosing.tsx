import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

const AboutClosing = () => {
  return (
    <section
      id="suite"
      className="relative flex min-h-[min(760px,100svh)] overflow-hidden bg-[#111111] px-3 py-20 text-white sm:px-4 sm:py-24 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 size-[min(75vw,780px)] -translate-y-1/2 rounded-full border border-white/[0.055]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-1/2 size-[min(50vw,520px)] -translate-y-1/2 rounded-full border border-white/[0.045]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-0 h-full w-px bg-white/[0.045]"
      />

      <Container className="relative z-10 flex flex-col justify-between">
        <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/25" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              La suite
            </span>
          </div>

          <span className="text-[10px] font-medium tracking-[0.18em] text-white/25">
            07
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="py-14 md:py-20"
        >
          <p className="text-xs font-medium leading-6 text-white/45 md:text-sm">
            Vous connaissez maintenant mon approche.
          </p>

          <h2 className="mt-6 max-w-6xl text-[clamp(3rem,7.3vw,8rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
            Donnons une direction
            <span className="block text-white/35">à votre idée.</span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/50 md:text-base md:leading-8">
            Parlez-moi de votre projet, de son contexte et de ce qu’il doit
            accomplir. Nous verrons ensemble comment lui donner une présence
            visuelle juste et forte.
          </p>

          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-[#111111] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Parler de votre projet
              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              to="/portfolio"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/20 px-6 text-sm font-medium text-white/75 transition-colors duration-300 hover:border-white/40 hover:bg-white/[0.06] hover:text-white"
            >
              Découvrir les projets
              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-[10px] font-medium uppercase tracking-[0.17em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <span>Manu · Designer graphique</span>
          <span>Kinshasa — RDC · Collaboration à distance</span>
        </div>
      </Container>
    </section>
  );
};

export default AboutClosing;
