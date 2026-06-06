import Link from "next/link";
import { cn } from "@/lib/cn";

type HeaderProps = { locale: "es" | "en" };

export function Header({ locale }: HeaderProps) {
  const isEs = locale === "es";

  const home = isEs ? "/" : "/en";
  const altHref = isEs ? "/en" : "/";
  const altLabel = isEs ? "EN" : "ES";
  const donateHref = isEs ? "#donar" : "#donate";
  const donateLabel = isEs ? "Donar" : "Donate";

  return (
    <header className="absolute top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-(--container-full) px-6 sm:px-10 h-16 sm:h-20 flex items-center justify-between gap-6">
        {/* Quiet wordmark, lowercase serif — readable but not loud */}
        <Link
          href={home}
          aria-label="Propagaluz"
          className="font-serif italic text-base sm:text-lg tracking-tight text-ink hover:text-ink-soft transition-colors"
        >
          propagaluz.
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href={altHref}
            aria-label={isEs ? "Switch to English" : "Cambiar a español"}
            className="font-sans text-xs tracking-widest text-ink-muted hover:text-ink transition-colors"
          >
            {altLabel}
          </Link>

          <a
            href={donateHref}
            className={cn(
              "inline-flex items-center px-4 py-2 rounded-(--radius-pill)",
              "bg-ink text-paper font-sans text-xs tracking-widest uppercase",
              "hover:bg-ink-soft transition-colors",
              "focus:outline-2 focus:outline-offset-2 focus:outline-ink"
            )}
          >
            {donateLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
