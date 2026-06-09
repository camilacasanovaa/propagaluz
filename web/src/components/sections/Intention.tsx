type Props = { locale: "es" | "en" };

export function Intention({ locale }: Props) {
  const isEs = locale === "es";

  const copy = isEs
    ? {
        label: "Nuestra intención",
        titleA: "Una palabra puesta en su sitio enciende",
        titleScript: "algo",
        body: "Existimos por los niños de Venezuela cuya infancia está esperando. Por la curiosidad que es más grande que el acceso. Por la generación que está creciendo en pausa, con la inteligencia entera intacta y la oportunidad a medias.",
      }
    : {
        label: "Our intention",
        titleA: "A word in its proper place sets something",
        titleScript: "alight",
        body: "We exist for the children of Venezuela whose childhood is waiting. For the curiosity that is bigger than the access. For the generation growing up in pause, with the intelligence intact and the opportunity half-given.",
      };

  return (
    <section className="py-24 sm:py-28 px-6 sm:px-10 bg-paper-deep">
      <div className="mx-auto max-w-(--container-wide)">
        <p className="section-label">{copy.label}</p>
        <h2
          className="font-head mt-4"
          style={{
            fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          {copy.titleA}{" "}
          <span
            className="font-script"
            style={{
              color: "var(--color-luz)",
              fontSize: "1.15em",
              display: "inline-block",
              transform: "translateY(0.08em)",
            }}
          >
            {copy.titleScript}
          </span>
          .
        </h2>
        <p
          className="mt-8 text-ink max-w-[50rem] leading-snug"
          style={{
            fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
            fontWeight: 400,
          }}
        >
          {copy.body}
        </p>
      </div>
    </section>
  );
}
