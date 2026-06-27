"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarruselProps {
  imagenes: string[];
  titulo: string;
}

export default function CarruselImagenes({ imagenes, titulo }: CarruselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Temporizador blindado: depende solo del número total de imágenes
  useEffect(() => {
    if (!imagenes || imagenes.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, [imagenes.length]);

  // Avanzar manualmente al hacer clic en cualquier parte de la imagen
  const handleContainerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Evita que se abra el enlace principal del proyecto
    if (imagenes.length > 1) {
      setCurrentIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div 
      className="relative w-full h-48 overflow-hidden bg-[#FDF1F0] border-b border-[#F8E5E5] group cursor-pointer"
      onClick={handleContainerClick}
    >
      {/* TÉCNICA INFALIBLE: Imágenes superpuestas con cálculo de posición */}
      {imagenes.map((img, idx) => {
        // Cálculo matemático: 
        // Si currentIndex es 0 y esta es la imagen 0 -> posición 0% (Centro)
        // Si currentIndex es 0 y esta es la imagen 1 -> posición 100% (Derecha oculta)
        // Si currentIndex es 1 y esta es la imagen 0 -> posición -100% (Izquierda oculta)
        const position = (idx - currentIndex) * 100;
        
        return (
          <div
            key={idx}
            className="absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${position}%)` }}
          >
            <Image 
              src={img} 
              alt={`${titulo} - Imagen ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              priority={idx === 0} 
            />
          </div>
        );
      })}

      {/* Puntos Indicadores (Dots) Interactivos */}
      {imagenes.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-center gap-2 py-1.5 px-3 bg-white/80 backdrop-blur-sm rounded-full border border-[#F8E5E5] z-20 shadow-sm">
          {imagenes.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentIndex(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-[#9B2C3B] scale-125' : 'bg-[#9B2C3B]/40 hover:bg-[#9B2C3B]/70'
              }`}
              aria-label={`Ir a imagen ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}