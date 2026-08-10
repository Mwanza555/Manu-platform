import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import { profile } from "../../../data";

const AboutPage = () => {
  return (
    <Section>
      <Container>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-muted">
          À propos
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold text-foreground">
          {profile.name}, {profile.role}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          {profile.introduction}
        </p>
      </Container>
    </Section>
  );
};

export default AboutPage;
