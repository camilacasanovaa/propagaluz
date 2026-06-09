type Props = { locale: "es" | "en" };

export function OurStory({ locale }: Props) {
  const isEs = locale === "es";

  const copy = isEs
    ? {
        label: "Nuestra historia",
        title: "Misma convicción, distinta herramienta.",
        para1:
          "El medio entonces era tinta y papel. El medio ahora es una fundación que protege la escolarización y la voz de la siguiente generación. La convicción no ha cambiado.",
        para2Pre: "Lo que hacemos por los niños de Venezuela importa más que lo que digamos de nosotros. Por eso esta sección se queda corta.",
        signature: "— Para Opa",
      }
    : {
        label: "Our story",
        title: "Same conviction, different tool.",
        para1:
          "The medium then was ink and paper. The medium now is a foundation that protects the schooling and the voice of the next generation. The conviction has not changed.",
        para2Pre:
          "What we do for the children of Venezuela matters more than what we say about ourselves. So this section stays short.",
        signature: "— Para Opa",
      };

  return (
    <section className="py-24 sm:py-28 px-6 sm:px-10 bg-paper-deep">
      <div className="mx-auto max-w-(--container-prose)">
        <p className="section-label">{copy.label}</p>
        <h2
          className="font-head mt-4"
          style={{
            fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          {copy.title}
        </h2>

        <p className="mt-10 text-[1.08rem] text-ink-soft leading-[1.7]">
          {copy.para1}
        </p>

        <blockquote
          className="my-12"
          style={{
            fontSize: "1.55rem",
            lineHeight: 1.45,
            color: "var(--color-quote)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          <p>
            &ldquo;Es para servir.
            <br />
            No es una herencia personal.
            <br />
            Pertenece a la comunidad.&rdquo;
          </p>
        </blockquote>

        <p className="text-[1.08rem] text-ink-soft leading-[1.7]">
          {copy.para2Pre}{" "}
          <span
            className="font-script"
            style={{
              fontSize: "1.3em",
              color: "var(--color-luz-deep)",
              letterSpacing: "0.01em",
            }}
          >
            {copy.signature}
          </span>
        </p>
      </div>
    </section>
  );
}
