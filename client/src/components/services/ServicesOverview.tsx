import { motion } from "framer-motion";

import Container from "../ui/Container";

const services = [
  {
    number: "01",
    title: "Identité visuelle",
    description:
      "Une image reconnaissable et cohérente pour donner forme à la personnalité d’une entreprise, d’une organisation ou d’une personne.",
    context: "Marques & personnes",
  },
  {
    number: "02",
    title: "Visuels événementiels",
    description:
      "Des visuels qui donnent le ton, attirent l’attention et accompagnent la communication d’un événement.",
    context: "Événements",
  },
  {
    number: "03",
    title: "Création de contenu",
    description:
      "Des contenus visuels pensés pour porter un message et faire vivre une présence reconnaissable au fil du temps.",
    context: "Messages & canaux",
  },
];

const ServicesOverview = () => {
  return (
    <section
      id="expertises"
      className="scroll-mt-20 overflow-hidden bg-[#f4f3ef] px-3 py-20 text-[#111111] sm:px-4 sm:py-24 md:py-28"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between gap-6 border-b border-[#111111]/12 pb-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#111111]/30" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/45">
                Les expertises
              </span>
            </div>
            <span className="text-[10px] font-medium tracking-[0.18em] text-[#111111]/30">
              02
            </span>
          </div>

          <div className="grid gap-7 pt-10 sm:pt-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
            <h2 className="max-w-4xl text-[clamp(2.9rem,6vw,6.3rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
              Chaque idée a sa façon
              <span className="block text-[#111111]/32">de prendre forme.</span>
            </h2>
            <p className="max-w-md text-sm leading-7 text-[#111111]/55 md:text-base md:leading-8 lg:justify-self-end lg:pb-2">
              Trois expertises pour construire une présence visuelle juste, de
              l’identité aux contenus qui la font vivre.
            </p>
          </div>
        </motion.div>

        <div className="mt-14 grid border-t border-[#111111]/14 sm:mt-20 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: "easeOut",
              }}
              className={`flex min-h-[285px] flex-col border-b border-[#111111]/14 py-8 sm:min-h-[320px] sm:py-10 lg:min-h-[350px] lg:border-b-0 ${index === 0 ? "lg:pr-8" : "lg:border-l lg:border-[#111111]/14 lg:pl-8"} ${index === 1 ? "lg:pr-8" : ""}`}
            >
              <div className="flex items-center justify-between gap-5">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#111111]/35">
                  {service.number} / 03
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#111111]/38">
                  {service.context}
                </span>
              </div>

              <div className="mt-auto pt-12">
                <h3 className="max-w-[520px] text-[clamp(2.2rem,3.3vw,4.2rem)] font-medium leading-[0.94] tracking-[-0.065em]">
                  {service.title}
                </h3>
                <p className="mt-5 max-w-[430px] text-sm leading-7 text-[#111111]/55 sm:text-base sm:leading-8">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-7 text-right text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111111]/35">
          La bonne forme pour le bon message.
        </p>
      </Container>
    </section>
  );
};

export default ServicesOverview;
