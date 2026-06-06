import { DonationWaitlist } from "../DonationWaitlist";

type Props = { locale: "es" | "en" };

export function DonateBig({ locale }: Props) {
  const isEs = locale === "es";
  const id = isEs ? "donar" : "donate";

  const copy = isEs
    ? {
        eyebrow: "Apoyar",
        headlineA: "Donde tu euro",
        accent: "se convierte en luz",
        body: "Cuando completemos el registro en España, abriremos donaciones formalmente. Te avisamos en cuanto sea posible — y entonces decides cómo quieres acompañarnos.",
      }
    : {
        eyebrow: "Support",
        headlineA: "Where your euro",
        accent: "becomes light",
        body: "When we complete the Spanish registration, we will formally open donations. We will write to you when it's possible — and then you decide how you want to walk with us.",
      };

  return (
    <section id={id} className="bg-luz text-ink py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-(--container-wide) px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="font-display text-xs tracking-widest uppercase text-ink/65 mb-4">
              {copy.eyebrow}
            </p>
            <h2 className="font-display text-5xl sm:text-7xl tracking-tight leading-[0.95]">
              {copy.headlineA}
              <br />
              <span className="font-accent italic font-normal text-azul">
                {copy.accent}.
              </span>
            </h2>
            <p className="mt-8 font-serif text-lg sm:text-xl leading-relaxed text-ink/85 max-w-(--container-prose)">
              {copy.body}
            </p>
          </div>

          <div className="lg:col-span-5">
            <DonationWaitlist locale={locale} variant="block" />
          </div>
        </div>
      </div>
    </section>
  );
}
