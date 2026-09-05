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
    left: "3.75%",
    top: "89.1%",
    width: "22%",
    height: "6.8%",
  },
  {
    label: "Mesa de regalos Liverpool",
    href: invitation.links.liverpool,
    left: "27.55%",
    top: "89.1%",
    width: "22%",
    height: "6.8%",
  },
  {
    label: "Direccion del evento",
    href: invitation.links.direccion,
    left: "51.25%",
    top: "89.1%",
    width: "19.75%",
    height: "6.8%",
  },
  {
    label: "Confirmar asistencia",
    href: invitation.links.confirmar,
    left: "75.05%",
    top: "89.1%",
    width: "21.5%",
    height: "6.8%",
  },
];

export default function Invitacion() {
  return (
    <main className="flex min-h-dvh w-full items-start justify-center bg-[#f7d9e3] p-2 sm:items-center sm:p-4">
      {/* Contenedor con el aspect-ratio real de la imagen.
          max-w limita el ancho en desktop; en movil ocupa todo el ancho. */}
      <div
        className="relative mt-[60px] w-full max-w-[480px] overflow-hidden rounded-xl shadow-lg sm:mt-0"
        style={{ aspectRatio: `${invitation.imagenAncho} / ${invitation.imagenAlto}` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imagenSrc}
          alt={`Invitacion al baby shower de ${invitation.festejada}`}
          className="absolute inset-0 h-full w-full object-contain"
        />

        {/* Zonas clicables sobre cada boton dibujado.
            Tienen feedback visual (hover, active y un pulso sutil) para que el
            usuario perciba que son botones y sepa que hay que dar click.
            group -> permite animar varios elementos hijos con el mismo estado. */}
        {zonas.map((zona, i) => (
          <a
            key={zona.label}
            href={zona.href}
            aria-label={zona.label}
            target="_blank"
            rel="noopener noreferrer"
            className="group absolute rounded-xl outline-none transition-transform duration-150 ease-out hover:scale-[1.03] active:scale-95 focus-visible:ring-2 focus-visible:ring-white/90"
            style={{
              left: zona.left,
              top: zona.top,
              width: zona.width,
              height: zona.height,
              // Desfase para que los pulsos no latan todos a la vez (mas natural)
              animationDelay: `${i * 0.25}s`,
            }}
          >
            {/* Brillo/relieve: aparece al pasar el cursor o tocar, dando
                sensacion de boton "no plano" sin tapar el diseno. */}
            <span
              aria-hidden
              className="absolute inset-0 rounded-xl bg-white/0 shadow-none ring-0 ring-white/60 transition-all duration-200 group-hover:bg-white/15 group-hover:shadow-[0_4px_14px_rgba(0,0,0,0.25)] group-hover:ring-2 group-active:bg-black/10"
            />
            {/* Pulso permanente: anillo suave que late para invitar al click.
                Es clave en movil, donde no existe el estado hover. */}
            <span
              aria-hidden
              className="animate-ping-slow pointer-events-none absolute inset-0 rounded-xl ring-2 ring-white/70"
              style={{ animationDelay: `${i * 0.25}s` }}
            />
          </a>
        ))}
      </div>
    </main>
  );
}
