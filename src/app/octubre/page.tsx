import type { Metadata } from "next";
import Invitacion from "@/components/Invitacion";
import { invitationOctubre } from "@/config/invitationOctubre";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || invitationOctubre.siteUrl;
const ogImageUrl = `${siteUrl}/og-octubre.jpg`;

export const metadata: Metadata = {
  title: invitationOctubre.titulo,
  description: invitationOctubre.descripcion,
  openGraph: {
    type: "website",
    title: invitationOctubre.titulo,
    description: invitationOctubre.descripcion,
    url: `${siteUrl}/octubre`,
    siteName: invitationOctubre.titulo,
    locale: "es_MX",
    images: [{ url: ogImageUrl, width: 800, height: 1200, alt: `Invitacion al baby shower de ${invitationOctubre.festejada}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: invitationOctubre.titulo,
    description: invitationOctubre.descripcion,
    images: [ogImageUrl],
  },
};

export default function OctubrePage() {
  return <Invitacion config={invitationOctubre} bgColor="#ead4f0" />;
}
