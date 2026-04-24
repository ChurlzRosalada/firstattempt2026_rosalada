/* ============================================================
   AdDU Alumni Portal — Service Worker v7
   Fixed: font fetch failures no longer crash the SW
   ============================================================ */

const CACHE_NAME = 'addu-alumni-v7';
const OFFLINE_URL = '/index.html';

const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/index-Bs9QlD2h.js',
  '/assets/index-DNzm95x0.css',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png',
];

const CDN_ORIGINS = [
  'https://ajax.googleapis.com',
  'https://cdn.jsdelivr.net',
  'https://cdnjs.cloudflare.com',
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
];

// ── Install ──────────────────────────────────────────────────
self.addEventListener('install', event => {
  console.log('[SW] Installing addu-alumni-v7...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Pre-caching app shell');
      return Promise.allSettled(
        PRECACHE_ASSETS.map(url =>
          cache.add(url).catch(err =>
            console.warn('[SW] Pre-cache miss (non-fatal):', url, err.message)
          )
        )
      );
    }).then(() => {
      console.log('[SW] v7 shell cached — app works offline!');
      return self.skipWaiting();
    })
  );
});

// ── Activate ─────────────────────────────────────────────────
self.addEventListener('activate', event => {
  console.log('[SW] Activating v7, clearing old caches...');
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(
        names
          .filter(n => n !== CACHE_NAME)
          .map(n => caches.delete(n))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch ────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;

  // Skip Vite HMR
  if (url.pathname.startsWith('/@vite/') ||
      url.pathname.startsWith('/@fs/') ||
      url.pathname.startsWith('/src/') ||
      url.pathname.startsWith('/node_modules/')) return;

  // Fonts → try network, silently ignore failures (system fonts used as fallback)
  if (url.hostname.includes('fonts.googleapis.com') ||
      url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(fontHandler(request));
    return;
  }

  // Other CDN assets → cache-first
  if (CDN_ORIGINS.some(o => request.url.startsWith(o))) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // All local assets → network-first
  event.respondWith(networkFirst(request));
});

// ── Font handler: never crashes, silently fails offline ───────
async function fontHandler(request) {
  // Try cache first
  const cached = await caches.match(request);
  if (cached) return cached;
  // Try network, cache it, or silently return empty response
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Offline and not cached — return empty so CSS loads without fonts
    // The page uses system font fallbacks defined in :root
    return new Response('', {
      status: 200,
      headers: { 'Content-Type': 'text/css' }
    });
  }
}

// ── Strategies ───────────────────────────────────────────────
async function cacheFirst(req) {
  const cached = await caches.match(req);
  if (cached) {
    fetchAndCache(req).catch(() => {});
    return cached;
  }
  return fetchAndCache(req);
}

async function networkFirst(req) {
  try {
    const res = await fetch(req);
    if (res.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(req, res.clone());
    }
    return res;
  } catch {
    const cached = await caches.match(req);
    if (cached) return cached;

    if (req.mode === 'navigate') {
      const indexCached =
        (await caches.match('/index.html')) ||
        (await caches.match('/'));
      if (indexCached) return indexCached;
      return new Response(
        `<!DOCTYPE html><html><body style="font-family:sans-serif;background:#1a3a6b;
         color:#fff;min-height:100vh;display:flex;align-items:center;justify-content:center;
         flex-direction:column;padding:2rem;text-align:center">
         <h2 style="color:#c9a84c">You're Offline</h2>
         <p>Please visit once while online to enable offline access.</p>
         <button onclick="location.reload()" style="background:#c9a84c;color:#1a3a6b;
           border:none;padding:.7rem 2rem;border-radius:8px;font-weight:700;cursor:pointer">
           Try Again</button></body></html>`,
        { status: 200, headers: { 'Content-Type': 'text/html' } }
      );
    }
    return new Response('Offline', { status: 503 });
  }
}

async function fetchAndCache(req) {
  try {
    const res = await fetch(req);
    if (res.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(req, res.clone());
    }
    return res;
  } catch (err) {
    const cached = await caches.match(req);
    if (cached) return cached;
    throw err;
  }
}

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
