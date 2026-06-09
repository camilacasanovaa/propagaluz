type Props = { locale: "es" | "en" };

export function Stakes({ locale }: Props) {
  const isEs = locale === "es";

  const copy = isEs
    ? {
        label: "Por qué la educación",
        titleA: "Porque una generación no puede esperar",
        titleScript: "para siempre",
        lede:
          "Detrás de cada cifra hay un niño que pierde un año, un maestro que ha dejado el aula, un pupitre que se queda vacío. Cada año que pasa aumenta el precio de recuperar el tiempo perdido.",
        stats: [
          {
            label: "Fuera de la escuela",
            num: "3M",
            big: true,
            body:
              "niños y jóvenes en Venezuela están fuera de la escuela — el 34% de la población entre 3 y 24 años.",
            source: "UNICEF · 2024–2025",
          },
          {
            label: "Maestros se han ido",
            num: "200K+",
            body:
              "maestros han dejado el país desde 2017. Los que quedan trabajan, muchas veces, dos días a la semana.",
            source: "Fuentes humanitarias",
          },
          {
            label: "Asistencia irregular",
            num: "40%",
            body: "de los estudiantes entre 3 y 17 años asistió a clase de forma irregular en 2023.",
            source: "UNICEF",
          },
          {
            label: "Matrícula a la baja",
            num: "37%",
            body: "de caída en la matrícula escolar durante el período más reciente medido.",
            source: "UNICEF · New Humanitarian",
          },
        ],
      }
    : {
        label: "Why education?",
        titleA: "Because a generation cannot wait",
        titleScript: "forever",
        lede:
          "Behind every figure is a child losing a year, a teacher who has left the classroom, a desk that sits empty. Every year that passes raises the cost of catching up.",
        stats: [
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
            body:
              "teachers have left the country since 2017. Those who stay often work two days a week.",
            source: "Humanitarian sources",
          },
          {
            label: "Irregular class",
            num: "40%",
            body: "of students aged 3 to 17 attended class irregularly in 2023.",
            source: "UNICEF",
          },
          {
            label: "Enrollment drop",
            num: "37%",
            body: "decline in school enrollment over the most recent measured period.",
            source: "UNICEF · New Humanitarian",
          },
        ],
      };

  return (
    <section className="py-24 sm:py-28 px-6 sm:px-10">
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
        <p className="mt-6 text-lg text-ink-soft max-w-[38rem] leading-relaxed">
          {copy.lede}
        </p>

        <dl className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.stats.map((s, i) => (
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
