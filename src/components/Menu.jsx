import { useEffect, useRef, useState } from 'react';
import {
  categorias,
  encabezadosJugos,
  extras,
  notaBatidos,
  prefijos,
  productos,
} from '../data/carta';
import { usePedido } from '../context/PedidoContext';
import { useIdioma } from '../i18n/IdiomaContext';
import PedidoPanel from './PedidoPanel';
import '../styles/Menu.css';

const money = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
});
const bases = ['agua', 'soprole', 'gloria', 'sin-lactosa'];
const contextoCategorias = {
  pizzas: {
    es: 'Familiar 38 × 38 cm $12.990 · Individual 25 × 25 cm $5.990',
    en: 'Family 38 × 38 cm $12.990 · Individual 25 × 25 cm $5.990',
    pt: 'Família 38 × 38 cm $12.990 · Individual 25 × 25 cm $5.990',
  },
  conos: { es: 'Todos $3.000', en: 'All $3,000', pt: 'Todos $3.000' },
  batidos: {
    es: 'Todos $4.990, 16 oz',
    en: 'All $4,990, 16 oz',
    pt: 'Todos $4.990, 16 oz',
  },
};

function nombreVisible(item, idioma) {
  return typeof item.nombre === 'string' ? item.nombre : (item.nombre[idioma] ?? item.nombre.es);
}

export function nombreProducto(id, idioma) {
  for (const categoria of categorias) {
    const item = productos[categoria.id].find((producto) => producto.id === id);
    if (item) {
      return `${prefijos[categoria.id]?.[idioma] || ''} ${nombreVisible(item, idioma)}`.trim();
    }
  }
  return id;
}

export function nombreVariante(variante, idioma, t) {
  if (variante === 'individual') return t('pedido.individual');
  if (variante === 'familiar') return t('pedido.familiar');
  const indice = bases.indexOf(variante);
  return indice >= 0
    ? (encabezadosJugos[idioma]?.[indice] ?? encabezadosJugos.es[indice])
    : variante;
}

function Quantity({ linea, nombre, onChange, t }) {
  return (
    <span className="quantity">
      <button
        onClick={() => onChange(linea.key, linea.cantidad - 1)}
        aria-label={`${t('pedido.disminuir')} ${nombre}`}
      >
        −
      </button>
      <b>{linea.cantidad}</b>
      <button
        onClick={() => onChange(linea.key, linea.cantidad + 1)}
        aria-label={`${t('pedido.aumentar')} ${nombre}`}
      >
        +
      </button>
    </span>
  );
}

function ProductAction({ item, categoria, nombre, onAnnounce, varianteDirecta, disabled = false }) {
  const { idioma, t } = useIdioma();
  const { items, agregar, cambiarCantidad } = usePedido();
  const [abierto, setAbierto] = useState(false);
  const variantes =
    categoria === 'pizzas'
      ? [
          { id: 'individual', precio: 5990 },
          { id: 'familiar', precio: item.precio },
        ]
      : categoria === 'jugos' && !varianteDirecta
        ? item.precios.map((precio, i) => precio && { id: bases[i], precio }).filter(Boolean)
        : [];
  const lineas = items.filter((linea) => linea.id === item.id);
  const add = (variante) => {
    agregar({
      id: item.id,
      variante: variante?.id,
      precioUnitario: variante?.precio ?? item.precio,
    });
    setAbierto(false);
    onAnnounce(`${t('pedido.agregado')} ${nombre}`);
  };
  const clickAdd = () => {
    if (varianteDirecta) return add(varianteDirecta);
    return variantes.length > 1 ? setAbierto((value) => !value) : add(variantes[0]);
  };

  return (
    <div className="product-action">
      {lineas.map((linea) => (
        <div className="product-action__selected" key={linea.key}>
          <small>{linea.variante && nombreVariante(linea.variante, idioma, t)}</small>
          <Quantity linea={linea} nombre={nombre} onChange={cambiarCantidad} t={t} />
        </div>
      ))}
      {(!lineas.length || variantes.length > 1) && (
        <button
          className="add-button"
          onClick={clickAdd}
          disabled={disabled}
          aria-expanded={variantes.length > 1 ? abierto : undefined}
          aria-label={`${t('pedido.agregar')} ${nombre}`}
        >
          {t('pedido.agregar')}
        </button>
      )}
      {abierto && (
        <div
          className="variant-picker"
          aria-label={categoria === 'pizzas' ? t('pedido.tamano') : t('pedido.base')}
        >
          {variantes.map((variante) => (
            <button key={variante.id} onClick={() => add(variante)}>
              <span>{nombreVariante(variante.id, idioma, t)}</span>
              <strong>{money.format(variante.precio)}</strong>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProductRow({ item, categoria, onAnnounce, baseSeleccionada = 0 }) {
  const { idioma, t } = useIdioma();
  const { items } = usePedido();
  const nombre = nombreVisible(item, idioma);
  const nombreCompleto = nombreProducto(item.id, idioma);
  const seleccionado = items.some((linea) => linea.id === item.id);
  const mostrarPrecio =
    categoria === 'jugos' ||
    categoria === 'empanadas' ||
    (categoria === 'pizzas' && item.precio !== 12990);
  const soloAgua =
    categoria === 'jugos' && item.precios.slice(1).every((precio) => precio === null);
  const disabled = soloAgua && baseSeleccionada !== 0;
  const varianteDirecta =
    categoria === 'jugos'
      ? { id: bases[baseSeleccionada], precio: item.precios[baseSeleccionada] }
      : undefined;

  return (
    <article
      className={`menu-item ${seleccionado ? 'is-selected' : ''} ${disabled ? 'is-disabled' : ''}`}
    >
      <div className="menu-item__content">
        <h3>{nombre}</h3>
        {item.ingredientes && <p>{item.ingredientes[idioma] ?? item.ingredientes.es}</p>}
        {soloAgua && <small className="water-only">{t('menu.soloAgua')}</small>}
        {mostrarPrecio && (
          <strong className={categoria === 'pizzas' ? 'menu-item__price--special' : ''}>
            {categoria === 'jugos'
              ? item.precios[baseSeleccionada] && money.format(item.precios[baseSeleccionada])
              : money.format(item.precio)}
          </strong>
        )}
      </div>
      <ProductAction
        item={item}
        categoria={categoria}
        nombre={nombreCompleto}
        onAnnounce={onAnnounce}
        varianteDirecta={varianteDirecta}
        disabled={disabled}
      />
    </article>
  );
}

function FeaturedProducts({ products, categoria, onAnnounce }) {
  const { idioma, t } = useIdioma();
  if (!products.length) return null;
  return (
    <div className="featured-products">
      {products.slice(0, 3).map((item) => {
        const nombre = nombreVisible(item, idioma);
        return (
          <article className="featured-card" key={item.id}>
            <div className="featured-card__photo">
              {item.foto ? <img src={item.foto} alt="" /> : <span aria-hidden="true">🍕</span>}
            </div>
            <div className="featured-card__body">
              <div>
                <h3>{nombre}</h3>
                <strong>
                  {categoria === 'pizzas' && `${t('menu.desde')} `}
                  {money.format(categoria === 'pizzas' ? 5990 : item.precio)}
                </strong>
              </div>
              <ProductAction
                item={item}
                categoria={categoria}
                nombre={nombreProducto(item.id, idioma)}
                onAnnounce={onAnnounce}
              />
            </div>
          </article>
        );
      })}
    </div>
  );
}

function Extras({ idioma, t }) {
  return (
    <details className="menu-extras">
      <summary>{t('menu.extrasTitulo')}</summary>
      {extras.map((extra) => (
        <p key={extra.precio}>
          <strong>+{money.format(extra.precio)}</strong> — {extra.texto[idioma] ?? extra.texto.es}
        </p>
      ))}
    </details>
  );
}

function CategoryContent({
  categoria,
  list,
  onAnnounce,
  labelledBy,
  baseSeleccionada,
  onBaseChange,
}) {
  const { idioma, t } = useIdioma();
  const destacados = list.filter((item) => item.destacado);
  const regulares = list.filter((item) => !item.destacado);
  const contexto = contextoCategorias[categoria.id];

  return (
    <div className="category-content" aria-labelledby={labelledBy}>
      <header className="category-heading">
        <h3>{categoria.nombre[idioma] ?? categoria.nombre.es}</h3>
        {contexto && <p>{contexto[idioma] ?? contexto.es}</p>}
        {categoria.id === 'batidos' && <small>{t('menu.sabores')}</small>}
      </header>
      {categoria.id === 'jugos' && (
        <div className="juice-bases">
          <strong>{t('menu.base')}</strong>
          <div role="radiogroup" aria-label={t('menu.base')}>
            {(encabezadosJugos[idioma] ?? encabezadosJugos.es).map((base, index) => (
              <button
                type="button"
                role="radio"
                aria-checked={baseSeleccionada === index}
                className={baseSeleccionada === index ? 'is-active' : ''}
                key={bases[index]}
                onClick={() => onBaseChange(index)}
              >
                {base}
              </button>
            ))}
          </div>
        </div>
      )}
      <FeaturedProducts products={destacados} categoria={categoria.id} onAnnounce={onAnnounce} />
      <div className="menu-list">
        {regulares.map((item) => (
          <ProductRow
            key={item.id}
            item={item}
            categoria={categoria.id}
            onAnnounce={onAnnounce}
            baseSeleccionada={baseSeleccionada}
          />
        ))}
      </div>
      {categoria.id === 'batidos' && <p className="menu-note">{notaBatidos[idioma]}</p>}
      {(categoria.id === 'pizzas' || categoria.id === 'conos') && <Extras idioma={idioma} t={t} />}
    </div>
  );
}

export default function Menu() {
  const { idioma, t } = useIdioma();
  const [active, setActive] = useState(0);
  const [announcement, setAnnouncement] = useState('');
  const [search, setSearch] = useState('');
  const [baseSeleccionada, setBaseSeleccionada] = useState(0);
  const tabs = useRef([]);
  const wrap = useRef();
  const [indicator, setIndicator] = useState({ x: 0, width: 0 });
  const measure = () => {
    const tab = tabs.current[active];
    if (tab && wrap.current) {
      setIndicator({ x: tab.offsetLeft - wrap.current.scrollLeft, width: tab.offsetWidth });
    }
  };
  useEffect(measure, [active, idioma]);
  useEffect(() => {
    addEventListener('resize', measure);
    return () => removeEventListener('resize', measure);
  });
  const choose = (index) => setActive(index);
  const handleKeys = (event) => {
    let index = active;
    if (event.key === 'ArrowRight') index = (index + 1) % categorias.length;
    else if (event.key === 'ArrowLeft') index = (index - 1 + categorias.length) % categorias.length;
    else return;
    event.preventDefault();
    choose(index);
    tabs.current[index]?.focus();
  };
  const categoria = categorias[active];
  const normalizar = (texto) =>
    texto
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  const termino = normalizar(search.trim());
  const resultados = termino
    ? categorias
        .map((item) => ({
          categoria: item,
          productos: productos[item.id].filter((producto) => {
            const nombre = nombreVisible(producto, idioma);
            const ingredientes = producto.ingredientes?.[idioma] ?? producto.ingredientes?.es ?? '';
            return normalizar(`${nombre} ${ingredientes}`).includes(termino);
          }),
        }))
        .filter((grupo) => grupo.productos.length)
    : [];

  return (
    <section id="menu" className="section menu" aria-labelledby="menu-title">
      <div className="container">
        <h2 id="menu-title">{t('menu.titulo')}</h2>
        <label className="menu-search">
          <span className="sr-only">{t('menu.buscar')}</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={t('menu.buscar')}
            aria-label={t('menu.buscar')}
          />
        </label>
        <div className="menu-layout">
          <div className="menu-main">
            <div className="tabs-sticky">
              <div
                className="tabs"
                role="tablist"
                aria-label={t('menu.categorias')}
                ref={wrap}
                onScroll={measure}
              >
                {categorias.map((item, index) => (
                  <button
                    ref={(element) => (tabs.current[index] = element)}
                    role="tab"
                    aria-selected={index === active}
                    tabIndex={index === active ? 0 : -1}
                    id={`tab-${index}`}
                    aria-controls="menu-panel"
                    key={item.id}
                    onClick={() => choose(index)}
                    onKeyDown={handleKeys}
                  >
                    {item.nombre[idioma] ?? item.nombre.es}
                  </button>
                ))}
                <span
                  className="tabs__indicator"
                  style={{
                    transform: `translateX(${indicator.x}px) scaleX(${indicator.width})`,
                  }}
                />
              </div>
            </div>
            {termino ? (
              <div className="search-results" aria-live="polite">
                {resultados.length ? (
                  resultados.map((grupo) => (
                    <CategoryContent
                      key={grupo.categoria.id}
                      categoria={grupo.categoria}
                      list={grupo.productos}
                      onAnnounce={setAnnouncement}
                      baseSeleccionada={baseSeleccionada}
                      onBaseChange={setBaseSeleccionada}
                    />
                  ))
                ) : (
                  <p>{t('menu.sinResultados')}</p>
                )}
              </div>
            ) : (
              <div id="menu-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
                <CategoryContent
                  categoria={categoria}
                  list={productos[categoria.id]}
                  onAnnounce={setAnnouncement}
                  labelledBy={`tab-${active}`}
                  baseSeleccionada={baseSeleccionada}
                  onBaseChange={setBaseSeleccionada}
                />
              </div>
            )}
          </div>
          <aside className="order-sidebar">
            <PedidoPanel />
          </aside>
        </div>
        <p className="sr-only" aria-live="polite">
          {announcement}
        </p>
      </div>
    </section>
  );
}
