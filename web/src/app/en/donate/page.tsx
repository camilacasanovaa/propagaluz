import type { Metadata } from "next";
import Link from "next/link";
import { DonationWaitlist } from "@/components/DonationWaitlist";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Propagaluz is being registered in Spain. We will write to you when we can receive donations.",
  alternates: {
    canonical: "/en/donate",
    languages: { "es-ES": "/donar", "en-US": "/en/donate" },
  },
};

export default function DonatePageEn() {
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
          Support Propagaluz
        </h1>
        <p className="mt-6 font-serif text-lg sm:text-xl leading-relaxed text-ink-soft">
          The foundation is being registered in Spain. As soon as the process is
          complete and we can formally receive donations, we will write to you.
          Meanwhile, leave us your email and read the manifesto.
        </p>

        <div className="mt-10">
          <DonationWaitlist locale="en" variant="block" />
        </div>

        <div className="mt-12 font-serif text-base text-ink-soft leading-relaxed">
          <p>
            Every euro, every dollar, and every bolívar that passes through our hands
            will have a known destination and a verifiable result. Each year we will
            publish a detailed account of where the money traveled.
          </p>
        </div>
      </div>
    </section>
  );
}
