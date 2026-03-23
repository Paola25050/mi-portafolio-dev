import { FaReact, FaPython, FaFigma, FaGithub, FaShieldAlt, FaBrain, FaNetworkWired } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiHtml5, SiCss, SiDjango, SiPostgresql, SiGit, SiNodedotjs } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export default function SobreMi() {
  const stack = [
    {
      id: "frontend",
      titulo: "Frontend (Mi Especialidad)",
      colorTexto: "text-cyan-00",
      destacado: true,
      tecnologias: [
        { nombre: "HTML5", icono: <SiHtml5 className="text-4xl text-[#E34F26]" /> },
        { nombre: "CSS3", icono: <SiCss className="text-4xl text-[#1572B6]" /> },
        { nombre: "JavaScript", icono: <SiJavascript className="text-4xl text-[#F7DF1E]" /> },
        { nombre: "TypeScript", icono: <SiTypescript className="text-4xl text-[#3178C6]" /> },
        { nombre: "React", icono: <FaReact className="text-4xl text-[#61DAFB]" /> },
        { nombre: "Next.js", icono: <SiNextdotjs className="text-4xl text-zinc-900" /> },
        { nombre: "Tailwind", icono: <SiTailwindcss className="text-4xl text-[#38B2AC]" /> },
      ]
    },
    {
      id: "backend",
      titulo: "Backend",
      colorTexto: "text-green-600",
      destacado: false,
      tecnologias: [
        { nombre: "Python", icono: <FaPython className="text-4xl text-[#3776AB]" /> },
        { nombre: "Django", icono: <SiDjango className="text-4xl text-[#092E20]" /> },
        { nombre: "PostgreSQL", icono: <SiPostgresql className="text-4xl text-[#4169E1]" /> },
        { nombre: "Node.js", icono: <SiNodedotjs className="text-4xl text-[#339933]" /> },
      ]
    },
    {
      id: "herramientas",
      titulo: "Herramientas",
      colorTexto: "text-zinc-600",
      destacado: false,
      tecnologias: [
        { nombre: "VS Code", icono: <VscVscode className="text-4xl text-[#007ACC]" /> },
        { nombre: "Git", icono: <SiGit className="text-4xl text-[#F05032]" /> },
        { nombre: "GitHub", icono: <FaGithub className="text-4xl text-zinc-900" /> },
        { nombre: "Figma", icono: <FaFigma className="text-4xl text-[#F24E1E]" /> },
      ]
    },
    {
      id: "explorando",
      titulo: "Explorando",
      colorTexto: "text-orange-600",
      destacado: true,
      tecnologias: [
        { nombre: "Ciberseguridad", icono: <FaShieldAlt className="text-4xl text-[#E34F26]" /> },
        { nombre: "Machine Learning", icono: <FaBrain className="text-4xl text-[#FF69B4]" /> },
        { nombre: "Redes", icono: <FaNetworkWired className="text-4xl text-[#1572B6]" /> },
      ]
    }
  ];

  return (
    <section id="sobre-mi" className="py-16 md:py-24 bg-[#FFFCF8] border-t border-[#F8E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
          
          {/* Columna Izquierda: Textos (Se mantiene pegada al scroll) */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3F2E2A] mb-2 tracking-tight">
              PaosDev
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#3F2E2A] mb-4">
              Sobre mí
            </h3>
            <div className="w-12 h-1 bg-[#9B2C3B] mb-6 rounded-full"></div>

            <div className="text-[#705E59] space-y-4 text-sm md:text-base leading-relaxed font-medium">
              <p>
                Soy una desarrolladora Full-Stack especializada en Frontend, con un profundo enfoque técnico y analítico. Me apasiona crear interfaces modernas, rápidas y seguras.
              </p>
              <p>
                Comprender el panorama completo (incluyendo conceptos de seguridad web y redes) me ayuda a escribir código que no solo se ve bien, sino que es robusto y altamente optimizado.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Bento Box Grid */}
          <div className="lg:w-2/3 flex flex-col w-full">
            <h3 className="text-xl font-bold text-[#3F2E2A] mb-6 text-center lg:text-left">
              Mi stack tecnológico
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {stack.map((categoria) => (
                <div 
                  key={categoria.id} 
                  /* Devolvemos el salto notorio a las tarjetas (-translate-y-2) y mantenemos el brillo */
                  className={`shine-effect rounded-2xl border border-[#F8E5E5] bg-white p-6 md:p-5 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#9B2C3B]/30 ${categoria.destacado ? 'md:col-span-2' : ''}`}
                >
                  <h4 className={`font-semibold mb-4 text-lg text-center tracking-tight ${categoria.colorTexto}`}>
                    {categoria.titulo}
                  </h4>
                  
                  <div className={`grid gap-y-6 gap-x-3 w-full justify-items-center ${categoria.destacado ? (categoria.id === "frontend" ? 'grid-cols-4 md:grid-cols-7' : 'grid-cols-3') : 'grid-cols-2'}`}>
                    {categoria.tecnologias.map((tech) => (
                      
                      /* ¡Aquí vuelve la magia de los saltos! El ícono y el texto saltan juntos */
                      <div 
                        key={tech.nombre} 
                        className="flex flex-col items-center justify-center gap-3 w-full transition-all duration-300 hover:-translate-y-2 hover:scale-110 cursor-pointer"
                      >
                        {tech.icono}
                        {/* El texto está siempre visible como antes */}
                        <span className="text-[10px] md:text-xs font-semibold text-[#705E59] text-center leading-tight">
                          {tech.nombre}
                        </span>
                      </div>

                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}