import { businessCard } from "../../../data";

const CardPage = () => {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto flex max-w-sm flex-col gap-6">
        <img
          src={businessCard.photo}
          alt={businessCard.name}
          className="size-24 object-contain"
        />
        <div>
          <h1 className="text-3xl font-semibold">{businessCard.name}</h1>
          <p className="mt-2 text-muted">{businessCard.role}</p>
        </div>
        <p className="leading-7 text-muted">{businessCard.presentation}</p>
        <a
          href={businessCard.portfolioHref}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 font-medium text-white"
        >
          Voir mon portfolio →
        </a>
      </div>
    </main>
  );
};

export default CardPage;
