import Link from "next/link";

type Props = { locale: "es" | "en" };

export function ManifestoPreview({ locale }: Props) {
  const isEs = locale === "es";

  const eyebrow = isEs ? "Manifiesto" : "Manifesto";
  const cta = isEs ? "Leer el manifiesto completo" : "Read the full manifesto";
  const href = isEs ? "/manifiesto" : "/en/manifesto";

  const stanzas = isEs
    ? [
        "Existimos por los niños de Venezuela cuya infancia está esperando. Por la curiosidad que es más grande que el acceso. Por el que quiere leer y todavía busca dónde. Por el que ya leyó todo lo que tenía. Por la pregunta que un niño tiene guardada y todavía no sabe dónde hacer. Por la generación que está creciendo en pausa, con la inteligencia entera intacta y la oportunidad a medias.",
        "Creemos que cada niño venezolano merece llegar entero a su edad adulta: con palabras propias, ideas propias, futuro propio.",
        "Creemos que un niño que aprende a leer es un niño que va a hacer preguntas. Y un niño que hace preguntas es un niño que está construyendo, sin saberlo todavía, el lugar al que un día va a llegar.",
      ]
    : [
        "We exist for the children of Venezuela whose childhood is waiting. For the curiosity that is bigger than the access. For the child who wants to read and still has nowhere to find a book. For the child who has already read everything they had. For the question a child keeps and does not yet know where to ask. For the generation growing up in pause, with the intelligence intact and the opportunity half-given.",
        "We believe that every Venezuelan child deserves to arrive whole into adulthood: with words of their own, ideas of their own, a future of their own.",
        "We believe that a child who learns to read is a child who is going to ask questions. And a child who asks questions is a child who is building, without yet knowing it, the place they will one day arrive.",
      ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-(--container-prose) px-5 sm:px-8">
        <p className="font-display text-xs tracking-widest uppercase text-carabobo mb-6">
          {eyebrow}
        </p>
        <div className="space-y-6 font-serif text-lg sm:text-xl leading-[1.65] text-ink">
          {stanzas.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href={href}
            className="inline-flex items-center gap-2 font-sans text-sm border-b border-ink pb-1 hover:border-carabobo hover:text-carabobo transition-colors"
          >
            {cta} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
