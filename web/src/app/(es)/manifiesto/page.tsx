import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manifiesto",
  description:
    "El manifiesto de Propagaluz. Una fundación de intención. Una palabra puesta en su sitio enciende algo.",
  alternates: {
    canonical: "/manifiesto",
    languages: { "es-ES": "/manifiesto", "en-US": "/en/manifesto" },
  },
};

const PARAGRAPHS = [
  "Una palabra puesta en su sitio enciende algo. Ese algo puede viajar de mano en mano hasta cambiar lo que parecía inmóvil. Propagaluz es la apuesta por esa palabra, por ese algo, por esas manos.",
  "Es una fundación de intención.",
  "Existimos por los niños de Venezuela cuya infancia está esperando una escuela, una clase, un cuaderno, un maestro que se quede el año entero. Existimos por la niña que ya sabe que quiere leer y todavía busca dónde. Existimos por el niño al que se le acabaron las páginas demasiado pronto. Existimos por el aula que está esperando que vuelvan a sentarse en ella. Existimos por la mano que está aprendiendo a sostener un lápiz por primera vez. Existimos por la pregunta que un niño tiene guardada y todavía no sabe dónde hacer. Existimos por la generación que está creciendo en pausa, con la inteligencia entera intacta y la oportunidad a medias.",
  "Creemos que la dignidad de un niño cabe en cosas concretas: una silla en un aula, un libro entero por delante, y un adulto que escuche cuando hable. Lo demás lo construye él.",
  "Creemos que la educación es una forma de luz, y que esa luz, una vez encendida, se sostiene a sí misma. Una clase empieza. Un libro se abre. Una pregunta hecha en voz alta encuentra una respuesta. Cada gesto multiplica el siguiente.",
  "Creemos que un niño que aprende a leer es un niño que va a hacer preguntas. Y un niño que hace preguntas es un niño que está construyendo, sin saberlo todavía, el lugar al que un día va a llegar.",
  "Hacemos esto en compañía, por elección y porque tiene sentido. Otros han pasado décadas haciendo este trabajo en las aulas de Venezuela, y nuestro lugar es estar a su lado, con los recursos que su tarea merece. Cada euro, cada dólar y cada bolívar que pase por nuestras manos tendrá un destino: una clase que continúa, un niño que vuelve a la escuela, una niña que pregunta en voz alta por primera vez.",
  "Lo que prometemos lo cumplimos. Trabajaremos despacio cuando haga falta, más rápido cuando se pueda, y siempre al ritmo que la honestidad sostiene.",
  "Esta fundación pertenece a los niños y a las niñas que sirve. Es una promesa que repetimos cada día, en su nombre, con su luz por delante.",
  "Lo demás se gana día a día.",
];

export default function ManifiestoPage() {
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
          Manifiesto
        </h1>
        <div className="mt-8 space-y-7 font-serif text-lg sm:text-xl leading-[1.65] text-ink">
          {PARAGRAPHS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-ink/10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <Link
            href="/origen"
            className="font-sans text-sm border-b border-ink pb-1 hover:border-carabobo hover:text-carabobo transition-colors w-fit"
          >
            Conoce el origen →
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
