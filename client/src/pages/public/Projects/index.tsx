import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import { projects } from "../../../data";

const ProjectsPage = () => {
  return (
    <Section>
      <Container>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-muted">
          Projets
        </p>
        <h1 className="text-4xl font-semibold text-foreground">
          Études de cas
        </h1>

        <div className="mt-10 grid gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="border border-border bg-surface p-6"
            >
              <p className="text-sm font-medium text-muted">
                {project.demo
                  ? "Étude fictive"
                  : [project.year, project.client].filter(Boolean).join(" · ")}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                {project.title}
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-muted">
                {project.shortDescription}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ProjectsPage;
