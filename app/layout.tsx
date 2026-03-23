import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mascot from "../components/Mascot"; // Importamos la mascota

// Sticking with Inter for the Tipografía Style Alen Lobeiras
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paola Ramirez | Desarrolladora Frontend Full-Stack Analítica",
  description: "Portafolio profesional de desarrollo web especializado en React y Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      {/* Forzamos el fondo base Crema */}
      <body className={`${inter.className} bg-[#FFFCF8] text-[#3F2E2A] antialiased`}>
        <Navbar />
        {/* Contenedor principal */}
        <main className="min-h-screen flex flex-col p-4 sm:p-6 lg:p-8 relative">
          {children}
          <Mascot /> {/* ¡La gatita aparece aquí! */}
        </main>
        <Footer />
      </body>
    </html>
  );
}