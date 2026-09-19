import { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import { mensajeMantenimiento } from '../config/mantenimiento';
import { site } from '../data/site';
import '../styles/Mantenimiento.css';

export default function Mantenimiento() {
  const [visible, setVisible] = useState(false);

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
          <h1>{site.mantenimiento.titulo}</h1>
          <p className="maintenance__message">
            {mensajeMantenimiento || site.mantenimiento.mensaje}
          </p>
        </div>
      </div>
    </main>
  );
}
