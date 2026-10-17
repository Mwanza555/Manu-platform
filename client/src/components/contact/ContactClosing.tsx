import { ArrowUpRight } from "lucide-react";

import { contactInfo } from "../../data";
import Container from "../ui/Container";

const ContactClosing = () => {
  const whatsappNumber = contactInfo.whatsapp.replace(/\D/g, "");
  const phoneNumber = contactInfo.phone.replace(/\D/g, "");

  return (
    <section
      aria-labelledby="contact-closing-title"
      className="bg-[#111111] text-white"
    >
      <Container className="flex min-h-[70svh] flex-col justify-between py-10 sm:min-h-[75svh] sm:py-12">
        <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
          <span>À vous de jouer</span>
          <span>04 / Contact</span>
        </div>

        <div className="grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <h2
            id="contact-closing-title"
            className="max-w-[850px] text-[clamp(3.2rem,7vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]"
          >
            Faisons place
            <span className="block text-white/38">à votre idée.</span>
          </h2>

          <div className="max-w-[430px] lg:pb-2">
            <p className="text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Quelques mots sur votre projet suffisent pour ouvrir la
              conversation.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex min-h-14 w-full items-center justify-between gap-4 rounded-full bg-white px-6 text-sm font-semibold text-[#111111] transition-colors hover:bg-white/85"
            >
              Écrire à Manu
              <ArrowUpRight
                aria-hidden="true"
                size={19}
                strokeWidth={1.8}
                className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/40">
          <span>Manu · Designer graphique</span>
          <a
            href={`tel:+${phoneNumber}`}
            className="transition-colors hover:text-white"
          >
            {contactInfo.phone}
          </a>
        </div>
      </Container>
    </section>
  );
};

export default ContactClosing;
