import PortfolioClosing from "../../../components/portfolio/PortfolioClosing";
import PortfolioGallery from "../../../components/portfolio/PortfolioGallery";
import PortfolioHero from "../../../components/portfolio/PortfolioHero";
import { projects } from "../../../data";

const Portfolio = () => {
  const featured = projects.find((project) => project.featured) ?? projects[0];

  if (!featured) {
    return null;
  }

  return (
    <div>
      <PortfolioHero
        featured={featured}
        hasDemo={projects.some((project) => project.demo)}
      />
      <PortfolioGallery projects={projects} />
      <PortfolioClosing />
    </div>
  );
};

export default Portfolio;
