import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

const foundations = [
  {
    number: "01",
    title: "Comprendre",
    description:
      "Ce qui vous distingue, ce que vous défendez et la façon dont vous voulez être perçu.",
  },
  {
    number: "02",
    title: "Donner forme",
    description:
      "Transformer cette direction en un langage visuel reconnaissable, expressif et juste.",
  },
  {
    number: "03",
    title: "Faire durer",
    description:
      "Créer des repères assez cohérents pour rester familiers sur différents supports.",
  },
];

const VisualIdentity = () => {
  return (
    <section
      id="identite-visuelle"
      className="scroll-mt-20 overflow-hidden bg-[#e9e8e3] px-3 py-20 text-[#111111] sm:px-4 sm:py-24 md:py-28"
    >
      <Container>
        <div className="flex items-center justify-between gap-6 border-b border-[#111111]/15 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#111111]/30" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/45">
              Identité visuelle
            </span>
          </div>
          <span className="text-[10px] font-medium tracking-[0.18em] text-[#111111]/35">
            03 — 01/04
          </span>
        </div>

        <div className="grid gap-10 pb-16 pt-11 sm:pb-20 sm:pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/40">
              Pour les entreprises, les organisations et les personnes
            </p>
            <h2 className="mt-6 max-w-[820px] text-[clamp(3.1rem,6.5vw,7rem)] font-semibold leading-[0.87] tracking-[-0.075em]">
              Être reconnu
              <span className="block text-[#111111]/33">avant d’être lu.</span>
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
              Une identité visuelle ne se limite pas à un logo. Elle donne un
              visage à ce que vous êtes.
            </p>
            <p className="mt-5 text-sm leading-7 text-[#111111]/58 sm:text-base sm:leading-8">
              Ensemble, nous cherchons la direction qui exprime votre
              personnalité avec clarté, puis nous la traduisons en un univers
              que votre public peut reconnaître et retenir.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex min-h-11 items-center gap-3 border-b border-[#111111] pb-1 text-sm font-semibold transition-colors hover:text-[#111111]/55"
            >
              Parlons de votre identité
              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>

        <div className="grid border-t border-[#111111]/15 md:grid-cols-3">
          {foundations.map((foundation, index) => (
            <motion.div
              key={foundation.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: "easeOut",
              }}
              className={`border-b border-[#111111]/15 py-7 sm:py-9 md:min-h-[225px] md:border-b-0 ${index > 0 ? "md:border-l md:pl-8 lg:pl-12" : "md:pr-8 lg:pr-12"}`}
            >
              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#111111]/35">
                {foundation.number}
              </span>
              <h3 className="mt-7 text-[clamp(1.8rem,3vw,3rem)] font-medium leading-none tracking-[-0.055em]">
                {foundation.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#111111]/55">
                {foundation.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-[#111111]/15 pt-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/40">
            Selon les besoins du projet
          </span>
          <p className="max-w-2xl text-sm leading-7 text-[#111111]/55 sm:text-right">
            Logo, couleurs, typographies et règles d’usage peuvent composer un
            système pensé pour vivre au-delà d’un seul support.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default VisualIdentity;
