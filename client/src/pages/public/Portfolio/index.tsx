import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import { portfolioItems } from "../../../data";

const PortfolioPage = () => {
  return (
    <Section>
      <Container>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-muted">
          Portfolio
        </p>
        <h1 className="text-4xl font-semibold text-foreground">
          Réalisations graphiques
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {portfolioItems.map((item) => (
            <article key={item.id} className="border border-border bg-background p-6">
              <p className="text-sm font-medium text-muted">{item.category}</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="mt-4 leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default PortfolioPage;
