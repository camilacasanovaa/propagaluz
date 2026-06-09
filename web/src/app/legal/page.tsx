import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal notice",
  alternates: { canonical: "/legal" },
};

export default function LegalPage() {
  return (
    <article className="py-20 sm:py-28">
      <div className="mx-auto max-w-(--container-prose) px-5 sm:px-8">
        <Link
          href="/"
          className="text-xs tracking-widest uppercase text-ink-muted hover:text-ink"
        >
          &larr; Propagaluz
        </Link>
        <h1 className="mt-6 font-head text-3xl sm:text-4xl tracking-tight">
          Legal notice
        </h1>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-ink-soft">
          <p>
            This site belongs to Propagaluz, a foundation in the process of
            registration as a 501(c)(3) in the United States. The information
            published here is for informational purposes and will grow as
            registration advances.
          </p>
          <p>
            <strong>Contact.</strong> camila@propagaluz.com
          </p>
          <p>
            <strong>Intellectual property.</strong> Texts and materials
            published on this site belong to Propagaluz or to those who granted
            them. Any reproduction requires prior authorization.
          </p>
          <p>
            <strong>Legal officer.</strong> Andrés Casanova Vegas serves as the
            adult legal officer of the foundation during the founder&rsquo;s
            minority. Reachable through the common email.
          </p>
          <p className="text-sm text-ink-muted pt-6">
            This page will be updated with the registration number, fiscal
            address, and remaining required legal information once the
            501(c)(3) registration process is complete.
          </p>
        </div>
      </div>
    </article>
  );
}
