import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import { contactInfo, socialLinks } from "../../../data";

const ContactPage = () => {
  return (
    <Section>
      <Container>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-muted">
          Contact
        </p>
        <h1 className="text-4xl font-semibold text-foreground">
          Parlons de votre projet
        </h1>
        <div className="mt-8 space-y-3 text-lg text-muted">
          <p>{contactInfo.email}</p>
          <p>{contactInfo.phone}</p>
          <p>{contactInfo.location}</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              {social.label}
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ContactPage;
