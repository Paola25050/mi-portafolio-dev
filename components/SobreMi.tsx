import { FaReact, FaPython, FaFigma, FaGithub, FaShieldAlt, FaBrain, FaNetworkWired } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiHtml5, SiCss, SiDjango, SiPostgresql, SiGit, SiNodedotjs } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-20 md:py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Contenedor Principal Oscuro (Replicando el fondo de la imagen) */}
        <div className="bg-[#18181b] border border-zinc-800/50 rounded-3xl p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row gap-12 shadow-2xl">

          {/* Columna Izquierda: Textos */}
          <div className="lg:w-2/5 flex flex-col justify-start pt-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
              PaosDev
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Sobre mí
            </h3>
            <div className="w-16 h-1 bg-blue-600 mb-8 rounded-full"></div>

            <div className="text-zinc-400 space-y-6 text-base md:text-lg leading-relaxed">
              <p>
                Soy una desarrolladora Full-Stack con un profundo enfoque en el ecosistema Frontend. Mi pasión radica en construir interfaces de usuario excepcionales y dinámicas, pero con la capacidad técnica para sumergirme en el código del servidor cuando el proyecto lo requiere.
              </p>
              <p>
                He trabajado en el desarrollo de plataformas robustas, gestionando todo el ciclo de vida: desde la maquetación de componentes interactivos, hasta la integración con APIs REST y la construcción de modelos de datos complejos con frameworks como Django.
              </p>
            </div>

            
          </div>

          {/* Columna Derecha: Bento Box Grid */}
          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <h3 className="text-2xl font-bold text-white mt-12 mb-4">
              Mi stack tecnológico
            </h3>
            {/* Frontend (Ocupa 2 columnas) */}
            <div className="md:col-span-2 rounded-2xl border border-blue-500/40 bg-[#202024]/60 p-6 md:p-8 flex flex-col items-center justify-center transition-all hover:border-blue-500/80 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]">
              <h4 className="text-blue-400 font-semibold mb-6 text-lg">Frontend (Mi Especialidad)</h4>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {/* En Frontend solo dejamos los íconos, sin texto, igual que la imagen */}
                <SiHtml5 className="text-[2.5rem] md:text-5xl text-[#E34F26] hover:-translate-y-1 transition-transform cursor-pointer" />
                <SiCss className="text-[2.5rem] md:text-5xl text-[#1572B6] hover:-translate-y-1 transition-transform cursor-pointer" />
                <SiJavascript className="text-[2.5rem] md:text-5xl text-[#F7DF1E] hover:-translate-y-1 transition-transform cursor-pointer" />
                <SiTypescript className="text-[2.5rem] md:text-5xl text-[#3178C6] hover:-translate-y-1 transition-transform cursor-pointer" />
                <FaReact className="text-[2.5rem] md:text-5xl text-[#61DAFB] hover:-translate-y-1 transition-transform cursor-pointer" />
                <SiNextdotjs className="text-[2.5rem] md:text-5xl text-white hover:-translate-y-1 transition-transform cursor-pointer" />
                <SiTailwindcss className="text-[2.5rem] md:text-5xl text-[#38B2AC] hover:-translate-y-1 transition-transform cursor-pointer" />
              </div>
            </div>

            {/* Backend (Ocupa 1 columna) */}
            <div className="rounded-2xl border border-green-500/40 bg-[#202024]/60 p-6 flex flex-col items-center transition-all hover:border-green-500/80 hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.2)]">
              <h4 className="text-green-500 font-semibold mb-6 text-lg">Backend</h4>
              <div className="grid grid-cols-2 gap-y-6 gap-x-8 w-full">
                <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform cursor-pointer">
                  <FaPython className="text-4xl text-[#3776AB]" />
                  <span className="text-xs text-zinc-400">Python</span>
                </div>
                <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform cursor-pointer">
                  <SiDjango className="text-4xl text-[#092E20]" />
                  <span className="text-xs text-zinc-400">Django</span>
                </div>
                <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform cursor-pointer">
                  <SiPostgresql className="text-4xl text-[#4169E1]" />
                  <span className="text-xs text-zinc-400">PostgreSQL</span>
                </div>
                <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform cursor-pointer">
                  <SiNodedotjs className="text-4xl text-[#339933]" />
                  <span className="text-xs text-zinc-400">Node.js</span>
                </div>
              </div>
            </div>

            {/* Herramientas (Ocupa 1 columna) */}
            <div className="rounded-2xl border border-zinc-500/40 bg-[#202024]/60 p-6 flex flex-col items-center transition-all hover:border-zinc-400/80 hover:shadow-[0_0_30px_-10px_rgba(161,161,170,0.2)]">
              <h4 className="text-zinc-400 font-semibold mb-6 text-lg">Herramientas</h4>
              <div className="grid grid-cols-2 gap-y-6 gap-x-8 w-full">
                <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform cursor-pointer">
                  <VscVscode className="text-4xl text-[#007ACC]" />
                  <span className="text-xs text-zinc-400">VS Code</span>
                </div>
                <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform cursor-pointer">
                  <SiGit className="text-4xl text-[#F05032]" />
                  <span className="text-xs text-zinc-400">Git</span>
                </div>
                <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform cursor-pointer">
                  <FaGithub className="text-4xl text-white" />
                  <span className="text-xs text-zinc-400">GitHub</span>
                </div>
                <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform cursor-pointer">
                  <FaFigma className="text-4xl text-[#F24E1E]" />
                  <span className="text-xs text-zinc-400">Figma</span>
                </div>
              </div>
            </div>

            {/* Explorando (Ocupa 2 columnas) */}
            <div className="md:col-span-2 rounded-2xl border border-orange-500/40 bg-[#202024]/60 p-6 flex flex-col items-center transition-all hover:border-orange-500/80 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.2)]">
              <h4 className="text-orange-500 font-semibold mb-6 text-lg">Explorando</h4>
              <div className="grid grid-cols-3 gap-6 w-full max-w-sm mx-auto">
                <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform cursor-pointer">
                  <FaShieldAlt className="text-4xl text-[#E34F26]" />
                  <span className="text-xs text-zinc-400">Ciberseguridad</span>
                </div>
                <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform cursor-pointer">
                  <FaBrain className="text-4xl text-[#FF69B4]" />
                  <span className="text-xs text-zinc-400 text-center">Machine Learning</span>
                </div>
                <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform cursor-pointer">
                  <FaNetworkWired className="text-4xl text-[#1572B6]" />
                  <span className="text-xs text-zinc-400">Redes</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}