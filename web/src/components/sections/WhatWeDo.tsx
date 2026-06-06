type Props = { locale: "es" | "en" };

export function WhatWeDo({ locale }: Props) {
  const isEs = locale === "es";

  const copy = isEs
    ? {
        eyebrow: "Qué hacemos",
        title: "Recogemos. Acompañamos. Sostenemos.",
        body: "Propagaluz es una fundación pequeña y precisa. Recoge donaciones fuera de Venezuela y las entrega a las organizaciones que ya están haciendo el trabajo dentro del país. No dirige escuelas ni imprime libros. Lleva los recursos hasta las manos que ya saben qué hacer con ellos —con cuentas claras y resultados verificables.",
        callout: "Es una fundación de intención.",
      }
    : {
        eyebrow: "What we do",
        title: "We gather. We accompany. We sustain.",
        body: "Propagaluz is a small, precise foundation. It gathers donations from outside Venezuela and hands them to the organizations already doing the work inside the country. It does not run schools or print books. It carries resources to the hands that already know what to do with them — with clear accounting and verifiable results.",
        callout: "It is a foundation of intention.",
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
          <p className="mt-10 font-serif-display-italic text-3xl sm:text-4xl text-ink/85">
            {copy.callout}
          </p>
        </div>
      </div>
    </section>
  );
}
