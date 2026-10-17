import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

const ContentCreation = () => {
  return (
    <section
      id="creation-de-contenu"
      className="scroll-mt-20 overflow-hidden bg-[#f4f3ef] px-3 py-20 text-[#111111] sm:px-4 sm:py-24 md:py-28"
    >
      <Container>
        <div className="flex items-center justify-between gap-6 border-b border-[#111111]/15 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#111111]/30" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/45">
              Création de contenu
            </span>
          </div>
          <span className="text-[10px] font-medium tracking-[0.18em] text-[#111111]/35">
            05 — 03/03
          </span>
        </div>

        <div className="grid gap-9 pb-14 pt-11 sm:pb-20 sm:pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/40">
              Une présence qui a quelque chose à dire
            </p>
            <h2 className="mt-6 max-w-[850px] text-[clamp(3rem,6.3vw,6.8rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              Du contenu qui
              <span className="block">donne une suite</span>
              <span className="block text-[#111111]/32">à votre histoire.</span>
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
              Créer du contenu, ce n’est pas simplement occuper l’espace. C’est
              faire passer une idée.
            </p>
            <p className="mt-5 text-sm leading-7 text-[#111111]/58 sm:text-base sm:leading-8">
              Je pars de votre message pour concevoir des contenus visuels
              adaptés à vos canaux de communication, fidèles à votre univers et
              reconnaissables d’une prise de parole à l’autre.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex min-h-11 items-center gap-3 border-b border-[#111111] pb-1 text-sm font-semibold transition-colors hover:text-[#111111]/55"
            >
              Parlons de vos contenus
              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="border-y border-[#111111]/15 py-8 sm:py-12"
        >
          <div className="flex items-baseline justify-between gap-4 border-b border-[#111111]/10 pb-4 sm:pb-6">
            <span className="text-[clamp(2.1rem,7.2vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
              Une idée.
            </span>
            <span className="text-[10px] font-semibold tracking-[0.18em] text-[#111111]/35">
              01
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-4 border-b border-[#111111]/10 py-4 sm:py-6">
            <span className="pl-[7%] text-[clamp(2.1rem,7.2vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-[#111111]/35 sm:pl-[15%]">
              Une forme.
            </span>
            <span className="text-[10px] font-semibold tracking-[0.18em] text-[#111111]/35">
              02
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-4 pt-4 sm:pt-6">
            <span className="text-[clamp(2.1rem,7.2vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.075em] sm:pl-[30%]">
              Une présence.
            </span>
            <span className="text-[10px] font-semibold tracking-[0.18em] text-[#111111]/35">
              03
            </span>
          </div>
        </motion.div>

        <p className="mt-7 text-right text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111111]/35">
          Chaque contenu compte quand il porte la même intention.
        </p>
      </Container>
    </section>
  );
};

export default ContentCreation;
