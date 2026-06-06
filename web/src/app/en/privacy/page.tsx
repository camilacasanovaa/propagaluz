import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy",
  alternates: {
    canonical: "/en/privacy",
    languages: { "es-ES": "/privacidad", "en-US": "/en/privacy" },
  },
};

export default function PrivacyPageEn() {
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
          Privacy policy
        </h1>

        <div className="mt-10 space-y-6 font-serif text-base leading-relaxed text-ink-soft">
          <p>
            This page describes how Propagaluz handles the personal data we receive
            through the donation-waitlist form and any email sent to{" "}
            <a className="underline" href="mailto:camila@propagaluz.com">camila@propagaluz.com</a>.
          </p>
          <p>
            <strong>Controller.</strong> Propagaluz, in registration in Spain.
            Contact: camila@propagaluz.com.
          </p>
          <p>
            <strong>Data we collect.</strong> Only the email address you voluntarily
            provide when signing up for the waitlist. We do not use tracking or
            marketing cookies.
          </p>
          <p>
            <strong>Purpose.</strong> To notify you when the foundation formally opens
            donations, and to share occasional updates about its work.
          </p>
          <p>
            <strong>Retention.</strong> We retain your email until you ask us to
            remove it, or until the foundation ceases operation.
          </p>
          <p>
            <strong>Your rights.</strong> You may exercise the rights of access,
            rectification, erasure, opposition, restriction and portability at any
            time by writing to camila@propagaluz.com.
          </p>
          <p className="text-sm text-ink-muted pt-6">
            This policy will be updated once the foundation completes its formal
            registration, when we will add the legal officer's details and the
            specific GDPR legal basis.
          </p>
        </div>
      </div>
    </article>
  );
}
