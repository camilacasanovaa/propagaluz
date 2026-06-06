import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Stakes } from "@/components/sections/Stakes";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Partners } from "@/components/sections/Partners";
import { OurStory } from "@/components/sections/OurStory";
import { Promise } from "@/components/sections/Promise";
import { Donate } from "@/components/sections/Donate";

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
      <WhatWeDo locale="en" />
      <Partners locale="en" />
      <OurStory locale="en" />
      <Promise locale="en" />
      <Donate locale="en" />
    </>
  );
}
