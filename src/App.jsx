import { enMantenimiento } from './config/mantenimiento';
import Landing from './pages/Landing';
import Mantenimiento from './pages/Mantenimiento';

export default function App() {
  if (enMantenimiento) return <Mantenimiento />;
  return <Landing />;
}
