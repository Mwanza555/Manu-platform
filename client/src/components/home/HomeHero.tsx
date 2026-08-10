import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { homeHero } from "../../data";
import Container from "../ui/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const HomeHero = () => {
  const titleParts = homeHero.title.split(homeHero.accentWord);

  return (
    <section className="bg-[#f4f3ef] px-3 py-3 text-white sm:px-4 sm:py-4">
      <Container>
        <div className="relative flex min-h-[calc(100svh-1.5rem)] items-center overflow-hidden rounded-[28px] bg-[#111111] px-6 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.12)] sm:min-h-[calc(100svh-2rem)] sm:px-8 md:px-12 lg:px-16">
          {/* Logo en arrière-plan */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
          >
            <img
              src="/manu_sans_titre_B.png"
              alt=""
              className="w-[75%] max-w-[850px] select-none object-contain opacity-[0.125] grayscale"
            />
          </div>

          {/* Lumière très subtile */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[15%] top-1/2 h-[55vw] max-h-[700px] w-[55vw] max-w-[700px] -translate-y-1/2 rounded-full bg-white/[0.025] blur-[100px]"
          />

          {/* Fine ligne décorative */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[8%] top-0 h-full w-px bg-white/[0.055]"
          />

          <div className="relative z-10 grid w-full items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            {/* Contenu */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{
                duration: 0.65,
                ease: "easeOut",
              }}
              className="relative z-20"
            >
              <h1 className="max-w-4xl text-[clamp(3.7rem,8vw,8.5rem)] font-semibold leading-[0.83] tracking-[-0.075em]">
                {titleParts[0]}

                <span className="text-white/38">
                  {homeHero.accentWord}
                </span>

                {titleParts[1]}
              </h1>

              <p className="mt-7 max-w-[460px] text-sm leading-7 text-white/55 md:text-base md:leading-8">
                {homeHero.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={homeHero.primaryCta.href}
                  className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                >
                  {homeHero.primaryCta.label}

                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  </span>
                </Link>

                <Link
                  to={homeHero.secondaryCta.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-medium text-white/65 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05] hover:text-white"
                >
                  {homeHero.secondaryCta.label}
                </Link>
              </div>
            </motion.div>

            {/* Composition graphique */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.75,
                ease: "easeOut",
                delay: 0.12,
              }}
              className="relative mx-auto h-[300px] w-full max-w-[470px] sm:h-[360px] md:h-[420px] lg:h-[500px]"
            >
              {/* Numéro discret */}
              <span className="absolute right-[5%] top-[8%] text-[5rem] font-light leading-none tracking-[-0.08em] text-white/[0.08] sm:text-[7rem]">
                01
              </span>

              {/* Carte glassmorphism */}
              <div className="absolute bottom-[4%] right-0 w-[220px] rounded-[20px] border border-white/[0.16] bg-white/[0.075] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:w-[250px] sm:p-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  Brand Designer
                </p>

                <p className="mt-7 text-2xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-3xl">
                  Design
                  <br />
                  <span className="text-white/40">with purpose.</span>
                </p>

                <div className="my-5 h-px bg-white/10" />

                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-white/35">
                    Kinshasa — RDC
                  </span>
                </div>
              </div>

              {/* Petit label */}
              <span className="absolute bottom-[7%] left-[4%] text-[9px] font-medium uppercase tracking-[0.18em] text-white/30">
                Identité Visuelle
              </span>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeHero;