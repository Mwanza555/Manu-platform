import { ArrowUpRight, Phone } from "lucide-react";

import ContactClosing from "../../../components/contact/ContactClosing";
import ContactSocials from "../../../components/contact/ContactSocials";
import ContactStartingPoints from "../../../components/contact/ContactStartingPoints";
import Container from "../../../components/ui/Container";
import { contactInfo } from "../../../data";

const ContactPage = () => {
  const phoneNumber = contactInfo.phone.replace(/\D/g, "");
  const whatsappNumber = contactInfo.whatsapp.replace(/\D/g, "");

  return (
    <>
      <section className="-mt-20 min-h-[100svh] bg-[#111111] text-white">
        <Container className="flex min-h-[100svh] flex-col justify-between pb-8 pt-28 sm:pb-10 sm:pt-32">
          <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/35" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Contact
              </span>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">
              Manu · Designer graphique
            </span>
          </div>

          <div className="grid items-end gap-12 py-12 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:text-xs">
                Votre projet commence ici
              </p>
              <h1 className="mt-6 max-w-[850px] text-[clamp(3.3rem,7.2vw,8rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
                Une idée en tête ?
                <span className="mt-2 block text-white/38">Parlons-en.</span>
              </h1>
            </div>

            <div className="max-w-[430px] lg:pb-2">
              <p className="text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                Une identité à créer, un événement à faire connaître ou des
                contenus à imaginer ? Racontez-moi votre idée, même si elle
                n’est pas encore tout à fait définie.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 flex min-h-14 w-full items-center justify-between gap-4 rounded-full bg-white px-6 text-sm font-semibold text-[#111111] transition-colors hover:bg-white/85 sm:mt-10"
              >
                Écrire à Manu sur WhatsApp
                <ArrowUpRight
                  size={19}
                  strokeWidth={1.8}
                  className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={`tel:+${phoneNumber}`}
                className="mt-3 inline-flex min-h-11 items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Phone size={15} strokeWidth={1.7} />
                {contactInfo.phone}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">
            <span>Une conversation peut tout lancer.</span>
            <span>Identité · Événement · Contenu</span>
          </div>
        </Container>
      </section>
      <ContactSocials />
      <ContactStartingPoints />
      <ContactClosing />
    </>
  );
};

export default ContactPage;
