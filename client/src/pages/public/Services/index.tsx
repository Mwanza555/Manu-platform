import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import { services } from "../../../data";

const ServicesPage = () => {
  return (
    <Section>
      <Container>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-muted">
          Services
        </p>
        <h1 className="text-4xl font-semibold text-foreground">
          Services créatifs
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="border border-border bg-surface p-6">
              <h2 className="text-xl font-semibold text-foreground">
                {service.title}
              </h2>
              <p className="mt-4 leading-7 text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ServicesPage;
