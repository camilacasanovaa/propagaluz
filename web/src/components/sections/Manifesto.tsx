type Props = { locale: "es" | "en" };

export function Manifesto({ locale }: Props) {
  const isEs = locale === "es";

  const eyebrow = isEs ? "Manifiesto" : "Manifesto";
  const id = isEs ? "manifiesto" : "manifesto";

  // The full approved manifesto. One scroll section, set against luz yellow.
  const paragraphs = isEs
    ? [
        "Una palabra puesta en su sitio enciende algo. Ese algo puede viajar de mano en mano hasta cambiar lo que parecía inmóvil. Propagaluz es la apuesta por esa palabra, por ese algo, por esas manos.",
        { type: "anchor" as const, text: "Es una fundación de intención." },
        "Existimos por los niños de Venezuela cuya infancia está esperando. Por la curiosidad que es más grande que el acceso. Por el que quiere leer y todavía busca dónde. Por el que ya leyó todo lo que tenía. Por la pregunta que un niño tiene guardada y todavía no sabe dónde hacer. Por la generación que está creciendo en pausa, con la inteligencia entera intacta y la oportunidad a medias.",
        "Creemos que cada niño venezolano merece llegar entero a su edad adulta: con palabras propias, ideas propias, futuro propio.",
        "Creemos que la educación es una forma de luz, y que esa luz, una vez encendida, se sostiene a sí misma. Una página se abre. Una idea se entiende. Una pregunta encuentra una respuesta. Cada gesto multiplica el siguiente.",
        "Creemos que un niño que aprende a leer es un niño que va a hacer preguntas. Y un niño que hace preguntas es un niño que está construyendo, sin saberlo todavía, el lugar al que un día va a llegar.",
        "Esta fundación pertenece a los niños que sirve.",
        { type: "close" as const, text: "Lo demás se gana día a día." },
      ]
    : [
        "A word in its proper place sets something alight. The something can travel hand to hand until it changes what seemed unmovable. Propagaluz is the bet on that word, on that something, on those hands.",
        { type: "anchor" as const, text: "It is a foundation of intention." },
        "We exist for the children of Venezuela whose childhood is waiting. For the curiosity that is bigger than the access. For the child who wants to read and still has nowhere to find a book. For the child who has already read everything they had. For the question a child keeps and does not yet know where to ask. For the generation growing up in pause, with the intelligence intact and the opportunity half-given.",
        "We believe that every Venezuelan child deserves to arrive whole into adulthood: with words of their own, ideas of their own, a future of their own.",
        "We believe that education is a form of light, and that this light, once lit, sustains itself. A page opens. An idea takes hold. A question finds an answer. Each gesture multiplies the next.",
        "We believe that a child who learns to read is a child who is going to ask questions. And a child who asks questions is a child who is building, without yet knowing it, the place they will one day arrive.",
        "This foundation belongs to the children it serves.",
        { type: "close" as const, text: "The rest is earned, day by day." },
      ];

  return (
    <section
      id={id}
      className="relative bg-luz text-ink overflow-hidden"
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-(--container-prose) px-5 sm:px-8 py-24 sm:py-32">
        <p
          id={`${id}-heading`}
          className="font-display text-xs tracking-widest uppercase text-ink/70 mb-8"
        >
          {eyebrow}
        </p>

        <div className="space-y-8 font-serif text-lg sm:text-xl leading-[1.65]">
          {paragraphs.map((p, i) => {
            if (typeof p === "string") {
              return <p key={i}>{p}</p>;
            }
            if (p.type === "anchor") {
              return (
                <p
                  key={i}
                  className="font-accent italic text-3xl sm:text-4xl leading-tight not-italic-fallback"
                >
                  {p.text}
                </p>
              );
            }
            return (
              <p
                key={i}
                className="font-display text-2xl sm:text-3xl tracking-tight leading-tight pt-2"
              >
                {p.text}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
