import { motion } from "framer-motion";

import Container from "../ui/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const outcomes = ["Comprendre", "Croire", "Retenir"];

const AboutBelief = () => {
  return (
    <section
      id="conviction"
      className="scroll-mt-20 overflow-hidden bg-[#f4f3ef] px-3 py-20 text-[#111111] sm:px-4 sm:py-24 md:py-28"
    >
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={fadeUp}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between gap-6 border-b border-[#111111]/10 pb-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#111111]/30" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/45">
                La conviction
              </span>
            </div>

            <span className="text-[10px] font-medium tracking-[0.18em] text-[#111111]/30">
              02
            </span>
          </div>

          <div className="grid gap-12 py-14 md:py-16 lg:grid-cols-[1.55fr_0.45fr] lg:items-end lg:gap-16">
            <h2 className="max-w-5xl text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
              Un bon design ne doit pas seulement être beau.
              <span className="mt-3 block text-[#111111]/32">
                Il doit rendre une idée plus claire, plus crédible et plus
                mémorable.
              </span>
            </h2>

            <div className="max-w-md lg:pb-2">
              <p className="text-sm leading-7 text-[#111111]/58 md:text-base md:leading-8">
                Je ne cherche pas à ajouter une forme à une idée. Je cherche à
                comprendre ce qu’elle doit transmettre, à qui elle s’adresse et
                quelle impression elle doit laisser.
              </p>

              <p className="mt-5 text-sm font-medium leading-7 text-[#111111]/82">
                L’esthétique devient alors un outil&nbsp;: elle attire, organise
                et donne du sens.
              </p>
            </div>
          </div>

          <div className="grid overflow-hidden rounded-[24px] border border-[#111111]/10 bg-[#111111]/10 sm:grid-cols-3 sm:gap-px">
            {outcomes.map((outcome, index) => (
              <div
                key={outcome}
                className="flex min-h-24 items-center justify-between border-b border-[#111111]/10 bg-[#ebeae5] px-6 py-5 last:border-b-0 sm:min-h-28 sm:border-b-0 sm:px-7"
              >
                <span className="text-[10px] font-medium tracking-[0.18em] text-[#111111]/30">
                  0{index + 1}
                </span>
                <span className="text-xl font-medium tracking-[-0.04em] sm:text-2xl">
                  {outcome}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-7 text-right text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111111]/35">
            Le beau attire le regard. Le sens lui donne une raison de rester.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutBelief;
