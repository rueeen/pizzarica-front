import { productos } from '../data/carta.js';

export function buscarProducto(id) {
  return Object.values(productos)
    .flat()
    .find((producto) => producto.id === id);
}

export function opcionesValidas(producto, opciones) {
  if (!producto?.opciones) return true;
  return (
    opciones !== null &&
    typeof opciones === 'object' &&
    !Array.isArray(opciones) &&
    Object.keys(opciones).length === producto.opciones.length &&
    producto.opciones.every((grupo) =>
      grupo.valores.some((valor) => valor.id === opciones[grupo.id]),
    )
  );
}

export function claveLinea(item) {
  const producto = buscarProducto(item.id);
  const partes = [];
  if (item.variante) partes.push(item.variante);
  if (producto?.opciones) {
    partes.push(
      [...producto.opciones]
        .sort((a, b) => a.id.localeCompare(b.id))
        .map((grupo) => `${grupo.id}:${item.opciones[grupo.id]}`)
        .join('|'),
    );
  }
  return [item.id, ...partes].join('__');
}

export function nombreOpciones(producto, opciones, idioma) {
  return (producto?.opciones ?? [])
    .map((grupo) => {
      const valor = grupo.valores.find((valor) => valor.id === opciones?.[grupo.id]);
      return valor?.nombre[idioma] ?? valor?.nombre.es;
    })
    .filter(Boolean)
    .join(' · ');
}
