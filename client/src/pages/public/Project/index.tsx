import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import Container from "../../../components/ui/Container";
import ResponsiveImage from "../../../components/ui/ResponsiveImage";
import { projects } from "../../../data";

const ProjectPage = () => {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((project) => project.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <section className="min-h-[70svh] bg-[#f4f3ef] px-3 py-28 text-[#111111] sm:px-4">
        <Container>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/45">
            Portfolio
          </p>
          <h1 className="mt-6 text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
            Projet introuvable.
          </h1>
          <Link
            to="/portfolio"
            className="mt-9 inline-flex min-h-11 items-center gap-3 border-b border-[#111111] text-sm font-semibold"
          >
            <ArrowLeft size={17} strokeWidth={1.8} />
            Retour au portfolio
          </Link>
        </Container>
      </section>
    );
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="bg-[#f4f3ef] text-[#111111]">
      <section className="-mt-20 bg-[#111111] px-3 pb-12 pt-28 text-white sm:px-4 sm:pb-16 sm:pt-32">
        <Container>
          <div className="flex items-center justify-between gap-6 border-b border-white/15 pb-5">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} strokeWidth={1.8} />
              Portfolio
            </Link>
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
              {project.demo ? "Étude fictive" : project.category}
            </span>
          </div>

          <div className="grid gap-7 pb-10 pt-12 sm:pb-14 sm:pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
            <h1 className="max-w-5xl text-[clamp(3.2rem,7vw,7.7rem)] font-semibold leading-[0.87] tracking-[-0.07em]">
              {project.title}
            </h1>
            <div className="max-w-md lg:justify-self-end lg:pb-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                {project.category}
              </p>
              <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                {project.shortDescription}
              </p>
            </div>
          </div>

          <ResponsiveImage
            basePath={project.responsiveCover.basePath}
            widths={project.responsiveCover.widths}
            sizes="(min-width: 1280px) 1216px, 100vw"
            width={project.responsiveCover.width}
            height={project.responsiveCover.height}
            alt={project.gallery[0]?.alt ?? project.title}
            loading="eager"
            pictureClassName="block w-full"
            className="aspect-[3/2] w-full object-cover"
          />
        </Container>
      </section>

      <section className="px-3 py-20 sm:px-4 sm:py-24 md:py-28">
        <Container>
          <div className="grid gap-8 border-t border-[#111111]/15 pt-8 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111111]/45">
              {project.demo ? "À propos de cette étude" : "Le projet"}
            </p>
            <div>
              <h2 className="text-[clamp(2.5rem,4vw,4.5rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
                {project.demo
                  ? "Un aperçu avant les vrais projets."
                  : "L’idée derrière les images."}
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#111111]/60 sm:text-base sm:leading-8">
                {project.description}
              </p>
              {project.demo && (
                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#111111]/45">
                  Cette image sert uniquement à tester la présentation du
                  portfolio ; elle n’est pas présentée comme une réalisation de
                  Manu.
                </p>
              )}
            </div>
          </div>
        </Container>
      </section>

      {nextProject && nextProject.id !== project.id && (
        <section className="bg-[#e9e8e3] px-3 py-16 sm:px-4 sm:py-20">
          <Container>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111111]/45">
              À découvrir ensuite
            </p>
            <Link
              to={`/portfolio/${nextProject.slug}`}
              className="group mt-6 flex items-end justify-between gap-6 border-b border-[#111111]/25 pb-5"
            >
              <span className="text-[clamp(2.6rem,5vw,5.7rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
                {nextProject.title}
              </span>
              <ArrowUpRight
                size={30}
                strokeWidth={1.4}
                className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </Container>
        </section>
      )}
    </div>
  );
};

export default ProjectPage;
