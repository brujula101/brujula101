const version = "0.0.01";
const cacheName = `brujula-${version}`;
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                `/`,
                `/index.html`,
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
        caches.open(cacheName)
            .then(cache => cache.match(event.request, { ignoreSearch: true }))
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
