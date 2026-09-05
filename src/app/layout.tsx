import type { Metadata } from "next";
import "./globals.css";
import { invitation } from "@/config/invitation";

// URL publica completa del sitio (necesaria para que WhatsApp muestre la vista previa).
// og:image DEBE ser una URL absoluta y publica (nunca localhost).
// Orden: variable de entorno (si se define en el hosting) o, si no, la URL
// del sitio definida en el config (tu dominio de Netlify).
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || invitation.siteUrl;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const baseAbsolute = `${siteUrl}${basePath}`;

// URL absoluta de la imagen OPTIMIZADA para Open Graph (liviana, <300KB),
// para que WhatsApp muestre el thumbnail.
const ogImageUrl = `${baseAbsolute}${invitation.ogImagen}`;

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
        width: invitation.ogImagenAncho,
        height: invitation.ogImagenAlto,
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
