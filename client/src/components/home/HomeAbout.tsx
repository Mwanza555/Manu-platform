import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const HomeAbout = () => {
  return (
    <section className="bg-[#f4f3ef] px-3 py-20 text-[#111111] sm:px-4 sm:py-28 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[480px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#deddd8]">
              {/* Remplacer par la vraie photo de Manu */}
              <img
                src="/manu.PNG"
                alt="Manu, designer graphique"
                className="h-full w-full object-cover grayscale"
              />

              {/* Overlay léger */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>

            {/* Élément graphique */}
            <div className="absolute -bottom-5 -right-5 flex size-24 items-center justify-center rounded-full border border-[#111111]/10 bg-white/70 shadow-[0_15px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl sm:size-28">
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#111111]/45">
                Manu
              </span>
            </div>
          </motion.div>

          {/* Contenu */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{
              duration: 0.65,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-[#111111]/30" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/45">
                À propos
              </span>
            </div>

            <h2 className="max-w-3xl text-[clamp(2.6rem,5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
              Donner une
              <br />
              <span className="text-[#111111]/35">
                identité aux idées.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#111111]/60 md:text-lg">
              Je suis designer graphique basé à Kinshasa. Je crée des identités 
              visuelles et des supports graphiques qui donnent aux marques une 
              présence forte, cohérente et mémorable.
            </p>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#111111]/10 bg-[#111111]/10">
              <div className="bg-[#f4f3ef] p-5 sm:p-6">
                <p className="text-2xl font-semibold tracking-[-0.04em]">
                  Brand
                </p>

                <p className="mt-1 text-xs text-[#111111]/40">
                  Identité visuelle
                </p>
              </div>

              <div className="bg-[#f4f3ef] p-5 sm:p-6">
                <p className="text-2xl font-semibold tracking-[-0.04em]">
                  Graphic
                </p>

                <p className="mt-1 text-xs text-[#111111]/40">
                  Design graphique
                </p>
              </div>
            </div>

            <Link
              to="/portfolio"
              className="group mt-9 inline-flex w-fit items-center gap-3 text-sm font-semibold"
            >
              <span className="border-b border-[#111111]/30 pb-1 transition-colors group-hover:border-[#111111]">
                Découvrir mon univers
              </span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HomeAbout;