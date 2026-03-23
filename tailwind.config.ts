import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // TUS COLORES EXCLUSIVOS "Guindo Floral"
        marca: {
          'crema': '#FFFCF8',       // Fondo base
          'guindo': '#9B2C3B',      // Acento formal
          'texto-p': '#3F2E2A',     // Texto principal (Marrón Carbón)
          'bento-rosa': '#FDF1F0',  // Fondo tarjetas Bento
          'bento-borde': '#F8E5E5'  // Borde tarjetas
        },
      },
    },
  },
  plugins: [],
};

export default config;