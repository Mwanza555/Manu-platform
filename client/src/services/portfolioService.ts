import { portfolioItems, projects } from "../data";

export const portfolioService = {
  getPortfolioItems: async () => portfolioItems,
  getProjects: async () => projects,
  getPortfolioItemBySlug: async (slug: string) =>
    portfolioItems.find((item) => item.slug === slug) ?? null,
  getProjectBySlug: async (slug: string) =>
    projects.find((project) => project.slug === slug) ?? null,
};
