const cacheName = 'cdt-conf-v1';
const staticAssets = [
  'index.html',
  'app.js',
  'styles.css'
];
async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(req);
    return cachedResponse || fetch(req);
}

self.addEventListener('install', async event => {
    console.log('install event')
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});
  
self.addEventListener('fetch', async event => {
    console.log('fetch event')
    const req = event.request;
    event.respondWith(cacheFirst(req));
});



