import Container from "../ui/Container";

const startingPoints = [
  {
    question: "Vous lancez une marque ?",
    detail:
      "Un nom, une idée, une activité : donnons-leur une identité que l’on reconnaît.",
    category: "Identité visuelle",
  },
  {
    question: "Un événement se prépare ?",
    detail:
      "Affiche, invitation, formats numériques : créons une image qui donne envie d’y être.",
    category: "Visuels événementiels",
  },
  {
    question: "Votre communication évolue ?",
    detail:
      "Construisons des visuels cohérents pour que chaque prise de parole ait sa place.",
    category: "Contenus graphiques",
  },
];

const ContactStartingPoints = () => {
  return (
    <section
      aria-labelledby="contact-starting-points-title"
      className="bg-[#e9e7e1] py-20 text-[#111111] sm:py-24 lg:py-28"
    >
      <Container>
        <div className="flex items-center justify-between gap-5 border-b border-[#111111]/15 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#111111]/35" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]/45">
              Votre point de départ
            </span>
          </div>
          <span className="text-[10px] font-medium tracking-[0.16em] text-[#111111]/35">
            03 / Contact
          </span>
        </div>

        <div className="grid gap-7 pb-12 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20 lg:pb-16 lg:pt-16">
          <h2
            id="contact-starting-points-title"
            className="max-w-[770px] text-[clamp(2.9rem,5.8vw,6.2rem)] font-semibold leading-[0.9] tracking-[-0.07em]"
          >
            Parlons de ce qui
            <span className="block text-[#111111]/35">vous anime.</span>
          </h2>
          <p className="max-w-[430px] text-sm leading-7 text-[#111111]/60 sm:text-base sm:leading-8 lg:justify-self-end">
            Il n’est pas nécessaire d’arriver avec un brief complet. Une idée,
            un objectif ou une question suffisent pour commencer.
          </p>
        </div>

        <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          {startingPoints.map((point, index) => (
            <li
              key={point.category}
              className="flex flex-col border-t border-[#111111]/30 pt-5 sm:pt-6"
            >
              <div className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#111111]/45">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span className="text-right">{point.category}</span>
              </div>
              <h3 className="mt-12 max-w-[350px] text-[clamp(1.9rem,2.8vw,3rem)] font-medium leading-[1.02] tracking-[-0.055em] lg:mt-16">
                {point.question}
              </h3>
              <p className="mt-5 max-w-[350px] text-sm leading-7 text-[#111111]/60 sm:text-base sm:leading-8">
                {point.detail}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default ContactStartingPoints;
