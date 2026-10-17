import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { socialLinks } from "../../data";
import type { SocialLink } from "../../types";
import Container from "../ui/Container";

const SocialIcon = ({ platform }: { platform: SocialLink["platform"] }) => {
  const icons: Partial<Record<SocialLink["platform"], ReactNode>> = {
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </>
    ),
    facebook: (
      <path d="M14.2 21v-8.1h2.7l.4-3.2h-3.1V7.6c0-.9.3-1.5 1.6-1.5h1.7V3.2a20 20 0 0 0-2.5-.2c-2.6 0-4.4 1.6-4.4 4.5v2.2H8v3.2h2.6V21" />
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="7.5" cy="8" r="0.9" fill="currentColor" stroke="none" />
        <path d="M7.5 11v6M11.5 17v-6m0 2.6c0-1.6 1.1-2.7 2.6-2.7 1.7 0 2.7 1 2.7 3V17" />
      </>
    ),
  };
  const icon = icons[platform];

  if (!icon) return null;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icon}
    </svg>
  );
};

const ContactSocials = () => {
  return (
    <section
      aria-labelledby="contact-socials-title"
      className="bg-[#f4f3ef] py-20 text-[#111111] sm:py-24 lg:py-28"
    >
      <Container>
        <div className="flex items-center justify-between gap-5 border-b border-[#111111]/15 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#111111]/35" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/45">
              En ligne
            </span>
          </div>
          <span className="text-[10px] font-medium tracking-[0.16em] text-[#111111]/35">
            02 / Contact
          </span>
        </div>

        <div className="grid gap-10 pt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:pt-16">
          <div>
            <h2
              id="contact-socials-title"
              className="max-w-[560px] text-[clamp(2.9rem,5.4vw,5.8rem)] font-semibold leading-[0.9] tracking-[-0.07em]"
            >
              Restons
              <span className="block text-[#111111]/35">en lien.</span>
            </h2>
            <p className="mt-6 max-w-[380px] text-sm leading-7 text-[#111111]/55 sm:text-base sm:leading-8">
              Retrouvez Manu sur vos plateformes habituelles pour découvrir son
              univers et poursuivre la conversation.
            </p>
          </div>

          <ul className="border-t border-[#111111]/15">
            {socialLinks.map((social) => (
              <li
                key={social.platform}
                className="border-b border-[#111111]/15"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid min-h-24 grid-cols-[3rem_1fr_auto] items-center gap-3 py-4 transition-colors hover:text-[#111111]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111] sm:min-h-28 sm:grid-cols-[3.5rem_1fr_auto] sm:gap-5"
                  aria-label={`Ouvrir le profil ${social.label} de Manu dans un nouvel onglet`}
                >
                  <span className="flex size-11 items-center justify-center rounded-full border border-[#111111]/10 bg-white/75 text-[#111111] transition-colors group-hover:border-[#111111] group-hover:bg-[#111111] group-hover:text-white sm:size-12">
                    <SocialIcon platform={social.platform} />
                  </span>
                  <span className="text-[clamp(1.65rem,3.2vw,3.4rem)] font-medium leading-none tracking-[-0.055em]">
                    {social.label}
                  </span>
                  <span className="flex size-10 items-center justify-center rounded-full border border-[#111111]/20 transition-colors group-hover:border-[#111111] group-hover:bg-[#111111] group-hover:text-white sm:size-12">
                    <ArrowUpRight
                      aria-hidden="true"
                      size={19}
                      strokeWidth={1.7}
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default ContactSocials;
