"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type DonationWaitlistProps = {
  locale: "es" | "en";
  className?: string;
  variant?: "hero" | "block";
};

/**
 * Pre-registration (Mode A) waitlist signup. Replaces the live donation
 * widget until the Spanish foundation registration completes and we wire
 * up Stripe Checkout. Submits to /api/waitlist which writes to Resend.
 */
export function DonationWaitlist({
  locale,
  className,
  variant = "hero",
}: DonationWaitlistProps) {
  const isEs = locale === "es";
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  const copy = isEs
    ? {
        eyebrow: "Estamos en proceso de registro",
        title: "Te avisamos cuando podamos recibir donaciones",
        body: "La fundación está en trámites de registro en España. En cuanto abramos formalmente, te escribimos. Mientras tanto, lee el manifiesto.",
        placeholder: "tu@correo.com",
        cta: "Avísame",
        sending: "Enviando…",
        success: "Listo. Te avisamos en cuanto abramos.",
        errorGeneric: "Algo no funcionó. Inténtalo de nuevo.",
        errorEmail: "Necesitamos un correo válido.",
      }
    : {
        eyebrow: "Registration is underway",
        title: "We will write to you when we can receive donations",
        body: "The foundation is being registered in Spain. As soon as we open formally, we will write. In the meantime, read the manifesto.",
        placeholder: "you@email.com",
        cta: "Notify me",
        sending: "Sending…",
        success: "Done. We will write to you when we open.",
        errorGeneric: "Something went wrong. Please try again.",
        errorEmail: "We need a valid email address.",
      };

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
        body: JSON.stringify({ email, locale }),
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
        "rounded-(--radius-card) bg-paper-pure border border-ink/[0.08] shadow-(--shadow-card) p-6 sm:p-8",
        variant === "hero" && "max-w-md",
        className
      )}
    >
      <p className="font-display text-xs tracking-widest uppercase text-carabobo">
        {copy.eyebrow}
      </p>
      <h2
        className={cn(
          "mt-2 font-display tracking-tight text-ink",
          variant === "hero" ? "text-xl sm:text-2xl" : "text-2xl"
        )}
      >
        {copy.title}
      </h2>
      <p className="mt-3 text-sm text-ink-soft font-serif">{copy.body}</p>

      {status === "ok" ? (
        <p className="mt-5 font-sans text-sm text-ink rounded-(--radius-pill) bg-luz px-4 py-3">
          {copy.success}
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-5 flex flex-col sm:flex-row gap-2">
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
              "flex-1 rounded-(--radius-pill) bg-paper border border-ink/[0.12]",
              "px-4 py-3 font-sans text-sm",
              "focus:outline-2 focus:outline-offset-2 focus:outline-ink"
            )}
            disabled={status === "submitting"}
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className={cn(
              "rounded-(--radius-pill) bg-ink text-paper font-display tracking-wide",
              "px-5 py-3 text-sm hover:bg-ink-soft transition-colors",
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
    </div>
  );
}
