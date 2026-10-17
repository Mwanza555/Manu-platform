import { ArrowDown, ArrowUpRight } from "lucide-react";

import type { Project } from "../../types/project";
import Container from "../ui/Container";
import ResponsiveImage from "../ui/ResponsiveImage";

type PortfolioHeroProps = {
  featured: Project;
  hasDemo: boolean;
};

const PortfolioHero = ({ featured, hasDemo }: PortfolioHeroProps) => {
  const showPilot = hasDemo && featured.demo;

  return (
    <section className="-mt-20 overflow-hidden bg-[#111111] text-white">
      <Container className="grid min-h-[100svh] gap-8 pb-10 pt-28 sm:gap-10 sm:pb-12 sm:pt-32 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-16 lg:pb-14">
        <div className="flex h-full flex-col justify-center lg:py-10">
          <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
            <span className="h-px w-8 bg-white/35" />
            Portfolio / Design graphique
          </div>

          <h1 className="mt-7 max-w-[660px] text-[clamp(3.15rem,6.5vw,7rem)] font-semibold leading-[0.88] tracking-[-0.075em] sm:mt-9">
            Une idée.
            <br />
            Un langage.
            <br />
            <span className="text-white/38">Des supports.</span>
          </h1>

          <p className="mt-7 max-w-[500px] text-sm leading-7 text-white/60 sm:mt-9 sm:text-base sm:leading-8">
            De l’identité à ses applications, découvrez comment une direction
            graphique prend vie et reste cohérente sur chaque support.
          </p>

          {showPilot && (
            <p className="mt-4 max-w-[500px] text-xs leading-6 text-white/40">
              Les visuels présentés actuellement sont des études fictives. Ils
              seront remplacés par les projets documentés de Manu.
            </p>
          )}

          <a
            href="#selection"
            className="group mt-9 inline-flex min-h-11 w-fit items-center gap-4 rounded-full border border-white/25 px-5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:border-white hover:bg-white hover:text-[#111111] sm:mt-12"
          >
            Explorer les projets
            <ArrowDown
              size={17}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>

          <div className="mt-11 hidden items-center gap-4 border-t border-white/12 pt-5 text-[10px] font-medium uppercase tracking-[0.17em] text-white/35 lg:flex">
            <span>Identité</span>
            <span className="size-1 rounded-full bg-white/25" />
            <span>Événement</span>
            <span className="size-1 rounded-full bg-white/25" />
            <span>Contenu</span>
          </div>
        </div>

        <div className="relative min-w-0 lg:py-5">
          <div className="relative overflow-hidden rounded-[20px] bg-[#172a3d] shadow-[0_35px_100px_rgba(0,0,0,0.35)] sm:rounded-[28px]">
            {showPilot ? (
              <ResponsiveImage
                basePath="/media/portfolio/demo-kalo-branding"
                widths={[480, 768, 1024]}
                sizes="(min-width: 1280px) 570px, (min-width: 1024px) 45vw, 100vw"
                width={1024}
                height={1536}
                alt="Étude fictive de branding KALO : logo, typographie, palette et déclinaisons sur cartes, affiches, sac et réseaux sociaux"
                loading="eager"
                fetchPriority="high"
                pictureClassName="block w-full"
                className="block max-h-[72svh] w-full object-contain sm:max-h-[76svh] lg:max-h-[78svh]"
              />
            ) : (
              <ResponsiveImage
                basePath={featured.responsiveCover.basePath}
                widths={featured.responsiveCover.widths}
                sizes="(min-width: 1280px) 570px, (min-width: 1024px) 45vw, 100vw"
                width={featured.responsiveCover.width}
                height={featured.responsiveCover.height}
                alt={featured.gallery[0]?.alt ?? featured.title}
                loading="eager"
                fetchPriority="high"
                pictureClassName="block w-full"
                className="block max-h-[72svh] w-full object-contain sm:max-h-[76svh] lg:max-h-[78svh]"
              />
            )}
          </div>

          <div className="mt-4 flex items-start justify-between gap-4 border-t border-white/15 pt-4 sm:mt-5">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-white/40">
                {showPilot ? "Étude fictive / Identité visuelle" : featured.category}
              </span>
              <p className="mt-1 text-lg font-medium tracking-[-0.035em] sm:text-xl">
                {showPilot ? "KALO — système de marque" : featured.title}
              </p>
            </div>
            <a
              href="#selection"
              aria-label="Aller à la sélection des projets"
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white hover:text-[#111111]"
            >
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioHero;
