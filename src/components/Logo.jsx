// TODO: reemplazar este fallback por los WebP generados con `npm run logo`
// cuando el canal de entrega permita agregar archivos binarios.
import logoOriginal from '../../img/DIGITAL_STICKER.png';

export default function Logo({ className = '' }) {
  return (
    <img
      className={`brand-logo ${className}`.trim()}
      src={logoOriginal}
      alt="PizzArica Food Truck"
      width="2331"
      height="1162"
    />
  );
}
