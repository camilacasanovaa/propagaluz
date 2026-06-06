type Props = { locale: "es" | "en" };

export function Transparency({ locale }: Props) {
  const isEs = locale === "es";

  const eyebrow = isEs ? "Transparencia" : "Transparency";
  const title = isEs
    ? "Lo que prometemos lo cumplimos."
    : "What we promise, we keep.";
  const body = isEs
    ? "Cada euro, cada dólar y cada bolívar que pase por nuestras manos tendrá un destino conocido y un resultado verificable. Publicaremos cada año una cuenta detallada de adónde viajó el dinero, hacia quién, con qué resultado. El donante y el destinatario verán el mismo número."
    : "Every euro, every dollar, every bolívar that passes through our hands will have a known destination and a verifiable result. Each year we will publish a detailed account of where the money traveled, to whom, with what outcome. The donor and the recipient will see the same number.";

  return (
    <section className="py-20 sm:py-28 bg-ink text-paper">
      <div className="mx-auto max-w-(--container-prose) px-5 sm:px-8">
        <p className="font-display text-xs tracking-widest uppercase text-luz mb-6">
          {eyebrow}
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl tracking-tight leading-tight">
          {title}
        </h2>
        <p className="mt-8 font-serif text-lg sm:text-xl leading-relaxed text-paper/85">
          {body}
        </p>
      </div>
    </section>
  );
}
