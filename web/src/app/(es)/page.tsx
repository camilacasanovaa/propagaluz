import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Stakes } from "@/components/sections/Stakes";
import { Intention } from "@/components/sections/Intention";
import { Partners } from "@/components/sections/Partners";
import { OurStory } from "@/components/sections/OurStory";

export const metadata: Metadata = {
  title: "Propagaluz · Cada niño, una luz.",
  description:
    "Propagaluz acompaña la educación de los niños venezolanos.",
  alternates: {
    canonical: "/",
    languages: { "es-ES": "/", "en-US": "/en" },
  },
};

export default function HomePage() {
  return (
    <>
      <Hero locale="es" />
      <Stakes locale="es" />
      <Intention locale="es" />
      <Partners locale="es" />
      <OurStory locale="es" />
    </>
  );
}
