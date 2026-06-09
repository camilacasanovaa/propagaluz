import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-rule bg-paper pt-16 pb-8 px-6 sm:px-10">
      <div className="mx-auto max-w-(--container-wide) grid gap-12 sm:grid-cols-12">
        <div className="sm:col-span-6">
          <Link
            href="/"
            aria-label="Propagaluz"
            className="inline-flex items-center gap-2.5"
          >
            <svg
              viewBox="0 0 22 16"
              width="22"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <polygon points="0,4 22,0 22,16 0,12" fill="#1a1a1a" />
            </svg>
            <span
              className="font-head text-ink"
              style={{
                fontSize: "1rem",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                textTransform: "lowercase",
                lineHeight: 1,
              }}
            >
              propagaluz
            </span>
          </Link>
          {/* Spanish tagline kept as the single bilingual accent in the footer. */}
          <p
            className="mt-6 font-script"
            style={{
              fontSize: "1.65rem",
              color: "var(--color-luz-deep)",
              lineHeight: 1.2,
            }}
            lang="es"
          >
            propaga la luz.
          </p>
          <p className="mt-6 text-sm text-ink-muted max-w-md">
            Foundation in process of registration as a 501(c)(3) in the United
            States.
          </p>
        </div>

        <div className="sm:col-span-3">
          <h4 className="section-label mb-3">Write to us</h4>
          <a
            href="mailto:camila@propagaluz.com"
            className="block text-base text-ink hover:text-ink-soft transition-colors"
          >
            camila@propagaluz.com
          </a>
        </div>

        <div className="sm:col-span-3">
          <h4 className="section-label mb-3">Legal</h4>
          <Link
            href="/legal"
            className="block text-sm text-ink-soft hover:text-ink"
          >
            Legal notice
          </Link>
          <Link
            href="/privacy"
            className="block text-sm text-ink-soft hover:text-ink"
          >
            Privacy policy
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-(--container-wide) mt-12 pt-5 border-t border-rule flex justify-between text-xs text-ink-muted tracking-widest uppercase font-head font-medium">
        <span>&copy; {new Date().getFullYear()} Propagaluz</span>
        <span>Made with intention</span>
      </div>
    </footer>
  );
}
