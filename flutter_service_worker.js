'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9cc13d31517d2a4e02848683c28da634",
"assets/AssetManifest.bin.json": "51be593d5618316c0fadc1774198606e",
"assets/AssetManifest.json": "d1661d8a32cc38c33042b93d37daaa29",
"assets/assets/fonts/NicoMoji/NicoMoji-Regular.ttf": "73c00071d90ecfb78bf0ccdeda529307",
"assets/assets/icon/icon.png": "8047c2d86594ec7bdc1ed41078b2111c",
"assets/assets/images/advanced.png": "1fb0db4658893290028e0481a1d18bd5",
"assets/assets/images/advancedHalf.png": "606e982d0d895a57029d6488c9a3dd13",
"assets/assets/images/advancedTablet.png": "b7f71f46d27cc9f8b183dc2cfdd2b501",
"assets/assets/images/barGraph.png": "f171de6651fe20a45ca2041535320d04",
"assets/assets/images/beginner.png": "80cb1d3f352f76851b56ff86599f54a3",
"assets/assets/images/beginnerHalf.png": "0a12a928da9b8c7c0d2623950fb810b5",
"assets/assets/images/beginnerTablet.png": "e1ce34e35f1f98b9c0a759d2ae5a2aa4",
"assets/assets/images/blocTablet.png": "708dd1c9f98de23ff4ef65d3f6eed5d8",
"assets/assets/images/brokenPointer.png": "e9ebcc12f3d1296c18a308d6d15f829f",
"assets/assets/images/c%2523Tablet.png": "235c853cf6b9c12cafb1fba13f22b13c",
"assets/assets/images/c.png": "bf205f69cf3400c18f69dc5dc0610211",
"assets/assets/images/contactDesc.png": "65e1bcb2436c294b61bf8d76e67df9f3",
"assets/assets/images/cpp.png": "856f68514a1d29ebb932295a4dc2d771",
"assets/assets/images/cTablet.png": "50e9bccdc752e97f6e9c86445d337e69",
"assets/assets/images/customerApp.png": "17cf19b95f8555f2f7c934403b29e0aa",
"assets/assets/images/drag_cursor.png": "bb32a929a89d853bdb43721639041e59",
"assets/assets/images/executiveApp.png": "7e1436224f0a9e3202239a07cf96163d",
"assets/assets/images/flame.png": "c58bbfdb2fb4dd50243a098bbd2ffeef",
"assets/assets/images/FlutterDeveloper.png": "19182376cdbc8ba1ffd70fda18e20d50",
"assets/assets/images/gemMini.png": "d085b3998efb1892212d880ae7bebcb7",
"assets/assets/images/heading_cursor.png": "4ceb1be630975e52a9ced792496a81e3",
"assets/assets/images/homeDesc.png": "f1d27f6969d40a08feb0df2a9efa3c8a",
"assets/assets/images/intermediate.png": "73c2b632d1e3f3a07086d2478d68835f",
"assets/assets/images/intermediateHalf.png": "5aeaec47f7560dec266ae36bd321b812",
"assets/assets/images/intermediateTablet.png": "99bfa15837bd0d9c0094fd8f889d9d80",
"assets/assets/images/logo.png": "0d7e4154b8d196fb7c696fa90ca520dd",
"assets/assets/images/name.png": "ea3f4a2d037fbf265ce8ac77858e4752",
"assets/assets/images/njanDesktop.png": "0db6ed52981d1f7dc49b21845f4687f2",
"assets/assets/images/njanDesktopColor.png": "9b6f60790a9c5c1eeea431496c5aa130",
"assets/assets/images/njanMobile.png": "f3c6320f7328e76388f4c4dc189f54a4",
"assets/assets/images/njanname.png": "ba7dc13ff5476d0de6da06e1bdb3223f",
"assets/assets/images/partnerApp.png": "e136a24612afeda5caa2b0aded2fddf8",
"assets/assets/images/portfolio.png": "8c845e1d3640036638682a67aee1ec57",
"assets/assets/images/projectDesc.png": "e74d1e26493f266d05c88fd5c1246050",
"assets/assets/images/sharedPre.png": "74ef7e6a4c3ae521d43fd3174835b42e",
"assets/assets/images/skillDesc.png": "5304d0397ca431a5b1e4e814c2076700",
"assets/assets/images/spotify.png": "0bcbdca76100fa13ae3069b07e161d79",
"assets/assets/images/sqflite.png": "d231b3d63328bd3e487f6d8dea045ca1",
"assets/assets/images/sqfliteTablet.png": "01e5c8a307c6f8f29066ddd2811e9745",
"assets/assets/images/stateman.png": "4dd0aa884ca249b1ead663c58545dd00",
"assets/assets/images/tap_cursor.png": "64b11fb039c127fbf24777fba1781323",
"assets/assets/images/unity.png": "dc36b1ab1b45f035199e2c329d0705f1",
"assets/assets/lotties/loading.json": "9441556c8765b7496d0b2748ee2f3df8",
"assets/FontManifest.json": "8f4c7b29184e7970e733dffff183f0b6",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "9e51c5481a73d857cbdba4120d4057ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "28e133843edc7086607071820fcaad3d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "53f5b5589e40f3234b6d84bdf64b8e95",
"icons/Icon-192.png": "07916e6f64be5d76776564698de77d0c",
"icons/Icon-512.png": "798e8135a8dd2ca26cc233adda462400",
"icons/Icon-maskable-192.png": "07916e6f64be5d76776564698de77d0c",
"icons/Icon-maskable-512.png": "798e8135a8dd2ca26cc233adda462400",
"index.html": "a35d004de75e2e3eb2c8f0ce21653417",
"/": "a35d004de75e2e3eb2c8f0ce21653417",
"main.dart.js": "396472f19004a9b0ec85c6367164280d",
"manifest.json": "e3501215cb6b3b4916b16134290282b4",
"version.json": "5e2ac632fe1fa0ac0576761f11edc18c"};
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
