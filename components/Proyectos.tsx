import Image from 'next/image';
import Link from 'next/link';

export default function Proyectos() {
  const listaProyectos = [
    {
      id: 1,
      titulo: "Hyper - Plataforma E-commerce",
      descripcion: "Desarrollo integral de una tienda en línea de alto rendimiento. Implementación de carrito de compras y pasarela de pagos.",
      tecnologias: ["React", "Next.js", "Django", "PostgreSQL"],
      enlaceGithub: "#",
      enlaceDemo: "#",
      imagen: "https://placehold.co/600x400/FDF1F0/9B2C3B.png?text=Hyper+Shop" 
    },
    {
      id: 2,
      titulo: "Sakura - Tienda Virtual",
      descripcion: "Aplicación web de comercio electrónico con enfoque en la experiencia de usuario (UX). Consumo de API REST personalizada.",
      tecnologias: ["React", "Tailwind CSS", "Node.js", "API REST"],
      enlaceGithub: "#",
      enlaceDemo: "#",
      imagen: "https://placehold.co/600x400/FDF1F0/9B2C3B.png?text=Sakura+Boutique"
    },
    {
      id: 3,
      titulo: "Dashboard de Análisis (Ejemplo)",
      descripcion: "Interfaz administrativa para visualizar métricas de ventas y gestión de usuarios con gráficos interactivos.",
      tecnologias: ["TypeScript", "Next.js", "SQL", "Chart.js"],
      enlaceGithub: "#",
      enlaceDemo: "#",
      imagen: "https://placehold.co/600x400/FDF1F0/9B2C3B.png?text=Analytic+Dashboard"
    }
  ];

  return (
    <section id="proyectos" className="py-16 md:py-24 bg-[#FFFCF8] border-t border-[#F8E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#3F2E2A] sm:text-4xl">
            Proyectos Destacados
          </h2>
          <div className="w-16 h-1 bg-[#9B2C3B] my-6 rounded-full mx-auto"></div>
          <p className="text-base text-[#705E59] md:text-lg font-medium">
            Una selección de mis trabajos más recientes combinando diseño frontend y arquitectura backend.
          </p>
        </div>

        {/* Cuadrícula de Tarjetas */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {listaProyectos.map((proyecto) => (
            <div 
              key={proyecto.id} 
              /* ¡AQUÍ ESTÁ EL NUEVO HOVER! Sin azules, con salto, brillo y sombras guindo */
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#F8E5E5] shine-effect transition-all duration-300 hover:shadow-xl hover:shadow-[#9B2C3B]/10 hover:border-[#9B2C3B]/30 hover:-translate-y-2 cursor-pointer"
            >
              {/* Imagen del Proyecto */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#FDF1F0] md:h-48 border-b border-[#F8E5E5]">
                <Image 
                  src={proyecto.imagen} 
                  alt={`Captura de pantalla de ${proyecto.titulo}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold text-[#3F2E2A] mb-3 group-hover:text-[#9B2C3B] transition-colors">
                  {proyecto.titulo}
                </h3>
                <p className="text-[#705E59] text-sm mb-6 leading-relaxed font-medium">
                  {proyecto.descripcion}
                </p>
                
                {/* Etiquetas de Tecnologías (A juego con la paleta) */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {proyecto.tecnologias.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-xs font-bold bg-[#FDF1F0] text-[#9B2C3B] border border-[#F8E5E5] rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones de Enlaces */}
                <div className="flex gap-5 pt-5 border-t border-[#F8E5E5]">
                  <Link href={proyecto.enlaceGithub} className="text-sm font-bold text-[#705E59] hover:text-[#9B2C3B] transition-colors duration-300">
                    Código ↗
                  </Link>
                  <Link href={proyecto.enlaceDemo} className="text-sm font-bold text-[#9B2C3B] hover:text-[#800000] transition-colors duration-300">
                    Ver Demo ↗
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}