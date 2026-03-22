"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo o Nombre */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100">
              Dev<span className="text-blue-600">Portfolio</span>
            </Link>
          </div>
          
          {/* BOTÓN DE HAMBURGUESA (SÓLO MÓVIL) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" /> // Ícono de cierre
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" /> // Ícono de menú
              )}
            </button>
          </div>

          {/* MENÚ DESKTOP (SÓLO PANTALLAS GRANDES) */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-sm font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE (SÓLO MÓVIL) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800 shadow-xl`} id="mobile-menu">
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)} // Cerrar menú al hacer clic
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-blue-600 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-blue-400 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}