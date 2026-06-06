import type { Metadata } from "next";
import Link from "next/link";
import { DonationWaitlist } from "@/components/DonationWaitlist";

export const metadata: Metadata = {
  title: "Donar",
  description:
    "Propagaluz está en proceso de registro en España. Avísanos cuando podamos recibir donaciones.",
  alternates: {
    canonical: "/donar",
    languages: { "es-ES": "/donar", "en-US": "/en/donate" },
  },
};

export default function DonarPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-(--container-prose) px-5 sm:px-8">
        <Link
          href="/"
          className="font-sans text-xs tracking-widest uppercase text-ink-muted hover:text-ink"
        >
          ← Propagaluz
        </Link>
        <h1 className="mt-6 font-serif text-4xl sm:text-5xl tracking-tight">
          Apoyar Propagaluz
        </h1>
        <p className="mt-6 font-serif text-lg sm:text-xl leading-relaxed text-ink-soft">
          La fundación está en trámites de registro en España. En cuanto el proceso
          termine y podamos recibir donaciones formalmente, te escribimos. Mientras
          tanto, déjanos tu correo y lee el manifiesto.
        </p>

        <div className="mt-10">
          <DonationWaitlist locale="es" variant="block" />
        </div>

        <div className="mt-12 font-serif text-base text-ink-soft leading-relaxed">
          <p>
            Cada euro, cada dólar y cada bolívar que pase por nuestras manos tendrá un
            destino conocido y un resultado verificable. Publicaremos cada año una
            cuenta detallada de adónde viajó el dinero.
          </p>
        </div>
      </div>
    </section>
  );
}
