import Image from "next/image";

type Props = { locale: "es" | "en" };

export function Origen({ locale }: Props) {
  const isEs = locale === "es";
  const id = isEs ? "origen" : "origin";

  const copy = isEs
    ? {
        eyebrow: "Origen",
        accent: "Una herencia",
        body: "Hace casi cien años, mi bisabuelo, Eladio Alemán Sucre, fundó un periódico pequeño en Valencia. Lo llamó Propagaluz. Más tarde fundó El Carabobeño, que dirigió mi abuelo, Eduardo Alemán Pérez —en casa lo llamábamos Opa— durante treinta y siete años. Cuando murió, en 2021, supe que me tocaba a mí. Esta fundación lleva el mismo nombre, casi un siglo después, con otra herramienta.",
        signature: "— Camila Casanova",
        captionA:
          "Eladio Alemán Sucre, Eduardo Alemán Pérez y el cronista Alfonso Marín.",
        captionB: "Eduardo Alemán Pérez en su despacho.",
      }
    : {
        eyebrow: "Origin",
        accent: "An inheritance",
        body: "Almost a hundred years ago, my great-grandfather, Eladio Alemán Sucre, started a small newspaper in Valencia. He called it Propagaluz. Later he founded El Carabobeño, which my grandfather, Eduardo Alemán Pérez — at home we called him Opa — ran for thirty-seven years. When he died, in 2021, I knew it was my turn. This foundation carries the same name, almost a century later, with a different medium.",
        signature: "— Camila Casanova",
        captionA:
          "Eladio Alemán Sucre, Eduardo Alemán Pérez and chronicler Alfonso Marín.",
        captionB: "Eduardo Alemán Pérez at his desk.",
      };

  return (
    <section
      id={id}
      className="bg-paper-deep py-24 sm:py-32 border-y border-ink/[0.06]"
    >
      <div className="mx-auto max-w-(--container-wide) px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left · text */}
          <div className="lg:col-span-7">
            <p className="font-display text-xs tracking-widest uppercase text-ink-muted mb-4">
              {copy.eyebrow}
            </p>
            <h2 className="font-accent italic text-5xl sm:text-6xl tracking-tight text-azul leading-[1.0]">
              {copy.accent}.
            </h2>
            <p className="mt-8 font-serif text-lg leading-[1.75] text-ink max-w-(--container-prose)">
              {copy.body}
            </p>
            <p className="mt-6 font-sans text-sm text-ink-muted">
              {copy.signature}
            </p>
          </div>

          {/* Right · two stacked photos */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <figure>
              <div className="relative aspect-[4/3] rounded-(--radius-card) overflow-hidden shadow-(--shadow-card) bg-ink/5">
                <Image
                  src="/family/Eladio-Eduardo-AlfonsoMarin-tres-generaciones.jpg"
                  alt={copy.captionA}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 font-sans text-xs text-ink-muted">
                {copy.captionA}
              </figcaption>
            </figure>

            <figure>
              <div className="relative aspect-[3/2] rounded-(--radius-card) overflow-hidden shadow-(--shadow-card) bg-ink/5">
                <Image
                  src="/family/Eduardo-Aleman-Perez-desk.jpg"
                  alt={copy.captionB}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 font-sans text-xs text-ink-muted">
                {copy.captionB}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
