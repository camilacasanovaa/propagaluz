import { DonationWaitlist } from "../DonationWaitlist";

type Props = { locale: "es" | "en" };

export function Donate({ locale }: Props) {
  const isEs = locale === "es";
  const id = isEs ? "donar" : "donate";

  const copy = isEs
    ? {
        eyebrow: "Apoyar",
        title: "Donde tu dólar se convierte en luz.",
        body: "Aún estamos completando el registro como organización sin fines de lucro en Estados Unidos. Cuando abramos, te avisamos. Mientras tanto, elige una cantidad y deja tu correo —para que esté listo el día que abramos.",
        close: "Lo demás se gana día a día.",
      }
    : {
        eyebrow: "Support",
        title: "Where your dollar becomes light.",
        body: "We are still completing the registration as a non-profit in the United States. When we open, we will write to you. Until then, choose an amount and leave your email — ready for the day we open.",
        close: "The rest is earned, day by day.",
      };

  return (
    <section id={id} className="section-rule bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-(--container-wide) px-6 sm:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-5">{copy.eyebrow}</p>
          <h2 className="font-serif-display text-4xl sm:text-6xl tracking-tight text-ink leading-[1.0]">
            {copy.title}
          </h2>
          <p className="mt-8 font-serif text-lg sm:text-xl leading-relaxed text-ink-soft max-w-md">
            {copy.body}
          </p>
          <p className="mt-12 font-serif-display-italic text-2xl sm:text-3xl text-ink/80">
            {copy.close}
          </p>
        </div>

        <div className="lg:col-span-6 lg:sticky lg:top-24">
          <DonationWaitlist locale={locale} />
        </div>
      </div>
    </section>
  );
}
