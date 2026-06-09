export function Intention() {
  return (
    <section className="py-24 sm:py-28 px-6 sm:px-10 bg-paper-deep">
      <div className="mx-auto max-w-(--container-wide)">
        <p className="section-label">Our intention</p>
        <h2
          className="font-head mt-4"
          style={{
            fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          A word in its proper place sets something{" "}
          <span
            className="font-script"
            style={{
              color: "var(--color-luz)",
              fontSize: "1.15em",
              display: "inline-block",
              transform: "translateY(0.08em)",
            }}
          >
            alight
          </span>
          .
        </h2>
        <p
          className="mt-8 text-ink max-w-[50rem] leading-snug"
          style={{
            fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
            fontWeight: 400,
          }}
        >
          We exist for the children of Venezuela whose childhood is waiting. For
          the curiosity that is bigger than the access. For the generation
          growing up in pause, with the intelligence intact and the opportunity
          half-given.
        </p>
      </div>
    </section>
  );
}
