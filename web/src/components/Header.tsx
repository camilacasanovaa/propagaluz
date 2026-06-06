import Link from "next/link";
import { cn } from "@/lib/cn";

type HeaderProps = { locale: "es" | "en" };

export function Header({ locale }: HeaderProps) {
  const isEs = locale === "es";

  const home = isEs ? "/" : "/en";
  const altHref = isEs ? "/en" : "/";
  const altLabel = isEs ? "EN" : "ES";
  const donateLabel = isEs ? "Donar" : "Donate";

  const nav = isEs
    ? [
        { href: "#manifiesto", label: "Manifiesto" },
        { href: "#origen", label: "Origen" },
        { href: "#promesa", label: "Promesa" },
      ]
    : [
        { href: "#manifesto", label: "Manifesto" },
        { href: "#origin", label: "Origin" },
        { href: "#promise", label: "Promise" },
      ];

  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-md border-b border-ink/[0.06]">
      <div className="mx-auto max-w-(--container-wide) px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        <Link
          href={home}
          className="font-display text-base sm:text-lg tracking-tight focus:outline-2 focus:outline-offset-4 focus:outline-ink rounded-sm"
          aria-label="Propagaluz"
        >
          PROPAGALUZ
        </Link>

        <nav className="flex items-center gap-1 font-sans text-sm">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden md:inline-block px-3 py-2 rounded-(--radius-pill) hover:bg-ink/5 transition-colors"
            >
              {item.label}
            </a>
          ))}

          <a
            href={isEs ? "#donar" : "#donate"}
            className={cn(
              "ml-2 inline-flex items-center px-4 py-2 rounded-(--radius-pill)",
              "bg-ink text-paper font-display text-sm tracking-wide",
              "hover:bg-azul transition-colors",
              "focus:outline-2 focus:outline-offset-2 focus:outline-ink"
            )}
          >
            {donateLabel}
          </a>

          <Link
            href={altHref}
            aria-label={isEs ? "Switch to English" : "Cambiar a español"}
            className="ml-2 px-2 py-2 text-xs text-ink-muted hover:text-ink transition-colors"
          >
            {altLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
