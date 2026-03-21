import Link from "next/link";
import SobreMi from "../components/SobreMi";
import Proyectos from "../components/Proyectos";
import Contacto from "../components/Contacto";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      {/* SECCIÓN HERO */}
      <section 
        id="inicio" 
        className="flex flex-col items-center justify-center min-h-[90vh] px-4 text-center mt-[-64px] pt-[64px]"
      >
        <div className="space-y-6 max-w-3xl">
          <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm md:text-base">
            ¡Hola! Mi nombre es
          </p>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Paola Valeria Ramirez.
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-500 dark:text-zinc-400">
            Construyo experiencias web.
          </h2>
          
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto pt-4 leading-relaxed">
            Soy una desarrolladora Full-Stack especializada en Frontend. Me apasiona crear interfaces modernas y rápidas con React y Next.js, respaldadas por arquitecturas de backend sólidas y bases de datos eficientes.
          </p>
        </div>

        {/* Botones de Acción (Call to Action) */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link 
            href="#proyectos" 
            className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1"
          >
            Ver mis proyectos
          </Link>
          <Link 
            href="#contacto" 
            className="px-8 py-3 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all hover:-translate-y-1"
          >
            Contactarme
          </Link>
        </div>
      </section>

      {/* Aquí irán las siguientes secciones que construiremos */}
      <SobreMi />
      <Proyectos />
      <Contacto />

    </div>
  );
}