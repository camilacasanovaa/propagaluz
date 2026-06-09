import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Stakes } from "@/components/sections/Stakes";
import { Intention } from "@/components/sections/Intention";
import { Partners } from "@/components/sections/Partners";
import { OurStory } from "@/components/sections/OurStory";

export const metadata: Metadata = {
  title: "Propagaluz · Every child, a light.",
  description:
    "Propagaluz supports the education of Venezuelan children.",
  alternates: {
    canonical: "/en",
    languages: { "es-ES": "/", "en-US": "/en" },
  },
};

export default function HomePageEn() {
  return (
    <>
      <Hero locale="en" />
      <Stakes locale="en" />
      <Intention locale="en" />
      <Partners locale="en" />
      <OurStory locale="en" />
    </>
  );
}
