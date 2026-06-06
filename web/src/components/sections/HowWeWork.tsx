import { BookOpen, HandHeart, Sun } from "lucide-react";

type Props = { locale: "es" | "en" };

export function HowWeWork({ locale }: Props) {
  const isEs = locale === "es";

  const eyebrow = isEs ? "Cómo funciona" : "How it works";
  const title = isEs
    ? "Hacemos esto en compañía."
    : "We do this in company.";
  const intro = isEs
    ? "Otros llevan décadas haciendo este trabajo dentro de Venezuela. Nosotros llevamos los recursos hasta sus manos. La intención es pequeña y precisa."
    : "Others have spent decades doing this work inside Venezuela. We carry the resources to their hands. The intention is small and precise.";

  const cards = isEs
    ? [
        {
          icon: HandHeart,
          word: "Recogemos.",
          body: "Donaciones desde fuera de Venezuela. Personas que creen que un niño con un libro cambia más de lo que parece.",
        },
        {
          icon: Sun,
          word: "Acompañamos.",
          body: "Las llevamos hasta las manos de las organizaciones que ya están haciendo el trabajo dentro del país.",
        },
        {
          icon: BookOpen,
          word: "Sostenemos.",
          body: "Cada euro termina donde un niño venezolano lo está esperando. Una página que se abre. Una pregunta hecha en voz alta.",
        },
      ]
    : [
        {
          icon: HandHeart,
          word: "We gather.",
          body: "Donations from outside Venezuela. People who believe a child with a book changes more than it looks like it should.",
        },
        {
          icon: Sun,
          word: "We accompany.",
          body: "We carry them to the hands of organizations already doing the work inside the country.",
        },
        {
          icon: BookOpen,
          word: "We sustain.",
          body: "Every euro lands where a Venezuelan child is waiting. A page that opens. A question asked out loud.",
        },
      ];

  return (
    <section
      id={isEs ? "como" : "how"}
      className="bg-paper text-ink py-24 sm:py-32"
    >
      <div className="mx-auto max-w-(--container-wide) px-5 sm:px-8">
        <div className="max-w-(--container-prose) mb-16">
          <p className="font-display text-xs tracking-widest uppercase text-ink-muted mb-4">
            {eyebrow}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight leading-[0.95]">
            {title}
          </h2>
          <p className="mt-6 font-serif text-lg sm:text-xl text-ink-soft leading-relaxed">
            {intro}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={c.word}
              className="rounded-(--radius-card) bg-paper-pure border border-ink/[0.08] shadow-(--shadow-soft) p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-xs tracking-widest text-ink-muted">
                  0{i + 1}
                </span>
                <c.icon
                  className="size-7 text-azul"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </div>
              <h3 className="font-display text-3xl tracking-tight text-ink">
                {c.word}
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
