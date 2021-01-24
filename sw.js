const VERSION = 'v1'

self.addEventListener('install', event => {
  event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
  const request = event.request

  // get

  if (request.method !== 'GET') {
    return
  }

  // search in cache

  event.respondWith(cachedResponse(request))

  // update cache

  event.waitUntil(updateCache(request))
})

async function precache() {
  const cache = await caches.open(VERSION)
  return cache.addAll([
    // '/',
    // '/index.html',
    // '/scripts/index.js',
    // '/scripts/media-player.js',
    // '/scripts/plugins/autoplay.js',
    // '/scripts/plugins/autopause.js',
    // '/css/styles.css',
    // '/assets/test.mp4',
  ])
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION)
  const response = await cache.match(request)
  return response || fetch(request)
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  // Cache.put when status code is 200 
  // Otherwise return a simple promise 
  return response.status === 200 
    ? cache.put(request, response) 
    : new Promise((resolve, reject) => resolve(':D'));    
}