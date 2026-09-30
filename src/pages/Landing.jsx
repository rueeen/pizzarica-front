import Header from '../components/Header';
import Hero from '../components/Hero';
import Ubicacion from '../components/Ubicacion';
import Menu from '../components/Menu';
import ComoPedir from '../components/ComoPedir';
import LugaresArica from '../components/LugaresArica';
import Galeria from '../components/Galeria';
import Footer from '../components/Footer';
import BotonWhatsApp from '../components/BotonWhatsApp';
import { site } from '../data/site';
import PedidoMovil from '../components/PedidoMovil';
import { useIdioma } from '../i18n/IdiomaContext';
export default function Landing() {
  const { t } = useIdioma();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: site.nombre,
    areaServed: 'Arica, Chile',
    servesCuisine: 'Pizza',
    telephone: `+${site.whatsapp}`,
    url: typeof location === 'undefined' ? undefined : location.href,
  };
  if (site.mostrarUbicacion) {
    jsonLd.address = {
      '@type': 'PostalAddress',
      streetAddress: site.direccion,
      addressLocality: 'Arica',
      addressCountry: 'CL',
    };
  }

  return (
    <>
      <a className="skip-link" href="#contenido">
        {t('a11y.saltar')}
      </a>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <Header />
      <main id="contenido">
        <Hero site={site} />
        {site.mostrarUbicacion && <Ubicacion site={site} />}
        <Menu />
        <LugaresArica />
        <ComoPedir />
        {site.mostrarGaleria && <Galeria site={site} />}
      </main>
      <Footer site={site} />
      <BotonWhatsApp />
      <PedidoMovil />
    </>
  );
}
