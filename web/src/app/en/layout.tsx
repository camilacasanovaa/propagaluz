import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Header locale="en" />
      <main id="main">{children}</main>
      <Footer locale="en" />
    </div>
  );
}
