export const site = {
  nombre: 'PizzArica',
  // Reactivar cuando el food truck tenga una dirección fija confirmada.
  mostrarUbicacion: false,
  whatsapp: '56900000000', // TODO: dato real
  mensajeWhatsapp: 'Hola PizzArica, quiero hacer un pedido',
  instagram: 'pizzarica', // TODO: dato real
  direccion: 'Dirección por confirmar, Arica', // TODO: dato real
  referencia: 'Frente a un punto de referencia por confirmar', // TODO: dato real
  mapaEmbedUrl: '', // TODO: URL embed de Google Maps
  zonaHoraria: 'America/Santiago',
  mantenimiento: {
    // Alternativas: 'Estamos en el horno' / 'Volvemos al horno' / 'Estamos amasando el sitio'
    titulo: 'Sitio en mantención',
    mensaje: 'Pronto, más noticias.',
  },
  hero: {
    tituloLinea1: 'Pizza al paso,',
    tituloLinea2: 'hecha en Arica',
    apoyo: 'Ingredientes frescos y sabor local, preparados al momento en nuestro food truck.',
  }, // TODO: texto definitivo
  horarios: [
    { dia: 0, abre: null, cierra: null },
    { dia: 1, abre: null, cierra: null },
    { dia: 2, abre: '18:30', cierra: '23:30' },
    { dia: 3, abre: '18:30', cierra: '23:30' },
    { dia: 4, abre: '18:30', cierra: '23:30' },
    { dia: 5, abre: '18:30', cierra: '00:30' },
    { dia: 6, abre: '18:30', cierra: '00:30' }, // TODO: horarios reales
  ],
  galeria: [null, null, null, null], // TODO: reemplazar con rutas y textos alternativos reales
};
export const whatsappUrl = (mensaje = site.mensajeWhatsapp) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
