import { invitation } from "@/config/invitation";

// En GitHub Pages el sitio se sirve bajo /<nombre-repo>, asi que la imagen
// debe llevar ese prefijo. En local la variable esta vacia y queda igual.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const imagenSrc = `${basePath}${invitation.imagen}`;

/**
 * Zonas clicables sobre los botones dibujados en la imagen.
 * Las coordenadas estan en PORCENTAJE relativo al contenedor de la imagen,
 * asi se mantienen alineadas al escalar en cualquier pantalla (mobile-first).
 *
 * La fila de 4 botones esta en la parte inferior de la imagen.
 * Ajusta estos valores si alguna zona no queda perfectamente encima del boton.
 */
const zonas = [
  {
    label: "Mesa de regalos Amazon",
    href: invitation.links.amazon,
    left: "3.5%",
    top: "90.3%",
    width: "22.5%",
    height: "7.2%",
  },
  {
    label: "Mesa de regalos Liverpool",
    href: invitation.links.liverpool,
    left: "27.3%",
    top: "90.3%",
    width: "22.5%",
    height: "7.2%",
  },
  {
    label: "Direccion del evento",
    href: invitation.links.direccion,
    left: "51%",
    top: "90.3%",
    width: "22.5%",
    height: "7.2%",
  },
  {
    label: "Confirmar asistencia",
    href: invitation.links.confirmar,
    left: "74.8%",
    top: "90.3%",
    width: "22%",
    height: "7.2%",
  },
];

export default function Invitacion() {
  return (
    <main className="flex min-h-dvh w-full items-start justify-center bg-[#f7d9e3] p-2 sm:items-center sm:p-4">
      {/* Contenedor con el aspect-ratio real de la imagen.
          max-w limita el ancho en desktop; en movil ocupa todo el ancho. */}
      <div
        className="relative w-full max-w-[480px] overflow-hidden rounded-xl shadow-lg"
        style={{ aspectRatio: `${invitation.imagenAncho} / ${invitation.imagenAlto}` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imagenSrc}
          alt={`Invitacion al baby shower de ${invitation.festejada}`}
          className="absolute inset-0 h-full w-full object-contain"
        />

        {/* Zonas clicables invisibles sobre cada boton dibujado */}
        {zonas.map((zona) => (
          <a
            key={zona.label}
            href={zona.href}
            aria-label={zona.label}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            style={{
              left: zona.left,
              top: zona.top,
              width: zona.width,
              height: zona.height,
            }}
          />
        ))}
      </div>
    </main>
  );
}
