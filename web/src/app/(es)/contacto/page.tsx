import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos a Propagaluz. camila@propagaluz.com",
  alternates: {
    canonical: "/contacto",
    languages: { "es-ES": "/contacto", "en-US": "/en/contact" },
  },
};

export default function ContactoPage() {
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
          Escríbenos
        </h1>
        <p className="mt-6 font-serif text-lg sm:text-xl leading-relaxed text-ink-soft">
          Para cualquier conversación — donantes, organizaciones, prensa, familia — el
          correo es uno solo y leemos todo lo que llega.
        </p>

        <a
          href="mailto:camila@propagaluz.com"
          className="mt-10 inline-flex items-center font-display tracking-tight text-2xl sm:text-3xl text-ink underline decoration-luz decoration-[4px] underline-offset-[6px] hover:decoration-luz-deep transition-all"
        >
          camila@propagaluz.com
        </a>

        <div className="mt-16 font-serif text-base text-ink-soft leading-relaxed space-y-4">
          <p>
            La fundación está basada en Madrid. Las conversaciones formales suelen
            incluir a Andrés Casanova Vegas, responsable legal de la fundación, que
            por ahora se contacta a través de este mismo correo.
          </p>
        </div>
      </div>
    </section>
  );
}
