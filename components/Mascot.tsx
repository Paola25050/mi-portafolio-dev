export default function Mascot() {
  return (
    <div className="fixed bottom-6 right-6 z-[60] group pointer-events-none">
      <div className="relative hover:pointer-events-auto cursor-pointer">
        
        {/* Globo de diálogo */}
        <div className="absolute -top-16 -left-16 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-[#F8E5E5] opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48 text-center text-xs text-[#3F2E2A] font-medium pointer-events-none">
          "¡Cucú! Reviso que cada pixel esté en su lugar."
        </div>
        
        {/* Osita con las clases de animación globales conectadas */}
        <svg
          className="w-20 h-20 animate-sway group-hover:[animation:jump_0.6s_ease-out] drop-shadow-md"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Orejas */}
          <circle cx="25" cy="35" r="14" fill="#FFFCF8" stroke="#3F2E2A" strokeWidth="2" />
          <circle cx="75" cy="35" r="14" fill="#FFFCF8" stroke="#3F2E2A" strokeWidth="2" />
          <circle cx="25" cy="35" r="6" fill="#FDF1F0" />
          <circle cx="75" cy="35" r="6" fill="#FDF1F0" />
          
          {/* Cara */}
          <ellipse cx="50" cy="60" rx="40" ry="32" fill="#FFFCF8" stroke="#3F2E2A" strokeWidth="2" />
          <ellipse cx="25" cy="62" rx="5" ry="3" fill="#F8E5E5" />
          <ellipse cx="75" cy="62" rx="5" ry="3" fill="#F8E5E5" />
          <circle cx="35" cy="55" r="3.5" fill="#3F2E2A" />
          <circle cx="65" cy="55" r="3.5" fill="#3F2E2A" />
          <ellipse cx="50" cy="65" rx="10" ry="7" fill="#FDF1F0" stroke="#3F2E2A" strokeWidth="1" />
          <path d="M47,63 Q50,65 53,63 Z" fill="#3F2E2A" />
          <path d="M50,64 L50,68 Q47,70 44,67 M50,68 Q53,70 56,67" stroke="#3F2E2A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          
          {/* Flor */}
          <g transform="translate(68, 20) rotate(15)">
            <circle cx="8" cy="0" r="5" fill="#9B2C3B" />
            <circle cx="-4" cy="7" r="5" fill="#9B2C3B" />
            <circle cx="-4" cy="-7" r="5" fill="#9B2C3B" />
            <circle cx="4" cy="7" r="5" fill="#9B2C3B" />
            <circle cx="4" cy="-7" r="5" fill="#9B2C3B" />
            <circle cx="1" cy="0" r="3" fill="#FFFCF8" />
          </g>
        </svg>
      </div>
    </div>
  );
}