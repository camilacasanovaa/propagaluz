import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Origin",
  description:
    "The origin of Propagaluz. A continuation of a family vocation nearly a century old. A letter from Camila Casanova, founder.",
  alternates: {
    canonical: "/en/origin",
    languages: { "es-ES": "/origen", "en-US": "/en/origin" },
  },
};

export default function OriginPageEn() {
  return (
    <article className="py-20 sm:py-28">
      <div className="mx-auto max-w-(--container-prose) px-5 sm:px-8">
        <Link
          href="/en"
          className="font-sans text-xs tracking-widest uppercase text-ink-muted hover:text-ink"
        >
          ← Propagaluz
        </Link>
        <h1 className="mt-6 font-display text-xs tracking-widest uppercase text-carabobo">
          Origin
        </h1>

        <div className="mt-10 mb-16 rounded-(--radius-card) bg-paper-pure border border-ink/[0.08] p-8 sm:p-12 text-center">
          <p className="font-display text-xs tracking-widest uppercase text-ink-muted">
            A letter from Camila Casanova
          </p>
          <p className="mt-4 font-serif text-base text-ink-muted italic">
            (coming soon — in her own hand)
          </p>
        </div>

        <div className="space-y-7 font-serif text-lg leading-[1.7] text-ink">
          <p>
            Almost a hundred years ago, my great-grandfather, Eladio Alemán Sucre,
            started a small newspaper in Valencia, Venezuela. He called it
            Propagaluz. The idea was simple: spread light. Later he founded a bigger
            one, a daily that would live almost a century: El Carabobeño. But the
            first, the weekly, carried that name.
          </p>

          <figure className="my-12">
            <div className="relative aspect-[5/4] rounded-(--radius-card) overflow-hidden shadow-(--shadow-card) bg-ink/5">
              <Image
                src="/family/Eladio-Eduardo-AlfonsoMarin-tres-generaciones.jpg"
                alt="Eladio Alemán Sucre, Eduardo Alemán Pérez and Alfonso Marín at the El Carabobeño facility."
                fill
                sizes="(min-width: 768px) 44rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 font-sans text-xs text-ink-muted">
              Eladio Alemán Sucre, Eduardo Alemán Pérez, and chronicler Alfonso Marín
              at the El Carabobeño facility.
            </figcaption>
          </figure>

          <p>
            My grandfather, Eduardo Alemán Pérez, took up that work and held it for
            thirty-seven years. My family called him Opa: in Dutch, grandfather. When
            he died, in 2021, I knew it was my turn.
          </p>

          <p>
            This foundation was born of that certainty. It carries the name of the
            weekly my great-grandfather wrote almost a century ago, and it keeps Opa
            inside it: at the center of the word <em>propagaluz</em>, three letters
            wide, his name continues.
          </p>

          <figure className="my-12">
            <div className="relative aspect-[3/2] rounded-(--radius-card) overflow-hidden shadow-(--shadow-card) bg-ink/5">
              <Image
                src="/family/Eduardo-Aleman-Perez-desk.jpg"
                alt="Eduardo Alemán Pérez reading the newspaper at his desk."
                fill
                sizes="(min-width: 768px) 44rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 font-sans text-xs text-ink-muted">
              Eduardo Alemán Pérez at his desk.
            </figcaption>
          </figure>

          <p>
            What my family did for a hundred years was put words where they were
            needed. Propagaluz today does something smaller and more direct: it
            carries resources to the people sustaining the education of Venezuelan
            children inside the country.
          </p>

          <p className="font-display text-2xl sm:text-3xl tracking-tight text-ink pt-4">
            The medium changes. The work continues.
          </p>

          <p className="font-sans text-sm text-ink-muted pt-2">— Camila Casanova</p>
        </div>

        <div className="mt-16 pt-10 border-t border-ink/10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <Link
            href="/en/manifesto"
            className="font-sans text-sm border-b border-ink pb-1 hover:border-carabobo hover:text-carabobo transition-colors w-fit"
          >
            Read the manifesto →
          </Link>
          <Link
            href="/en/donate"
            className="inline-flex items-center justify-center px-5 py-3 rounded-(--radius-pill) bg-luz text-ink font-display tracking-wide text-sm hover:bg-luz-deep transition-colors w-fit"
          >
            Support it
          </Link>
        </div>
      </div>
    </article>
  );
}
