import Link from "next/link";
import SobreMi from "../components/SobreMi";
import Proyectos from "../components/Proyectos";
import Contacto from "../components/Contacto";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative overflow-hidden bg-[#FFFCF8]">
      
      <section id="inicio" className="flex flex-col items-center justify-center min-h-[85vh] p-4 text-center pt-24 md:pt-32">
        <div className="space-y-3 max-w-3xl">
          <p className="text-[#9B2C3B] font-bold tracking-wide uppercase text-xs md:text-sm">
            ¡Hola! Mi nombre es
          </p>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-[#3F2E2A] md:text-6xl">
            Paola Valeria Ramirez.
          </h1>
          
          <h2 className="text-2xl font-bold text-[#705E59] md:text-4xl">
            Construyo experiencias web.
          </h2>
          
          <p className="text-sm text-[#705E59] max-w-2xl mx-auto pt-4 leading-relaxed md:text-lg font-medium">
            Desarrolladora Full-Stack especializada en Frontend con perfil técnico y analítico. Apasionada por crear interfaces modernas, rápidas y seguras.
          </p>
        </div>

        {/* =========================================
            BOTONES CON BRILLO EXTREMO Y REFLEJOS
           ========================================= */}
        <div className="flex flex-col sm:flex-row w-full max-w-xs gap-5 mt-10 md:w-auto md:max-w-none">
          
          {/* Botón 1: Guindo (Brillo intenso) */}
          <Link 
            href="#proyectos" 
            className="group relative overflow-hidden flex-1 px-8 py-3.5 rounded-xl bg-[#9B2C3B] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(155,44,59,0.6)] hover:-translate-y-1 text-sm md:flex-initial md:text-base text-center border border-[#9B2C3B]"
          >
            {/* Efecto de barrido de luz blanca */}
            <span className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] transition-all duration-700 group-hover:left-[200%]"></span>
            <span className="relative z-10">Ver mis proyectos</span>
          </Link>
          
          {/* Botón 2: Blanco (Brillo guindo suave) */}
          <Link 
            href="#contacto" 
            className="group relative overflow-hidden flex-1 px-8 py-3.5 rounded-xl bg-white text-[#3F2E2A] border border-[#F8E5E5] font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(155,44,59,0.25)] hover:border-[#9B2C3B]/50 hover:text-[#9B2C3B] hover:-translate-y-1 text-sm md:flex-initial md:text-base text-center"
          >
            {/* Efecto de barrido de luz guindo suave */}
            <span className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-[#9B2C3B]/10 to-transparent skew-x-[-25deg] transition-all duration-700 group-hover:left-[200%]"></span>
            <span className="relative z-10">Contactarme</span>
          </Link>

        </div>

        {/* BADGE "Disponible" - Con su propio mini resplandor al pasar el mouse */}
        <div className="mt-14 animate-float">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-[#F8E5E5]/80 text-[#9B2C3B] shadow-sm text-xs font-semibold tracking-wide cursor-default hover:shadow-[0_0_15px_rgba(155,44,59,0.2)] transition-shadow duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9B2C3B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9B2C3B]"></span>
            </span>
            Disponible para trabajar
          </div>
        </div>

      </section>

      <SobreMi />
      <Proyectos />
      <Contacto />
    </div>
  );
}