import { motion } from "framer-motion";

import Container from "../ui/Container";
import ResponsiveImage from "../ui/ResponsiveImage";

const chapters = [
  {
    number: "01",
    title: "Observer",
    description:
      "Avant de créer, il faut apprendre à regarder : comprendre pourquoi une image attire, pourquoi un message reste et ce qui rend une identité juste.",
  },
  {
    number: "02",
    title: "Expérimenter",
    description:
      "Le regard se précise dans la recherche, les essais et les choix. Chaque projet devient une occasion d’affiner une manière de composer, de hiérarchiser et de raconter.",
  },
  {
    number: "03",
    title: "Accompagner",
    description:
      "Aujourd’hui, cette pratique sert un objectif simple : aider les marques à trouver une direction visuelle qui leur ressemble et qu’elles peuvent faire vivre durablement.",
  },
];

const AboutStory = () => {
  return (
    <section
      id="parcours"
      className="scroll-mt-20 overflow-hidden bg-[#111111] px-3 py-20 text-white sm:px-4 sm:py-24 md:py-28"
    >
      <Container>
        <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/25" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Le chemin
            </span>
          </div>

          <span className="text-[10px] font-medium tracking-[0.18em] text-white/25">
            03
          </span>
        </div>

        <div className="grid gap-14 pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative flex min-h-[460px] flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-7 sm:min-h-[540px] sm:p-9 lg:min-h-[650px]"
          >
            <div className="relative z-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                Une pratique en mouvement
              </p>

              <h2 className="mt-6 max-w-2xl text-[clamp(3rem,5.5vw,6rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
                Le regard se construit
                <span className="block text-white/35">
                  projet après projet.
                </span>
              </h2>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -right-14 w-[78%] opacity-[0.075]"
            >
              <ResponsiveImage
                basePath="/media/brand/manu-sans-titre-b"
                widths={[96, 512, 1200]}
                sizes="500px"
                alt=""
                width={1200}
                height={1309}
                loading="lazy"
                pictureClassName="block w-full"
                className="h-auto w-full object-contain grayscale"
              />
            </div>

            <p className="relative z-10 max-w-md border-t border-white/10 pt-6 text-sm leading-7 text-white/48">
              Mon parcours ne se résume pas à une suite de dates. Il s’est
              construit dans l’observation, l’expérimentation et l’envie de
              donner une forme plus claire aux idées.
            </p>
          </motion.div>

          <div className="border-t border-white/10">
            {chapters.map((chapter, index) => (
              <motion.article
                key={chapter.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="grid gap-5 border-b border-white/10 py-9 sm:grid-cols-[72px_1fr] sm:gap-7 sm:py-11"
              >
                <span className="text-[10px] font-semibold tracking-[0.2em] text-white/25">
                  {chapter.number}
                </span>

                <div>
                  <h3 className="text-[clamp(2.2rem,4vw,4.2rem)] font-medium leading-none tracking-[-0.06em]">
                    {chapter.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/48 md:text-base md:leading-8">
                    {chapter.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutStory;
