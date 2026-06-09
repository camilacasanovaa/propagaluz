import Link from "next/link";

type FooterProps = { locale: "es" | "en" };

export function Footer({ locale }: FooterProps) {
  const isEs = locale === "es";

  const legal = isEs
    ? [
        { href: "/aviso-legal", label: "Aviso legal" },
        { href: "/privacidad", label: "Política de privacidad" },
      ]
    : [
        { href: "/en/legal", label: "Legal notice" },
        { href: "/en/privacy", label: "Privacy policy" },
      ];

  const note = isEs
    ? "Fundación en proceso de registro como 501(c)(3) en Estados Unidos."
    : "Foundation in process of registration as a 501(c)(3) in the United States.";

  const writeTo = isEs ? "Escríbenos" : "Write to us";
  const langLink = isEs ? { href: "/en", label: "English" } : { href: "/", label: "Español" };
  const tagline = isEs ? "propaga la luz." : "spread the light.";
  const made = isEs ? "Hecho con intención" : "Made with intention";

  return (
    <footer className="border-t border-rule bg-paper pt-16 pb-8 px-6 sm:px-10">
      <div className="mx-auto max-w-(--container-wide) grid gap-12 sm:grid-cols-12">
        <div className="sm:col-span-6">
          <Link href={isEs ? "/" : "/en"} aria-label="Propagaluz" className="inline-flex items-center gap-2.5">
            <svg viewBox="0 0 22 16" width="22" height="16" xmlns="http://www.w3.org/2000/svg" aria-hidden>
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
          <p
            className="mt-6 font-script"
            style={{
              fontSize: "1.65rem",
              color: "var(--color-luz-deep)",
              lineHeight: 1.2,
            }}
          >
            {tagline}
          </p>
          <p className="mt-6 text-sm text-ink-muted max-w-md">{note}</p>
        </div>

        <div className="sm:col-span-3">
          <h4 className="section-label mb-3">{writeTo}</h4>
          <a
            href="mailto:camila@propagaluz.com"
            className="block text-base text-ink hover:text-ink-soft transition-colors"
          >
            camila@propagaluz.com
          </a>
          <Link href={langLink.href} className="mt-3 block text-sm text-ink-soft hover:text-ink">
            {langLink.label}
          </Link>
        </div>

        <div className="sm:col-span-3">
          <h4 className="section-label mb-3">Legal</h4>
          {legal.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-sm text-ink-soft hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-(--container-wide) mt-12 pt-5 border-t border-rule flex justify-between text-xs text-ink-muted tracking-widest uppercase font-head font-medium">
        <span>© {new Date().getFullYear()} Propagaluz</span>
        <span>{made}</span>
      </div>
    </footer>
  );
}
