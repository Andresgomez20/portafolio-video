// Datos del portafolio. Lo actualiza /portafolio — se puede editar a mano.
// Solo se agregan trabajos con autorización del cliente. Las piezas de marcas ficticias llevan muestra: true.
window.ESTUDIO = {
  nombre: "Jorge Andrés Gómez",
  titulo: "Edición de video y diseño para marcas pequeñas",
  bajada: "Reels, anuncios, rediseño de logos y piezas para redes. Rápido, claro y con precio fijo.",
  ciudad: "Medellín, Colombia",
  whatsapp: "573227891135",
  correo: "jandresgomez486@gmail.com",
  servicios: [
    { nombre: "Reel / TikTok", detalle: "Cortes con ritmo, textos, subtítulos, música libre y cierre con tu logo.", desde: 25, plazo: "48 h" },
    { nombre: "Anuncio publicitario", detalle: "15–30 s con guion, textos animados, intro y cierre de marca.", desde: 60, plazo: "3 días" },
    { nombre: "Intro / outro con logo", detalle: "Tu logo y nombre animados para abrir o cerrar tus videos.", desde: 30, plazo: "2 días" },
    { nombre: "Posts e historias", detalle: "Piezas gráficas con tus colores. Pack de 6 por USD 60.", desde: 12, plazo: "24 h" },
    { nombre: "Rediseño de logo", detalle: "Tu logo renovado en todas sus versiones, con manual de marca y mockups.", desde: 60, plazo: "3–5 días" },
    { nombre: "Video con fotos", detalle: "Tus fotos de producto con movimiento, textos y música.", desde: 30, plazo: "48 h" },
    { nombre: "Plan mensual", detalle: "Contenido de todo el mes: reels y posts con tu marca.", desde: 130, plazo: "mensual" }
  ],
  proyectos: [
    {
      titulo: "Rediseño de identidad", marca: "El Trigal", categoria: "Logos",
      descripcion: "De un logo con emoji y Comic Sans a un sistema de marca completo.", hecho: ["Diagnóstico", "Logo y versiones", "Manual de marca", "Mockups"],
      portada: "media/muestra-eltrigal/tarjetas.jpg", formato: "4:3", muestra: true,
      galeria: ["media/muestra-eltrigal/antes-despues.jpg", "media/muestra-eltrigal/tarjetas.jpg", "media/muestra-eltrigal/fachada.jpg",
                "media/muestra-eltrigal/instagram.jpg", "media/muestra-eltrigal/empaque.jpg"]
    },
    {
      titulo: "Promo 2x1 de los viernes", marca: "Café Ladera", categoria: "Reels",
      descripcion: "Reel de 8 s para anunciar una promo semanal.", hecho: ["Guion", "Textos animados", "Cierre con logo"],
      video: "media/muestra-cafeladera/reel.mp4", portada: "media/muestra-cafeladera/portada.jpg", formato: "9:16", muestra: true
    },
    {
      titulo: "Post de la promo", marca: "Café Ladera", categoria: "Diseño",
      descripcion: "Post 4:5 con su versión para historias.", hecho: ["Diseño", "Adaptación a historia"],
      portada: "media/muestra-cafeladera/post.png", formato: "4:5", muestra: true
    },
    // {
    //   titulo: "Promo fin de semana", marca: "Nombre de la marca", categoria: "Reels",
    //   descripcion: "Reel de 20 s para anunciar 2x1.", hecho: ["Edición", "Subtítulos", "Logo animado"],
    //   video: "media/<slug>/video.mp4", portada: "media/<slug>/portada.jpg", formato: "9:16", muestra: false
    // }
  ]
};
