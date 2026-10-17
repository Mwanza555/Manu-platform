import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

const PortfolioClosing = () => {
  return (
    <section className="bg-[#111111] px-3 py-20 text-white sm:px-4 sm:py-24 md:py-28">
      <Container>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-white/30" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
            Votre projet
          </span>
        </div>
        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-4xl text-[clamp(3rem,6.5vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
            La prochaine idée
            <span className="block text-white/35">pourrait être la vôtre.</span>
          </h2>
          <Link
            to="/contact"
            className="group inline-flex min-h-12 w-fit shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-[#111111] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Parler de votre projet
            <ArrowUpRight
              size={17}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioClosing;
