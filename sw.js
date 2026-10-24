/**
 * AffinityHub - Service Worker for Mobile PWA Support
 * Caches core app shell for instant offline launch on Android and iOS.
 */
const CACHE_NAME = 'affinityhub-cache-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './css/main.css',
  './css/live-session.css',
  './css/cropper.css',
  './css/calendar.css',
  './js/app.js',
  './js/auth-db.js',
  './js/groups.js',
  './js/profile.js',
  './js/live-session.js',
  './js/intergroup.js',
  './js/calendar.js',
  './js/vault.js',
  './js/ai-agenda.js',
  './js/activity.js',
  './js/customize.js',
  './js/qrcode.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).catch(() => {
        if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
