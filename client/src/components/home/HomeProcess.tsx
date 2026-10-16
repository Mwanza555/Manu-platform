import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

const steps = [
  {
    number: "01",
    title: "Comprendre",
    description:
      "Nous clarifions votre contexte, vos objectifs et la perception que votre marque doit créer.",
  },
  {
    number: "02",
    title: "Définir",
    description:
      "Je construis une direction créative capable de guider chaque décision visuelle du projet.",
  },
  {
    number: "03",
    title: "Donner forme",
    description:
      "La direction retenue devient un univers cohérent, reconnaissable et prêt à être déployé.",
  },
];

const HomeProcess = () => {
  return (
    <section className="bg-[#e9e8e3] px-3 py-20 text-[#111111] sm:px-4 sm:py-24 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#111111]/30" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/45">
                  La méthode
                </span>
              </div>

              <h2 className="mt-5 max-w-3xl text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
                De l’idée à une
                <br />
                <span className="text-[#111111]/35">direction claire.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#111111]/52 md:text-right">
              Une collaboration structurée pour avancer avec intention, prendre
              les bonnes décisions et construire un résultat cohérent.
            </p>
          </div>

          <div className="mt-14 grid overflow-hidden rounded-[26px] border border-[#111111]/10 bg-[#111111]/10 md:mt-16 md:grid-cols-3 md:gap-px">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group relative min-h-64 border-b border-[#111111]/10 bg-[#f4f3ef] p-7 last:border-b-0 sm:p-8 md:border-b-0"
              >
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#111111]/35">
                  {step.number}
                </span>
                <h3 className="mt-16 text-3xl font-medium tracking-[-0.05em]">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-[#111111]/52">
                  {step.description}
                </p>
                <span className="absolute right-7 top-7 size-2 rounded-full bg-[#111111]/10 transition-colors duration-300 group-hover:bg-[#111111]" />
              </article>
            ))}
          </div>

          <div className="mt-9 flex justify-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-sm font-semibold"
            >
              <span className="border-b border-[#111111]/25 pb-1 transition-colors group-hover:border-[#111111]">
                Discuter de votre projet
              </span>
              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HomeProcess;
