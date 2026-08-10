import type { ProfileStat } from "./profile";

export interface HomeHeroVisual {
  image: string;
  alt: string;
  label: string;
}

export interface HomeHeroWork {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
  theme: "light" | "dark";
}

export interface HomeHeroContent {
  label: string;
  discipline: string;
  title: string;
  accentWord: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  visual: HomeHeroVisual;
  recentWorks: HomeHeroWork[];
  stats: ProfileStat[];
}
