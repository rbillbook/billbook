// Minimal service worker so BillBook can be installed. It does not cache data.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
