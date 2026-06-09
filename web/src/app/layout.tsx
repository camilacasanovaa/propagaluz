import type { Metadata } from "next";
import { Geist, Reenie_Beanie } from "next/font/google";
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
    default: "Propagaluz · Cada niño, una luz.",
    template: "%s · Propagaluz",
  },
  description:
    "Propagaluz acompaña la educación de los niños venezolanos.",
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
      className={`${body.variable} ${script.variable} h-full antialiased`}
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
