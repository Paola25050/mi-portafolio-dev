import React from 'react';

export default function Mascot() {
  return (
    <div className="fixed bottom-6 right-6 z-[60] group pointer-events-none">
      <div className="relative hover:pointer-events-auto cursor-pointer">
        
        {/* Globo de diálogo */}
        <div className="absolute -top-16 -left-16 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-[#F8E5E5] opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48 text-center text-xs text-[#3F2E2A] font-medium pointer-events-none">
          "¡Guau! Escaneo de bugs completado. Todo limpio."
        </div>
        
        {/* Mascota Shiba Cyborg (SVG Puro) */}
        <svg
          className="w-24 h-24 animate-sway group-hover:[animation:jump_0.6s_ease-out] drop-shadow-lg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* DEFINICIÓN DE COLORES (Variables visuales)
              Borde: #271442 (Morado oscuro)
              Piel Naranja: #F79420
              Piel Clara: #FFF3E3
              Traje Gris: #A7B0CB
              Visor: #30E3CA
          */}

          {/* Cola (Atrás del cuerpo) */}
          <path d="M65,75 C90,85 100,55 75,55 C70,55 65,65 65,65" fill="#F79420" stroke="#271442" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="82" cy="63" r="5" fill="#FFF3E3" /> {/* Punta blanca de la cola */}

          {/* Oreja Izquierda */}
          <path d="M28,35 L20,10 L45,25 Z" fill="#F79420" stroke="#271442" strokeWidth="2.5" strokeLinejoin="round"/>
          <path d="M29,31 L24,16 L38,26 Z" fill="#FFF3E3" />
          
          {/* Oreja Derecha */}
          <path d="M72,35 L80,10 L55,25 Z" fill="#F79420" stroke="#271442" strokeWidth="2.5" strokeLinejoin="round"/>
          <path d="M71,31 L76,16 L62,26 Z" fill="#FFF3E3" />

          {/* Piernas y Botas */}
          <path d="M32,80 L32,92 A4,4 0 0,0 42,92 L42,80 Z" fill="#A7B0CB" stroke="#271442" strokeWidth="2.5"/>
          <path d="M58,80 L58,92 A4,4 0 0,0 68,92 L68,80 Z" fill="#A7B0CB" stroke="#271442" strokeWidth="2.5"/>
          <path d="M30,88 L44,88" stroke="#271442" strokeWidth="2" strokeLinecap="round" />
          <path d="M56,88 L70,88" stroke="#271442" strokeWidth="2" strokeLinecap="round" />

          {/* Brazo Izquierdo */}
          <ellipse cx="25" cy="68" rx="7" ry="12" fill="#A7B0CB" stroke="#271442" strokeWidth="2.5" transform="rotate(20 25 68)" />
          <circle cx="23" cy="78" r="5" fill="#FFF3E3" stroke="#271442" strokeWidth="2.5" />

          {/* Brazo Derecho */}
          <ellipse cx="75" cy="68" rx="7" ry="12" fill="#A7B0CB" stroke="#271442" strokeWidth="2.5" transform="rotate(-20 75 68)" />
          <circle cx="77" cy="78" r="5" fill="#FFF3E3" stroke="#271442" strokeWidth="2.5" />

          {/* Cuerpo (Traje Espacial/Cyborg) */}
          <path d="M30,55 L70,55 C74,70 65,85 50,85 C35,85 26,70 30,55 Z" fill="#A7B0CB" stroke="#271442" strokeWidth="2.5" />
          <path d="M30,55 L70,55 C72,62 65,72 50,72 C35,72 28,62 30,55 Z" fill="#8892B0" /> {/* Sombra del pecho */}

          {/* Reactor del Pecho (Detalles Cyan) */}
          <path d="M34,68 L42,68 M58,68 L66,68" stroke="#30E3CA" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="50" cy="68" r="7" fill="#8892B0" stroke="#271442" strokeWidth="2.5" />
          <circle cx="50" cy="68" r="3.5" fill="#30E3CA" />

          {/* Base de la Cabeza (Naranja) */}
          <ellipse cx="50" cy="42" rx="32" ry="26" fill="#F79420" stroke="#271442" strokeWidth="2.5" />

          {/* Cachetes / Hocico (Blanco) */}
          <path d="M18,44 C18,70 82,70 82,44 C82,40 18,40 18,44 Z" fill="#FFF3E3" stroke="#271442" strokeWidth="2.5" />

          {/* Boca y Lengua */}
          <path d="M41,52 Q50,58 59,52" fill="none" stroke="#271442" strokeWidth="2.5" strokeLinecap="round"/>
          {/* <path d="M46,54 V59 A4,4 0 0,0 54,59 V54 Z" fill="#FF4B82" stroke="#271442" strokeWidth="2"/>
          <path d="M50,54 V59" stroke="#271442" strokeWidth="1" opacity="0.5"/> Línea de la lengua */}

          {/* Nariz */}
          <ellipse cx="50" cy="47" rx="4.5" ry="3.5" fill="#271442" />

          {/* Auriculares del Visor */}
          <rect x="14" y="27" width="8" height="16" rx="3" fill="#8892B0" stroke="#271442" strokeWidth="2.5" />
          <rect x="78" y="27" width="8" height="16" rx="3" fill="#8892B0" stroke="#271442" strokeWidth="2.5" />
          <circle cx="18" cy="35" r="1.5" fill="#30E3CA" />
          <circle cx="82" cy="35" r="1.5" fill="#30E3CA" />

          {/* Cristal del Visor */}
          <path d="M19,25 L81,25 C83,25 83,38 75,41 C65,44 35,44 25,41 C17,38 17,25 19,25 Z" fill="#30E3CA" stroke="#271442" strokeWidth="2.5" opacity="0.9"/>
          
          {/* Reflejos en el cristal */}
          <path d="M25,28 L75,28 L73,33 L27,33 Z" fill="#FFFFFF" opacity="0.25" />
          <path d="M28,36 L40,36" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

          {/* Ojos adorables a través del visor */}
          <ellipse cx="38" cy="33" rx="4.5" ry="7" fill="#15999E" />
          <circle cx="39" cy="30.5" r="2" fill="#FFFFFF" />
          <ellipse cx="62" cy="33" rx="4.5" ry="7" fill="#15999E" />
          <circle cx="63" cy="30.5" r="2" fill="#FFFFFF" />

        </svg>
      </div>
    </div>
  );
}