import { DonationWaitlist } from "../DonationWaitlist";

type Props = { locale: "es" | "en" };

export function Hero({ locale }: Props) {
  const isEs = locale === "es";

  const copy = isEs
    ? {
        headlineA: "CADA NIÑO,",
        headlineB: "una luz", // shown in Fraunces italic
        subhead:
          "Propagaluz acompaña la educación de los niños venezolanos. Desde Madrid, hacia Venezuela. Sin medias tintas.",
      }
    : {
        headlineA: "EVERY CHILD,",
        headlineB: "a light",
        subhead:
          "Propagaluz supports the education of Venezuelan children. From Madrid, toward Venezuela. Without half-measures.",
      };

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-(--container-wide) px-5 sm:px-8 pt-12 pb-20 sm:pt-20 sm:pb-28">
        {/* Trust pills */}
        <div className="flex flex-wrap gap-2 mb-12 font-sans text-xs tracking-widest">
          <span className="rounded-(--radius-pill) border border-ink/20 px-3.5 py-1.5 text-ink-soft uppercase">
            Est. 2026
          </span>
          <span className="rounded-(--radius-pill) border border-ink/20 px-3.5 py-1.5 text-ink-soft uppercase">
            Madrid
          </span>
          <span className="rounded-(--radius-pill) border border-ink/20 px-3.5 py-1.5 text-ink-soft uppercase">
            Caracas
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Headline · left */}
          <div className="lg:col-span-7 rise">
            <h1 className="font-display text-[clamp(3.25rem,9vw,8rem)] leading-[0.92] tracking-tight text-ink">
              {copy.headlineA}
              <br />
              <span className="font-accent italic font-normal text-azul">
                {copy.headlineB}
              </span>
              <span className="text-luz">.</span>
            </h1>

            <p className="mt-8 max-w-(--container-narrow) font-serif text-lg sm:text-xl text-ink-soft leading-relaxed">
              {copy.subhead}
            </p>
          </div>

          {/* Donation card · right */}
          <div className="lg:col-span-5 rise" style={{ animationDelay: "120ms" }}>
            <DonationWaitlist locale={locale} variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
