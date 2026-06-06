import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de privacidad",
  alternates: {
    canonical: "/privacidad",
    languages: { "es-ES": "/privacidad", "en-US": "/en/privacy" },
  },
};

export default function PrivacidadPage() {
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
          Política de privacidad
        </h1>

        <div className="mt-10 space-y-6 font-serif text-base leading-relaxed text-ink-soft">
          <p>
            Esta página describe cómo Propagaluz trata los datos personales que
            recibimos a través del formulario de la lista de espera de donaciones y de
            cualquier correo enviado a <a className="underline" href="mailto:camila@propagaluz.com">camila@propagaluz.com</a>.
          </p>
          <p>
            <strong>Responsable.</strong> Propagaluz, en proceso de registro en España.
            Contacto: camila@propagaluz.com.
          </p>
          <p>
            <strong>Datos que recogemos.</strong> Únicamente la dirección de correo
            electrónico que nos facilitas voluntariamente al inscribirte en la lista
            de espera. No usamos cookies de seguimiento ni de marketing.
          </p>
          <p>
            <strong>Finalidad.</strong> Avisarte cuando la fundación abra formalmente
            la posibilidad de recibir donaciones, y enviarte ocasionalmente una
            actualización sobre el trabajo de la fundación.
          </p>
          <p>
            <strong>Conservación.</strong> Conservamos tu correo electrónico hasta
            que solicites su baja o hasta que la fundación deje de operar.
          </p>
          <p>
            <strong>Tus derechos.</strong> Puedes ejercer en cualquier momento los
            derechos de acceso, rectificación, supresión, oposición, limitación y
            portabilidad escribiéndonos a camila@propagaluz.com.
          </p>
          <p className="text-sm text-ink-muted pt-6">
            Esta política se actualizará una vez la fundación complete su registro
            formal y se sumen los datos del responsable legal y la base jurídica
            específica conforme al RGPD.
          </p>
        </div>
      </div>
    </article>
  );
}
