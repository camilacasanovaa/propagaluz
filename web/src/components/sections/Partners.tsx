type Props = { locale: "es" | "en" };

export function Partners({ locale }: Props) {
  const isEs = locale === "es";

  const copy = isEs
    ? {
        label: "Adonde llega",
        titleLines: ["Dos fundaciones.", "Un propósito."],
        lede: "Dos organizaciones que llevan piezas distintas de la misma respuesta. Una abre aulas donde el Estado se ha retirado. La otra defiende la voz de la infancia en la vida pública. Canalizamos lo que recibimos a las dos.",
        partners: [
          {
            name: "Fe y Alegría",
            since: "Desde 1955 · 200+ escuelas",
            body: [
              "Un movimiento de educación popular que empezó como una sola escuela en un barrio pobre de Caracas y ha crecido hasta tener presencia en más de veinte países. En Venezuela sigue siendo la mayor red no estatal de escuelas para niños en los márgenes.",
              "Operan más de doscientas escuelas en las comunidades más vulnerables del país: pagan maestros, alimentan a los niños, proveen libros y currículo donde el Estado se ha retirado. Su trabajo abarca desde preescolar hasta formación técnica, y alcanza a cientos de miles de niños que de otro modo no tendrían acceso a una educación constante.",
            ],
          },
          {
            name: "CECODAP",
            since: "Desde 1984 · Caracas",
            body: [
              "Una organización de derechos de la infancia nacida en Caracas, fundada por educadores y defensores decididos a hacer visible a la niñez en la vida pública venezolana. La organización surgió de la convicción de que los niños no son objetos de protección — son personas con voz, derechos, y la capacidad de moldear el mundo que los rodea.",
              "CECODAP forma maestros, acompaña a las familias en momentos difíciles, publica libros para y por niños, y dirige programas que llevan a los jóvenes a la vida cívica. En un país donde las condiciones de la infancia se han vuelto cada vez más frágiles, su trabajo permanece firme — defendiendo el derecho de cada niño venezolano a ser escuchado.",
            ],
          },
        ],
      }
    : {
        label: "Where it lands",
        titleLines: ["Two foundations.", "One purpose."],
        lede: "Two organizations carrying different pieces of the same answer. One opens classrooms where the state has receded. The other defends the voice of childhood in public life. We channel what comes in to both.",
        partners: [
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
          {copy.titleLines[0]}
          <br />
          {copy.titleLines[1]}
        </h2>
        <p className="mt-6 text-lg text-ink-soft max-w-[42rem] leading-relaxed">
          {copy.lede}
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {copy.partners.map((p) => (
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
