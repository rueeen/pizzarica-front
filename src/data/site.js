export const site = {
  nombre: 'PizzArica',
  // Reactivar cuando el food truck tenga una dirección fija confirmada.
  mostrarUbicacion: false,
  // Reactivar cuando haya al menos tres fotos reales configuradas.
  mostrarGaleria: false,
  whatsapp: '56951743204',
  mensajeWhatsapp: 'Hola PizzArica, quiero hacer un pedido',
  instagram: 'pizza.arica',
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
    { dia: 0, abre: '08:00', cierra: '23:00' },
    { dia: 1, abre: '08:00', cierra: '23:00' },
    { dia: 2, abre: '08:00', cierra: '23:00' },
    { dia: 3, abre: '08:00', cierra: '23:00' },
    { dia: 4, abre: '08:00', cierra: '23:00' },
    { dia: 5, abre: '08:00', cierra: '00:00' },
    { dia: 6, abre: '08:00', cierra: '00:00' },
  ],
  galeria: [],
};
export const whatsappUrl = (mensaje = site.mensajeWhatsapp) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

export function resumenHorario(horarios) {
  const grupos = [];
  for (let dia = 0; dia < dias.length; dia++) {
    const horario = horarios.find((h) => h.dia === dia);
    if (!horario?.abre) continue;
    const anterior = grupos.at(-1);
    if (
      anterior &&
      anterior.fin === dia - 1 &&
      anterior.abre === horario.abre &&
      anterior.cierra === horario.cierra
    ) {
      anterior.fin = dia;
    } else {
      grupos.push({ inicio: dia, fin: dia, abre: horario.abre, cierra: horario.cierra });
    }
  }
  return grupos.map(({ inicio, fin, abre, cierra }) => {
    const primero = dias[inicio][0].toUpperCase() + dias[inicio].slice(1);
    const rango =
      inicio === fin ? primero : `${primero} ${fin === inicio + 1 ? 'y' : 'a'} ${dias[fin]}`;
    return `${rango}: ${abre} – ${cierra}`;
  });
}
