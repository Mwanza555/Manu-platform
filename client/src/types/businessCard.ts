import type { ContactInfo, SocialLink } from "./contact";

export interface BusinessCard {
  name: string;
  role: string;
  presentation: string;
  photo: string;
  contact: ContactInfo;
  socials: SocialLink[];
  portfolioHref: string;
}
