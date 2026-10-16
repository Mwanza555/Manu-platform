import { motion } from "framer-motion";

import Container from "../ui/Container";
import ResponsiveImage from "../ui/ResponsiveImage";

const AboutHuman = () => {
  return (
    <section
      id="regard"
      className="scroll-mt-20 overflow-hidden bg-[#f4f3ef] px-3 pb-20 pt-8 text-[#111111] sm:px-4 sm:pb-24 md:pb-28 md:pt-12"
    >
      <Container>
        <div className="flex items-center justify-between gap-6 border-t border-[#111111]/10 pt-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#111111]/30" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/45">
              Derrière le regard
            </span>
          </div>

          <span className="text-[10px] font-medium tracking-[0.18em] text-[#111111]/30">
            06
          </span>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[clamp(310px,45vw,590px)] overflow-hidden rounded-[28px] bg-[#deddd8] sm:h-[min(55vw,620px)] lg:h-[min(52vw,630px)]">
              <ResponsiveImage
                basePath="/media/profile/manu"
                widths={[480, 768, 960]}
                sizes="(min-width: 1024px) 45vw, (min-width: 640px) 70vw, calc(100vw - 76px)"
                alt="Portrait de Manu en noir et blanc"
                width={960}
                height={1200}
                loading="lazy"
                pictureClassName="block h-full w-full"
                className="h-full w-full object-cover object-[center_78%] grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.18em] text-white/80 sm:bottom-7 sm:left-7 sm:right-7">
              <span>Manu</span>
              <span>Kinshasa — RDC</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/35">
              Une pratique attentive
            </span>

            <h2 className="mt-5 max-w-3xl text-[clamp(2.8rem,5.3vw,5.7rem)] font-semibold leading-[0.93] tracking-[-0.065em]">
              Le design commence aussi
              <span className="block text-[#111111]/35">par l’humain.</span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-[#111111]/58 md:text-base md:leading-8">
              Derrière une identité, il y a des personnes, des échanges et une
              idée qui cherche sa forme. C’est cette matière vivante qui nourrit
              mon regard et guide mon travail.
            </p>

            <div className="mt-10 max-w-lg border-t border-[#111111]/12 pt-5">
              <p className="text-sm font-medium leading-7 text-[#111111]/80 md:text-base md:leading-8">
                Ce que vous voulez dire compte autant que la façon de le
                montrer.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHuman;
