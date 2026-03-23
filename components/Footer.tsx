export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#F8E5E5] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        {/* Un pequeño detalle floral o de la mascota */}
        <div className="text-sm text-zinc-500 font-medium">
           {new Date().getFullYear()} Paola Valeria Ramirez.
        </div>
        <p className="text-xs text-zinc-400 mt-2">
          Desarrolladora Frontend Analítica | Cochabamba, Bolivia.
        </p>
      </div>
    </footer>
  );
}