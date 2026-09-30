import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { IdiomaProvider } from './i18n/IdiomaContext';
import { PedidoProvider } from './context/PedidoContext';
import './styles/tokens.css';
import './styles/global.css';
createRoot(document.getElementById('root')).render(<React.StrictMode><IdiomaProvider><PedidoProvider><App /></PedidoProvider></IdiomaProvider></React.StrictMode>);
