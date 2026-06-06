type Props = { locale: "es" | "en" };

export function HowItWorks({ locale }: Props) {
  const isEs = locale === "es";

  const eyebrow = isEs ? "Cómo funciona" : "How it works";
  const intro = isEs
    ? "Hacemos esto en compañía, por elección y porque tiene sentido."
    : "We do this in company, by choice and because it makes sense.";

  const cards = isEs
    ? [
        {
          word: "Recogemos",
          body: "Donaciones desde fuera de Venezuela, a través de personas que creen que un niño con un libro cambia más de lo que parece.",
        },
        {
          word: "Acompañamos",
          body: "Las llevamos hasta las manos de las organizaciones que ya están haciendo el trabajo dentro del país.",
        },
        {
          word: "Sostenemos",
          body: "Cada euro termina donde un niño venezolano lo está esperando: una clase que continúa, una página que se abre, una pregunta hecha en voz alta.",
        },
      ]
    : [
        {
          word: "We gather",
          body: "Donations from outside Venezuela, from people who believe that a child with a book changes more than it looks like it should.",
        },
        {
          word: "We accompany",
          body: "We carry them to the hands of organizations already doing the work inside the country.",
        },
        {
          word: "We sustain",
          body: "Every euro lands where a Venezuelan child is waiting: a class that continues, a page that opens, a question asked out loud.",
        },
      ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-(--container-wide) px-5 sm:px-8">
        <div className="max-w-(--container-prose)">
          <p className="font-display text-xs tracking-widest uppercase text-carabobo mb-4">
            {eyebrow}
          </p>
          <p className="font-serif text-2xl sm:text-3xl tracking-tight leading-snug text-ink">
            {intro}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={c.word}
              className="rounded-(--radius-card) bg-paper-pure border border-ink/[0.06] shadow-(--shadow-soft) p-7 sm:p-8"
            >
              <span className="font-display text-xs tracking-widest text-ink-muted">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-display text-2xl tracking-tight text-ink">
                {c.word}.
              </h3>
              <p className="mt-4 font-serif text-base leading-relaxed text-ink-soft">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
