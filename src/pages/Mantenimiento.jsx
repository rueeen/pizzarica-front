import { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import { mensajeMantenimiento } from '../config/mantenimiento';
import { dias, site, whatsappUrl } from '../data/site';
import '../styles/Mantenimiento.css';

const mensajePorDefecto =
  'Estamos afinando el sitio. Mientras tanto puedes escribirnos por WhatsApp y hacer tu pedido igual.';

function diaActualEnZonaHoraria() {
  const diaCorto = new Intl.DateTimeFormat('en-US', {
    timeZone: site.zonaHoraria,
    weekday: 'short',
  }).format(new Date());

  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(diaCorto);
}

function horarioDeHoy() {
  const horario = site.horarios.find(({ dia }) => dia === diaActualEnZonaHoraria());
  if (!horario?.abre || !horario?.cierra) return null;
  return `Horario de hoy (${dias[horario.dia]}): ${horario.abre}–${horario.cierra}`;
}

export default function Mantenimiento() {
  const [visible, setVisible] = useState(false);
  const horario = horarioDeHoy();
  const instagramUrl = site.instagram
    ? `https://www.instagram.com/${site.instagram.replace(/^@/, '')}/`
    : null;

  useEffect(() => {
    const tituloAnterior = document.title;
    const robotsExistente = document.querySelector('meta[name="robots"]');
    const contenidoAnterior = robotsExistente?.getAttribute('content');
    const robots = robotsExistente || document.createElement('meta');

    document.title = 'PizzArica, volvemos pronto';
    robots.name = 'robots';
    robots.content = 'noindex, nofollow';
    if (!robotsExistente) document.head.appendChild(robots);

    const frame = requestAnimationFrame(() => setVisible(true));

    return () => {
      cancelAnimationFrame(frame);
      document.title = tituloAnterior;
      if (robotsExistente) {
        if (contenidoAnterior === null) robots.removeAttribute('content');
        else robots.setAttribute('content', contenidoAnterior);
      } else {
        robots.remove();
      }
    };
  }, []);

  return (
    <main className={`maintenance${visible ? ' is-visible' : ''}`}>
      <div className="maintenance__content">
        <section className="maintenance__panel" aria-label="PizzArica Food Truck">
          <Logo className="maintenance__logo" />
          <p className="maintenance__signature">FOOD TRUCK</p>
        </section>

        <div className="maintenance__copy">
          <h1>Volvemos en un rato</h1>
          <p className="maintenance__message">
            {mensajeMantenimiento || mensajePorDefecto}
          </p>
          {horario && <p className="maintenance__schedule">{horario}</p>}
          <div className="maintenance__actions">
            <a className="button button--whatsapp" href={whatsappUrl()}>
              Pedir por WhatsApp
            </a>
            {instagramUrl && (
              <a className="maintenance__instagram" href={instagramUrl}>
                Ver Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
