import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
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
          Privacy policy
        </h1>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-ink-soft">
          <p>
            This page describes how Propagaluz handles the personal data we
            receive through the donation-waitlist form and any email sent to{" "}
            <a
              className="underline"
              href="mailto:camila@propagaluz.com"
            >
              camila@propagaluz.com
            </a>
            .
          </p>
          <p>
            <strong>Controller.</strong> Propagaluz, a 501(c)(3) in registration
            in the United States. Contact: camila@propagaluz.com.
          </p>
          <p>
            <strong>Data we collect.</strong> Only the email address you provide
            voluntarily when signing up for the waitlist. We do not use tracking
            or marketing cookies.
          </p>
          <p>
            <strong>Purpose.</strong> To notify you when the foundation formally
            opens donations, and to share occasional updates about its work.
          </p>
          <p>
            <strong>Retention.</strong> We retain your email until you ask us to
            remove it, or until the foundation ceases operation.
          </p>
          <p>
            <strong>Your rights.</strong> You may request access, correction,
            deletion, or export of your data at any time by writing to
            camila@propagaluz.com.
          </p>
          <p className="text-sm text-ink-muted pt-6">
            This policy will be updated once the foundation completes its
            registration, at which point the legal officer&rsquo;s details and
            the specific governing-law clauses will be added.
          </p>
        </div>
      </div>
    </article>
  );
}
