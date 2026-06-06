import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso legal",
  alternates: {
    canonical: "/aviso-legal",
    languages: { "es-ES": "/aviso-legal", "en-US": "/en/legal" },
  },
};

export default function AvisoLegalPage() {
  return (
    <article className="py-20 sm:py-28">
      <div className="mx-auto max-w-(--container-prose) px-5 sm:px-8">
        <Link
          href="/"
          className="font-sans text-xs tracking-widest uppercase text-ink-muted hover:text-ink"
        >
          ← Propagaluz
        </Link>
        <h1 className="mt-6 font-serif text-3xl sm:text-4xl tracking-tight">
          Aviso legal
        </h1>

        <div className="mt-10 space-y-6 font-serif text-base leading-relaxed text-ink-soft">
          <p>
            Este sitio web pertenece a Propagaluz, una fundación en proceso de
            registro en España. La información publicada aquí es de carácter
            informativo y se irá completando a medida que el proceso de registro
            avance.
          </p>
          <p>
            <strong>Contacto.</strong> camila@propagaluz.com
          </p>
          <p>
            <strong>Propiedad intelectual.</strong> Los textos y materiales publicados
            en este sitio pertenecen a Propagaluz o a quienes los cedieron
            expresamente. Las fotografías históricas de El Carabobeño y de la familia
            Alemán se utilizan con consentimiento familiar. Cualquier reproducción
            requiere autorización previa.
          </p>
          <p>
            <strong>Datos del responsable legal.</strong> Andrés Casanova Vegas,
            responsable legal de la fundación durante el período de minoría de edad
            de la fundadora. Contacto a través del correo común.
          </p>
          <p className="text-sm text-ink-muted pt-6">
            Esta página se actualizará con el número de registro, el domicilio fiscal
            y el resto de los datos legales obligatorios una vez completado el
            proceso de inscripción.
          </p>
        </div>
      </div>
    </article>
  );
}
