import { useEffect, useState } from 'react';
import Logo from './Logo';
import EstadoHorario from './EstadoHorario';
import { whatsappUrl } from '../data/site';
import { useIdioma } from '../i18n/IdiomaContext';
import '../styles/Hero.css';

const imagePath = (file) => `${import.meta.env.BASE_URL}generated-images/${file}`;
const porcion360 = imagePath('porcion-360.webp');
const porcion720 = imagePath('porcion-720.webp');
const porcion1080 = imagePath('porcion-1080.webp');
export default function Hero({ site }) {
  const { t } = useIdioma();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => setReady(true));
  }, []);
  return (
    <section id="inicio" aria-labelledby="hero-title" className={`hero ${ready ? 'is-ready' : ''}`}>
      <span id="header-sentinel" className="hero__sentinel" />
      <div className="hero__yellow" />
      <div className="hero__teal" />
      <img
        className="hero__pizza"
        src={porcion720}
        srcSet={`${porcion360} 360w, ${porcion720} 720w, ${porcion1080} 1080w`}
        sizes="(min-width: 1400px) 420px, 38vw"
        width="1080"
        height="886"
        fetchPriority="high"
        alt=""
        aria-hidden="true"
      />
      <div className="hero__inner container">
        <div className="hero__panel">
          <Logo className="hero__logo" />
          <div className="food-truck">FOOD TRUCK</div>
          <EstadoHorario site={site} />
        </div>
        <div className="hero__copy">
          <h1 id="hero-title">
            <span>{t('hero.linea1')}</span>
            <span>{t('hero.linea2')}</span>
          </h1>
          <p>{t('hero.apoyo')}</p>
          <div className="hero__actions">
            <a href="#menu" className="button button--light">
              {t('hero.verMenu')}
            </a>
            <a
              href={whatsappUrl()}
              className="button button--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('whatsapp.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
