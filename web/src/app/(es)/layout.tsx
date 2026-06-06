import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header locale="es" />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer locale="es" />
    </>
  );
}
