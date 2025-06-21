'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ab81dddf0b5eedd3023199d13a8ecf66",
"assets/AssetManifest.bin.json": "856bcbc2b6a064196e4e66c9c6b31bed",
"assets/AssetManifest.json": "9b6b82cdd22618c0c6960d931ec1c158",
"assets/assets/fonts/Tajawal-Black.ttf": "bc674767a78d2808b19a818d9742a4af",
"assets/assets/fonts/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/assets/fonts/Tajawal-Medium.ttf": "3358032dd0994cf4a2116f0b16f80d70",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/images/activity%2520diagram.svg": "0962591a3478d6dc70a9d35b261b87de",
"assets/assets/images/error.png": "41d53bf9b00c55aa0310288d8da1d704",
"assets/assets/images/logo.png": "a114b2d8720b34bc4154b9516a9c490d",
"assets/assets/images/notfound.png": "46b0c0cc1eaa3dcf5f5ce5b63606fbe0",
"assets/assets/images/speaking.png": "543d659357f3a61ef7438bca4f70e208",
"assets/assets/videos/1.mp4": "1283a15aa4ddd74fd987d82cd6feb98f",
"assets/assets/videos/10.mp4": "774c857a011976eb76a72721ec541d45",
"assets/assets/videos/11.mp4": "239e38902cce3eeeaef74648bf07df09",
"assets/assets/videos/12.mp4": "43a2067662742888bdd2a5a1037a3b23",
"assets/assets/videos/13.mp4": "bbd4bebe0755513ede826845aaaab882",
"assets/assets/videos/14.mp4": "db3b0de33d766e88a0a212b5a548dce1",
"assets/assets/videos/15.mp4": "3fd7b2fa26aef6d46a8659b0f97662ff",
"assets/assets/videos/16.mp4": "353dfccf27dc96d9ff6437a7bc802417",
"assets/assets/videos/17.mp4": "91abb5ca304fcdd19963a1256579a7a4",
"assets/assets/videos/18.mp4": "7080fcc0c8031f87b512b3dc7b7fb770",
"assets/assets/videos/19.mp4": "33f1a5f8a86c21e8618467ad6fd5fc88",
"assets/assets/videos/2.mp4": "a5ca7cb464221a22700356e3e36be0ba",
"assets/assets/videos/20.mp4": "79ab356446a8619c176d7e9eb2ae0446",
"assets/assets/videos/21.mp4": "8148622910de2a64287c688708a83319",
"assets/assets/videos/22.mp4": "857d01c471be1721c1fe60b1f9cbd0bf",
"assets/assets/videos/23.mp4": "0bb9115a5a123b94db23c0c39c9001cb",
"assets/assets/videos/3.mp4": "7a149a995117442a691c0ee2327ec954",
"assets/assets/videos/4.mp4": "a840639c0a18b7f6f631c393cd004380",
"assets/assets/videos/5.mp4": "6df2012e56d01ddaf6e52aeb4ff51ebd",
"assets/assets/videos/6.mp4": "c4e63873707f0ed11f27c15bc0cba08e",
"assets/assets/videos/7.mp4": "83edbfca16718950683687f3f08dd5e8",
"assets/assets/videos/8.mp4": "c0fd7adf62aaf7e87f724cc7bcccafb8",
"assets/assets/videos/9.mp4": "5b7301fb158cc12bca7cb5cdbb0e18fe",
"assets/FontManifest.json": "1c70ff06163254b9936311737393bc30",
"assets/fonts/MaterialIcons-Regular.otf": "3ab391eeb1c03befd0983a97d89de4db",
"assets/NOTICES": "c18d21a49f691eeef1230c72e39bc987",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "1c8502a355ef74148972219c5c7fddb2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "16d88beb8663f58ee4c073922323ac24",
"/": "16d88beb8663f58ee4c073922323ac24",
"main.dart.js": "11482298523306673f9fa04befc24f99",
"manifest.json": "f12f9b3ed99c72d99699dc542f5ffb2e",
"version.json": "fa5869b609e25bd1bcd2dad7610c2356"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
