export const site = {
  nombre: 'PizzArica',
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
  hero: { tituloLinea1: 'Pizza al paso,', tituloLinea2: 'hecha en Arica', apoyo: 'Ingredientes frescos y sabor local, preparados al momento en nuestro food truck.' }, // TODO: texto definitivo
  horarios: [
    { dia: 0, abre: null, cierra: null }, { dia: 1, abre: null, cierra: null },
    { dia: 2, abre: '18:30', cierra: '23:30' }, { dia: 3, abre: '18:30', cierra: '23:30' },
    { dia: 4, abre: '18:30', cierra: '23:30' }, { dia: 5, abre: '18:30', cierra: '00:30' },
    { dia: 6, abre: '18:30', cierra: '00:30' }, // TODO: horarios reales
  ],
  menu: [
    { categoria: 'Pizzas', items: [
      { nombre: 'Margarita', descripcion: 'Tomate, mozzarella y albahaca', precio: 8990, foto: null, destacado: false },
      { nombre: 'La Ariqueña', descripcion: 'Aceitunas de Azapa, tomate y orégano', precio: 10990, foto: null, destacado: true },
      { nombre: 'Pepperoni', descripcion: 'Mozzarella y abundante pepperoni', precio: 9990, foto: null, destacado: false },
    ]},
    { categoria: 'Porciones', items: [{ nombre: 'Porción del día', descripcion: 'Pregunta por la variedad disponible', precio: 2500, foto: null, destacado: false }]},
    { categoria: 'Bebidas', items: [{ nombre: 'Bebida en lata', descripcion: 'Variedades disponibles', precio: 1500, foto: null, destacado: false }]},
    { categoria: 'Promos', items: [{ nombre: 'Promo para compartir', descripcion: 'Pizza y dos bebidas', precio: 12990, foto: null, destacado: true }]}, // TODO: menú y precios reales
  ],
  pasos: ['Elige tu pizza en el menú.', 'Escríbenos por WhatsApp.', 'Retira en el truck.'],
  galeria: [null, null, null, null], // TODO: reemplazar con rutas y textos alternativos reales
};
export const whatsappUrl = (mensaje = site.mensajeWhatsapp) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const dias = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
