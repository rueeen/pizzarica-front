import Logo from './Logo';
import { whatsappUrl, resumenHorario } from '../data/site';
import '../styles/Footer.css';
export default function Footer({ site }) {
  const horarios = resumenHorario(site.horarios);
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__logo">
          <Logo />
        </div>
        <div>
          <h2>Conversemos</h2>
          <a
            href={`https://www.instagram.com/${site.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram: @{site.instagram}
          </a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            Pedir por WhatsApp
          </a>
        </div>
        <div>
          <h2>Horario</h2>
          {horarios.length ? (
            horarios.map((horario) => <p key={horario}>{horario}</p>)
          ) : (
            <p>Horario por confirmar</p>
          )}
          <p>
            © {new Date().getFullYear()} {site.nombre}
          </p>
        </div>
      </div>
    </footer>
  );
}
