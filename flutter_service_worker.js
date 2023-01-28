'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d58b31d3c6c9051aa664f649cd5fc15f",
"index.html": "c968a83f560e0df63f331d6218de4ad7",
"/": "c968a83f560e0df63f331d6218de4ad7",
"main.dart.js": "146d605f1ebde4c91f9b824a212d4d89",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"README.md": "47d2c55dc7e59332bbc4b1d33f6fef12",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ac99928762d8d829c939276ea40c71ea",
".git/config": "9d17805e91915f2a8882b26652ae76c6",
".git/objects/59/e330021731944db66ecfc085ef485eac0effdf": "e0cbac1afdf24fa6b92328f0b12fc043",
".git/objects/50/b0478528191732ce48fb2d4ebb1d5fc8a59c3e": "6d20c331bd5208fda0de170754258ba3",
".git/objects/3b/93b14290334284dadeaca6d48f7a5c3b2a3d95": "50f00504e7ac4332525672232dc827db",
".git/objects/9b/0eed04f61968e253d720288a525c6c83652f56": "1c89d250cbbccda86a9e2943a5151065",
".git/objects/69/a0c1ad8b9137c801c4ede7a076ada3de758a15": "7e16957ddc2bf56858e13840072f7690",
".git/objects/58/2f39e20eb1ed30f1ded08299cad835e986c5df": "e0d0c23827fcfe65819b766cedf8d275",
".git/objects/d7/8c00359323554dd340223467a63be881f650d2": "83c225e9fd41aa5f0aa14a6e978a21ea",
".git/objects/b3/cf84303ccb22a147db0f315b76e3e0e766efad": "3d5b0cd287614cd03ae031f5640952a3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/7a1301adf5980174754564c05971f43bd623e4": "b76a040e6ed26c34463c0cc51a32c85d",
".git/objects/c1/92f7965eb51e49ca05656f00658d7b93f03e22": "32887a8f68305f834f041c0a766d1854",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/74/b2336846971707848820d236be9598c772043f": "5a20d4edab074f21e7e015120d5c449f",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/28/2397c58685f6790e59322c26e53bc7e5db1585": "66d6b4fac154a7bbe1f7a268b631d8f6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/9f30fa68f23783634b414806bd07327d555796": "652077e8d4780f3692b4f84dd21d1e0d",
".git/objects/75/f2fd484120cb00cc855bb0cefe8cb88756a1ec": "0e07f1cf5a0fc584852aad0abf18fddf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/076d09a986b9a61647979879da6223df1edebc": "b4d52ed6d668d9bb7bacc6d35a4ee2bc",
".git/objects/5d/afe39a1158ab108c22652d4ef53f49fa166a8a": "40d64acdb9937b42b9d9e5dacfa05962",
".git/objects/31/105a0a77e7bc5490e839ace88a9b020f07727f": "6c8873b9d3f07355c3149265a0a7344a",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/5b/a7d344bb229eb2bb104d09f3bd8b5c0874c454": "21432d197d538cb9320bc9c3a4fe4c69",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a0/9131a1792e72f568c3284329fa29006aa79cf1": "1325ec5cf3abd4439ef06f11f8ac039e",
".git/objects/b1/c0cfe07379317edba43fca602aeb4a6119e663": "622abae4a0321e96616b074dbc866243",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/05b250820413d88c6843214fad00b3a52acade": "3a5865cfc4850f7262fdc7593fc30ad1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/6b756927c6772b85af85d307b06daf1a6995a4": "db3c82feaafe4f2a5fb0d2d18f8f9b04",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/4cd1d7b81223737594bebf012e73d85862d479": "d9d9f129795236d9aaa002331a3a56e9",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/ef27bdf96211e729e8284b95041403d2ae1d9e": "b3f12f4c20893fd88240a728371aecf0",
".git/objects/fa/e4fa63b3a54855010c984a8771c77a2b6407a7": "5663579b745d296bf9e46cf53880959d",
".git/objects/f6/990f36866bc5eb668e535fa7d0a9296ac226fd": "518388bbc7d3afe1d59484dd4c1661c2",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/48/a66573592bbbb1e1a600b78eb47378a9b14b80": "942e5e6e01b5f8f279a16073079470d8",
".git/objects/70/175caa026164f2ed1854b0e366998aeeea63c5": "e47cc35ebf8e2c7483e7baad39895805",
".git/objects/4a/ccbc5f25f596f7cb35cd0f49f8585135c6dff5": "e21a97f4e002ac505270838f9a408501",
".git/objects/23/4d1d6b4767cb1423e3a7d60fa958ad92f3f54b": "1412e9f0ce7529b6013568c5d37113e7",
".git/objects/76/f6928525024748e34211bd844c4e16fe8ed8c3": "8153b23a8ec4a66e0740ebe3b9146e8d",
".git/objects/49/b3c632dcc850baa9d8b9d2489821d11a1d3459": "0d0101f14c8ad368ba06d98762e60c37",
".git/objects/2e/14348ac37bbc6dc73f719e39e52398170a4d88": "aa0d47710884ea25d3ef648b6296e670",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b047acece86fdb554c3bcf3ad86d106d",
".git/logs/refs/heads/main": "7470636085d6f511d09f485b44371c86",
".git/logs/refs/remotes/origin/main": "99aa6c33b29c74d638ec6a96469356a8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a979063d87f304f09b453b3f36ad8b08",
".git/refs/remotes/origin/main": "a979063d87f304f09b453b3f36ad8b08",
".git/index": "80ba43cb1140cd42a9ff39193b4f7531",
".git/COMMIT_EDITMSG": "1c9a72f60a5ece79ce151473e35294c4",
"assets/AssetManifest.json": "46f03e99c72852ea8a3af55c643db81d",
"assets/NOTICES": "d9849e14a6494b69052f2e79fbc56934",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "8d51d827ac4afaa1a69e25a1c68b8b61",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/radek.jpg": "a4fb9422c28bec77cc935abc812d71b4",
"assets/assets/images/instagram.png": "127c4cbfc1b7bee65bee853213c93243",
"assets/assets/images/kuba.jpg": "d9a02591b35019e09ee3100273c11e96",
"assets/assets/images/github.png": "6f065974869794f5d836b44925eac8c4",
"assets/assets/images/linked_in.png": "9b540fed0782d4ac5c1876dbf0ea9183",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
