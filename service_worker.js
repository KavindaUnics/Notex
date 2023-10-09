
const static_cache = 'static_version_one';

const dynamic_cache = 'dynamic_version_one';


const assets =['./','./index.html','./news.html','./cartoon.html','./fallback.html','./styles.css','./sponsor.html','./main.js'];


self.addEventListener('install',(evt)=>{

    evt.waitUntil(

        caches.open(static_cache)
    .then((cache)=>{
        console.log("Caching assets...");
        cache.addAll(assets);
    })
    );
    
});

self.addEventListener('activate',(evt)=>{
    evt.waitUntil(
        caches.keys()
        .then((keys)=>{
            return Promise.all(
                keys.filter(key=>key!==static_cache && key!==dynamic_cache)
                .map(key=>caches.delete(key))
            );
        })
    );
});

self.addEventListener('fetch',(evt)=>{
    evt.respondWith(
        caches.match(evt.request)
        .then((cacheRes)=>{
            return cacheRes || fetch(evt.request)
            .then(fetchRes=>{
                return caches.open(dynamic_cache)
                .then(cache=>{
                    cache.put(evt.request.url,fetchRes.clone());
                    return fetchRes;
                });
            });
        }).catch(()=>{
            if(evt.request.url.indexOf('.html')>-1){
                return caches.match('./fallback.html')
            }
            })
    );
})