import type { Metadata } from "next";
import { Geist, Reenie_Beanie } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const script = Reenie_Beanie({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://propagaluz.com"),
  title: {
    default: "Propagaluz · Every child, a light.",
    template: "%s · Propagaluz",
  },
  description:
    "Propagaluz supports the education of Venezuelan children. A US 501(c)(3) in registration.",
  openGraph: {
    siteName: "Propagaluz",
    type: "website",
    locale: "en_US",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      // The page is English-first with a Spanish accent in the hero + footer tagline.
      // Per-element lang="es" attributes mark those passages for screen readers.
      lang="en"
      className={`${body.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:text-paper focus:px-3 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
