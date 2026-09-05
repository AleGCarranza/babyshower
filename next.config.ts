import type { NextConfig } from "next";

// Nombre del repositorio de GitHub Pages.
// Para un sitio de proyecto (usuario.github.io/nombre-repo) esto debe ser "/nombre-repo".
// Se define via variable de entorno para no hardcodearlo:
//   - En local (npm run dev) queda vacio ("") y todo funciona en http://localhost:3000
//   - En GitHub Actions se pasa NEXT_PUBLIC_BASE_PATH="/nombre-repo"
// Si publicas en un sitio de usuario (usuario.github.io), dejalo vacio.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Exporta HTML estatico a la carpeta out/ (requerido por GitHub Pages)
  output: "export",

  // GitHub Pages sirve la app bajo /nombre-repo, no en la raiz del dominio
  basePath,
  assetPrefix: basePath || undefined,

  // El optimizador de imagenes de Next no funciona en hosting estatico
  images: {
    unoptimized: true,
  },

  // Genera carpetas con index.html (URLs mas amigables en Pages)
  trailingSlash: true,
};

export default nextConfig;
