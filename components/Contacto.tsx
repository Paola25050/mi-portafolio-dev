import Link from 'next/link';

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-[#FFFCF8] md:py-24 border-t border-[#F8E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        
        <div className="mb-10 md:mb-12 flex flex-col items-start gap-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#3F2E2A] sm:text-4xl">
            Ponte en contacto
          </h2>
          <div className="w-16 h-1 bg-[#9B2C3B] rounded-full md:w-20"></div>
          <p className="mt-2 text-base text-[#705E59] max-w-2xl md:text-lg font-medium leading-relaxed">
            ¿Tienes un proyecto en mente o buscas una desarrolladora analítica para tu equipo? Me encantaría platicar contigo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Columna de Información */}
          <div className="space-y-6 md:space-y-8 bg-[#FDF1F0]/70 p-6 md:p-8 rounded-2xl border border-[#F8E5E5] shadow-sm h-fit">
            <div>
              <h3 className="text-base font-bold text-[#3F2E2A] mb-2 md:text-lg tracking-tight">Ubicación</h3>
              <p className="text-sm text-[#705E59] md:text-base leading-relaxed font-medium">
                Cochabamba, Bolivia
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#3F2E2A] mb-2 md:text-lg tracking-tight">WhatsApp / Teléfono</h3>
              <p className="text-sm text-[#705E59] md:text-base leading-relaxed font-medium">
                +591 60741659
              </p>
            </div>

            <div className="pt-6 border-t border-[#F8E5E5] md:pt-8">
              <h3 className="text-base font-bold text-[#3F2E2A] mb-2 md:text-lg tracking-tight">Redes Profesionales</h3>
              <Link 
                href="https://www.linkedin.com/in/paola-valeria-ramirez-92086215b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex text-sm font-semibold text-[#9B2C3B] hover:text-[#800000] transition-colors md:text-base"
              >
                Visitar mi perfil de LinkedIn ↗
              </Link>
            </div>
          </div>

          {/* Columna del Formulario conectado a FORMSPREE */}
          <div className="bg-[#FFFCF8]">
            {/* Aquí agregamos el action con tu link y el method="POST" */}
            <form 
              action="https://formspree.io/f/mpqynnvj" 
              method="POST"
              className="space-y-5 md:space-y-6 flex flex-col h-full"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-[#3F2E2A] mb-1.5 md:mb-1">
                    Nombre
                  </label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre"
                    required
                    className="w-full px-4 py-3 text-sm rounded-xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#9B2C3B]/40 focus:border-[#9B2C3B] text-[#3F2E2A] transition-all md:text-base"
                    placeholder="Tu nombre o empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#3F2E2A] mb-1.5 md:mb-1">
                    Correo electrónico
                  </label>
                  {/* Importante: name="email" para que Formspree pueda responder al remitente */}
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 text-sm rounded-xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#9B2C3B]/40 focus:border-[#9B2C3B] text-[#3F2E2A] transition-all md:text-base"
                    placeholder="ejemplo@correo.com"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-[#3F2E2A] mb-1.5 md:mb-1">
                    Mensaje
                  </label>
                  <textarea 
                    id="mensaje" 
                    name="mensaje"
                    required
                    rows={5} 
                    className="w-full px-4 py-3 text-sm rounded-xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#9B2C3B]/40 focus:border-[#9B2C3B] text-[#3F2E2A] transition-all resize-none md:text-base md:rows-4"
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>
              </div>

              {/* Botón de Enviar con EFECTO BRILLO Y REFLEJO */}
              <button 
                type="submit" 
                className="group relative overflow-hidden w-full px-8 py-3.5 mt-auto rounded-xl bg-[#9B2C3B] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(155,44,59,0.6)] hover:-translate-y-1 text-base border border-[#9B2C3B]"
              >
                {/* Reflejo de cristal */}
                <span className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] transition-all duration-700 group-hover:left-[200%]"></span>
                <span className="relative z-10">Enviar mensaje</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}