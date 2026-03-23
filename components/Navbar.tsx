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
    // Fondo claro con opacidad suave
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FFFCF8]/90 border-b border-[#F8E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Floral Sophisticated */}
          <div className="flex-shrink-0 flex items-center gap-2">
            {/* Pequeño ícono floral */}
            <svg className="w-6 h-6" viewBox="0 0 100 100" fill="#9B2C3B"><circle cx="50" cy="50" r="40" /></svg>
            <Link href="/" className="text-xl font-extrabold tracking-tighter text-[#3F2E2A]">
              Paos<span className="text-[#9B2C3B]">Dev</span>
            </Link>
          </div>
          
          {/* BOTÓN DE HAMBURGUESA (SÓLO MÓVIL) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#3F2E2A] hover:text-[#9B2C3B] focus:outline-none transition-colors duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* MENÚ DESKTOP (SÓLO PANTALLAS GRANDES) - Transiciones suaves estilo Edwin Santos */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-sm font-medium text-[#3F2E2A] hover:text-[#9B2C3B] transition-colors duration-300 ease-in-out"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-[#F8E5E5] shadow-xl`} id="mobile-menu">
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#3F2E2A] hover:bg-[#FDF1F0] hover:text-[#9B2C3B] transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}