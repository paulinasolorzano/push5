// Escuchar el evento push
self.addEventListener('push', event => {
    const data = event.data ? event.data.text() : 'Notificación sin datos';
    event.waitUntil(
      self.registration.showNotification('Notificación PWA', {
        body: data,
        icon: 'icon-192x192.png',
      })
    );
  });
  
  // Escuchar el cierre de la notificación
  self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
      clients.openWindow('https://github.com/') // Cambia esta URL por la que prefieras
    );
  });
  
