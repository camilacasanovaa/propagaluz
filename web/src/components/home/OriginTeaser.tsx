import Link from "next/link";
import Image from "next/image";

type Props = { locale: "es" | "en" };

export function OriginTeaser({ locale }: Props) {
  const isEs = locale === "es";

  const copy = isEs
    ? {
        eyebrow: "Una herencia",
        title: "Hace casi cien años",
        body: "Mi bisabuelo fundó un periódico llamado Propagaluz. Mi abuelo, Eduardo Alemán Pérez, sostuvo el oficio durante treinta y siete años. Cuando murió, en 2021, supe que me tocaba a mí. Esta fundación es lo que pude hacer con esa certeza.",
        cta: "Conoce el origen",
        href: "/origen",
        caption: "Eduardo Alemán Pérez y Eladio Alemán Sucre, en la rotativa de El Carabobeño.",
      }
    : {
        eyebrow: "An inheritance",
        title: "Almost a hundred years ago",
        body: "My great-grandfather founded a newspaper called Propagaluz. My grandfather, Eduardo Alemán Pérez, held the trade for thirty-seven years. When he died, in 2021, I knew it was my turn. This foundation is what came of that certainty.",
        cta: "Read the origin",
        href: "/en/origin",
        caption: "Eduardo Alemán Pérez and Eladio Alemán Sucre, beside El Carabobeño's printing press.",
      };

  return (
    <section className="py-20 sm:py-28 bg-paper-deep/40">
      <div className="mx-auto max-w-(--container-wide) px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="relative aspect-[4/3] rounded-(--radius-card) overflow-hidden shadow-(--shadow-card) bg-ink/5">
            <Image
              src="/family/Eladio-Eduardo-AlfonsoMarin-tres-generaciones.jpg"
              alt={copy.caption}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 font-sans text-xs text-ink-muted">{copy.caption}</p>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <p className="font-display text-xs tracking-widest uppercase text-carabobo mb-4">
            {copy.eyebrow}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight leading-tight text-ink">
            {copy.title}
          </h2>
          <p className="mt-5 font-serif text-lg leading-relaxed text-ink-soft">
            {copy.body}
          </p>
          <Link
            href={copy.href}
            className="mt-8 inline-flex items-center gap-2 font-sans text-sm border-b border-ink pb-1 hover:border-carabobo hover:text-carabobo transition-colors"
          >
            {copy.cta} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
