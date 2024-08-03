'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b114e06ade567fb8583e07d4630f360f",
".git/config": "5803b0d60e5d83e895a056791542f512",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "143b23848911f214130bbb455622396b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "16bacf0a3dfd7f188d0f85ebb64740ce",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fdadb6dd8284c1c8b648c0ab39391eb4",
".git/logs/refs/heads/master": "fdadb6dd8284c1c8b648c0ab39391eb4",
".git/logs/refs/remotes/origin/master": "7690e0b3629ad0dc5b0ce31d254e424e",
".git/objects/02/02a94dda95eb9cc623841bb9e9ac8a4e65d53a": "866158668140766711c533e088ab26e1",
".git/objects/02/9c008ffadcc8eafadbf8547f7d913245f0e53a": "6908c972ba395946ca8fc39bb615417d",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/09/7c7918c05ec73c7291c3bd75214f31d2fc31ea": "07db95a62e43a786491080005259d338",
".git/objects/0f/b754dc93880d748d7a1e3523cff47b40ffd498": "fdc35b02715d8e07acf70b2c511bc9ca",
".git/objects/11/54cce83839f91e4a63804274503b961d9c0780": "8691dad21f2f8e9167a112c6ded93875",
".git/objects/13/bc8a4b5184484e2fa8e21f7aa186e519c30a5a": "527549de7c790cf64593bdb5a49ebe93",
".git/objects/15/93f7d08a9799f7c58dbc944ab8349a27073e68": "63605a3d22d115da75ce552473524412",
".git/objects/18/db263dbdc958f63f14c4904cb7e2124c766ecc": "f8de7758db8b931ae09f803f670ed09a",
".git/objects/1a/32bc7f2022437f8ae73914fdcf3ba9ad09efd5": "a344d101639bbb261184253c17c2d03c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/703d9e7ab462edd5038c154ce099b3f8d7123c": "4e0989a1b326a2e3ecc191dfda94a1f7",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/29/25d4eb8ed2bf7f4864f63c8e7acc1e1d16c924": "17b97f93a1e26fda9e8400b7a81d2648",
".git/objects/2b/28198410845746f4ba611ab37b913b6d898d45": "0673bd49f82523974fd024aba46fb828",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/31/4447e385219f26e10dc94209033e39d5b7d18d": "8494d5bd62c61fa6843e345aab2412c4",
".git/objects/32/f6c27880c2956dadeb7051c1b188b162c62bca": "2ad204e88aaea01cddbdbbb7870e5350",
".git/objects/34/14fe8ce7849238e482f9ce5658bac1035d960d": "a756be99b5057fb3281037693b4c183a",
".git/objects/34/c62916b0ee54f04216e9ee26b21034e436ad2d": "804fc03c7491daf31485b0dbab297c2e",
".git/objects/39/9b5eb1471d2e5b995f68da0c404a6a127400b2": "898f33863aade43e4cd1bf5562416d28",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3d/21a608ac9b7c2ebd029577be3778054d22a3b2": "ea7286738bafa3077c6ad32d1d391667",
".git/objects/49/fc2a08cd44e30de9d5aea0a1b2d5e611e0a3cf": "d7aa8fd203d9464dbe9f9cc77660a0bc",
".git/objects/4f/aae9d6239f62e79eda6cf2493b4034dc6a74c2": "85cd0659d48603d891df8b7beb4e53ec",
".git/objects/52/766e8c168c6e9e06f3555f65704c4ab88003f2": "19c466b50f8b99d7842df3cb5683e406",
".git/objects/56/df6cb740316724ad2f03e73c12b1ad304acadb": "a32261ddd017c8189673cefb2b33d14d",
".git/objects/5b/669ded2910ee1ad2c08174e0d8066331d80caa": "cd729a715c1ca29dd43c181e809cf2ed",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/d0a6b5f7bf082e0f590f1e3db424164e421be1": "21c4fd74c9060b90c9266a6323894e21",
".git/objects/5e/24e8228c4a5526280cd8cc609de0ad3685c5de": "c8f3f250ec61e552e8c0a85d316b95aa",
".git/objects/77/82d3e378c38086b058ee16445eb0e20251c1ad": "2524ad3ad8e10436f938b710d9af1750",
".git/objects/77/ca8617db4042d2c99e5a2cef6a88c9149b1a4c": "d99e45508e6f2f5329c15b66e739a8ab",
".git/objects/81/4e657890d070fd691e88976ea978c1f79cb8b2": "596bef6f686f1c22766fe7a6193cffc7",
".git/objects/82/055b849c023871d3ad55d7334a22852e7ed0fc": "c733476a7107b66031f19f13e2fe71c6",
".git/objects/82/d8b39ef4c402fac45d9db33757b3d632e95b1c": "bc101cdaa5492419c4c1f9ad39183140",
".git/objects/83/16c8b945db3be58b1b5dc9297ef508ad2e7911": "12be65c2469e1585d678e9551e779df9",
".git/objects/83/f18e7b62b420dbda4af24136077541cc874e6a": "bea6410ad3138b7d4657445df9704504",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/ae424461a768652083839252817754b3d1b6b1": "6d32f3c28957f1748e60af1f7f94c42d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e9ce1cf40d02bda0ab3efbb82ac8a504e6e7d3": "2f4b79357c826701ef4cb729bf208cd5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/2cbbd99c3f3292201533f0247d44346c5c1e86": "173824d274f0c540d78b2fb3df823ec8",
".git/objects/9b/3f35c2ec3be206bc179415fcab5b72f0685246": "1941ac97cbbc167130d9e1e1fdbfe0a5",
".git/objects/a8/8eb4424d4996428038a54f2fc5f71b6fbfe734": "1cf54e12fdf4c021cf609be502cf0961",
".git/objects/b4/c82d2469acf57d24c4b7c4353801804092f4ca": "53f08e4fe9eec768d87ad8e0d4924ef9",
".git/objects/b6/9b0e0f84da5d678dafcc6af88f51dccc4b951d": "fd75f03ec3d6171dd01aa4ac735856e4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/856512fb7029dfac0cce56cf850b8a8cf31f1a": "d25018c96ad7d7195b00ba034bdf4497",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/a7966a815d972ca6410350de61e53e303a5ca3": "4ea139ae7e367999a2c369e0d837c5e3",
".git/objects/bb/0aef487bead6621ddf4f0f749e806aa5905bb9": "d2158d67d6dff1887eb3efebbd7b77ac",
".git/objects/c1/01e23f9ef32e2f48f587c69f66f5c286044c62": "75b702b04121430b0e446bce20167e20",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/1cb04470b3cd79e4f6de995a54c72d00046d64": "f66accf1969837107331b0d40dc9d066",
".git/objects/cc/747e610c5934c12670983020990c70abaf381a": "9d9eb6ed0a8b608c3d290004d08df0b4",
".git/objects/cd/071b0c78fd625fb338531509f89a7245b33e38": "9a37b3bba6235498b85c349822123717",
".git/objects/d1/8c5b99c492a888b26e37b41cbf4c672415a3dd": "b719f35dfd7c4fc37e95a8f42aeedf67",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/68dc7e80e6ec236b2440b92f3949271a725ece": "5db0abc774d325909bd0376e7a2bc296",
".git/objects/d9/3cac2a4313b24fa2996d1e1a92791c9a3b850e": "29a379685112573315f0d117eab8a963",
".git/objects/e2/c2849fdec8360f4d05efcee1fee2d3e4137401": "59951b05212a14c3600147f507b9a01b",
".git/objects/ea/68a670987ea3284223f5568ddcf0b2c1e99069": "58d97fa48f942b18e99dad07ef00e7cc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/7a29e03c5d371322375518c9688de37a15d803": "0041842f35c810dbf25dce8635913b7d",
".git/objects/ee/a10db64d5d82193b16254424d57f653d5a7f7b": "ed924b64041bb93d3aba5e064898ebdd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/6dc6ddd18b2564ae41a51402775a94686c3539": "1d912029642d2d6a71abd4c2d47ca2e2",
".git/objects/f3/79657bdd1574ffd80bbfe3d12618890ce6f9b9": "567a2a9b82cbc64787c71dfd828b8cc8",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f7/248f839f0b393f38b59c915a696618868534a8": "a650b4d1344708271962d8f072d51f6c",
".git/objects/f9/d55b413f73d7d3848132449581b8afa96b7105": "5cd52f9f3289eea96ae434a6d5aa2d3a",
".git/objects/fd/b9b24d49814494e2115862bc72aa191dd0897f": "c1ae50d481b4d07b9a07cd277c76d406",
".git/ORIG_HEAD": "946a93e002e721cf2736739588921043",
".git/refs/heads/master": "c66735d47caebf76d30ceb4c0c058a43",
".git/refs/remotes/origin/master": "c66735d47caebf76d30ceb4c0c058a43",
"assets/AssetManifest.bin": "8a0edb25c8ad12d519f6498c79ccdbaf",
"assets/AssetManifest.bin.json": "6b37badca302f71e65621d8d13a2ae06",
"assets/AssetManifest.json": "c39f0b63238163764508cc3f3bdabea6",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "d4d211485a4c179b85a6dc6eee0df6c9",
"assets/images/k1.png": "a82ec3b624de940f94ba1c922f6f6138",
"assets/images/logo.jpg": "02c0f1fff490c811de6866ecaf233ec5",
"assets/images/logo.png": "4ae957e21f137374e7e9cc2040edb192",
"assets/images/logo2.png": "35efa445228a9862228bfe841f84fdb8",
"assets/images/logo_lang.png": "51f69fa7a216db7ea11d18246fb88245",
"assets/images/logo_weiss.png": "8111c4d641cbf969a6e6a3b84f7657a4",
"assets/images/map.png": "4f5e30c0124767b1e956af461571c223",
"assets/images/map2.png": "af775792a6820bacda30da8f4f11f052",
"assets/NOTICES": "97b34873306d8dadedd9eba7c02d3d90",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "9504c3efe1ce544dfbff54e4f5e7a89e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1a0e4b5e8c49ce944891e809af34db09",
"assets/packages/simple_barcode_scanner/assets/barcode.html": "7a1c45aca573208e15c71b378fdbe027",
"assets/packages/simple_barcode_scanner/assets/html5-qrcode.min.js": "d88d3200cb547c9e86ee972975561dcd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "07c19b69fa5f53224712e8471c00344d",
"canvaskit/canvaskit.wasm": "f312edac4fb4c74852dc1a4f069ab100",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "100d192729121969872b80009e47a5b7",
"canvaskit/chromium/canvaskit.wasm": "f9074e52c7e9c770f1130c6ed9e2677f",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "ab140650f4d351b74f4e6bca3e8dd0e0",
"canvaskit/skwasm.wasm": "7fe5c39ff8466de52fbb0c66473abbe3",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "a368c613217184ea8d9ab4de9f5ec981",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "86530c36d20962071f5a52eef702f43e",
"/": "86530c36d20962071f5a52eef702f43e",
"main.dart.js": "b3a1f3571c1d813e11b58eab0d63474f",
"manifest.json": "40bb1984cb3e7346b85ecc299e27df12",
"version.json": "a8f7d30d1c63c1b106d278086ad64842"};
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
