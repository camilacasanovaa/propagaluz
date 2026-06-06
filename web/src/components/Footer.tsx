import Link from "next/link";

type FooterProps = { locale: "es" | "en" };

export function Footer({ locale }: FooterProps) {
  const isEs = locale === "es";

  const anchors = isEs
    ? [
        { href: "#manifiesto", label: "Manifiesto" },
        { href: "#origen", label: "Origen" },
        { href: "#promesa", label: "Promesa" },
        { href: "#donar", label: "Donar" },
      ]
    : [
        { href: "#manifesto", label: "Manifesto" },
        { href: "#origin", label: "Origin" },
        { href: "#promise", label: "Promise" },
        { href: "#donate", label: "Donate" },
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

  const tagline = isEs ? "Propaga la luz." : "Spread the light.";
  const note = isEs
    ? "Fundación en proceso de registro · Madrid"
    : "Foundation in registration · Madrid";

  return (
    <footer id="contacto" className="mt-24 bg-ink text-paper">
      <div className="mx-auto max-w-(--container-wide) px-5 sm:px-8 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="font-display text-4xl sm:text-5xl tracking-tight">
            PROPAGALUZ
          </div>
          <p className="mt-4 font-accent italic text-2xl text-luz">{tagline}</p>
          <p className="mt-6 font-sans text-sm text-paper/65">{note}.</p>

          <div className="mt-8">
            <p className="font-sans text-xs uppercase tracking-widest text-paper/50 mb-2">
              {isEs ? "Escríbenos" : "Write to us"}
            </p>
            <a
              href="mailto:camila@propagaluz.com"
              className="font-display text-xl sm:text-2xl text-paper hover:text-luz transition-colors break-all"
            >
              camila@propagaluz.com
            </a>
          </div>
        </div>

        <nav
          aria-label={isEs ? "Secciones" : "Sections"}
          className="lg:col-span-3 font-sans text-sm"
        >
          <h3 className="font-display text-xs tracking-widest uppercase text-paper/50 mb-4">
            {isEs ? "Secciones" : "Sections"}
          </h3>
          <ul className="space-y-2.5">
            {anchors.map((a) => (
              <li key={a.href}>
                <a href={a.href} className="hover:text-luz transition-colors">
                  {a.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal" className="lg:col-span-2 font-sans text-sm">
          <h3 className="font-display text-xs tracking-widest uppercase text-paper/50 mb-4">
            Legal
          </h3>
          <ul className="space-y-2.5">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-luz transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-2 font-sans text-sm">
          <h3 className="font-display text-xs tracking-widest uppercase text-paper/50 mb-4">
            {isEs ? "Idioma" : "Language"}
          </h3>
          <Link
            href={isEs ? "/en" : "/"}
            className="hover:text-luz transition-colors"
          >
            {isEs ? "English" : "Español"}
          </Link>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-(--container-wide) px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-paper/50">
          <span>© {new Date().getFullYear()} Propagaluz</span>
          <span className="font-display tracking-widest uppercase text-paper/65">
            {isEs ? "Hecho con intención" : "Made with intention"}
          </span>
        </div>
      </div>
    </footer>
  );
}
