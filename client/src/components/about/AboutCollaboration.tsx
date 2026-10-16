import { motion } from "framer-motion";

import Container from "../ui/Container";

const commitments = [
  {
    number: "01",
    title: "Écouter le contexte",
    description:
      "Comprendre votre projet, ses ambitions, ses contraintes et la perception que vous souhaitez construire.",
  },
  {
    number: "02",
    title: "Expliquer les choix",
    description:
      "Présenter les raisons derrière chaque direction pour décider sur le sens, pas uniquement sur une préférence.",
  },
  {
    number: "03",
    title: "Structurer l’avancement",
    description:
      "Donner à chaque étape un objectif clair afin que les échanges restent simples et que le projet avance sereinement.",
  },
  {
    number: "04",
    title: "Construire avec vous",
    description:
      "Faire de votre connaissance du projet et de mon regard créatif une direction commune, juste et durable.",
  },
];

const AboutCollaboration = () => {
  return (
    <section
      id="collaboration"
      className="scroll-mt-20 overflow-hidden bg-[#f4f3ef] px-3 py-16 text-white sm:px-4 sm:py-20 md:py-24"
    >
      <Container className="!px-0">
        <div className="overflow-hidden rounded-[30px] bg-[#111111] px-6 py-8 shadow-[0_30px_90px_rgba(17,17,17,0.12)] sm:px-9 sm:py-10 lg:px-12 lg:py-12">
          <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/25" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Travailler ensemble
              </span>
            </div>

            <span className="text-[10px] font-medium tracking-[0.18em] text-white/25">
              05
            </span>
          </div>

          <div className="grid gap-14 py-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="flex flex-col justify-between"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                  L’expérience de collaboration
                </p>

                <h2 className="mt-6 max-w-3xl text-[clamp(3.1rem,5.7vw,6.2rem)] font-semibold leading-[0.87] tracking-[-0.07em]">
                  Une collaboration proche,
                  <span className="block text-white/35">un cadre clair.</span>
                </h2>

                <p className="mt-7 max-w-md text-sm leading-7 text-white/48 md:text-base md:leading-8">
                  Vous restez impliqué dans les décisions sans avoir à porter
                  seul la direction créative. Je vous guide, j’explique et je
                  transforme les échanges en choix concrets.
                </p>
              </div>

              <div className="mt-10 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-3">
                <span className="size-2 rounded-full bg-white/65" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  Dialogue continu
                </span>
              </div>
            </motion.div>

            <div className="border-t border-white/10">
              {commitments.map((commitment, index) => (
                <motion.article
                  key={commitment.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  className="grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[48px_0.8fr_1.2fr] sm:items-start sm:gap-6"
                >
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-white/24">
                    {commitment.number}
                  </span>
                  <h3 className="text-xl font-medium leading-tight tracking-[-0.035em] sm:text-2xl">
                    {commitment.title}
                  </h3>
                  <p className="max-w-md text-sm leading-7 text-white/45">
                    {commitment.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid border-t border-white/10 pt-7 sm:grid-cols-2 sm:gap-10"
          >
            <div className="border-b border-white/10 pb-6 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-10">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                Votre rôle
              </p>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/52">
                Apporter la connaissance de votre projet, vos ambitions et vos
                retours.
              </p>
            </div>

            <div className="pt-6 sm:pl-0 sm:pt-0">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                Mon rôle
              </p>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/52">
                Donner une direction à cette matière et guider les décisions
                jusqu’à un résultat cohérent.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutCollaboration;
