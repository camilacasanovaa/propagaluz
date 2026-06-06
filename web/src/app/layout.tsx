import type { Metadata } from "next";
import { Source_Serif_4, Inter, Archivo_Black, Fraunces } from "next/font/google";
import "./globals.css";

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const accent = Fraunces({
  variable: "--font-accent",
  subsets: ["latin"],
  style: ["italic"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://propagaluz.com"),
  title: {
    default: "Propagaluz · Cada niño, una luz.",
    template: "%s · Propagaluz",
  },
  description:
    "Acompañamos la educación de los niños venezolanos. Desde Madrid, hacia Venezuela.",
  openGraph: {
    siteName: "Propagaluz",
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${serif.variable} ${sans.variable} ${display.variable} ${accent.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:text-paper focus:px-3 focus:py-2 focus:rounded"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
