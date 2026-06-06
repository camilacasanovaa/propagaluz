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
    : "Foundation in registration as a 501(c)(3) in the United States.";

  return (
    <footer id="contacto" className="section-rule bg-paper py-16">
      <div className="mx-auto max-w-(--container-wide) px-6 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-12 items-start">
          <div className="sm:col-span-5">
            <p className="font-serif italic text-2xl text-ink">propagaluz.</p>
            <p className="mt-3 font-serif text-base text-ink-soft max-w-sm">
              {note}
            </p>
          </div>

          <div className="sm:col-span-4 font-serif">
            <p className="eyebrow mb-3">{isEs ? "Escríbenos" : "Write to us"}</p>
            <a
              href="mailto:camila@propagaluz.com"
              className="text-lg text-ink hover:text-ink-soft underline decoration-luz decoration-[3px] underline-offset-[5px] transition-colors break-all"
            >
              camila@propagaluz.com
            </a>
          </div>

          <div className="sm:col-span-3 font-sans text-sm space-y-2">
            <p className="eyebrow mb-3">Legal</p>
            {legal.map((l) => (
              <div key={l.href}>
                <Link href={l.href} className="text-ink-soft hover:text-ink transition-colors">
                  {l.label}
                </Link>
              </div>
            ))}
            <div>
              <Link
                href={isEs ? "/en" : "/"}
                className="text-ink-soft hover:text-ink transition-colors"
              >
                {isEs ? "English" : "Español"}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-rule flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-muted font-sans">
          <span>© {new Date().getFullYear()} Propagaluz</span>
          <span className="tracking-widest uppercase">
            {isEs ? "Hecho con intención" : "Made with intention"}
          </span>
        </div>
      </div>
    </footer>
  );
}
