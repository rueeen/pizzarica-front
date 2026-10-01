import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { idiomas, textos } from './textos';

const STORAGE_KEY = 'pizzarica_idioma';
const soportados = idiomas.map(({ codigo }) => codigo);
const IdiomaContext = createContext(null);

function idiomaInicial() {
  if (typeof window === 'undefined') return 'es';
  const guardado = localStorage.getItem(STORAGE_KEY);
  if (soportados.includes(guardado)) return guardado;
  const navegador = navigator.language?.split('-')[0].toLowerCase();
  return soportados.includes(navegador) ? navegador : 'es';
}

export function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState(idiomaInicial);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, idioma);
    document.documentElement.lang = idioma;
  }, [idioma]);
  const value = useMemo(
    () => ({
      idioma,
      setIdioma,
      t: (clave) => textos[idioma]?.[clave] ?? textos.es[clave] ?? clave,
    }),
    [idioma],
  );
  return <IdiomaContext.Provider value={value}>{children}</IdiomaContext.Provider>;
}

export function useIdioma() {
  const context = useContext(IdiomaContext);
  if (!context) throw new Error('useIdioma debe usarse dentro de IdiomaProvider');
  return context;
}
