import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppRoutes from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)

// index.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(registration => {
      console.log('Service Worker registrado!', registration);
    }).catch(err => {
      console.log('Erro ao registrar Service Worker:', err);
    });
  });

  // window.addEventListener('beforeinstallprompt', (event) => {
  //   // Previne o comportamento padrão do browser de mostrar o prompt de instalação
  //   event.preventDefault();
  //   // Salva o evento para ser usado depois
  //   deferredPrompt = event;
  //   // Ativa um elemento no DOM para indicar que o app pode ser instalado
  //   installButton.style.display = 'block';
  // });
}
