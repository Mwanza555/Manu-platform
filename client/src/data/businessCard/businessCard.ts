import type { BusinessCard } from "../../types";
import { contactInfo, profile, socialLinks } from "../site";

export const businessCard: BusinessCard = {
  name: profile.name,
  role: profile.role,
  presentation: profile.introduction,
  photo: profile.image,
  contact: contactInfo,
  socials: socialLinks,
  portfolioHref: "/portfolio",
};
