export default function SobreMi() {
  const frontendSkills = ["React", "Next.js", "JavaScript/TypeScript", "Tailwind CSS", "HTML/CSS"];
  const backendSkills = ["Python", "Django", "SQL", "APIs REST", "Bases de Datos"];
  const otrasSkills = ["Git/GitHub", "Redes", "Fundamentos de Seguridad", "Diseño UI/UX"];

  return (
    <section id="sobre-mi" className="py-24 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Sobre mí
          </h2>
          <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Columna de Texto */}
          <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              Soy una desarrolladora Full-Stack con un profundo enfoque en el ecosistema Frontend. Mi pasión radica en construir interfaces de usuario excepcionales y dinámicas, pero con la capacidad técnica para sumergirme en el código del servidor cuando el proyecto lo requiere.
            </p>
            <p>
              He trabajado en el desarrollo de plataformas robustas, incluyendo sistemas de e-commerce completos. Esto me ha permitido gestionar todo el ciclo de vida del desarrollo: desde la maquetación de componentes interactivos, hasta la integración fluida con APIs REST, la construcción de modelos de datos complejos en SQL y el manejo de la lógica de negocio con frameworks como Django.
            </p>
            <p>
              Comprender el panorama completo (incluyendo conceptos de redes y seguridad web) me ayuda a escribir código de lado del cliente que no solo se ve bien, sino que es seguro, optimizado y se comunica de manera eficiente con cualquier infraestructura backend.
            </p>
          </div>

          {/* Columna de Skills */}
          <div className="space-y-8">
            
            {/* Frontend */}
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Frontend (Especialidad)</h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-100 dark:border-blue-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-medium border border-zinc-200 dark:border-zinc-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Otras herramientas */}
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Herramientas y Conocimientos</h3>
              <div className="flex flex-wrap gap-3">
                {otrasSkills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-medium border border-zinc-200 dark:border-zinc-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}