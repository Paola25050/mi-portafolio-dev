import Image from 'next/image';
import Link from 'next/link';

export default function Proyectos() {
  // Aquí definimos la información de tus proyectos en un arreglo
  const listaProyectos = [
    {
      id: 1,
      titulo: "Hyper - Plataforma E-commerce",
      descripcion: "Desarrollo integral de una tienda en línea de alto rendimiento. Implementación de carrito de compras dinámico, pasarela de pagos y panel de administración.",
      tecnologias: ["React", "Next.js", "Django", "PostgreSQL"],
      enlaceGithub: "#",
      enlaceDemo: "#",
      // Nota: Luego reemplazaremos esto con imágenes reales
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
    <section id="proyectos" className="py-24 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Proyectos Destacados
          </h2>
          <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Una selección de mis trabajos más recientes combinando diseño frontend y arquitectura backend.
          </p>
        </div>

        {/* Cuadrícula de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listaProyectos.map((proyecto) => (
            <div 
              key={proyecto.id} 
              className="group flex flex-col bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Imagen del Proyecto */}
              <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                {/* Usamos una etiqueta img estándar por ahora para los placeholders, 
                    luego la cambiaremos al componente <Image> de Next.js */}
                <img 
                  src={proyecto.imagen} 
                  alt={`Captura de pantalla de ${proyecto.titulo}`}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {proyecto.titulo}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 flex-grow">
                  {proyecto.descripcion}
                </p>
                
                {/* Etiquetas de Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proyecto.tecnologias.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones de Enlaces */}
                <div className="flex gap-4 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
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