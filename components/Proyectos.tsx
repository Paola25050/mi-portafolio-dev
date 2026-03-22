import Image from 'next/image';
import Link from 'next/link';

export default function Proyectos() {
  const listaProyectos = [
    {
      id: 1,
      titulo: "Hyper - Plataforma E-commerce",
      descripcion: "Desarrollo integral de una tienda en línea de alto rendimiento. Implementación de carrito de compras dinámico, pasarela de pagos y panel de administración.",
      tecnologias: ["React", "Next.js", "Django", "PostgreSQL"],
      enlaceGithub: "#",
      enlaceDemo: "#",
      imagen: "https://placehold.co/600x400/27272a/ffffff?text=Proyecto+Hyper" 
    },
    {
      id: 2,
      titulo: "Sakura - Tienda Virtual",
      descripcion: "Aplicación web de comercio electrónico con enfoque en la experiencia de usuario (UX). Consumo de API REST personalizada y manejo de estado global.",
      tecnologias: ["React", "Tailwind CSS", "Node.js", "API REST"],
      enlaceGithub: "#",
      enlaceDemo: "#",
      imagen: "https://placehold.co/600x400/27272a/ffffff?text=Proyecto+Sakura"
    },
    {
      id: 3,
      titulo: "Dashboard de Análisis (Ejemplo)",
      descripcion: "Interfaz administrativa para visualizar métricas de ventas y gestión de usuarios en tiempo real con gráficos interactivos.",
      tecnologias: ["TypeScript", "Next.js", "SQL", "Chart.js"],
      enlaceGithub: "#",
      enlaceDemo: "#",
      imagen: "https://placehold.co/600x400/27272a/ffffff?text=Dashboard+Analytics"
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-zinc-50 dark:bg-zinc-950/50 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        
        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Proyectos Destacados
          </h2>
          <div className="w-16 h-1 bg-blue-600 mt-3.5 rounded-full md:w-20 md:mt-4"></div>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl md:text-lg">
            Una selección de mis trabajos más recientes combinando diseño frontend y arquitectura backend.
          </p>
        </div>

        {/* Cuadrícula de Tarjetas - MOBILE FIRST */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {listaProyectos.map((proyecto) => (
            <div 
              key={proyecto.id} 
              className="group flex flex-col bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 md:rounded-2xl"
            >
              {/* Imagen del Proyecto - MOBILE FIRST */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 md:h-48"> // Usamos aspect-video para móvil
                <img 
                  src={proyecto.imagen} 
                  alt={`Captura de pantalla de ${proyecto.titulo}`}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Contenido de la Tarjeta - MOBILE FIRST */}
              <div className="flex flex-col flex-grow p-5 md:p-6">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2.5 md:mb-2 md:text-xl">
                  {proyecto.titulo}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed md:leading-relaxed md:mb-4">
                  {proyecto.descripcion}
                </p>
                
                {/* Etiquetas de Tecnologías */}
                <div className="flex flex-wrap gap-2.5 md:gap-2 mb-6 md:mb-8">
                  {proyecto.tecnologias.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-lg md:px-2 md:py-1 md:rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones de Enlaces */}
                <div className="flex gap-4.5 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800 md:gap-4 md:pt-4 md:border-t">
                  <Link href={proyecto.enlaceGithub} className="text-sm font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                    Código ↗
                  </Link>
                  <Link href={proyecto.enlaceDemo} className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
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