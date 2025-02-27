// Service Worker para Brasil Tendas PWA

const CACHE_NAME = 'brasil-tendas-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './favicon.png',
  './icons/apple-touch-icon.png',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './icons/maskable-icon.png'
];

// Instalação e cache de recursos estáticos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Limpeza de caches antigos na ativação
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estratégia de cache: Cache First, then Network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - retornar resposta do cache
        if (response) {
          return response;
        }

        // Clone da requisição, pois ela só pode ser usada uma vez
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then(response => {
            // Checar se recebemos uma resposta válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone da resposta, pois ela só pode ser usada uma vez
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                // Excluir URLs com parâmetros de consulta do cache
                if (!event.request.url.includes('?')) {
                  cache.put(event.request, responseToCache);
                }
              });

            return response;
          });
      })
      .catch(() => {
        // Quando offline, tentar servir página offline para navegação
        if (event.request.mode === 'navigate') {
          return caches.match('./offline.html');
        }
      })
  );
}); 