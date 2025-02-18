// Importando os estilos primeiro
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import AOS from 'aos';
import App from './App';

// Inicializa o AOS
AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-out-cubic',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
