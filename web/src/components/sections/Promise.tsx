type Props = { locale: "es" | "en" };

export function Promise({ locale }: Props) {
  const isEs = locale === "es";

  const copy = isEs
    ? {
        eyebrow: "Nuestra promesa",
        title: "Lo que prometemos lo cumplimos.",
        body: "Cada euro y cada dólar que pase por nuestras manos tendrá un destino conocido y un resultado verificable. Publicaremos cada año una cuenta detallada: hacia dónde viajó el dinero, hacia quién, con qué resultado. El donante y el destinatario verán el mismo número.",
      }
    : {
        eyebrow: "Our promise",
        title: "What we promise, we keep.",
        body: "Every euro and every dollar that passes through our hands will have a known destination and a verifiable result. Each year we will publish a detailed account: where the money traveled, to whom, with what result. The donor and the recipient will see the same number.",
      };

  return (
    <section className="section-rule bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-(--container-wide) px-6 sm:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="eyebrow">{copy.eyebrow}</p>
        </div>
        <div className="lg:col-span-8">
          <h2 className="font-serif-display text-4xl sm:text-6xl tracking-tight text-ink">
            {copy.title}
          </h2>
          <p className="mt-8 font-serif text-lg sm:text-xl leading-relaxed text-ink-soft max-w-2xl">
            {copy.body}
          </p>
        </div>
      </div>
    </section>
  );
}
