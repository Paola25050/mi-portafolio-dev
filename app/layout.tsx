import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paola Ramirez | Desarrolladora Frontend Full-Stack",
  description: "Portafolio profesional de desarrollo web especializado en React y Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 antialiased`}>
        <Navbar />
        {/* Agregamos p-4 sm:p-6 lg:p-8 para espaciado horizontal consistente en móvil */}
        <main className="min-h-screen flex flex-col p-4 sm:p-6 lg:p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}