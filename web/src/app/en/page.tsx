import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Origen } from "@/components/sections/Origen";
import { Promise } from "@/components/sections/Promise";
import { DonateBig } from "@/components/sections/DonateBig";

export const metadata: Metadata = {
  title: "Propagaluz · Every child, a light.",
  description:
    "We support the education of Venezuelan children. From Madrid, toward Venezuela.",
  alternates: {
    canonical: "/en",
    languages: { "es-ES": "/", "en-US": "/en" },
  },
};

export default function HomePageEn() {
  return (
    <>
      <Hero locale="en" />
      <Manifesto locale="en" />
      <HowWeWork locale="en" />
      <Origen locale="en" />
      <Promise locale="en" />
      <DonateBig locale="en" />
    </>
  );
}
