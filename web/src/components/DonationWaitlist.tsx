"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/cn";

type Props = {
  locale: "es" | "en";
  className?: string;
};

/**
 * Donation widget (Mode A · pre-registration waitlist).
 *
 * Monthly / one-time tabs · four amount pills + custom amount.
 * Dynamic impact line anchored to Fe y Alegría's $30/month-per-child cost.
 */
export function DonationWaitlist({ locale, className }: Props) {
  const isEs = locale === "es";
  const [tab, setTab] = useState<"monthly" | "once">("monthly");
  const [selected, setSelected] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  const amount = useMemo(() => {
    if (customAmount) {
      const n = parseFloat(customAmount);
      return isNaN(n) || n < 1 ? null : n;
    }
    return selected;
  }, [customAmount, selected]);

  const impact = useMemo(() => {
    if (!amount) return null;
    return getImpactMessage(amount, tab, isEs);
  }, [amount, tab, isEs]);

  const copy = isEs
    ? {
        title: "Reserva tu",
        titleScript: "lugar",
        lede: "El registro como 501(c)(3) está en trámite. Elige tu donación; te escribimos el día que abramos.",
        monthlyLabel: "Mensual",
        onceLabel: "Una vez",
        otherPlaceholder: "Otra cantidad",
        emailPlaceholder: "tu@correo.com",
        cta: "Reservar",
        sending: "Enviando…",
        success: "Hecho. Te avisamos cuando abramos.",
        errorGeneric: "Algo no funcionó. Inténtalo de nuevo.",
        errorEmail: "Necesitamos un correo válido.",
        fine: "Deducible de impuestos cuando se complete el registro 501(c)(3). Sin cargo hoy.",
        approx: "≈",
        of: "por mes",
      }
    : {
        title: "Reserve your",
        titleScript: "seat",
        lede: "Registration as a 501(c)(3) is in process. Choose your gift now; we email you the day we open.",
        monthlyLabel: "Monthly",
        onceLabel: "One time",
        otherPlaceholder: "Other amount",
        emailPlaceholder: "you@email.com",
        cta: "Reserve",
        sending: "Sending…",
        success: "Done. We will write to you when we open.",
        errorGeneric: "Something went wrong. Please try again.",
        errorEmail: "We need a valid email address.",
        fine: "Tax-deductible once 501(c)(3) registration completes. No charge today.",
        approx: "≈",
        of: "/mo",
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
        body: JSON.stringify({
          email,
          locale,
          intent: amount,
          cadence: tab,
        }),
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
        "rounded-(--radius-card) p-6 sm:p-7 text-white w-full max-w-md",
        "backdrop-blur-xl",
        className
      )}
      style={{
        background: "rgba(20, 20, 20, 0.78)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
      }}
      id="donate"
    >
      <h3 className="font-head text-2xl sm:text-3xl">
        {copy.title}{" "}
        <span
          className="font-script"
          style={{ color: "var(--color-luz)", fontSize: "1.35em", letterSpacing: 0 }}
        >
          {copy.titleScript}
        </span>
      </h3>
      <p className="mt-2 text-sm text-white/70 leading-snug max-w-[22rem]">
        {copy.lede}
      </p>

      {/* Tabs */}
      <div className="mt-4 grid grid-cols-2 gap-1 rounded-(--radius-pill) bg-white/[0.05] p-1">
        {(["monthly", "once"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={cn(
              "rounded-(--radius-pill) py-2.5 font-head font-bold text-[0.7rem] tracking-widest uppercase transition-all",
              tab === t ? "bg-luz text-ink" : "text-white/65 hover:text-white"
            )}
          >
            {t === "monthly" ? copy.monthlyLabel : copy.onceLabel}
          </button>
        ))}
      </div>

      {/* Amount pills */}
      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {[10, 25, 50, 100].map((a) => {
          const isSelected = selected === a && !customAmount;
          return (
            <button
              type="button"
              key={a}
              onClick={() => {
                setSelected(a);
                setCustomAmount("");
              }}
              className={cn(
                "rounded-md py-2.5 px-1 font-head text-sm font-bold tracking-tight transition-all",
                isSelected
                  ? "bg-luz text-ink border border-luz"
                  : "bg-white/[0.04] text-white/85 border border-white/10 hover:border-white/30"
              )}
            >
              ${a}
            </button>
          );
        })}
      </div>

      {/* Custom amount */}
      <div className="mt-1.5 flex items-center gap-2 rounded-md bg-white/[0.04] border border-white/10 px-3 py-2">
        <span className="font-head font-bold text-white/55 text-sm">$</span>
        <input
          type="number"
          inputMode="numeric"
          min={1}
          placeholder={copy.otherPlaceholder}
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            if (e.target.value) setSelected(null);
          }}
          className="flex-1 bg-transparent border-none outline-none font-head font-bold text-sm text-white placeholder:text-white/40"
        />
      </div>

      {/* Impact line */}
      <div className="mt-3 flex items-center gap-2 text-sm text-white/85 leading-snug">
        <svg viewBox="0 0 14 11" width="14" height="11" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{ flexShrink: 0 }}>
          <polygon points="0,3 14,0 14,11 0,8" fill="var(--color-luz)" />
        </svg>
        <span>
          {amount && impact ? (
            <>
              <b style={{ color: "var(--color-luz)" }}>
                ${amount}
                {tab === "monthly" ? copy.of : ""}
              </b>{" "}
              {copy.approx} {impact}
            </>
          ) : (
            <span className="text-white/50">
              {isEs ? "Elige una cantidad" : "Choose an amount"}
            </span>
          )}
        </span>
      </div>

      {/* Email + submit */}
      {status === "ok" ? (
        <p className="mt-4 text-sm rounded-(--radius-card) bg-luz text-ink px-4 py-3 text-center">
          {copy.success}
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2">
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={copy.emailPlaceholder}
            disabled={status === "submitting"}
            className="rounded-(--radius-pill) px-4 py-3 font-body text-sm bg-white/[0.04] border border-white/10 placeholder:text-white/40 focus:outline-2 focus:outline-offset-2 focus:outline-luz text-white"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className={cn(
              "rounded-(--radius-pill) px-5 py-3 font-head font-bold text-sm tracking-widest uppercase",
              "bg-luz text-white hover:brightness-95 transition-all",
              "disabled:opacity-60 disabled:cursor-not-allowed"
            )}
          >
            {status === "submitting" ? copy.sending : `${copy.cta} →`}
          </button>
        </form>
      )}

      {error && <p className="mt-2 text-xs text-red-300">{error}</p>}

      <p className="mt-3 text-[0.7rem] italic text-white/55 leading-relaxed">
        {copy.fine}
      </p>
    </div>
  );
}

/**
 * Fe y Alegría's Beca un Estudiante = $30 / month / 1 child.
 * → $1 ≈ 1 day of school for one child.
 */
function getImpactMessage(amount: number, tab: "monthly" | "once", isEs: boolean): string {
  const n = amount;

  if (tab === "monthly") {
    if (isEs) {
      if (n < 15) return `mantiene a un niño en la escuela ${Math.max(1, Math.round(n))} días al mes.`;
      if (n < 30) return `mantiene a un niño en la escuela casi todo el mes.`;
      if (n < 60) return `mantiene a un niño en la escuela cada mes.`;
      if (n < 90) return `mantiene a un niño en la escuela cada mes, y sobra.`;
      const kids = Math.floor(n / 30);
      return `mantiene a ${kids} niños en la escuela cada mes.`;
    } else {
      if (n < 15) return `keeps one child in school ${Math.max(1, Math.round(n))} days a month.`;
      if (n < 30) return `keeps one child in school for nearly the full month.`;
      if (n < 60) return `keeps one child in school every month.`;
      if (n < 90) return `keeps one child in school every month, with room to spare.`;
      const kids = Math.floor(n / 30);
      return `keeps ${kids} children in school every month.`;
    }
  }

  // one time
  if (isEs) {
    if (n < 15) return `${Math.round(n)} días de escuela para un niño.`;
    if (n < 30) return `casi un mes de escuela para un niño.`;
    if (n < 60) return `un mes de escuela para un niño.`;
    if (n < 90) return `un mes y medio de escuela para un niño.`;
    if (n < 120) return `un trimestre escolar (tres meses) para un niño.`;
    if (n < 200) return `${Math.round(n / 30)} meses de escuela para un niño.`;
    if (n < 350) return `más de medio año escolar para un niño.`;
    if (n < 500) return `un año escolar completo para un niño.`;
    if (n < 720) return `un año escolar completo para un niño, con libros incluidos.`;
    const kids = Math.floor(n / 360);
    if (kids === 1) return `un año escolar para un niño, con apoyo extra.`;
    return `${kids} niños, un año escolar completo cada uno.`;
  } else {
    if (n < 15) return `${Math.round(n)} days of school for one child.`;
    if (n < 30) return `nearly a month of school for one child.`;
    if (n < 60) return `a month of school for one child.`;
    if (n < 90) return `a month and a half of school for one child.`;
    if (n < 120) return `a school term (three months) for one child.`;
    if (n < 200) return `${Math.round(n / 30)} months of school for one child.`;
    if (n < 350) return `more than half a school year for one child.`;
    if (n < 500) return `a full school year for one child.`;
    if (n < 720) return `a full school year for one child, with extra for books.`;
    const kids = Math.floor(n / 360);
    if (kids === 1) return `a full school year for one child, plus support.`;
    return `${kids} children, a full school year each.`;
  }
}
