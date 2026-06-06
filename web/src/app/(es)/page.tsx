import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Origen } from "@/components/sections/Origen";
import { Promise } from "@/components/sections/Promise";
import { DonateBig } from "@/components/sections/DonateBig";

export const metadata: Metadata = {
  title: "Propagaluz · Cada niño, una luz.",
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
      <Manifesto locale="es" />
      <HowWeWork locale="es" />
      <Origen locale="es" />
      <Promise locale="es" />
      <DonateBig locale="es" />
    </>
  );
}
