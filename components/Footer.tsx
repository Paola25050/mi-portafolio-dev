export default function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-zinc-950 py-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
          © {anioActual} Paola Ramírez. Todos los derechos reservados.
        </p>
        <p className="text-zinc-400 dark:text-zinc-500 text-xs mt-2">
          Construido con Next.js y Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}