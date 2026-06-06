import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ManifestoPreview } from "@/components/home/ManifestoPreview";
import { OriginTeaser } from "@/components/home/OriginTeaser";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Transparency } from "@/components/home/Transparency";

export const metadata: Metadata = {
  title: "Propagaluz · A foundation of intention",
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
      <ManifestoPreview locale="en" />
      <OriginTeaser locale="en" />
      <HowItWorks locale="en" />
      <Transparency locale="en" />
    </>
  );
}
