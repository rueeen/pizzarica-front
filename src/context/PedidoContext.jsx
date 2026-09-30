import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'pizzarica_pedido';
const PedidoContext = createContext(null);

function cargarPedido() {
  try {
    const guardado = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      items: Array.isArray(guardado?.items) ? guardado.items : [],
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

  const agregar = item => setPedido(actual => {
    const key = item.variante ? `${item.id}__${item.variante}` : item.id;
    const existente = actual.items.find(linea => linea.key === key);
    const items = existente
      ? actual.items.map(linea => linea.key === key ? { ...linea, cantidad: linea.cantidad + 1 } : linea)
      : [...actual.items, { ...item, key, cantidad: 1 }];
    return { ...actual, items };
  });
  const quitar = key => setPedido(actual => ({ ...actual, items: actual.items.filter(item => item.key !== key) }));
  const cambiarCantidad = (key, cantidad) => setPedido(actual => ({
    ...actual,
    items: cantidad <= 0
      ? actual.items.filter(item => item.key !== key)
      : actual.items.map(item => item.key === key ? { ...item, cantidad } : item),
  }));
  const vaciar = () => setPedido(actual => ({ ...actual, items: [] }));
  const setNota = nota => setPedido(actual => ({ ...actual, nota: nota.slice(0, 200) }));
  const total = pedido.items.reduce((suma, item) => suma + item.precioUnitario * item.cantidad, 0);
  const cantidadTotal = pedido.items.reduce((suma, item) => suma + item.cantidad, 0);
  const valor = useMemo(() => ({ ...pedido, agregar, quitar, cambiarCantidad, vaciar, setNota, total, cantidadTotal }), [pedido, total, cantidadTotal]);

  return <PedidoContext.Provider value={valor}>{children}</PedidoContext.Provider>;
}

export function usePedido() {
  const contexto = useContext(PedidoContext);
  if (!contexto) throw new Error('usePedido debe usarse dentro de PedidoProvider');
  return contexto;
}
