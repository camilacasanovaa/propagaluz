import Image from "next/image";

type Props = { locale: "es" | "en" };

export function Hero({ locale }: Props) {
  const isEs = locale === "es";

  const copy = isEs
    ? {
        headlineA: "Cada niño,",
        headlineB: "una luz.",
        subhead:
          "Propagaluz acompaña la educación de los niños venezolanos.",
        cta: "Donar",
      }
    : {
        headlineA: "Every child,",
        headlineB: "a light.",
        subhead:
          "Propagaluz supports the education of Venezuelan children.",
        cta: "Donate",
      };

  return (
    <section id="top" className="relative min-h-[100svh] flex items-stretch">
      {/* Left column · type */}
      <div className="relative z-10 flex-1 lg:flex-[5] flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-24 sm:py-28 bg-paper">
        <div className="max-w-xl rise">
          <h1 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.92] tracking-tight text-ink">
            {copy.headlineA}
            <br />
            <span className="font-serif-display-italic font-normal lowercase tracking-tight">
              {copy.headlineB}
            </span>
          </h1>

          <p className="mt-8 font-serif text-lg sm:text-xl leading-relaxed text-ink-soft max-w-md">
            {copy.subhead}
          </p>

          <div className="mt-10 flex items-center gap-4">
            <a
              href={isEs ? "#donar" : "#donate"}
              className="inline-flex items-center px-6 py-3 rounded-(--radius-pill) bg-ink text-paper font-sans text-sm tracking-widest uppercase hover:bg-ink-soft transition-colors"
            >
              {copy.cta}
            </a>
            <span className="font-serif italic text-sm text-ink-muted">
              {isEs ? "para opa" : "para opa"}
            </span>
          </div>
        </div>
      </div>

      {/* Right column · photo */}
      <div className="hidden lg:block relative flex-[6]">
        <Image
          src="/images/hero-child-reading.jpg"
          alt={
            isEs
              ? "Un niño leyendo un libro en una biblioteca."
              : "A child reading a book in a library."
          }
          fill
          priority
          sizes="60vw"
          className="object-cover hero-image"
        />
      </div>

      {/* Mobile · photo banner above */}
      <div className="absolute inset-x-0 top-0 h-72 lg:hidden -z-0">
        <Image
          src="/images/hero-child-reading.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover hero-image opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-paper" />
      </div>
    </section>
  );
}
