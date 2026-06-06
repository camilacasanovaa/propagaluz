import { ShieldCheck, Coins, FileText } from "lucide-react";

type Props = { locale: "es" | "en" };

export function Promise({ locale }: Props) {
  const isEs = locale === "es";
  const id = isEs ? "promesa" : "promise";

  const eyebrow = isEs ? "La promesa" : "The promise";

  const copy = isEs
    ? {
        headline: "Lo que prometemos",
        accent: "lo cumplimos",
        body: "Cada euro, cada dólar y cada bolívar que pase por nuestras manos tendrá un destino conocido y un resultado verificable. El donante y el destinatario verán el mismo número.",
        commitments: [
          {
            icon: Coins,
            title: "Cada euro tiene un destino.",
            body: "Sabemos exactamente a quién llega cada donación, y cuándo.",
          },
          {
            icon: FileText,
            title: "Cuentas anuales públicas.",
            body: "Publicamos cada año una cuenta detallada: a dónde viajó el dinero, hacia quién, con qué resultado.",
          },
          {
            icon: ShieldCheck,
            title: "Sin opacidad.",
            body: "Si llega un momento de parar, lo decimos en voz alta. La integridad se gana día a día.",
          },
        ],
      }
    : {
        headline: "What we promise",
        accent: "we keep",
        body: "Every euro, every dollar, and every bolívar that passes through our hands will have a known destination and a verifiable result. The donor and the recipient will see the same number.",
        commitments: [
          {
            icon: Coins,
            title: "Every euro has a destination.",
            body: "We know exactly where each donation lands, and when.",
          },
          {
            icon: FileText,
            title: "Annual public accounting.",
            body: "Each year we publish a detailed report: where the money traveled, to whom, with what result.",
          },
          {
            icon: ShieldCheck,
            title: "No opacity.",
            body: "If a moment comes to stop, we say so out loud. Integrity is earned day by day.",
          },
        ],
      };

  return (
    <section id={id} className="bg-azul text-paper py-24 sm:py-32">
      <div className="mx-auto max-w-(--container-wide) px-5 sm:px-8">
        <p className="font-display text-xs tracking-widest uppercase text-luz mb-6">
          {eyebrow}
        </p>
        <h2 className="font-display text-5xl sm:text-7xl tracking-tight leading-[0.95] max-w-(--container-prose)">
          {copy.headline}
          <br />
          <span className="font-accent italic font-normal text-luz">
            {copy.accent}.
          </span>
        </h2>
        <p className="mt-8 font-serif text-lg sm:text-xl leading-relaxed text-paper/80 max-w-(--container-prose)">
          {copy.body}
        </p>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {copy.commitments.map((c) => (
            <div
              key={c.title}
              className="rounded-(--radius-card) bg-azul-soft/40 border border-paper/10 p-7 flex flex-col"
            >
              <c.icon className="size-7 text-luz mb-6" strokeWidth={1.5} aria-hidden />
              <h3 className="font-display text-xl tracking-tight">{c.title}</h3>
              <p className="mt-3 font-serif text-base leading-relaxed text-paper/75">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
