/**
 * Configuracion de la invitacion.
 * ================================
 * Edita aqui los links de los botones y los datos del evento.
 * No necesitas tocar ningun otro archivo para cambiar links o textos.
 */

export const invitation = {
  // --- Datos del evento (usados en los meta tags de vista previa) ---
  festejada: "Regina",
  titulo: "Baby Shower de Regina",
  descripcion:
    "Acompananos a celebrar el Baby Shower en honor a Regina. Domingo 27 de septiembre de 2026, 12:30 P.M.",

  // Imagen de la invitacion (dentro de la carpeta public/)
  imagen: "/invitacion-regina.jpeg",
  // Dimensiones reales de la imagen (para los meta tags Open Graph)
  imagenAncho: 1024,
  imagenAlto: 1536,

  // --- Links de los 4 botones (en el orden en que aparecen en la imagen) ---
  links: {
    // 1. Mesa de regalos Amazon
    amazon:
      "https://www.amazon.com.mx/baby-reg/luisrodrigoprez-morales-diciembre-2026-tlalnepantladebaz/11Z63FU6D4DM4?ref_=cm_sw_r_apann_dp_32DY5RNG8CYXP2DMJSWK&language=en-US",

    // 2. Mesa de regalos Liverpool
    liverpool: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/60032301",

    // 3. Direccion (Google Maps)
    direccion: "https://maps.app.goo.gl/kmrjLUnu8FT4RpAM6",

    // 4. Confirmar asistencia (WhatsApp)
    confirmar: "https://wa.link/jlm9gr",
  },
} as const;

export type Invitation = typeof invitation;
