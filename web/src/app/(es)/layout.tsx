import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Header locale="es" />
      <main id="main">{children}</main>
      <Footer locale="es" />
    </div>
  );
}
