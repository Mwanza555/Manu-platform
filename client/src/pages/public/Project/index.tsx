import { useParams } from "react-router-dom";

import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import { portfolioItems } from "../../../data";

const ProjectPage = () => {
  const { slug } = useParams();
  const item = portfolioItems.find((portfolioItem) => portfolioItem.slug === slug);

  return (
    <Section>
      <Container>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-muted">
          Portfolio
        </p>
        <h1 className="text-4xl font-semibold text-foreground">
          {item?.title ?? "Réalisation à venir"}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          {item?.description ??
            "Cette page est prête à accueillir le détail d'une réalisation."}
        </p>
      </Container>
    </Section>
  );
};

export default ProjectPage;
