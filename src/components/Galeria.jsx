import Logo from './Logo';
import { useIdioma } from '../i18n/IdiomaContext';
import '../styles/Galeria.css';
export default function Galeria({ site }) {
  const { t } = useIdioma();
  const fotos = site.galeria.filter((foto) => foto?.src);

  if (fotos.length < 3) return null;

  return (
    <section className="section gallery" aria-labelledby="gallery-title">
      <div className="container">
        <h2 id="gallery-title">{t('galeria.titulo')}</h2>
        <div className="gallery__grid">
          {fotos.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <Logo className="gallery__watermark" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
