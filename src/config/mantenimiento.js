const params = new URLSearchParams(window.location.search);
const forzado = params.get('mantenimiento');

const mantenimientoConfigurado =
  String(import.meta.env.VITE_MANTENIMIENTO).trim().toLowerCase() === 'true';

// Este parámetro sirve solo para previsualizar la pantalla; no protege el sitio.
export const enMantenimiento =
  forzado === '1' ? true : forzado === '0' ? false : mantenimientoConfigurado;

export const mensajeMantenimiento =
  import.meta.env.VITE_MANTENIMIENTO_MENSAJE?.trim() || null;
