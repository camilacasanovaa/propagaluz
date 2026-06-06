type Props = { locale: "es" | "en" };

/**
 * Our story — without naming the family.
 *
 * Per Camila's direction (2026-06-06): the family / inheritance framing is
 * pulled from public copy. The story is told as a thread of vocation
 * without naming grandfathers or newspapers. The hidden "para opa" line in
 * the hero is the only acknowledgment, legible to those who already know.
 */
export function OurStory({ locale }: Props) {
  const isEs = locale === "es";

  const copy = isEs
    ? {
        eyebrow: "Nuestra historia",
        title: "Una vocación que ya tiene casi un siglo.",
        body: [
          "Propagaluz no nació en 2026. Nació hace casi cien años, cuando una familia venezolana empezó a usar la palabra impresa para insistir en lo mismo que esta fundación insiste hoy: que las cosas pueden cambiar cuando se las nombra bien y se las acompaña con tiempo.",
          "El medio era otro. El oficio era otro. Pero la convicción era la misma. Una palabra puesta en su sitio enciende algo. Ese algo puede viajar de mano en mano hasta cambiar lo que parecía inmóvil.",
          "Esta fundación es la versión actual de esa convicción, hecha para una nueva generación. Nos importa más lo que hacemos por los niños venezolanos que lo que decimos sobre nosotros. Por eso esta sección es corta.",
        ],
      }
    : {
        eyebrow: "Our story",
        title: "A vocation almost a century old.",
        body: [
          "Propagaluz was not born in 2026. It was born almost a hundred years ago, when a Venezuelan family began to use the printed word to insist on the same thing this foundation insists on today: that things can change when they are named well and accompanied through time.",
          "The medium was different. The trade was different. But the conviction was the same. A word in its proper place sets something alight. The something can travel hand to hand until it changes what seemed unmovable.",
          "This foundation is the current version of that conviction, made for a new generation. What we do for Venezuelan children matters more than what we say about ourselves. That is why this section is short.",
        ],
      };

  return (
    <section
      id={isEs ? "historia" : "story"}
      className="section-rule bg-paper py-24 sm:py-32"
    >
      <div className="mx-auto max-w-(--container-prose) px-6 sm:px-10">
        <p className="eyebrow mb-5">{copy.eyebrow}</p>
        <h2 className="font-serif-display text-3xl sm:text-5xl tracking-tight text-ink">
          {copy.title}
        </h2>
        <div className="mt-10 space-y-6 font-serif text-lg leading-relaxed text-ink-soft">
          {copy.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
