import { useEffect, useRef, useState } from 'react';
import { usePedido } from '../context/PedidoContext';
import { useIdioma } from '../i18n/IdiomaContext';
import { nombreProducto, nombreVariante } from './Menu';
import { whatsappUrl } from '../data/site';
import { agregados, categoriasConAgregados, productos } from '../data/carta';
const money = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
});
const idsConAgregados = new Set(
  categoriasConAgregados.flatMap((categoria) => productos[categoria].map((item) => item.id)),
);

function AgregadosLinea({ item }) {
  const { idioma, t } = useIdioma();
  const { alternarAgregado } = usePedido();
  const [abierto, setAbierto] = useState(false);
  const seleccionados = agregados.filter((agregado) => item.agregados.includes(agregado.id));

  useEffect(() => {
    if (!abierto) return undefined;
    const cerrarConEscape = (event) => {
      if (event.key === 'Escape') setAbierto(false);
    };
    document.addEventListener('keydown', cerrarConEscape);
    return () => document.removeEventListener('keydown', cerrarConEscape);
  }, [abierto]);

  if (!idsConAgregados.has(item.id)) return null;
  return (
    <div className="line-addons">
      {seleccionados.length > 0 && (
        <div className="addon-chips" aria-label={t('pedido.agregados')}>
          {seleccionados.map((agregado) => (
            <button
              className="addon-chip"
              key={agregado.id}
              onClick={() => alternarAgregado(item.key, agregado.id)}
              aria-label={`${t('pedido.quitarAgregado')} ${agregado.nombre[idioma] ?? agregado.nombre.es}`}
            >
              {agregado.nombre[idioma] ?? agregado.nombre.es} +{money.format(agregado.precio)} ×
            </button>
          ))}
        </div>
      )}
      <button
        className="addon-toggle"
        onClick={() => setAbierto((valor) => !valor)}
        aria-expanded={abierto}
      >
        {t('pedido.agregarIngrediente')}
      </button>
      {abierto && (
        <div className="addon-picker">
          {[800, 1000, 1200].map((precio) => (
            <div className="addon-group" key={precio}>
              <strong>+{money.format(precio)}</strong>
              <div>
                {agregados
                  .filter((agregado) => agregado.precio === precio)
                  .map((agregado) => (
                    <button
                      key={agregado.id}
                      aria-pressed={item.agregados.includes(agregado.id)}
                      onClick={() => alternarAgregado(item.key, agregado.id)}
                    >
                      {agregado.nombre[idioma] ?? agregado.nombre.es}
                    </button>
                  ))}
              </div>
            </div>
          ))}
          <button className="addon-done" onClick={() => setAbierto(false)}>
            {t('pedido.listo')}
          </button>
        </div>
      )}
    </div>
  );
}

function DesglosePrecio({ item }) {
  const { idioma, t } = useIdioma();
  const seleccionados = agregados.filter((agregado) => item.agregados.includes(agregado.id));
  const subtotal =
    (item.precioUnitario + seleccionados.reduce((suma, agregado) => suma + agregado.precio, 0)) *
    item.cantidad;
  return (
    <div className="line-price-breakdown">
      <span>
        <span>{nombreProducto(item.id, idioma)}</span>
        <strong>{money.format(item.precioUnitario * item.cantidad)}</strong>
      </span>
      {seleccionados.map((agregado) => (
        <span key={agregado.id}>
          <span>+ {agregado.nombre[idioma] ?? agregado.nombre.es}</span>
          <strong>{money.format(agregado.precio * item.cantidad)}</strong>
        </span>
      ))}
      <span className="line-subtotal">
        <span>{t('pedido.subtotal')}</span>
        <strong>{money.format(subtotal)}</strong>
      </span>
    </div>
  );
}

export default function PedidoPanel({ onClose }) {
  const { idioma, t } = useIdioma();
  const {
    items,
    quitar,
    cambiarCantidad,
    duplicarLinea,
    vaciar,
    nota,
    setNota,
    total,
    cantidadTotal,
  } = usePedido();
  const [confirmando, setConfirmando] = useState(false),
    [aviso, setAviso] = useState('');
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);
  const confirmarVaciado = () => {
    if (confirmando) {
      vaciar();
      setConfirmando(false);
      return;
    }
    setConfirmando(true);
    timer.current = setTimeout(() => setConfirmando(false), 4000);
  };
  const enviar = () => {
    const lineas = items.flatMap((item) => {
      const seleccionados = agregados.filter((agregado) => item.agregados.includes(agregado.id));
      const subtotal =
        (item.precioUnitario +
          seleccionados.reduce((suma, agregado) => suma + agregado.precio, 0)) *
        item.cantidad;
      return [
        `• ${item.cantidad}x ${nombreProducto(item.id, idioma)}${item.variante ? ` (${nombreVariante(item.variante, idioma, t)})` : ''} - ${money.format(subtotal)}`,
        ...seleccionados.map(
          (agregado) =>
            `   + ${agregado.nombre[idioma] ?? agregado.nombre.es} ${money.format(agregado.precio)}`,
        ),
      ];
    });
    const mensaje = [
      t('pedido.saludo'),
      ' ',
      ...lineas,
      ' ',
      `${t('pedido.total')}: ${money.format(total)}`,
      nota ? `${t('pedido.comentario')}: ${nota}` : null,
    ]
      .filter((linea) => linea !== null)
      .map((linea) => (linea === ' ' ? '' : linea))
      .join('\n');
    const url = whatsappUrl(mensaje);
    if (url.length > 2000) {
      setAviso(t('pedido.urlLarga'));
      return;
    }
    setAviso('');
    window.open(url, '_blank', 'noopener');
  };
  return (
    <div className="order-panel">
      <header>
        <h3>
          {t('pedido.titulo')}{' '}
          <span className="order-count" key={cantidadTotal}>
            {cantidadTotal}
          </span>
        </h3>
        {onClose && (
          <button className="order-close" onClick={onClose} aria-label={t('pedido.cerrar')}>
            ×
          </button>
        )}
      </header>
      {!items.length ? (
        <p>{t('pedido.vacio')}</p>
      ) : (
        <ul className="order-lines">
          {items.map((item) => {
            const nombre = nombreProducto(item.id, idioma);
            return (
              <li key={item.key}>
                <div>
                  <strong>{nombre}</strong>
                  {item.variante && <small> ({nombreVariante(item.variante, idioma, t)})</small>}
                </div>
                <div className="order-line__actions">
                  <span className="quantity">
                    <button
                      onClick={() => cambiarCantidad(item.key, item.cantidad - 1)}
                      aria-label={`${t('pedido.disminuir')} ${nombre}`}
                    >
                      −
                    </button>
                    <b>{item.cantidad}</b>
                    <button
                      onClick={() => cambiarCantidad(item.key, item.cantidad + 1)}
                      aria-label={`${t('pedido.aumentar')} ${nombre}`}
                    >
                      +
                    </button>
                  </span>
                  <strong>{money.format(item.precioUnitario * item.cantidad)}</strong>
                  <button
                    className="remove-line"
                    onClick={() => quitar(item.key)}
                    aria-label={`${t('pedido.quitar')} ${nombre}`}
                  >
                    ×
                  </button>
                </div>
                <AgregadosLinea item={item} />
                <DesglosePrecio item={item} />
                <button className="duplicate-line" onClick={() => duplicarLinea(item.key)}>
                  {t('pedido.duplicar')}
                </button>
              </li>
            );
          })}
        </ul>
      )}
      <label>
        {t('pedido.comentario')}
        <textarea
          maxLength="200"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          placeholder={t('pedido.comentarioPlaceholder')}
        />
      </label>
      <div className="order-total">
        <span>{t('pedido.total')}</span>
        <strong>{money.format(total)}</strong>
      </div>
      <button
        className="button button--whatsapp order-send"
        disabled={!items.length}
        onClick={enviar}
      >
        {t('pedido.enviar')}
      </button>
      {aviso && (
        <p className="order-warning" role="alert">
          {aviso}
        </p>
      )}
      {items.length > 0 && (
        <button className="clear-order" onClick={confirmarVaciado}>
          {confirmando ? t('pedido.confirmar') : t('pedido.vaciar')}
        </button>
      )}
    </div>
  );
}
