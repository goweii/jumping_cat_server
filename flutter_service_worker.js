'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0260b8656184cc0f4da58936997352ec",
"index.html": "abd32106cc531634b7711e051729d48f",
"/": "abd32106cc531634b7711e051729d48f",
"js/fingerprint2.min.js": "90aa11f39700c7d82563b7ed3f011856",
"main.dart.js": "d817e057706cfbbc8fa75cdd3523f2dc",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "bcaad3c9dde02dc6f3cd90c1c6db884b",
"icons/Icon-192.png": "9d5f4869bad0cddfbb0b9fab8a5815d6",
"icons/Icon-maskable-192.png": "9d5f4869bad0cddfbb0b9fab8a5815d6",
"icons/Icon-maskable-512.png": "f1d8811bcbd3e903a4bb950943d700f7",
"icons/Icon-512.png": "f1d8811bcbd3e903a4bb950943d700f7",
"manifest.json": "2561b026fb4292bf42b120279693df69",
"assets/AssetManifest.json": "4fd9d8c448632f8539576d49e069ef0a",
"assets/NOTICES": "ce4fddcb108ad6a00105d960903934be",
"assets/FontManifest.json": "e7d7351d47797dcc1369e37bbd08d68b",
"assets/AssetManifest.bin.json": "2dd54cf337ff3510e07d8625c19eb660",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "70597ea5b15d57bbec78a5a1e4a7aedf",
"assets/assets/images/players/dog.png": "3bedbeccecaa629b0cf68509b3ea7255",
"assets/assets/images/players/rabbit.png": "2c9e2d96d33bf9bc01db8f686f9c34a0",
"assets/assets/images/players/elephant.png": "30bdc801362fb2c99f024ef1c46138f5",
"assets/assets/images/players/rat.png": "b5791b9ce4a2a9e93dc076ab700680fa",
"assets/assets/images/players/sheep.png": "33b2917d504bd4c61edb086f7981c6b1",
"assets/assets/images/players/panda.png": "8266d59337a6829c928f2176a10e4460",
"assets/assets/images/players/monky.png": "dbcaef0e1c7493fbb6557844127dbcda",
"assets/assets/images/players/moth.png": "30ffbac6778629bea57f1a4fc3f0ae72",
"assets/assets/images/players/cat.png": "7d6142d9c2dd117a7bd083eea4656d21",
"assets/assets/images/players/frog.png": "eb21e8943024964cddb9e24accb1835a",
"assets/assets/images/players/pig.png": "6fb73fe89d262191e16130587e9798d1",
"assets/assets/images/players/chick.png": "7f941b1d541cdd9e3e834a7af8e5d5bf",
"assets/assets/images/boxs/card.png": "f5929930e63938609d882ffb6606e0d4",
"assets/assets/images/boxs/box_white.png": "d769c3aa24e52964deff8901453792a3",
"assets/assets/images/boxs/microwave_oven.png": "c5ac8a2e4cbd25ac7ef67502f91d7955",
"assets/assets/images/boxs/watermelon.png": "79b67dc6e1ac776882751f37499f9170",
"assets/assets/images/boxs/box_black.png": "c2e234184f1aaae822042e223b387721",
"assets/assets/images/boxs/money.png": "32aa4753a2ca6416d6ff9623c8e73e08",
"assets/assets/images/boxs/sushi.png": "4e103bfec37fbba69ba3801583c414c3",
"assets/assets/images/boxs/french_fries.png": "441956fc327c29d464a1e3a87bc6ec05",
"assets/assets/images/boxs/pumpkin.png": "b31e086ebc11e72b74f6897097242e1e",
"assets/assets/images/boxs/chocolate.png": "42baebff42c990d0116f98efada84d20",
"assets/assets/audio/sfx/jump.aac": "3c8a83ea95b5fd9cc0018475354dd510",
"assets/assets/audio/sfx/crash.aac": "54664a6ef6ed3a7b2bdcd0b13f16cbcd",
"assets/assets/audio/sfx/hit.aac": "e8e62280ef5e0c60632c9f37d074d4e7",
"assets/assets/audio/sfx/confirm.aac": "ecb1d0b2bf91a548f7cf766175cdccc7",
"assets/assets/audio/bgm/theme_happy.mp3": "ec4df206160e1842a614a92c5e0b221a",
"assets/assets/audio/bgm/strolling.mp3": "0ed0395b5fec40da139c6544fa6ecad0",
"assets/assets/icons/info.png": "411e80f8296726cda831dc5e8d8fb8ef",
"assets/assets/icons/ranking.png": "fd50d7fc46abd0e674fe47d189fd04cc",
"assets/assets/icons/ad.png": "86e7056f26425c881b6ad275be97c9e7",
"assets/assets/icons/settings.png": "11eec8859bc41e50196da2339aa3f033",
"assets/assets/icons/lock.png": "80f64970708cbee208c9beb6770f9f6f",
"assets/assets/icons/question.png": "21ee8d9ca27e30626031f30921a764bb",
"assets/assets/icons/vibrate.png": "eb2973b6e74c205d9cf0ba3f7cdfa4b2",
"assets/assets/icons/win.png": "a172fb1025d07c9c1f1086891a324477",
"assets/assets/icons/music.png": "40b16020a7df7f0388269c2934d4164f",
"assets/assets/icons/shop.png": "2898e38a2402fc4073f4bbe95d77ba4c",
"assets/assets/icons/user.png": "b65d3ddb2c751acdbc969308ffd2b6c0",
"assets/assets/icons/checked.png": "4d5ca3230e85ea5b72664fc1c8699570",
"assets/assets/icons/sound.png": "6b77b3c0dfa67259a5b65be92a16a5f7",
"assets/assets/icons/earth.png": "b6175185cdaa4098d292dede6fd7ca48",
"assets/assets/icons/share.png": "2826cd43618cb2cfb2b9f1f59a918724",
"assets/assets/icons/no3.png": "c29cb2567edac2e42b2027b9e50cfc72",
"assets/assets/icons/no2.png": "3acfce8bf9bf48297c19bb610fa5b38f",
"assets/assets/icons/next.png": "517e1bbf37b98d544b1bc08255e11567",
"assets/assets/icons/sun.png": "fb1fba7688967833cefb50bb1af6284d",
"assets/assets/icons/no1.png": "4267a118bfddfcf30471fbb82a7616f4",
"assets/assets/icons/back.png": "5be56b1f6a03d91dab81d474179dcb42",
"assets/assets/icons/uncheck.png": "a1c4cbf9667a2835897d48489998e909",
"assets/assets/icons/refresh.png": "595d562743736e0ad96c13435f8b7ccc",
"assets/assets/fonts/fusion-pixel-font-10px-monospaced-ttf/fusion-pixel-10px-monospaced-zh_hans.ttf": "5b47d1e23d621ea84505da3e3e02903f",
"assets/assets/fonts/ark-pixel-font-10px-monospaced-ttf/ark-pixel-10px-monospaced-zh_cn.ttf": "1bbdeb30860ece6e09d8bbc69fba9add",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
