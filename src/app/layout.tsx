import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

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
        {children}
      </body>
    </html>
  );
}
