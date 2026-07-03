const CACHE_NAME = 'dalat-night-v1';
const ASSETS = [
  'index.html',
  'logo.png',
  'qr.jpeg',
  'manifest.json'
];

// Pasang Service Worker dan simpan fail dalam memori cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Ambil fail daripada cache jika luar talian
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});