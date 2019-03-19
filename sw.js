const version = "0.0.01";
const cacheName = `brujula-${version}`;
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                `/`,
				`/favicon.ico`,
				'/css/menu_w3.css',
				'/css/styles.css',
				'/scripts/main.js',
				'/scripts/portfolio.js',
				'/src/Brujula_max.png',
				'/src/dona_runner.png',
				'/src/icon_48.png',
				'/src/icon_72.png',
				'/src/icon_96.png',
				'/src/icon_144.png',
                '/src/icon_192.png',
				'/src/icon_512.png',
				'/src/maternitat.png',
				'/src/relacions_igualitaries.png',
				
            ]).then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
     event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;     // if valid response is found in cache return it
        } else {
          return fetch(event.request)     //fetch from internet
            .then(function(res) {
              return caches.open(CACHE_DYNAMIC_NAME)
                .then(function(cache) {
                  cache.put(event.request.url, res.clone());    //save the response for future
                  return res;   // return the fetched data
                })
            })
            .catch(function(err) {       // fallback mechanism
              return caches.open(CACHE_CONTAINING_ERROR_MESSAGES)
                .then(function(cache) {
                  return cache.match('/offline.html');
                });
            });
        }
      })
  );
});          
