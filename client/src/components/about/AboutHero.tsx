import { motion } from "framer-motion";

import ResponsiveImage from "../ui/ResponsiveImage";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const AboutHero = () => {
  return (
    <section className="-mt-20 h-[100svh] min-h-[640px] overflow-hidden bg-[#111111] text-white">
      <div className="relative flex h-[100svh] min-h-[640px] items-center overflow-hidden px-6 pb-5 pt-24 sm:px-8 sm:pb-7 sm:pt-28 md:px-12 lg:px-16 lg:pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[18%] top-[12%] size-[65vw] max-h-[760px] max-w-[760px] rounded-full bg-white/[0.025] blur-[110px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-[8%] top-0 w-px bg-white/[0.055]"
        />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative z-20"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/25" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                À propos
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl text-[clamp(2.8rem,5.6vw,6rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
              Je donne une
              <br />
              <span className="text-white/38">direction claire</span>
              <br />
              aux idées qui méritent d’être vues.
            </h1>

            <p className="mt-5 max-w-[480px] text-xs leading-6 text-white/55 md:text-sm md:leading-7">
              Je suis Manu, designer graphique basé à Kinshasa. J’aide les
              marques et les projets ambitieux à construire une présence
              visuelle juste, cohérente et mémorable.
            </p>

            <div className="mt-5 grid max-w-[480px] grid-cols-2 gap-5 border-t border-white/10 pt-4 sm:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/28">
                  Basé à
                </p>
                <p className="mt-2 text-xs text-white/65">Kinshasa — RDC</p>
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/28">
                  Collaboration
                </p>
                <p className="mt-2 text-xs text-white/65">
                  Locale &amp; à distance
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
            className="relative mx-auto h-[clamp(210px,28svh,270px)] w-full max-w-[520px] sm:h-[min(34svh,330px)] lg:h-[min(65svh,560px)]"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[28px] bg-[#d8d8d6] shadow-[0_35px_100px_rgba(0,0,0,0.38)]">
              <ResponsiveImage
                basePath="/media/profile/manu"
                widths={[480, 768, 960]}
                sizes="(min-width: 1024px) 42vw, (min-width: 640px) 520px, calc(100vw - 48px)"
                alt="Portrait de Manu, designer graphique"
                width={960}
                height={1200}
                loading="eager"
                fetchPriority="high"
                pictureClassName="block h-full w-full"
                className="h-full w-full object-cover object-[center_22%] grayscale"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/[0.04]" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between rounded-2xl border border-white/15 bg-black/20 px-4 py-3 backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-auto sm:min-w-56 sm:px-5 sm:py-4">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  Manu
                </p>
                <p className="mt-1 text-sm font-medium tracking-[-0.02em] text-white/85">
                  Designer graphique
                </p>
              </div>

              <span className="size-2 rounded-full bg-white/70" />
            </div>

            <span
              aria-hidden="true"
              className="absolute -right-3 -top-4 text-[4.5rem] font-light leading-none tracking-[-0.08em] text-white/[0.08] sm:-right-5 sm:text-[6rem]"
            >
              01
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
