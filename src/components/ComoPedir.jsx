import { useEffect, useRef, useState } from 'react';
import { whatsappUrl } from '../data/site';
import { useIdioma } from '../i18n/IdiomaContext';
import '../styles/ComoPedir.css';
export default function ComoPedir() {
  const { t } = useIdioma();
  const ref = useRef(),
    [visible, setVisible] = useState(false);
  const pasos = [t('pedido.paso1'), t('pedido.paso2'), t('pedido.paso3')];
  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={ref}
      id="como-pedir"
      className={`section order ${visible ? 'is-visible' : ''}`}
      aria-labelledby="order-title"
    >
      <div className="order__panel container">
        <h2 id="order-title">{t('pedido.comoPedir')}</h2>
        <div className="steps">
          <span className="steps__line" aria-hidden="true" />
          {pasos.map((paso, i) => (
            <div className="step" style={{ '--delay': `${i * 400}ms` }} key={paso}>
              <span>{i + 1}</span>
              <p>{paso}</p>
            </div>
          ))}
        </div>
        <a
          className="button button--whatsapp"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('whatsapp.cta')}
        </a>
      </div>
    </section>
  );
}
