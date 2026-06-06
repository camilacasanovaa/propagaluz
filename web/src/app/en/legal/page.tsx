import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal notice",
  alternates: {
    canonical: "/en/legal",
    languages: { "es-ES": "/aviso-legal", "en-US": "/en/legal" },
  },
};

export default function LegalPageEn() {
  return (
    <article className="py-20 sm:py-28">
      <div className="mx-auto max-w-(--container-prose) px-5 sm:px-8">
        <Link
          href="/en"
          className="font-sans text-xs tracking-widest uppercase text-ink-muted hover:text-ink"
        >
          ← Propagaluz
        </Link>
        <h1 className="mt-6 font-serif text-3xl sm:text-4xl tracking-tight">
          Legal notice
        </h1>

        <div className="mt-10 space-y-6 font-serif text-base leading-relaxed text-ink-soft">
          <p>
            This site belongs to Propagaluz, a foundation in registration in Spain.
            The information published here is for informational purposes and will
            grow as the registration process advances.
          </p>
          <p>
            <strong>Contact.</strong> camila@propagaluz.com
          </p>
          <p>
            <strong>Intellectual property.</strong> The texts and materials published
            on this site belong to Propagaluz or to those who granted them. Historical
            photographs of El Carabobeño and the Alemán family are used with family
            consent. Any reproduction requires prior authorization.
          </p>
          <p>
            <strong>Legal officer.</strong> Andrés Casanova Vegas, legal officer of
            the foundation during the founder's minority. Reachable through the
            common email.
          </p>
          <p className="text-sm text-ink-muted pt-6">
            This page will be updated with the registration number, fiscal address,
            and remaining required legal information once the registration process
            is complete.
          </p>
        </div>
      </div>
    </article>
  );
}
