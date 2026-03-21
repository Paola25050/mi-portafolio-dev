import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'

// Usamos la fuente Inter, muy limpia y moderna para interfaces
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi Portafolio | Desarrolladora Frontend",
  description: "Portafolio profesional de desarrollo web y aplicaciones.",
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
        {/* Aquí se renderizará el contenido de cada página */}
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}