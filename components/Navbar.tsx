import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo o Nombre */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100">
              Paos<span className="text-blue-600">Dev</span>
            </Link>
          </div>
          
          {/* Enlaces de navegación */}
          <div className="hidden md:flex space-x-8">
            <Link href="#sobre-mi" className="text-sm font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
              Sobre mí
            </Link>
            <Link href="#proyectos" className="text-sm font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
              Proyectos
            </Link>
            <Link href="#contacto" className="text-sm font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}