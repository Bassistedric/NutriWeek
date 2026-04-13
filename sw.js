const CACHE = 'nutriweek-v2';
const BASE_PATH = self.location.pathname.replace(/\/sw\.js$/, '/');
const ASSETS = [
  BASE_PATH,
  `${BASE_PATH}index.html`,
  `${BASE_PATH}manifest.webmanifest`,
  `${BASE_PATH}favicon.ico`,
  `${BASE_PATH}favicon-16.png`,
  `${BASE_PATH}favicon-32.png`,
  `${BASE_PATH}icon-180.png`,
  `${BASE_PATH}icon-192.png`,
  `${BASE_PATH}icon-512.png`,
  `${BASE_PATH}icon-1024.png`
];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(cached => {
  if (cached) return cached;
  return fetch(e.request).then(res => {
    if (!res || res.status !== 200 || res.type === 'opaque') return res;
    const clone = res.clone();
    caches.open(CACHE).then(c => c.put(e.request, clone));
    return res;
  }).catch(() => caches.match(`${BASE_PATH}index.html`));
})));
