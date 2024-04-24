// service-worker.js
self.addEventListener('install', function(event) {
    console.log('Service Worker instalado');
  });
  
  self.addEventListener('activate', function(event) {
    console.log('Service Worker ativado');
  });
  
  self.addEventListener('push', function(event) {
    console.log('Notificação push recebida');
    const data = event.data.json();
  
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body
      })
    );
  });
  