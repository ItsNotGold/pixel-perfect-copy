// public/sw.js

const CACHE_NAME = 'verbflow-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  // Note: App assets like JS and CSS are typically auto-generated with hashes.
  // A more robust service worker would have a build step to inject these filenames.
  // For this implementation, we'll rely on the browser fetching them and the 'fetch' event caching them dynamically.
];

// Install event: opens a cache and adds the core app shell files to it.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch(error => {
        console.error('Service Worker: Failed to cache app shell', error);
      })
  );
});

// Activate event: cleans up old caches.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event: serves assets from the cache first (cache-first strategy).
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // If the request is in the cache, return it.
        if (response) {
          return response;
        }

        // Otherwise, fetch the request from the network.
        return fetch(event.request).then((networkResponse) => {
          // And cache the new response for future use.
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
      .catch(error => {
        console.error('Service Worker: Error fetching and caching new data', error);
        // You could return a fallback offline page here if you had one.
      })
  );
});
