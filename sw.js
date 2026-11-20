// kiomio service worker. Paths are relative to this file, so it works at the site root (Netlify)
// and under /kiomio/ (GitHub Pages).
//  - pages (navigation): network first → a refresh always gets the newest version; offline → cached shell
//  - /assets/* (hashed JS, CSS, fonts, images: a new build = new names): cache first, kept forever
//  - everything else (manifest, icons): stale-while-revalidate → instant, and refreshed for next time
//  - API calls are never cached
const CACHE = 'kiomio-v7'
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png']
const INDEX = new URL('./index.html', self.location).pathname
const ASSETS = new URL('./assets/', self.location).pathname

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()))
})

self.addEventListener('activate', (e) => {
  // older caches (incl. the ones from before the rename) are dropped
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

function put(req, res) {
  if (res && res.ok && res.type === 'basic') {
    const copy = res.clone()
    caches.open(CACHE).then((c) => c.put(req, copy))
  }
  return res
}

self.addEventListener('fetch', (e) => {
  const req = e.request
  const url = new URL(req.url)
  if (req.method !== 'GET' || url.origin !== self.location.origin) return
  // API calls (Tooken Club proxy: /api/tooken on Netlify; the Cloudflare Worker is cross-origin and
  // skipped above) always go to the network — never cached, never served stale
  if (url.pathname.startsWith('/api/')) return

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req, { cache: 'no-store' })
        .then((res) => {
          if (res.ok) {
            const copy = res.clone()
            caches.open(CACHE).then((c) => c.put(INDEX, copy))
          }
          return res
        })
        .catch(() => caches.match(INDEX)),
    )
    return
  }

  if (url.pathname.startsWith(ASSETS)) {
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => put(req, res))))
    return
  }

  const net = fetch(req).then((res) => put(req, res))
  e.waitUntil(net.then(() => undefined, () => undefined))
  e.respondWith(caches.match(req).then((hit) => hit || net))
})
