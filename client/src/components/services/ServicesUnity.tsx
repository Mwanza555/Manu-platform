import { motion } from "framer-motion";

import Container from "../ui/Container";

const expressions = [
  {
    number: "01",
    title: "L’identité",
    description: "pose les repères qui rendent votre univers reconnaissable.",
  },
  {
    number: "02",
    title: "L’événement",
    description: "leur donne une expression forte dans un moment précis.",
  },
  {
    number: "03",
    title: "Le contenu",
    description: "les fait vivre au fil de vos prises de parole.",
  },
];

const ServicesUnity = () => {
  return (
    <section
      id="une-direction"
      className="scroll-mt-20 overflow-hidden bg-[#e9e8e3] px-3 py-20 text-[#111111] sm:px-4 sm:py-24 md:py-28"
    >
      <Container>
        <div className="flex items-center justify-between gap-6 border-b border-[#111111]/15 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#111111]/30" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/45">
              Une seule direction
            </span>
          </div>
          <span className="text-[10px] font-medium tracking-[0.18em] text-[#111111]/35">
            06
          </span>
        </div>

        <div className="grid gap-8 pb-14 pt-11 sm:pb-20 sm:pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-[830px] text-[clamp(3rem,6.4vw,6.9rem)] font-semibold leading-[0.88] tracking-[-0.075em]"
          >
            Une direction.
            <span className="block text-[#111111]/32">
              Plusieurs façons de la faire vivre.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="max-w-lg lg:justify-self-end lg:pb-2"
          >
            <p className="text-lg font-medium leading-7 tracking-[-0.025em] sm:text-xl sm:leading-8">
              Un projet peut avoir besoin d’un seul de ces services, ou de
              plusieurs qui se répondent.
            </p>
            <p className="mt-5 text-sm leading-7 text-[#111111]/58 sm:text-base sm:leading-8">
              Dans les deux cas, le fil reste le même&nbsp;: comprendre ce que
              vous voulez exprimer et lui donner une présence visuelle
              cohérente, quel que soit le format.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="border-t border-[#111111]/15"
        >
          <div className="flex items-center justify-between gap-6 py-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111111]/40">
            <span>Le même langage visuel</span>
            <span>Trois expressions</span>
          </div>

          <div className="grid border-t border-[#111111]/15 lg:grid-cols-3">
            {expressions.map((expression, index) => (
              <div
                key={expression.number}
                className={`relative border-b border-[#111111]/15 py-8 lg:min-h-[240px] lg:border-b-0 lg:py-9 ${index === 0 ? "lg:pr-9" : "lg:border-l lg:border-[#111111]/15 lg:pl-9"} ${index === 1 ? "lg:pr-9" : ""}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-[3px] left-0 size-[5px] rounded-full bg-[#111111]/70 lg:left-9"
                />
                <span className="text-[10px] font-semibold tracking-[0.18em] text-[#111111]/35">
                  {expression.number} / 03
                </span>
                <h3 className="mt-9 text-[clamp(2rem,3.2vw,3.7rem)] font-medium leading-none tracking-[-0.06em]">
                  {expression.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-[#111111]/56 sm:text-base sm:leading-8">
                  {expression.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <p className="mt-7 text-right text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111111]/35">
          À composer selon le besoin, jamais par automatisme.
        </p>
      </Container>
    </section>
  );
};

export default ServicesUnity;
