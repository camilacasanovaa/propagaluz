type Props = { locale: "es" | "en" };

// Statistics with citations — sources verified via UNICEF + The New Humanitarian
// (notes in research/legacy/legacy-research.md continuation will be added later)
const STATS_ES = [
  {
    figure: "3 millones",
    body: "de niños y jóvenes en Venezuela están fuera de la escuela —el 34% de toda la población entre 3 y 24 años.",
    source: "UNICEF, 2024–2025",
  },
  {
    figure: "200.000",
    body: "maestros han dejado el país desde 2017. Los que se quedan trabajan, muchas veces, dos días a la semana en escuelas sin recursos.",
    source: "Múltiples fuentes humanitarias, 2025",
  },
  {
    figure: "40%",
    body: "de los estudiantes de 3 a 17 años asistían a clase de forma irregular en 2023. La caída en matrícula llega al 37%.",
    source: "UNICEF · The New Humanitarian, 2025",
  },
];

const STATS_EN = [
  {
    figure: "3 million",
    body: "children and young people in Venezuela are out of school — 34% of the entire population aged 3 to 24.",
    source: "UNICEF, 2024–2025",
  },
  {
    figure: "200,000",
    body: "teachers have left the country since 2017. Those who remain often work two days a week in under-resourced schools.",
    source: "Multiple humanitarian sources, 2025",
  },
  {
    figure: "40%",
    body: "of students aged 3 to 17 attended class irregularly in 2023. Enrollment has dropped 37%.",
    source: "UNICEF · The New Humanitarian, 2025",
  },
];

export function Stakes({ locale }: Props) {
  const isEs = locale === "es";
  const stats = isEs ? STATS_ES : STATS_EN;

  const copy = isEs
    ? {
        eyebrow: "Por qué la educación",
        title: "Una generación está creciendo en pausa.",
        lead: "Venezuela vive la crisis educativa más severa de su historia reciente. Los números son fríos, pero detrás de cada cifra hay una niña que se queda sin clase, un niño que pierde un año, un maestro que tuvo que irse.",
      }
    : {
        eyebrow: "Why education",
        title: "A generation is growing up in pause.",
        lead: "Venezuela is living the most severe education crisis in its recent history. The numbers are cold, but behind each one is a girl who loses her class, a boy who loses a year, a teacher who had to leave.",
      };

  return (
    <section className="section-rule bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-(--container-wide) px-6 sm:px-10">
        <p className="eyebrow mb-5">{copy.eyebrow}</p>
        <h2 className="font-serif-display text-4xl sm:text-6xl tracking-tight text-ink max-w-3xl">
          {copy.title}
        </h2>
        <p className="mt-8 font-serif text-lg sm:text-xl leading-relaxed text-ink-soft max-w-2xl">
          {copy.lead}
        </p>

        <dl className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.figure} className="border-t border-rule pt-6">
              <dt className="font-display text-5xl sm:text-6xl text-ink tracking-tight">
                {s.figure}
              </dt>
              <dd className="mt-4 font-serif text-base leading-relaxed text-ink-soft">
                {s.body}
              </dd>
              <p className="mt-3 font-sans text-xs tracking-widest uppercase text-ink-muted">
                {s.source}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
