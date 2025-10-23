const CACHE_NAME = 'michelle-sauder-portfolio-v1'
const STATIC_CACHE_URLS = [
  '/',
  '/projects',
  '/services',
  '/about',
  '/contact',
  '/manifest.json',
  '/offline.html',
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_CACHE_URLS))
      .then(() => self.skipWaiting())
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName))
        )
      })
      .then(() => self.clients.claim())
  )
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return
  }

  // Skip external requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse
        }

        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }

            // Clone the response
            const responseToCache = response.clone()

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache)
              })

            return response
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/offline.html')
            }
          })
      })
  )
})

// Background sync for contact form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForm())
  }
})

async function syncContactForm() {
  // Get pending form submissions from IndexedDB
  const pendingSubmissions = await getPendingSubmissions()
  
  for (const submission of pendingSubmissions) {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submission),
      })
      
      // Remove from pending submissions
      await removePendingSubmission(submission.id)
    } catch (error) {
      console.error('Failed to sync contact form submission:', error)
    }
  }
}

// Placeholder functions for IndexedDB operations
async function getPendingSubmissions() {
  // Implement IndexedDB logic to get pending submissions
  return []
}

async function removePendingSubmission(id) {
  // Implement IndexedDB logic to remove submission
}

