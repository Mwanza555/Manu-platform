import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

const HomeContact = () => {
  return (
    <section className="relative overflow-hidden bg-[#111111] px-3 py-20 text-white sm:px-4 sm:py-24 md:py-28">
      {/* Éléments graphiques */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 size-[420px] -translate-y-1/2 rounded-full border border-white/[0.06]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/2 size-[300px] -translate-y-1/2 rounded-full border border-white/[0.05]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-0 h-full w-px bg-white/[0.045]"
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/30" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Contact
            </span>
          </div>

          {/* Titre */}
          <h2 className="mt-7 max-w-5xl text-[clamp(3.2rem,8vw,8rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
            Construisons
            <br />
            <span className="text-white/35">la suite ensemble.</span>
          </h2>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-sm leading-7 text-white/45 md:text-base md:leading-8">
              Présentez-moi votre idée, votre contexte ou le défi que rencontre
              votre marque. Nous verrons ensemble comment lui donner une
              direction visuelle forte et cohérente.
            </p>

            <Link
              to="/contact"
              className="group flex size-36 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-center text-sm font-semibold backdrop-blur-md transition-all duration-500 hover:scale-105 hover:border-white/30 hover:bg-white hover:text-[#111111] sm:size-40"
            >
              <span className="leading-5">
                Parlons
                <br />
                de votre projet
              </span>
            </Link>
          </div>

          {/* Ligne basse */}
          <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.15em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <span>
              Design graphique · Identité visuelle · Direction artistique
            </span>

            <span>Kinshasa — RDC</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HomeContact;
