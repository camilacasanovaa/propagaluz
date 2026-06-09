const stats = [
  {
    label: "Out of school",
    num: "3M",
    big: true,
    body:
      "children and young people in Venezuela are out of school — 34% of everyone aged 3 to 24.",
    source: "UNICEF · 2024–2025",
  },
  {
    label: "Teachers gone",
    num: "200K+",
    big: false,
    body:
      "teachers have left the country since 2017. Those who stay often work two days a week.",
    source: "Humanitarian sources",
  },
  {
    label: "Irregular class",
    num: "40%",
    big: false,
    body: "of students aged 3 to 17 attended class irregularly in 2023.",
    source: "UNICEF",
  },
  {
    label: "Enrollment drop",
    num: "37%",
    big: false,
    body: "decline in school enrollment over the most recent measured period.",
    source: "UNICEF · New Humanitarian",
  },
];

export function Stakes() {
  return (
    <section className="py-24 sm:py-28 px-6 sm:px-10">
      <div className="mx-auto max-w-(--container-wide)">
        <p className="section-label">Why education?</p>
        <h2
          className="font-head mt-4"
          style={{
            fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          Because a generation cannot wait{" "}
          <span
            className="font-script"
            style={{
              color: "var(--color-luz)",
              fontSize: "1.15em",
              display: "inline-block",
              transform: "translateY(0.08em)",
            }}
          >
            forever
          </span>
          .
        </h2>
        <p className="mt-6 text-lg text-ink-soft max-w-[38rem] leading-relaxed">
          Behind every figure is a child losing a year, a teacher who has left
          the classroom, a desk that sits empty. Every year that passes raises
          the cost of catching up.
        </p>

        <dl className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`rounded-(--radius-card) p-7 flex flex-col min-h-[18rem] ${
                s.big ? "bg-luz sm:col-span-2 lg:col-span-1" : "bg-paper-deep"
              }`}
            >
              <span className="section-label">{s.label}</span>
              <dt
                className="font-head mt-2"
                style={{
                  fontSize: s.big ? "4rem" : "2.5rem",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </dt>
              <dd className="mt-auto text-sm text-ink-soft leading-relaxed">
                {s.body}
              </dd>
              <p className="mt-3 section-label">{s.source}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
