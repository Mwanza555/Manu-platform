import { motion } from "framer-motion";

import Container from "../ui/Container";

const principles = [
  {
    number: "01",
    title: "Clarté",
    description:
      "Une identité doit aider à comprendre. Je hiérarchise les messages et simplifie les choix pour que l’essentiel soit immédiatement perceptible.",
  },
  {
    number: "02",
    title: "Intention",
    description:
      "Chaque couleur, forme et rythme doit servir une idée. Rien n’est ajouté uniquement pour remplir l’espace ou suivre une tendance.",
  },
  {
    number: "03",
    title: "Cohérence",
    description:
      "Le système doit rester reconnaissable d’un support à l’autre, suffisamment solide pour durer et assez souple pour évoluer.",
  },
];

const AboutPrinciples = () => {
  return (
    <section
      id="principes"
      className="scroll-mt-20 overflow-hidden bg-[#e9e8e3] px-3 py-20 text-[#111111] sm:px-4 sm:py-24 md:py-28"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#111111]/30" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/45">
                Les principes
              </span>
            </div>

            <h2 className="mt-6 max-w-4xl text-[clamp(3.1rem,6vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              Ce qui guide
              <span className="block text-[#111111]/32">chaque projet.</span>
            </h2>
          </div>

          <div className="max-w-sm md:pb-2 md:text-right">
            <span className="text-[10px] font-medium tracking-[0.18em] text-[#111111]/30">
              04
            </span>
            <p className="mt-5 text-sm leading-7 text-[#111111]/52">
              Trois repères pour transformer une intuition en une direction
              visuelle solide, compréhensible et capable de durer.
            </p>
          </div>
        </motion.div>

        <div className="mt-14 border-t border-[#111111]/14 md:mt-16">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: "easeOut",
              }}
              className="group grid gap-5 border-b border-[#111111]/14 py-8 transition-colors duration-500 sm:py-9 md:grid-cols-[72px_1fr_0.72fr] md:items-center md:gap-8 md:hover:bg-white/25"
            >
              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#111111]/30">
                {principle.number}
              </span>

              <h3 className="text-[clamp(2.8rem,5.5vw,6rem)] font-medium leading-none tracking-[-0.065em] transition-transform duration-500 md:group-hover:translate-x-3">
                {principle.title}
              </h3>

              <p className="max-w-md text-sm leading-7 text-[#111111]/52 md:justify-self-end md:text-base md:leading-8">
                {principle.description}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="mt-7 text-right text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111111]/35">
          Penser juste avant de produire plus.
        </p>
      </Container>
    </section>
  );
};

export default AboutPrinciples;
