import Link from "next/link";

type FooterProps = {
  locale: "es" | "en";
};

export function Footer({ locale }: FooterProps) {
  const isEs = locale === "es";

  const links = isEs
    ? [
        { href: "/origen", label: "Origen" },
        { href: "/manifiesto", label: "Manifiesto" },
        { href: "/donar", label: "Donar" },
        { href: "/contacto", label: "Contacto" },
      ]
    : [
        { href: "/en/origin", label: "Origin" },
        { href: "/en/manifesto", label: "Manifesto" },
        { href: "/en/donate", label: "Donate" },
        { href: "/en/contact", label: "Contact" },
      ];

  const legal = isEs
    ? [
        { href: "/aviso-legal", label: "Aviso legal" },
        { href: "/privacidad", label: "Política de privacidad" },
      ]
    : [
        { href: "/en/legal", label: "Legal notice" },
        { href: "/en/privacy", label: "Privacy policy" },
      ];

  const tagline = isEs ? "Propaga la luz" : "Spread the light";
  const note = isEs
    ? "Fundación en proceso de registro · Madrid"
    : "Foundation in registration · Madrid";

  return (
    <footer className="mt-24 border-t border-ink/[0.08] bg-paper-deep/50">
      <div className="mx-auto max-w-(--container-wide) px-5 sm:px-8 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-display text-2xl tracking-tight">Propagaluz</div>
          <p className="mt-2 text-sm text-ink-muted">{tagline}.</p>
          <p className="mt-4 text-xs text-ink-muted">{note}.</p>
        </div>

        <nav aria-label={isEs ? "Páginas" : "Pages"} className="font-sans text-sm">
          <h3 className="font-display text-xs tracking-widest uppercase text-ink-muted mb-3">
            {isEs ? "Páginas" : "Pages"}
          </h3>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal" className="font-sans text-sm">
          <h3 className="font-display text-xs tracking-widest uppercase text-ink-muted mb-3">
            Legal
          </h3>
          <ul className="space-y-2">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="font-sans text-sm">
          <h3 className="font-display text-xs tracking-widest uppercase text-ink-muted mb-3">
            {isEs ? "Escríbenos" : "Write to us"}
          </h3>
          <a
            href="mailto:camila@propagaluz.com"
            className="hover:underline break-all"
          >
            camila@propagaluz.com
          </a>
          <p className="mt-4 text-xs text-ink-muted">
            <Link
              href={isEs ? "/en" : "/"}
              className="hover:underline"
            >
              {isEs ? "English" : "Español"}
            </Link>
          </p>
        </div>
      </div>

      <div className="border-t border-ink/[0.06]">
        <div className="mx-auto max-w-(--container-wide) px-5 sm:px-8 py-4 flex items-center justify-between text-xs text-ink-muted">
          <span>© {new Date().getFullYear()} Propagaluz</span>
          <span className="font-display tracking-wider uppercase">
            {isEs ? "Hecho con intención" : "Made with intention"}
          </span>
        </div>
      </div>
    </footer>
  );
}
