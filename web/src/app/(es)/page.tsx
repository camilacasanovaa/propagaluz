import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ManifestoPreview } from "@/components/home/ManifestoPreview";
import { OriginTeaser } from "@/components/home/OriginTeaser";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Transparency } from "@/components/home/Transparency";

export const metadata: Metadata = {
  title: "Propagaluz · Una fundación de intención",
  description:
    "Acompañamos la educación de los niños venezolanos. Desde Madrid, hacia Venezuela.",
  alternates: {
    canonical: "/",
    languages: { "es-ES": "/", "en-US": "/en" },
  },
};

export default function HomePage() {
  return (
    <>
      <Hero locale="es" />
      <ManifestoPreview locale="es" />
      <OriginTeaser locale="es" />
      <HowItWorks locale="es" />
      <Transparency locale="es" />
    </>
  );
}
