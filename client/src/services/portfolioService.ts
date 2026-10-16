import { projects } from "../data";

export const portfolioService = {
  getPortfolioItems: async () => projects,
  getProjects: async () => projects,
  getPortfolioItemBySlug: async (slug: string) =>
    projects.find((project) => project.slug === slug) ?? null,
  getProjectBySlug: async (slug: string) =>
    projects.find((project) => project.slug === slug) ?? null,
};
