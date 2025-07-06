import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Issouf Fadika - Président du conseil d'administration",
  description:
    "Leader expérimenté avec plus de 40 ans d'expertise dans la logistique internationale, le transport maritime et la gestion portuaire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ScrollProgress />
        <nav className="h-20 bg-dark-gold border-b border-gold shadow-gold flex items-center justify-between w-full m-auto px-4 md:px-10">
          <div className="font-bold text-xl md:text-2xl text-gold">I-F</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <a
              href="/"
              className="text-gold font-bold text-lg hover:text-white transition-colors"
            >
              Accueil
            </a>
            <a
              href="/Social"
              className="text-gold font-semibold hover:text-white transition-colors"
            >
              Social
            </a>
            <a
              href="/Politique"
              className="text-gold font-semibold hover:text-white transition-colors"
            >
              Politique
            </a>
            <a
              href="/Economique"
              className="text-gold font-semibold hover:text-white transition-colors"
            >
              Économique
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
