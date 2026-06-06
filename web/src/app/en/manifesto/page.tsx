import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manifesto",
  description:
    "The Propagaluz manifesto. A foundation of intention. A word in its proper place sets something alight.",
  alternates: {
    canonical: "/en/manifesto",
    languages: { "es-ES": "/manifiesto", "en-US": "/en/manifesto" },
  },
};

const PARAGRAPHS = [
  "A word in its proper place sets something alight. The something can travel hand to hand until it changes what seemed unmovable. Propagaluz is the bet on that word, on that something, on those hands.",
  "It is a foundation of intention.",
  "We exist for the children of Venezuela whose childhood is waiting for a school, a class, a notebook, a teacher who stays the whole year. We exist for the girl who already knows she wants to read and still has nowhere to go. We exist for the boy whose pages ran out too soon. We exist for the classroom waiting for children to sit in it again. We exist for the hand learning to hold a pencil for the first time. We exist for the question a child keeps and does not yet know where to ask. We exist for the generation growing up in pause, with the intelligence intact and the opportunity half-given.",
  "We believe a child's dignity fits in concrete things: a chair in a classroom, a whole book ahead, and an adult who listens when they speak. The rest the child builds.",
  "We believe education is a form of light, and that this light, once lit, sustains itself. A class begins. A book opens. A question asked out loud finds an answer. Each gesture multiplies the next.",
  "We believe that a child who learns to read is a child who is going to ask questions. And a child who asks questions is a child who is building, without yet knowing it, the place they will one day arrive.",
  "We do this in company, by choice and because it makes sense. Others have spent decades doing this work in the classrooms of Venezuela, and our place is beside them, with the resources their work deserves. Every euro, every dollar, and every bolívar that passes through our hands will have a destination: a class that continues, a child who returns to school, a girl who asks out loud for the first time.",
  "What we promise, we keep. We will work slowly when slowness is called for, faster when possible, and always at the pace honesty sustains.",
  "This foundation belongs to the children it serves. It is a promise we repeat every day, in their name, with their light ahead.",
  "The rest is earned, day by day.",
];

export default function ManifestoPageEn() {
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
          Manifesto
        </h1>
        <div className="mt-8 space-y-7 font-serif text-lg sm:text-xl leading-[1.65] text-ink">
          {PARAGRAPHS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-ink/10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <Link
            href="/en/origin"
            className="font-sans text-sm border-b border-ink pb-1 hover:border-carabobo hover:text-carabobo transition-colors w-fit"
          >
            Read the origin →
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
