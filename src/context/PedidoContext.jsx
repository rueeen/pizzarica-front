import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { agregados } from '../data/carta';

const STORAGE_KEY = 'pizzarica_pedido';
const PedidoContext = createContext(null);

function cargarPedido() {
  try {
    const guardado = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      items: Array.isArray(guardado?.items)
        ? guardado.items.map((item) => ({ ...item, agregados: item.agregados ?? [] }))
        : [],
      nota: typeof guardado?.nota === 'string' ? guardado.nota.slice(0, 200) : '',
    };
  } catch {
    return { items: [], nota: '' };
  }
}

export function PedidoProvider({ children }) {
  const [pedido, setPedido] = useState(cargarPedido);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(pedido));
    } catch {
      // El pedido sigue funcionando aunque el navegador bloquee el almacenamiento.
    }
  }, [pedido]);

  const agregar = (item) =>
    setPedido((actual) => {
      const key = item.variante ? `${item.id}__${item.variante}` : item.id;
      const existente = actual.items.find((linea) => linea.key === key);
      const items = existente
        ? actual.items.map((linea) =>
            linea.key === key ? { ...linea, cantidad: linea.cantidad + 1 } : linea,
          )
        : [...actual.items, { ...item, key, cantidad: 1, agregados: [] }];
      return { ...actual, items };
    });
  const quitar = (key) =>
    setPedido((actual) => ({ ...actual, items: actual.items.filter((item) => item.key !== key) }));
  const cambiarCantidad = (key, cantidad) =>
    setPedido((actual) => ({
      ...actual,
      items:
        cantidad <= 0
          ? actual.items.filter((item) => item.key !== key)
          : actual.items.map((item) => (item.key === key ? { ...item, cantidad } : item)),
    }));
  const vaciar = () => setPedido((actual) => ({ ...actual, items: [] }));
  const alternarAgregado = (key, agregadoId) =>
    setPedido((actual) => ({
      ...actual,
      items: actual.items.map((item) => {
        if (item.key !== key) return item;
        const seleccionados = item.agregados ?? [];
        return {
          ...item,
          agregados: seleccionados.includes(agregadoId)
            ? seleccionados.filter((id) => id !== agregadoId)
            : [...seleccionados, agregadoId],
        };
      }),
    }));
  const duplicarLinea = (key) =>
    setPedido((actual) => {
      const original = actual.items.find((item) => item.key === key);
      if (!original) return actual;
      const raiz = original.key.replace(/__\d+$/, '');
      const sufijos = actual.items
        .map((item) =>
          item.key.match(new RegExp(`^${raiz.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}__(\\d+)$`)),
        )
        .filter(Boolean)
        .map((coincidencia) => Number(coincidencia[1]));
      const siguiente = Math.max(1, ...sufijos) + 1;
      return {
        ...actual,
        items: [
          ...actual.items,
          { ...original, key: `${raiz}__${siguiente}`, agregados: [...original.agregados] },
        ],
      };
    });
  const setNota = (nota) => setPedido((actual) => ({ ...actual, nota: nota.slice(0, 200) }));
  const precioAgregados = (item) =>
    (item.agregados ?? []).reduce(
      (suma, id) => suma + (agregados.find((agregado) => agregado.id === id)?.precio ?? 0),
      0,
    );
  const total = pedido.items.reduce(
    (suma, item) => suma + (item.precioUnitario + precioAgregados(item)) * item.cantidad,
    0,
  );
  const cantidadTotal = pedido.items.reduce((suma, item) => suma + item.cantidad, 0);
  const valor = useMemo(
    () => ({
      ...pedido,
      agregar,
      quitar,
      cambiarCantidad,
      alternarAgregado,
      duplicarLinea,
      vaciar,
      setNota,
      total,
      cantidadTotal,
    }),
    [pedido, total, cantidadTotal],
  );

  return <PedidoContext.Provider value={valor}>{children}</PedidoContext.Provider>;
}

export function usePedido() {
  const contexto = useContext(PedidoContext);
  if (!contexto) throw new Error('usePedido debe usarse dentro de PedidoProvider');
  return contexto;
}
