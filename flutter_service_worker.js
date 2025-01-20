'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"main.dart.js": "cc0c028370b7e2adab41a16d9c276cf4",
"flutter_bootstrap.js": "8485d41410b8f09821644427802e23fd",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"index.html": "e9b217982f7bcdb19d8117058da178fe",
"/": "e9b217982f7bcdb19d8117058da178fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "931a27fd88b4deaa5aa8cc78d3910932",
"assets/NOTICES": "281459dffbc9e2f27e521d96708256f2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "4dfd35a706d722c1d9a582c56900be38",
"assets/assets/badminton.jpeg": "0891436d4f1d446d41ca935cda8737f7",
"assets/assets/no_data.png": "eb771e4d8c2e9f4faef25316b815a323",
"assets/assets/no_expense.png": "e7d1e7a2adee9f89ddf33590a346cf84",
"assets/assets/ed-bg.png": "b005efdf4a12d1437a9770ae8ed462a8",
"assets/assets/default_banner.png": "97d66bb2a601e750fcb72df4e1ad74d9",
"assets/assets/ed_astra_dkt.png": "0ac44f68e8e71fba058ea76e425603c7",
"assets/assets/ed_astra_lt.png": "302e7523b3b5a339b2000c8a3c6e5614",
"assets/assets/pussy_cat_lt.png": "de24aca68f943425b45f3dfc7aa53432",
"assets/assets/folder.png": "bd963b2e641bd2e7ae2e799ceb034125",
"assets/assets/badminton.jpg": "7c8dcf062b63d73e9a763f00e060c459",
"assets/assets/background.jpg": "2005b23bf58cb60d7709fdfeddc6bf0f",
"assets/assets/lady_outlined.png": "fa4e3c104e8612bcc9a90df2d5054ca3",
"assets/assets/background_light.jpg": "07fa676921ba3bdc67a94919cdb13b12",
"assets/assets/no_events.png": "5e84b9635677e8c788b4676e938afc0e",
"assets/assets/background_lt.jpeg": "ef835e95114c81ce550fe08b8bb92e6f",
"assets/assets/no_inventory.png": "497b04ddcbd658feb03f265a9d77ce2a",
"assets/assets/bg_lt.jpg": "bcf4d3b5e798a825dba2a441210f3e66",
"assets/assets/person_outlined.png": "072166b07decc640cd88a428e3412513",
"assets/assets/vonisha.jpeg": "dd80982a49324c149aa6fac29eef0436",
"assets/assets/pussy_cat.png": "2f92bdfbb0941b2028c588c5d5de7794",
"assets/assets/404.png": "046670ceac1b546e9e6e3d2a76221bce",
"assets/AssetManifest.json": "23ce18940ba294f6d665f875257658d8",
"assets/AssetManifest.bin": "80a48f5855b4643abc85900b7dbc221e",
"manifest.json": "2c0e9ac8311e0af565050017c1828fd2",
"version.json": "3a1ce95514fddd9a4aaae544eaedf897",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "4b9dbdec7a93738a852de4e33fb925d4",
".git/objects/13/9a969794be97ec81c7d9fe3df1072c3fd725de": "39875a67527a8e3e0e8068a8a5a1ba2a",
".git/objects/6f/ba210af34ae0d85975c15eba33472d5c69cfa1": "5d124d2d287483d2ee1ab122d738891f",
".git/objects/c2/67ecd4855980e309520cb912b876f385de20e7": "48acd0fbfe6c5940ec46dec85092343d",
".git/objects/01/3f2cc2aa23b44eea339f30b2b5353a68517b84": "88fab069a6018a2c48bdb1f2de9b13bf",
".git/objects/01/f72cdb69c7bac6aa41ebe38b826f0bd74edb79": "6403e199512f52591269a63a94c83b9f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/b2/78346c6ccc09c076a7a43f28e0af73aa9aa9b8": "3b8f351f13ee666d10c028a5be739ab2",
".git/objects/7a/30a26be04dac9c69e3da59df10847c2f185260": "14e0465e9b17257019267a25423fd065",
".git/objects/f0/fe31de55813670f45d218a8f47543c68f881bc": "e37579ce42b8e1a9c30e8bef2e9d7b97",
".git/objects/f0/33cbc5a3dd63935e96a4aa62bb5f8ab10fcdb0": "7cc465ebbd84b8ff4ee7b119df81bc47",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/31/db60c9d1128e9645603e7e7bc073402603da18": "d2876c183378bd952443b08ebb551bc2",
".git/objects/12/aff8b30cabcc6ac99649372119965b9f1a579e": "aff5c65db464a7d7ff8a424117b17246",
".git/objects/12/254a6a79e94ade153a72668e782ebf072500db": "c94cddb03afe47f850591fde83f710dd",
".git/objects/e3/3f3b45fe421ca1f2aeff4294622d05d81b5b3a": "8104807c81413268a22a8f711c3050d2",
".git/objects/d5/9a1d5e7d91ca3ab69d54f371cc9a7a7e2887b7": "f26543d17aa5a91affc86216c8a3714d",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/26/cbfe99de52fac6febf7a28df7602047bed9f79": "a17ad9e5274db2483a7ab289646b29ae",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e4/61c528f79be45beef43829de74f476cabaed49": "6545a20381eed281ef9daa4ae501d897",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2e/906ae58c0e4c7c06b14818a93426cf24e974bd": "17eef37640e99400931cc4345e42aa4a",
".git/objects/57/bbf318543913266c202a8ec8e8ea7c2803fde4": "90317c2fa2e094c8efddf3131acf58ce",
".git/objects/57/3400dca3091cd10e285028a3434cf987b181ed": "f5658afe7a3703fc3cf1d3ba3297e453",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/43/46eb77f7ef3ea152790581d2a68812795f27c2": "1e9de266783abbda1abb2991fbc98bd2",
".git/objects/77/a846848cda860756acd44dfb7b39d35418cc18": "ce115daa296901618d7b7b7ac9dcbcbc",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/62/5cbacc6e7d519e19d78acebef7c2b1386886cf": "f10760185817a522318da6de49ddd05b",
".git/objects/8b/23505bae4fcb5658b5c2b29280a54b0e902e8b": "3056d7121cc6d394a8b83510d45ac470",
".git/objects/95/a9ae46033fd3c4f0aa8be1448f1323400bc008": "c26cdc40d8fcaf45b2c02a75e1800319",
".git/objects/a1/e16071c06b80217725da8a300b01a28e3f9c51": "2eec7f946131f85b27468ec2ac406f75",
".git/objects/5f/5604ace52a2bfc130eeb6c30a8da409d3b1094": "c7143c57de9965983dd70104a95a9d3b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/86e68a50b0234b8ed6eb1348059a7e640d0150": "08211b44dc23b9ebc261bd545bed51f6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/22/96b193e2cc2daa3695c626cd51a004527659a3": "04b0b62827c1cb3320e63e3ff45e32f5",
".git/objects/71/e6aab71fd26d8f4a3ed49ce80e6b593dac9784": "e535eb4080f93e4ae51076baad5bcbfa",
".git/objects/68/72783cf6a60d09e0f275a992f887f0981f041c": "4836a5a73cc31376a045594cf03e4d39",
".git/objects/a4/ccb6665b311ea87a0f360195a3486f6d4e6192": "9bcab4be38acc5009a334b6d6d005491",
".git/objects/96/80c9e35d0a55ec9f9f8e5a219ff94fd1f037d5": "a90fc64dca0bcaa30435280a6d95e669",
".git/objects/ea/388308166e7aed4d7ff9fd40abf8781e5beb71": "51230f9020fd27602e188ebf9d790f37",
".git/objects/3b/8691615d9887c380521e033c455a7dae345cf7": "6b62987ccc915989f5805bb26684033b",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/cd/5690414d187fcb5647b080fadbd0160b72c1e3": "eb42cb33f1e69cb44b971277ff5c70ec",
".git/objects/cd/3ef7d4f7d55c1c7e9abab7f561423dcbc4a46a": "039d8010b76983c68bf4552552898fc8",
".git/objects/f4/37b3bbd207b8da4d3641391e6dd3eeca242fc9": "42b4c24c5a78aca8caafdda144e42116",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/c9/08d4b1f60dd47add3f771f602eae6393b730ba": "02ae441dbedf8b8500d5e5719964b8b1",
".git/objects/37/6ca597d3d6d75cd5a145ee812f06383114746a": "b90ed17e68cc7986e34a67981a539f03",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/e8/33c0ecfba742e902d45e8876ba29b92b5f3259": "0754e662cb703c68e89d66689450647e",
".git/objects/33/5b8ff885465454dc61edcdf7736f2f113dc7b4": "2b7d1248d112a659b7cb5235ff2aa0d9",
".git/objects/04/ed0e66f1a95baf3def7b38004248cd835a01b6": "24ac18b1481c64419490b3690ea67f03",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/40/74c2e84bf68a8f047c515ac86c60a3609fb351": "2284f13d77a3770975d214b8f96ffd56",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/3094e49f8f5f8a24e7b0895fb3cec4e457bd74": "70bd16ef66ecdfd89604c8ea75a58f53",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9f0d6c20dad252bd3d8b316cd8de1f99b6f458": "8f70f92b7a2c42b9e38e0c3eab42b787",
".git/objects/4a/7237d8b7fa44c5a2987ba1c599b77d6a6931ad": "cde83726c86199e63167e114bd439eff",
".git/objects/0d/2ef747028fa3db2d55d3d99e33edb72baff7f8": "a2b71bab0eed6135a1d89c0976d09af0",
".git/objects/1d/76e2820a739c03ec99d952ea2b83419be3ada2": "c3a330cb69d90a5b8bb56337b6510adc",
".git/objects/a9/6098b1a3cdc4b828ed7ccd3f92cd46be157d1c": "31d347fae32b57e4b884fb24aca0474a",
".git/objects/08/9fecde5b82fea28c4f59eb151ba99d5483a57e": "6755e914803180b12a43321440d37964",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ff/1ea5bcd364a56637b58e04a7ce1d2a2213c094": "46b7fd3097c62dc1270956795fbda3bf",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/refs/remotes/origins/main": "784a1cf1e9b67e7de3cc2d9e4d769258",
".git/refs/heads/main": "784a1cf1e9b67e7de3cc2d9e4d769258",
".git/index": "f14f6d97576deb14cc8924034bd6c355",
".git/COMMIT_EDITMSG": "ad76098d51b8ef8e6c871009c2e99041",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origins/main": "d1375a6ea124e48f9b62cbd1cebae8ba",
".git/logs/refs/heads/main": "ba843a25c7b7a674f353de68207e7b49",
".git/logs/HEAD": "604444bf3a660954c46e60930e95de4b",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5"};
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
