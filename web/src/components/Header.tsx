import Link from "next/link";
import { Logo } from "./Logo";
import { cn } from "@/lib/cn";

type HeaderProps = {
  locale: "es" | "en";
};

const NAV_ES = [
  { href: "/origen", label: "Origen" },
  { href: "/manifiesto", label: "Manifiesto" },
];

const NAV_EN = [
  { href: "/en/origin", label: "Origin" },
  { href: "/en/manifesto", label: "Manifesto" },
];

export function Header({ locale }: HeaderProps) {
  const isEs = locale === "es";
  const nav = isEs ? NAV_ES : NAV_EN;
  const donateHref = isEs ? "/donar" : "/en/donate";
  const donateLabel = isEs ? "Donar" : "Donate";
  const altLocaleHref = isEs ? "/en" : "/";
  const altLocaleLabel = isEs ? "EN" : "ES";

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/85 border-b border-ink/[0.06]">
      <div className="mx-auto max-w-(--container-wide) px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        <Link
          href={isEs ? "/" : "/en"}
          className="text-base sm:text-lg font-display tracking-tight focus:outline-2 focus:outline-offset-4 focus:outline-ink rounded-sm"
        >
          Propagaluz
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2 font-sans text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden sm:inline-block px-3 py-2 rounded-(--radius-pill) hover:bg-ink/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={donateHref}
            className={cn(
              "ml-1 inline-flex items-center px-4 py-2 rounded-(--radius-pill)",
              "bg-luz text-ink font-display text-sm tracking-wide",
              "hover:bg-luz-deep transition-colors",
              "focus:outline-2 focus:outline-offset-2 focus:outline-ink"
            )}
          >
            {donateLabel}
          </Link>

          <Link
            href={altLocaleHref}
            aria-label={isEs ? "Switch to English" : "Cambiar a español"}
            className="ml-2 px-2 py-2 text-xs text-ink-muted hover:text-ink transition-colors"
          >
            {altLocaleLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
