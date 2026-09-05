import type { Metadata } from "next";
import "./globals.css";
import { invitation } from "@/config/invitation";

// URL publica completa del sitio (necesaria para que WhatsApp muestre la vista previa).
// og:image DEBE ser una URL absoluta.
//   - NEXT_PUBLIC_SITE_URL  -> ej: "https://usuario.github.io"
//   - NEXT_PUBLIC_BASE_PATH -> ej: "/nombre-repo"
// Se combinan para formar la base absoluta. En local quedan vacios y no pasa nada.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const baseAbsolute = `${siteUrl}${basePath}`;

// URL absoluta de la imagen para Open Graph
const ogImageUrl = `${baseAbsolute}${invitation.imagen}`;

export const metadata: Metadata = {
  metadataBase: new URL(baseAbsolute),
  title: invitation.titulo,
  description: invitation.descripcion,
  openGraph: {
    type: "website",
    title: invitation.titulo,
    description: invitation.descripcion,
    url: baseAbsolute,
    siteName: invitation.titulo,
    locale: "es_MX",
    images: [
      {
        url: ogImageUrl,
        width: invitation.imagenAncho,
        height: invitation.imagenAlto,
        alt: `Invitacion al baby shower de ${invitation.festejada}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: invitation.titulo,
    description: invitation.descripcion,
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
