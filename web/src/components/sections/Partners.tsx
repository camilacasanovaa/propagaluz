const partners = [
  {
    name: "Fe y Alegría",
    since: "Since 1955 · 200+ schools",
    body: [
      "A movement of popular education that began as a single school in a poor Caracas neighborhood and has grown into a presence across more than twenty countries. In Venezuela it remains the largest non-state network of schools serving children at the margins.",
      "They run more than two hundred schools across the country's most vulnerable communities: paying teachers, feeding children, providing books and curriculum where the state has receded. Their work spans preschool through technical training, and reaches hundreds of thousands of children who would otherwise have no consistent education at all.",
    ],
  },
  {
    name: "CECODAP",
    since: "Since 1984 · Caracas",
    body: [
      "A children's-rights organization born in Caracas, founded by educators and advocates determined to make childhood visible in Venezuelan public life. The organization grew out of the conviction that children are not objects of protection — they are people with voices, rights, and the ability to shape the world around them.",
      "CECODAP trains teachers, accompanies families through difficult moments, publishes books for and by children, and runs programs that bring young people into civic life. In a country where the conditions of childhood have become increasingly fragile, their work holds steady — defending the right of every Venezuelan child to be heard.",
    ],
  },
];

export function Partners() {
  return (
    <section className="py-24 sm:py-28 px-6 sm:px-10">
      <div className="mx-auto max-w-(--container-wide)">
        <p className="section-label">Where it lands</p>
        <h2
          className="font-head mt-4"
          style={{
            fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          Two foundations.
          <br />
          One purpose.
        </h2>
        <p className="mt-6 text-lg text-ink-soft max-w-[42rem] leading-relaxed">
          Two organizations carrying different pieces of the same answer. One
          opens classrooms where the state has receded. The other defends the
          voice of childhood in public life. We channel what comes in to both.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {partners.map((p) => (
            <article
              key={p.name}
              className="rounded-(--radius-card) bg-ink text-white p-10 flex flex-col min-h-[24rem]"
            >
              <h3
                className="font-head text-white"
                style={{
                  fontSize: "1.85rem",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                }}
              >
                {p.name}
              </h3>
              <div className="mt-6 text-base leading-[1.65] text-white/78 space-y-4">
                {p.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-auto pt-6 section-label text-white/45">
                {p.since}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
