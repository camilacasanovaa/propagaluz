import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Origen",
  description:
    "El origen de Propagaluz. La continuación de un oficio familiar de casi cien años. Una carta de Camila Casanova, fundadora.",
  alternates: {
    canonical: "/origen",
    languages: { "es-ES": "/origen", "en-US": "/en/origin" },
  },
};

export default function OrigenPage() {
  return (
    <article className="py-20 sm:py-28">
      <div className="mx-auto max-w-(--container-prose) px-5 sm:px-8">
        <Link
          href="/"
          className="font-sans text-xs tracking-widest uppercase text-ink-muted hover:text-ink"
        >
          ← Propagaluz
        </Link>
        <h1 className="mt-6 font-display text-xs tracking-widest uppercase text-carabobo">
          Origen
        </h1>

        {/* Letter placeholder — replaced with the handwritten image once Camila writes it */}
        <div className="mt-10 mb-16 rounded-(--radius-card) bg-paper-pure border border-ink/[0.08] p-8 sm:p-12 text-center">
          <p className="font-display text-xs tracking-widest uppercase text-ink-muted">
            Una carta de Camila Casanova
          </p>
          <p className="mt-4 font-serif text-base text-ink-muted italic">
            (próximamente — en su propia letra)
          </p>
        </div>

        <div className="space-y-7 font-serif text-lg leading-[1.7] text-ink">
          <p>
            Hace casi cien años, mi bisabuelo, Eladio Alemán Sucre, fundó un periódico
            pequeño en Valencia. Lo llamó Propagaluz. La idea era sencilla: propagar
            luz. Después fundó otro, más grande, que iba a vivir casi un siglo: El
            Carabobeño. Pero el primero, el semanal, se llamó así.
          </p>

          <figure className="my-12">
            <div className="relative aspect-[5/4] rounded-(--radius-card) overflow-hidden shadow-(--shadow-card) bg-ink/5">
              <Image
                src="/family/Eladio-Eduardo-AlfonsoMarin-tres-generaciones.jpg"
                alt="Eladio Alemán Sucre, Eduardo Alemán Pérez y Alfonso Marín en la planta de El Carabobeño."
                fill
                sizes="(min-width: 768px) 44rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 font-sans text-xs text-ink-muted">
              Eladio Alemán Sucre, Eduardo Alemán Pérez y el cronista Alfonso Marín, en
              la planta de El Carabobeño.
            </figcaption>
          </figure>

          <p>
            Mi abuelo, Eduardo Alemán Pérez, recogió ese trabajo y lo sostuvo durante
            treinta y siete años. La familia lo llamaba Opa: en holandés, abuelo.
            Cuando murió, en 2021, supe que me tocaba a mí.
          </p>

          <p>
            Esta fundación nació de esa certeza. Lleva el nombre del semanal que mi
            bisabuelo escribió hace casi un siglo, y guarda dentro a Opa: en el centro
            de la palabra propagaluz, en tres letras, sigue su nombre.
          </p>

          <figure className="my-12">
            <div className="relative aspect-[3/2] rounded-(--radius-card) overflow-hidden shadow-(--shadow-card) bg-ink/5">
              <Image
                src="/family/Eduardo-Aleman-Perez-desk.jpg"
                alt="Eduardo Alemán Pérez leyendo el periódico en su despacho."
                fill
                sizes="(min-width: 768px) 44rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 font-sans text-xs text-ink-muted">
              Eduardo Alemán Pérez en su despacho.
            </figcaption>
          </figure>

          <p>
            Lo que mi familia hizo durante un siglo fue poner palabras donde hicieran
            falta. Propagaluz hoy hace algo más pequeño y más directo: lleva recursos
            a las personas que están sosteniendo la educación de los niños venezolanos
            dentro del país.
          </p>

          <p className="font-display text-2xl sm:text-3xl tracking-tight text-ink pt-4">
            El medio cambia. El trabajo sigue.
          </p>

          <p className="font-sans text-sm text-ink-muted pt-2">— Camila Casanova</p>
        </div>

        <div className="mt-16 pt-10 border-t border-ink/10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <Link
            href="/manifiesto"
            className="font-sans text-sm border-b border-ink pb-1 hover:border-carabobo hover:text-carabobo transition-colors w-fit"
          >
            Lee el manifiesto →
          </Link>
          <Link
            href="/donar"
            className="inline-flex items-center justify-center px-5 py-3 rounded-(--radius-pill) bg-luz text-ink font-display tracking-wide text-sm hover:bg-luz-deep transition-colors w-fit"
          >
            Apóyalo
          </Link>
        </div>
      </div>
    </article>
  );
}
