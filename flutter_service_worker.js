'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "dbd9bad0bfa387f77349212cf399f029",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "722456203a3610d82203c625d2de93a8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "948f55e64a1a87581ab30c9ad590127d",
".git/logs/refs/heads/main": "41bb1e1e516d4148510100fb41148bce",
".git/logs/refs/remotes/origin/main": "a957a35f765ea7475f71aee63312f932",
".git/objects/00/050bc91cb56c73c59377cc58e5259ea84f5f07": "7520f2c932d488da9447c6960168f31a",
".git/objects/0a/5133db63b37082bceedf8bc88ec75fcb41c961": "a722e99170108397f3d9302cefdb9fcb",
".git/objects/11/a7ffac975b80ac93ba80878883188f2f063364": "5e3ead82f49316a73ce991a7c8ad6b2c",
".git/objects/15/0cf33e3e1359ed7ae9e0b8df78a8706f094879": "1a04539be7cbb576698349ca68d15894",
".git/objects/18/1137784a54d9fe21749712482e9add1a955970": "c175ff01551cadecd090ac97e0b5a28b",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "84f423c9a5faec2db2842355cbc467f2",
".git/objects/1b/19c2f700bf986ff23a2339a18a174754eb5e3c": "fdb2f3db92b9470ffc7a8f85a6f743bb",
".git/objects/1c/1ad494effce443b55daa263e77deb77eba1f1e": "8e1418cc107f9da47fbc0a667869016b",
".git/objects/1d/02c5453756642be786af1cc905f15ee3148301": "e8aeb3469e66a1294ef46cab7e0caded",
".git/objects/1d/8481aae284c69f9e691e73727982c5a7281f78": "b224e7ae290957924eb07b8911f4f038",
".git/objects/1d/b2f37168397582fac75b5d7d0b1575f43ac331": "a7ccec7f5af0fb3b31cfc309fe24f3e6",
".git/objects/20/080cb7040dda813cf8498cb4b407c03fe332fb": "e8dbe898ba65aaa953b1ebe1ea645e60",
".git/objects/25/cbe2c970afe31bebf68540fb8d7c8487b7d0ce": "e0ae3ccfdf7ebdbb1619fdc16285903f",
".git/objects/28/9559da7ee91acfb8bedff2ece90a5faf260034": "38019311bd53fa516201e0803ebbd8d4",
".git/objects/31/3e00660e1ded649a534c2e1264a5a1bdd77229": "b7bc24f4e5602fc363cb913d8566b349",
".git/objects/31/a12d02e931ab96f6f19d07bb3a269ea476b9f9": "22616b50ac82290e91b2f27360d077bb",
".git/objects/33/cad88f821f278654ec79dbf8a0506a0671d85b": "9f16592b2ebab4a01737ba134e8c947f",
".git/objects/35/d9121aa3de7740b81f5433818a32e99dcbda25": "f0f666b929315c786f27e62bfbe3873f",
".git/objects/39/462f33898207bad266b50aada474e6b6547e1e": "432736757db5b9c6e7eaec25db6bc910",
".git/objects/3b/0ebd91bc3e4b42b11b92d94c68d825165a5415": "8c926e7baa3ad8abe68840071e6fadb9",
".git/objects/4a/41e760da808c9b3045ba92fc2a638011367f74": "2858f4c8a7eb17731529d8c97fdccdde",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "338245ef1a85e95987f94776d0669c97",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "f012ee4cad8be281c15a352ad13865a3",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "8507cbfb5bbb2bd7cb43f3a2c54f1dec",
".git/objects/68/268edfcda988058a8e18f193b81efc6b0d3bd3": "0771c5b5410060e7a28e55b6ca158a5f",
".git/objects/68/6bd4359e666c2868fd5d56eacf8da9dfa4f169": "4af028c03a0c861b9791c33210909de3",
".git/objects/6d/7d1fbfa3113216c53a017d179f38a5372b6635": "4eafaf51a6996b9e25980802b4400f12",
".git/objects/70/6526a97cb032af29c43237c9d2a6b554edb2da": "036da5a6443962feb834d0f0025ad1e2",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "6dc767ec6498faa598b6dd7d00386498",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "927cd5194bebb7d01852dfcb34af7004",
".git/objects/73/c9360309abadf3d4c6f6f4b0fd5e11398d1356": "57e67a7a5eadec4a2e99d54485d9ae83",
".git/objects/74/3059b2face799991d4248e2f2efe6dbf9b52eb": "43502a20a02555a8d331de2fed6262da",
".git/objects/79/fc885559c36b28c46551ae81ebbd590d0ff4f2": "5e4400815bfd2f2f52d69cf58bcc7646",
".git/objects/7e/f4de7bafb03fe927862b1ee162b7a92240591a": "4cb04f33ce460405d4c2d6fa8304721b",
".git/objects/81/d6baecc3f8a78773b3507b05b22dfef1fa7d1f": "c9d15f1bb0a5cafc2436030f295f47ff",
".git/objects/82/e35299cee0be57274605215e355bbe790da1f5": "8975a3defe34241c2d5f835796e26f36",
".git/objects/86/3115518176e3509d8ea25a87359ed82dc4e1a5": "dfaf8d47aff1675479a00e86d36c5744",
".git/objects/87/3f66caf60bd6373f8bd492c4870f1ca422a5a3": "aa86c1da3f09947c9aa07843d3a25892",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/8a/44efc0217082341a22e4799d5aa815b7de69ad": "75988a58a796a41f10d3fbae8b5faf8f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8d/ea43d012ab9668d1425409259d2db30a28d519": "ce0699a6dc6fa9a0cdc778f476344a75",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "5d4a29a9a87b890bf4925183f1d2e3f7",
".git/objects/8f/b56f02daec7dacb4fce8d36dc2a87713ebc34e": "8df28ae52b9910cf3045760f66c2f419",
".git/objects/92/095fb168875b1663cde8125c61fb36b04ce830": "70dec4552a7138b965649b5df20454f4",
".git/objects/97/31a10b26c1b2a97d30b606cc08529063d118cf": "c1f6ca1432e216a65cdd8e06425a748b",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "dc1d3b6ac68817e26c52a2b7aca98a10",
".git/objects/9f/1f72c8745b38276d3fa0e653455045a69c0cac": "fd990ea5ec9e748f492b440f6f909a50",
".git/objects/a3/cfaa8f606b119bde93541ed474aaba55f7c6bb": "40b13ffcea2ef0d5e1214609c7a2521d",
".git/objects/a5/5c21a15b7482777c1fb754296238e85a193522": "1d6dbdbb87fc5490a0990a648d9709ff",
".git/objects/a6/d0e10247858c69fb119d7131da9519a2021f72": "fc9fa9766674658bbc7b09999153fa42",
".git/objects/ac/20bd21767c25384a91fef3c4437bbc1fc9dd8a": "fe36a94fe63fe4015cb7a5aba0cc18ec",
".git/objects/ad/2a83f12729e113dc590ead2601bbfa0e290195": "3a4c935836e2ece048a98d096487073d",
".git/objects/af/7dc5f15b9c3f06dc669e0b15b53b12933253e3": "cf593df7a0ad917a744357bc4357ddee",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b7/f555e33f442bd64a1c31bcf2d3d22b12be6176": "899b0eeb2e1dc6bba16d5179d459a421",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "a488dd5b768f3e95bb3ded676201c413",
".git/objects/bd/c327e81e6bb37e22914b1b3f708bd812afb7ba": "e462c68f61a7ca6083c4fe5ca63e8c40",
".git/objects/bf/86d5ee5dbee9822852b192c2b47150b5e36a5a": "a60805c31743c3fd733a4d612917970d",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "25348682e777a5f424fdf5f7c063238a",
".git/objects/d1/1baef2623a2beaaca59687c31b572dda470d93": "f95f5fe2a0990d51f7ca92f808899eaf",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/da/45877e2bfc98038253532bd8cb850cec754dac": "428b88c0d8acea4742bea0b2e17a610c",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "6a4baf0ee5d7f24d01892e880c87e9b5",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "d8bdf80d3513b078989d6c1f1855b1a3",
".git/objects/e4/52cabe6c2a21d2ad07c840f0a617b8b14b33c0": "b8ab96eac49c7d164a1262d61488ffb3",
".git/objects/eb/3642eafa030f374ae640515463c77550f18aa9": "f598b46d7cfe4c306b6a41d970f10e05",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f3/f99c1baf289a58b068bdbd971e39458550a60a": "66ba75a2632c5afd5c8a9e329269f7d4",
".git/objects/f8/2485d79510d6e5d293cd9801844c06d0d732da": "64306f481b0650c2ffdc257b09206811",
".git/refs/heads/main": "62502f996d7904009026bd65492b52f3",
".git/refs/remotes/origin/main": "62502f996d7904009026bd65492b52f3",
"assets/AssetManifest.bin": "ab81dddf0b5eedd3023199d13a8ecf66",
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
"flutter_bootstrap.js": "726502b296e0cd260b3259d8705143cf",
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
