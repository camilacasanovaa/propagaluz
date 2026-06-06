"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type DonationWaitlistProps = {
  locale: "es" | "en";
  className?: string;
  variant?: "hero" | "block";
};

/**
 * Pre-registration (Mode A) waitlist signup, styled like a donation card
 * (per Max Strong's playbook). Three amount pills are visual-only for now;
 * the actual submission captures the email. When the foundation registers,
 * this swaps to a live Stripe Checkout.
 */
export function DonationWaitlist({
  locale,
  className,
  variant = "hero",
}: DonationWaitlistProps) {
  const isEs = locale === "es";
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<string>("50");
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  const copy = isEs
    ? {
        eyebrow: "En proceso de registro",
        title: "Reserva tu sitio",
        body: "Aún estamos completando el registro de la fundación en España. Déjanos tu correo y te avisamos en cuanto podamos recibir tu donación.",
        amountLabel: "Cuando podamos donar",
        once: "Una vez",
        monthly: "Mensual",
        otherLabel: "Otra cantidad",
        placeholder: "tu@correo.com",
        cta: "Avísame",
        sending: "Enviando…",
        success: "Hecho. Te escribimos en cuanto abramos.",
        errorGeneric: "Algo no funcionó. Inténtalo de nuevo.",
        errorEmail: "Necesitamos un correo válido.",
      }
    : {
        eyebrow: "Registration underway",
        title: "Save your seat",
        body: "We are still completing the foundation's registration in Spain. Leave your email and we will write to you the moment we can receive your donation.",
        amountLabel: "When we can accept",
        once: "One time",
        monthly: "Monthly",
        otherLabel: "Other amount",
        placeholder: "you@email.com",
        cta: "Notify me",
        sending: "Sending…",
        success: "Done. We will write to you when we open.",
        errorGeneric: "Something went wrong. Please try again.",
        errorEmail: "We need a valid email address.",
      };

  const amounts = ["25", "50", "100"];

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
        "rounded-(--radius-card) bg-paper-pure border border-ink/[0.08]",
        "shadow-(--shadow-card) p-6 sm:p-8 text-ink",
        variant === "hero" && "max-w-md",
        className
      )}
    >
      <p className="font-display text-xs tracking-widest uppercase text-azul">
        {copy.eyebrow}
      </p>
      <h3 className="mt-2 font-display text-2xl sm:text-3xl tracking-tight text-ink">
        {copy.title}
      </h3>
      <p className="mt-3 font-serif text-sm sm:text-base text-ink-soft leading-relaxed">
        {copy.body}
      </p>

      {/* Amount pills — visual intent, captured on submit */}
      <div className="mt-6">
        <p className="font-sans text-xs uppercase tracking-widest text-ink-muted mb-2">
          {copy.amountLabel}
        </p>
        <div className="flex gap-2">
          {amounts.map((a) => (
            <button
              type="button"
              key={a}
              onClick={() => setSelected(a)}
              className={cn(
                "flex-1 rounded-(--radius-pill) px-3 py-2.5 font-display text-sm tracking-wide transition-all",
                selected === a
                  ? "bg-ink text-paper shadow-(--shadow-soft)"
                  : "bg-paper border border-ink/15 text-ink-soft hover:border-ink/30"
              )}
            >
              {a}€
            </button>
          ))}
        </div>
      </div>

      {status === "ok" ? (
        <p className="mt-6 font-sans text-sm text-ink rounded-(--radius-pill) bg-luz px-4 py-3 text-center">
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
              "w-full rounded-(--radius-pill) bg-paper border border-ink/15",
              "px-4 py-3 font-sans text-sm placeholder:text-ink-muted",
              "focus:outline-2 focus:outline-offset-2 focus:outline-azul"
            )}
            disabled={status === "submitting"}
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className={cn(
              "w-full rounded-(--radius-pill) bg-azul text-paper font-display tracking-wide",
              "px-5 py-3.5 text-sm hover:bg-ink transition-colors",
              "disabled:opacity-60 disabled:cursor-not-allowed",
              "focus:outline-2 focus:outline-offset-2 focus:outline-azul"
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
