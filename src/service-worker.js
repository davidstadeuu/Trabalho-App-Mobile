self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("app-saudacao-cache").then(cache => {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "ícone-192png",
                "ícone-512.png"
            ]);
        })

    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});