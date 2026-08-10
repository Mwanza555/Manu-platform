export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  accent?: string;
  tools: string[];
  isPublished: boolean;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  image: string;
  year: string;
  client: string;
  services: string[];
  isPublished: boolean;
}
