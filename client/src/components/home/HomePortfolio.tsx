import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

const projects = [
  {
    id: "01",
    title: "Projet identité visuelle",
    category: "Branding",
    image: "/portfolio/project-01.jpg",
    href: "/projects/project-01",
    size: "large",
  },
  {
    id: "02",
    title: "Projet direction artistique",
    category: "Art Direction",
    image: "/portfolio/project-02.jpg",
    href: "/projects/project-02",
    size: "medium",
  },
  {
    id: "03",
    title: "Projet design graphique",
    category: "Graphic Design",
    image: "/portfolio/project-03.jpg",
    href: "/projects/project-03",
    size: "medium",
  },
];

const HomePortfolio = () => {
  return (
    <section className="bg-[#f4f3f0] px-3 py-20 text-[#111111] sm:px-4 sm:py-24 md:py-28">
      <Container>
        {/* Header */}
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#111111]/30" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/45">
                Portfolio
              </span>
            </div>

            <h2 className="mt-5 max-w-2xl text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              Une sélection
              <br />
              <span className="text-[#111111]/35">
                de mon travail.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#111111]/50 md:text-right">
            Quelques projets qui illustrent ma manière de penser, de créer et
            de donner une identité aux idées.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-12 md:gap-7">
          {/* Projet principal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-8"
          >
            <ProjectCard project={projects[0]} large />
          </motion.div>

          {/* Projet 02 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="md:col-span-4 md:mt-24"
          >
            <ProjectCard project={projects[1]} />
          </motion.div>

          {/* Projet 03 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="md:col-span-5 md:mt-10"
          >
            <ProjectCard project={projects[2]} />
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center md:mt-14">
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-4 border-b border-[#111111]/20 pb-2 text-sm font-semibold transition-colors hover:border-[#111111]"
          >
            Voir tout le portfolio
          </Link>
        </div>
      </Container>
    </section>
  );
};

type Project = (typeof projects)[number];

const ProjectCard = ({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) => {
  return (
    <Link
      to={project.href}
      className="group block"
    >
      <div
        className={`relative overflow-hidden bg-[#deddda] ${
          large
            ? "aspect-[16/10] md:aspect-[16/10]"
            : "aspect-[4/5]"
        }`}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.035 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />

        {/* Overlay au hover */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />

        {/* Numéro */}
        <span className="absolute left-5 top-5 text-[10px] font-semibold tracking-[0.18em] text-white drop-shadow-sm">
          {project.id}
        </span>

        {/* Flèche */}
        <span className="absolute right-5 top-5 flex size-9 translate-y-1 items-center justify-center rounded-full bg-white/90 text-[#111111] opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <img src="/manu_sans_titre_N.png" alt="" />
        </span>
      </div>

      <div className="mt-4 flex items-start justify-between gap-5">
        <div>
          <h3 className="text-lg font-medium tracking-[-0.03em]">
            {project.title}
          </h3>

          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#111111]/40">
            {project.category}
          </p>
        </div>

        <span className="mt-1 text-xs text-[#111111]/30 transition-colors group-hover:text-[#111111]">
          Voir →
        </span>
      </div>
    </Link>
  );
};

export default HomePortfolio;