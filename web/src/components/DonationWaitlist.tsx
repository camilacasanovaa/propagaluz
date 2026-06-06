"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type DonationWaitlistProps = {
  locale: "es" | "en";
  className?: string;
};

/**
 * Pre-registration (Mode A) waitlist signup with charity:water-style
 * impact equivalents. Numbers come from Fe y Alegría's own published
 * cost-per-student: $30/month sponsors one child's education.
 *
 * The "When we open" framing communicates that donations are not active
 * yet — the foundation is being registered as a 501(c)(3) in the US.
 */
export function DonationWaitlist({
  locale,
  className,
}: DonationWaitlistProps) {
  const isEs = locale === "es";
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<string>("30");
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  const copy = isEs
    ? {
        eyebrow: "En proceso de registro como 501(c)(3) en EE. UU.",
        title: "Apúntate. Te avisamos cuando podamos recibir tu donación.",
        amountLabel: "Elige una cantidad",
        placeholder: "tu@correo.com",
        cta: "Avísame",
        sending: "Enviando…",
        success: "Hecho. Te escribimos en cuanto abramos.",
        errorGeneric: "Algo no funcionó. Inténtalo de nuevo.",
        errorEmail: "Necesitamos un correo válido.",
        impactNote: "Cifras basadas en el programa Beca un Estudiante de Fe y Alegría Venezuela.",
      }
    : {
        eyebrow: "Registering as a 501(c)(3) in the US",
        title: "Sign up. We will write to you when we can receive your donation.",
        amountLabel: "Pick an amount",
        placeholder: "you@email.com",
        cta: "Notify me",
        sending: "Sending…",
        success: "Done. We will write to you when we open.",
        errorGeneric: "Something went wrong. Please try again.",
        errorEmail: "We need a valid email address.",
        impactNote: "Figures based on Fe y Alegría Venezuela's Sponsor a Student program.",
      };

  // Impact equivalents, both languages
  // Source: Fe y Alegría VE — $30/month = one student's schooling
  const tiers = isEs
    ? [
        { amount: "30", impact: "un mes de escuela para un niño." },
        { amount: "90", impact: "un trimestre escolar completo." },
        { amount: "360", impact: "un año entero de educación para un niño." },
      ]
    : [
        { amount: "30", impact: "one month of school for one child." },
        { amount: "90", impact: "a full school term." },
        { amount: "360", impact: "a full year of education for one child." },
      ];

  const activeTier = tiers.find((t) => t.amount === selected) ?? tiers[0];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError(copy.errorEmail);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale, intent: selected }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("error");
      setError(copy.errorGeneric);
    }
  }

  return (
    <div
      className={cn(
        "rounded-(--radius-card) bg-paper-pure border border-rule p-7 sm:p-10 text-ink",
        className
      )}
    >
      <p className="font-sans text-xs tracking-widest uppercase text-ink-muted">
        {copy.eyebrow}
      </p>
      <h3 className="mt-3 font-serif-display text-2xl sm:text-3xl tracking-tight text-ink leading-tight">
        {copy.title}
      </h3>

      {/* Amount tiers + impact equivalent */}
      <div className="mt-8">
        <p className="font-sans text-xs tracking-widest uppercase text-ink-muted mb-3">
          {copy.amountLabel}
        </p>
        <div className="grid grid-cols-3 gap-2">
          {tiers.map((t) => (
            <button
              type="button"
              key={t.amount}
              onClick={() => setSelected(t.amount)}
              aria-pressed={selected === t.amount}
              className={cn(
                "rounded-(--radius-card) py-3 font-display text-base tracking-wider transition-all",
                selected === t.amount
                  ? "bg-ink text-paper"
                  : "bg-paper border border-rule text-ink-soft hover:border-ink/30"
              )}
            >
              ${t.amount}
            </button>
          ))}
        </div>

        {/* Charity:water-style equivalent line */}
        <div className="mt-5 bg-luz/40 border border-luz-deep/30 rounded-(--radius-card) p-4">
          <p className="font-serif text-base leading-snug text-ink">
            <span className="font-display tracking-wider">${activeTier.amount}</span>{" "}
            <span className="font-serif italic text-ink-soft">
              {isEs ? "equivale a" : "is the equivalent of"}
            </span>{" "}
            {activeTier.impact}
          </p>
        </div>
      </div>

      {/* Email capture */}
      {status === "ok" ? (
        <p className="mt-6 font-serif text-base text-ink bg-luz rounded-(--radius-card) px-5 py-4 text-center">
          {copy.success}
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-2.5">
          <label className="sr-only" htmlFor="waitlist-email">
            {copy.placeholder}
          </label>
          <input
            id="waitlist-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={copy.placeholder}
            className={cn(
              "w-full rounded-(--radius-pill) bg-paper border border-rule",
              "px-5 py-3.5 font-sans text-sm placeholder:text-ink-muted",
              "focus:outline-2 focus:outline-offset-2 focus:outline-ink"
            )}
            disabled={status === "submitting"}
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className={cn(
              "w-full rounded-(--radius-pill) bg-ink text-paper",
              "font-sans text-sm tracking-widest uppercase",
              "px-5 py-3.5 hover:bg-ink-soft transition-colors",
              "disabled:opacity-60 disabled:cursor-not-allowed",
              "focus:outline-2 focus:outline-offset-2 focus:outline-ink"
            )}
          >
            {status === "submitting" ? copy.sending : copy.cta}
          </button>
        </form>
      )}

      {error && (
        <p className="mt-3 font-sans text-sm text-carabobo">{error}</p>
      )}

      <p className="mt-6 font-sans text-[0.65rem] tracking-wide uppercase text-ink-muted leading-relaxed">
        {copy.impactNote}
      </p>
    </div>
  );
}
