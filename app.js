// Registrar el Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(error => {
        console.error('Error al registrar el Service Worker:', error);
      });
  }
  
  // Solicitar permiso para notificaciones
  const notifyBtn = document.getElementById('notify-btn');
  notifyBtn.addEventListener('click', () => {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        sendNotification();
      } else {
        alert('Permiso para notificaciones denegado');
      }
    });
  });
  
  // Enviar una notificación
  function sendNotification() {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage('¡Hola desde tu PWA!');
    }
  
    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification('Notificación Local', {
        body: 'Esta es una notificación enviada localmente',
        icon: 'icon-192x192.png',
      });
    });
  }
  