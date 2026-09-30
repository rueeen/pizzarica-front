import { useEffect, useRef, useState } from 'react';
import { useIdioma } from '../i18n/IdiomaContext';
import { idiomas } from '../i18n/textos';

export default function SelectorIdioma({ mobile = false }) {
  const { idioma, setIdioma, t } = useIdioma();
  const [abierto, setAbierto] = useState(false);
  const root = useRef(null), opciones = useRef([]);
  useEffect(() => {
    const fuera = event => !root.current?.contains(event.target) && setAbierto(false);
    const escape = event => event.key === 'Escape' && setAbierto(false);
    document.addEventListener('pointerdown', fuera); document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', fuera); document.removeEventListener('keydown', escape); };
  }, []);
  const elegir = codigo => { setIdioma(codigo); setAbierto(false); };
  const teclas = event => {
    const actual = idiomas.findIndex(item => item.codigo === idioma);
    if (!['ArrowDown','ArrowUp','ArrowRight','ArrowLeft'].includes(event.key)) return;
    event.preventDefault();
    const paso = ['ArrowDown','ArrowRight'].includes(event.key) ? 1 : -1;
    const siguiente = (actual + paso + idiomas.length) % idiomas.length;
    elegir(idiomas[siguiente].codigo); opciones.current[siguiente]?.focus();
  };
  if (mobile) return <div className="language-mobile" aria-label={t('idioma.selector')}>{idiomas.map(item => <button key={item.codigo} aria-pressed={idioma === item.codigo} onClick={() => elegir(item.codigo)}>{item.codigo.toUpperCase()}</button>)}</div>;
  return <div className="language" ref={root}><button className="language__trigger" aria-haspopup="listbox" aria-expanded={abierto} aria-label={t('idioma.selector')} onClick={() => setAbierto(value => !value)}>{idioma.toUpperCase()}</button><div className={`language__menu ${abierto ? 'is-open' : ''}`} role="listbox" aria-label={t('idioma.selector')} onKeyDown={teclas}>{idiomas.map((item,index) => <button ref={node => opciones.current[index] = node} key={item.codigo} role="option" aria-selected={idioma === item.codigo} tabIndex={abierto ? 0 : -1} onClick={() => elegir(item.codigo)}>{item.nombre}</button>)}</div></div>;
}
