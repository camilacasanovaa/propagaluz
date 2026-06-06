import Image from "next/image";
import { DonationWaitlist } from "../DonationWaitlist";

type HeroProps = {
  locale: "es" | "en";
};

export function Hero({ locale }: HeroProps) {
  const isEs = locale === "es";

  const copy = isEs
    ? {
        headline: "Una palabra puesta en su sitio enciende algo.",
        subhead:
          "Acompañamos la educación de los niños venezolanos. Desde Madrid, hacia Venezuela.",
      }
    : {
        headline: "A word in its proper place sets something alight.",
        subhead:
          "We support the education of Venezuelan children. From Madrid, toward Venezuela.",
      };

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-(--container-wide) px-5 sm:px-8 pt-10 pb-16 sm:pt-16 sm:pb-24">
        {/* Trust pills · top of hero */}
        <div className="flex flex-wrap gap-2 mb-10 font-sans text-xs tracking-wide">
          <span className="rounded-(--radius-pill) border border-ink/[0.18] px-3 py-1.5 text-ink-soft">
            EST. 2026
          </span>
          <span className="rounded-(--radius-pill) border border-ink/[0.18] px-3 py-1.5 text-ink-soft">
            MADRID
          </span>
          <span className="rounded-(--radius-pill) border border-ink/[0.18] px-3 py-1.5 text-ink-soft">
            CARACAS
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left · headline + waitlist */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-ink">
              {copy.headline}
            </h1>
            <p className="mt-6 max-w-(--container-narrow) font-serif text-lg sm:text-xl text-ink-soft leading-relaxed">
              {copy.subhead}
            </p>

            <div className="mt-10">
              <DonationWaitlist locale={locale} variant="hero" />
            </div>
          </div>

          {/* Right · hero photograph */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[5/6] sm:aspect-[4/5] rounded-(--radius-card) overflow-hidden shadow-(--shadow-card)">
              <Image
                src="/family/Eduardo-Aleman-Perez-rotativa.jpg"
                alt={
                  isEs
                    ? "Eduardo Alemán Pérez junto a la rotativa de El Carabobeño"
                    : "Eduardo Alemán Pérez beside the rotary press of El Carabobeño"
                }
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
