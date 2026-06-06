type Props = { locale: "es" | "en" };

export function Partners({ locale }: Props) {
  const isEs = locale === "es";

  const copy = isEs
    ? {
        eyebrow: "En alianza con",
        title: "Dos organizaciones que llevan décadas dentro.",
        body: "Las donaciones que recibimos viajan a dos socios escogidos con cuidado: uno con setenta años de experiencia abriendo escuelas en las comunidades más necesitadas de Venezuela, y otro que defiende los derechos de la infancia desde 1984. No sustituimos su trabajo: lo sostenemos.",
        pending:
          "Las alianzas formales se anunciarán al completar el registro de la fundación.",
      }
    : {
        eyebrow: "In partnership with",
        title: "Two organizations that have spent decades inside.",
        body: "The donations we receive travel to two carefully chosen partners: one with seventy years of opening schools in Venezuela's most underserved communities, and another that has defended the rights of children since 1984. We don't replace their work — we sustain it.",
        pending:
          "Formal partnerships will be announced when the foundation completes its registration.",
      };

  const partners = isEs
    ? [
        {
          name: "Fe y Alegría",
          desc: "Movimiento de educación popular fundado en 1955 en Caracas. Opera más de doscientas escuelas en las comunidades más vulnerables de Venezuela.",
          tag: "Educación",
          since: "Desde 1955",
        },
        {
          name: "CECODAP",
          desc: "Organización que defiende los derechos de niñas, niños y adolescentes en Venezuela. Trata a la infancia como protagonista de su propia voz.",
          tag: "Voz · derechos",
          since: "Desde 1984",
        },
      ]
    : [
        {
          name: "Fe y Alegría",
          desc: "A popular-education movement founded in 1955 in Caracas. Operates more than two hundred schools in Venezuela's most vulnerable communities.",
          tag: "Education",
          since: "Since 1955",
        },
        {
          name: "CECODAP",
          desc: "Organization that defends the rights of children and adolescents in Venezuela. Treats childhood as protagonist of its own voice.",
          tag: "Voice · rights",
          since: "Since 1984",
        },
      ];

  return (
    <section className="section-rule bg-paper-deep/40 py-24 sm:py-32">
      <div className="mx-auto max-w-(--container-wide) px-6 sm:px-10">
        <p className="eyebrow mb-5">{copy.eyebrow}</p>
        <h2 className="font-serif-display text-4xl sm:text-6xl tracking-tight text-ink max-w-3xl">
          {copy.title}
        </h2>
        <p className="mt-8 font-serif text-lg sm:text-xl leading-relaxed text-ink-soft max-w-2xl">
          {copy.body}
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {partners.map((p) => (
            <article
              key={p.name}
              className="bg-paper-pure border border-rule rounded-(--radius-card) p-8 sm:p-10 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-sans text-xs tracking-widest uppercase text-ink-muted">
                  {p.tag}
                </span>
                <span className="font-sans text-xs tracking-widest uppercase text-ink-muted">
                  {p.since}
                </span>
              </div>
              <h3 className="font-serif-display text-3xl sm:text-4xl tracking-tight text-ink">
                {p.name}
              </h3>
              <p className="mt-5 font-serif text-base leading-relaxed text-ink-soft">
                {p.desc}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 font-sans text-xs tracking-widest uppercase text-ink-muted">
          {copy.pending}
        </p>
      </div>
    </section>
  );
}
