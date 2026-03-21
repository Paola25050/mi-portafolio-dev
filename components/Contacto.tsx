import Link from 'next/link';

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Ponte en contacto
          </h2>
          <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            ¿Tienes un proyecto en mente o buscas una desarrolladora para tu equipo? Me encantaría platicar contigo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Columna de Información */}
          <div className="space-y-8 bg-zinc-50 dark:bg-zinc-950/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Ubicación</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Cochabamba, Bolivia
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Teléfono / WhatsApp</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                +591 60741659
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Redes Profesionales</h3>
              <Link 
                href="https://www.linkedin.com/in/paola-valeria-ramirez-92086215b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-medium"
              >
                Visitar mi perfil de LinkedIn ↗
              </Link>
            </div>
            
          </div>

          {/* Columna del Formulario (UI) */}
          <div className="bg-white dark:bg-zinc-900">
            <form action="https://formspree.io/f/mpqynnvj" 
              method="POST" className="space-y-6 flex flex-col h-full justify-between">
              <div className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    Nombre
                  </label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-zinc-100 transition-all"
                    placeholder="Tu nombre o empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    Correo electrónico
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-zinc-100 transition-all"
                    placeholder="ejemplo@correo.com"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    Mensaje
                  </label>
                  <textarea 
                    id="mensaje" 
                    name="mensaje"
                    required
                    rows={4} 
                    className="w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-zinc-100 transition-all resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}