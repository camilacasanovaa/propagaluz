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
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stakes />
      <Intention />
      <Partners />
      <OurStory />
    </>
  );
}
