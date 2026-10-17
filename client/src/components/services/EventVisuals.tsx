import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

const moments = [
  {
    number: "01",
    title: "Attirer",
    description: "Donner le ton et susciter l’envie dès la première annonce.",
  },
  {
    number: "02",
    title: "Accompagner",
    description:
      "Garder une même direction visuelle sur les différents formats de communication.",
  },
  {
    number: "03",
    title: "Marquer",
    description: "Laisser une image qui prolonge le souvenir du moment.",
  },
];

const EventVisuals = () => {
  return (
    <section
      id="visuels-evenementiels"
      className="scroll-mt-20 overflow-hidden bg-[#111111] px-3 py-20 text-white sm:px-4 sm:py-24 md:py-28"
    >
      <Container>
        <div className="flex items-center justify-between gap-6 border-b border-white/15 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/30" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
              Visuels événementiels
            </span>
          </div>
          <span className="text-[10px] font-medium tracking-[0.18em] text-white/35">
            04 — 02/03
          </span>
        </div>

        <div className="grid gap-9 pb-16 pt-11 sm:pb-20 sm:pt-14 lg:grid-cols-[1.22fr_0.78fr] lg:items-end lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Donner une présence au moment
            </p>
            <h2 className="mt-6 max-w-[850px] text-[clamp(3rem,6.3vw,6.8rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              Faire vivre
              <span className="block">l’énergie d’un</span>
              <span className="block text-white/35">événement.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="max-w-lg lg:justify-self-end lg:pb-2"
          >
            <p className="text-lg font-medium leading-7 tracking-[-0.025em] sm:text-xl sm:leading-8">
              Un événement mérite des visuels à la hauteur de ce qu’il fait
              ressentir.
            </p>
            <p className="mt-5 text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              J’en traduis l’atmosphère en une direction graphique claire, pour
              que chaque visuel — des annonces aux visuels de couverture — porte
              la même intention et donne envie d’y prendre part.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex min-h-11 items-center gap-3 border-b border-white pb-1 text-sm font-semibold transition-colors hover:text-white/60"
            >
              Parlons de votre événement
              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>

        <div className="grid border-t border-white/15 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex min-h-[290px] flex-col justify-between overflow-hidden border-b border-white/15 py-9 pr-8 sm:min-h-[360px] lg:min-h-[430px] lg:border-b-0 lg:border-r lg:py-11 lg:pr-12"
          >
            <div className="flex items-center justify-between gap-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
              <span>Un même langage</span>
              <span>Plusieurs instants</span>
            </div>
            <p className="max-w-[750px] text-[clamp(3.7rem,8.5vw,9.5rem)] font-semibold uppercase leading-[0.79] tracking-[-0.085em]">
              Le moment
              <span className="block text-white/20">devient</span>
              visible.
            </p>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/30">
              Une impression qui reste
            </span>
          </motion.div>

          <div className="lg:pl-10 xl:pl-14">
            {moments.map((moment, index) => (
              <motion.div
                key={moment.number}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                className="grid grid-cols-[36px_1fr] gap-4 border-b border-white/15 py-7 sm:grid-cols-[48px_1fr] sm:py-9"
              >
                <span className="pt-1 text-[10px] font-semibold tracking-[0.18em] text-white/30">
                  {moment.number}
                </span>
                <div>
                  <h3 className="text-[clamp(1.75rem,3vw,3rem)] font-medium leading-none tracking-[-0.055em]">
                    {moment.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-white/48">
                    {moment.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventVisuals;
