import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to Propagaluz. camila@propagaluz.com",
  alternates: {
    canonical: "/en/contact",
    languages: { "es-ES": "/contacto", "en-US": "/en/contact" },
  },
};

export default function ContactPageEn() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-(--container-prose) px-5 sm:px-8">
        <Link
          href="/en"
          className="font-sans text-xs tracking-widest uppercase text-ink-muted hover:text-ink"
        >
          ← Propagaluz
        </Link>
        <h1 className="mt-6 font-serif text-4xl sm:text-5xl tracking-tight">
          Write to us
        </h1>
        <p className="mt-6 font-serif text-lg sm:text-xl leading-relaxed text-ink-soft">
          For any conversation — donors, organizations, press, family — the address
          is one and we read everything that arrives.
        </p>

        <a
          href="mailto:camila@propagaluz.com"
          className="mt-10 inline-flex items-center font-display tracking-tight text-2xl sm:text-3xl text-ink underline decoration-luz decoration-[4px] underline-offset-[6px] hover:decoration-luz-deep transition-all"
        >
          camila@propagaluz.com
        </a>

        <div className="mt-16 font-serif text-base text-ink-soft leading-relaxed space-y-4">
          <p>
            The foundation is based in Madrid. Formal conversations usually include
            Andrés Casanova Vegas, the foundation's legal officer, who is reachable
            through this same address for now.
          </p>
        </div>
      </div>
    </section>
  );
}
