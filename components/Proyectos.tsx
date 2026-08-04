import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProyectoType {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  enlaceGithub: string;
  enlaceDemo: string;
  imagen?: string;      
  youtubeVideo?: string; 
}

function obtenerURLIncrustada(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  
  if (match && match[2].length === 11) {
    const videoId = match[2];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0`;
  }
  return null;
}

const listaProyectos: ProyectoType[] = [
  {
    id: 1,
    titulo: "Sistema de Gestión Clínica",
    descripcion: "Plataforma Full-Stack para administración médica. Integra buscadores inteligentes, descarga dinámica de reportes en PDF y UI optimizada. Frontend de alto rendimiento con Vite y Backend robusto en AWS con despliegue continuo vía Git.",
    tecnologias: ["React (Vite)", "Django REST", "AWS", "jsPDF"],
    enlaceGithub: "https://historial-clinico-frontend.vercel.app/",
    enlaceDemo: "https://historial-clinico-frontend.vercel.app/",
    youtubeVideo: "https://youtu.be/hloLO-VKWaI" 
  },
  {
    id: 2,
    titulo: "FarmaControl - Punto de Venta",
    descripcion: "Gestión integral de inventario farmacéutico. Cuenta con alertas de vencimiento, control de stock crítico, validaciones estrictas (Zod) y carrito de compras en tiempo real.",
    tecnologias: ["Next.js", "TypeScript", "Django", "Tailwind"],
    enlaceGithub: "https://farmacia-frontend.netlify.app", 
    enlaceDemo: "https://farmacia-frontend.netlify.app", 
    youtubeVideo: "https://youtu.be/1rpuWsqfCPQ"
  },
  {
    id: 3,
    titulo: "Hyper - Plataforma E-commerce",
    descripcion: "Desarrollo integral de una tienda en línea de alto rendimiento. Implementación de carrito de compras y pasarela de pagos.",
    tecnologias: ["React", "Next.js", "Django", "PostgreSQL"],
    enlaceGithub: "#",
    enlaceDemo: "#",
    imagen: "https://placehold.co/600x400/FDF1F0/9B2C3B.png?text=Hyper+Shop" 
  },
  {
    id: 4,
    titulo: "Sakura - Tienda Virtual",
    descripcion: "Aplicación web de comercio electrónico con enfoque en la experiencia de usuario (UX). Consumo de API REST personalizada.",
    tecnologias: ["React", "Tailwind CSS", "Node.js", "API REST"],
    enlaceGithub: "#",
    enlaceDemo: "#",
    imagen: "https://placehold.co/600x400/FDF1F0/9B2C3B.png?text=Sakura+Boutique"
  }
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-16 md:py-24 bg-[#FFFCF8] border-t border-[#F8E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#3F2E2A] sm:text-4xl">
            Proyectos Destacados
          </h2>
          <div className="w-16 h-1 bg-[#9B2C3B] my-6 rounded-full mx-auto"></div>
          <p className="text-base text-[#705E59] md:text-lg font-medium">
            Una selección de mis trabajos más recientes combinando diseño frontend y arquitectura backend.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {listaProyectos.map((proyecto) => {
            const iframeUrl = proyecto.youtubeVideo ? obtenerURLIncrustada(proyecto.youtubeVideo) : null;

            return (
              <div key={proyecto.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#F8E5E5] shine-effect transition-all duration-300 hover:shadow-xl hover:shadow-[#9B2C3B]/10 hover:border-[#9B2C3B]/30 hover:-translate-y-2">
                
                {/* CONTENEDOR MULTIMEDIA */}
                <div className="relative w-full h-48 overflow-hidden bg-[#FDF1F0] border-b border-[#F8E5E5]">
                  {iframeUrl ? (
                    <iframe
                      src={iframeUrl}
                      title={`Video de demostración de ${proyecto.titulo}`}
                      allow="autoplay; encrypted-media"
                      className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none scale-105 group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <Image 
                      src={proyecto.imagen!} 
                      alt={`Captura de ${proyecto.titulo}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  )}
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-bold text-[#3F2E2A] mb-3 group-hover:text-[#9B2C3B] transition-colors">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-[#705E59] text-sm mb-6 leading-relaxed font-medium">
                    {proyecto.descripcion}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {proyecto.tecnologias.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs font-bold bg-[#FDF1F0] text-[#9B2C3B] border border-[#F8E5E5] rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-5 pt-5 border-t border-[#F8E5E5]">
                    <Link 
                      href={proyecto.enlaceGithub} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#705E59] hover:text-[#9B2C3B] transition-colors duration-300"
                    >
                      Código ↗
                    </Link>
                    
                    <Link 
                      href={proyecto.enlaceDemo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#9B2C3B] hover:text-[#800000] transition-colors duration-300"
                    >
                      Ver Demo ↗
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}