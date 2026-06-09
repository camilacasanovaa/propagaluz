import Image from "next/image";
import { DonationWaitlist } from "../DonationWaitlist";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-ink text-white"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Three Venezuelan children laughing, black-and-white photograph."
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ filter: "brightness(0.85) contrast(1.05)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-(--container-wide) px-6 sm:px-10 pt-36 pb-12 min-h-[100svh] grid lg:grid-cols-2 gap-10 lg:gap-16 items-end">
        <div className="max-w-xl self-end">
          {/* Bilingual signature: Spanish headline as emotional anchor. */}
          <h1
            className="font-head"
            style={{
              fontSize: "clamp(3rem, 7.5vw, 6.4rem)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.035em",
            }}
            lang="es"
          >
            Cada niño,
            <br />
            <span
              className="font-script"
              style={{
                color: "var(--color-luz)",
                fontSize: "1.15em",
                marginLeft: "-0.05em",
                display: "inline-block",
                transform: "translateY(0.05em)",
              }}
            >
              una luz
            </span>
            .
          </h1>
          <p
            className="mt-7 text-lg sm:text-xl text-white/90 max-w-md leading-relaxed"
            style={{ letterSpacing: 0 }}
            lang="es"
          >
            Propagaluz acompaña la educación de los niños venezolanos.
          </p>
        </div>

        <div className="flex flex-col items-stretch lg:items-end gap-3 self-end">
          <DonationWaitlist />
          <div className="flex flex-wrap justify-start lg:justify-end items-center gap-x-4 gap-y-1 max-w-md w-full font-head font-medium text-[0.66rem] tracking-[0.22em] uppercase text-white/75 pr-1">
            <span>Est. 2026</span>
            <span className="text-white/40">·</span>
            <span>Miami</span>
            <span className="text-white/40">·</span>
            <span>Madrid</span>
            <span className="text-white/40">·</span>
            <span>Caracas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
