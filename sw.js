// Service worker : l'appli entière (pages, code, sons, données, lecteur de tablatures) est gardée
// sur l'appareil dès la première visite, pour jouer hors connexion (métro).
// À la construction, la liste des fichiers et le numéro de version sont écrits ci-dessous.
const VERSION = '87ba5fa064';
const PRECACHE = ["./assets/Montserrat-400-latin-BLhwKU8k.woff2","./assets/Montserrat-500-latin-DRFEGfly.woff2","./assets/Montserrat-600-latin-UVxSCcoG.woff2","./assets/Montserrat-700-latin-BdjcYUrC.woff2","./assets/Montserrat-800-latin-axpkC1rd.woff2","./assets/index-BlkTCZHX.js","./assets/index-CBa_yuxD.css","./capture-worklet.js","./data/exercices.json","./data/parcours.json","./icon-192.png","./icon-512.png","./icon-64.png","./icon-maskable-512.png","./index.html","./manifest.webmanifest","./sons/basse_28.pcm","./sons/basse_31.pcm","./sons/basse_34.pcm","./sons/basse_37.pcm","./sons/basse_40.pcm","./sons/basse_43.pcm","./sons/basse_46.pcm","./sons/basse_49.pcm","./sons/basse_52.pcm","./sons/basse_55.pcm","./sons/cross_stick.pcm","./sons/hat_closed.pcm","./sons/hat_foot.pcm","./sons/hat_open.pcm","./sons/kick.pcm","./sons/piano_48.pcm","./sons/piano_51.pcm","./sons/piano_54.pcm","./sons/piano_57.pcm","./sons/piano_60.pcm","./sons/piano_63.pcm","./sons/piano_66.pcm","./sons/piano_69.pcm","./sons/ride.pcm","./sons/snare.pcm"];
const CACHE = `bass-master-${VERSION}`;

self.addEventListener('install', (e) => {
	e.waitUntil(
		caches.open(CACHE)
			.then((c) => c.addAll(['./', ...PRECACHE].map((u) => new Request(u, { cache: 'reload' }))))
			.then(() => self.skipWaiting()),
	);
});

// Les anciennes versions sont effacées : le cache ne grossit pas d'une mise à jour à l'autre.
self.addEventListener('activate', (e) => {
	e.waitUntil(
		caches.keys()
			.then((keys) => Promise.all(keys.filter((k) => k.startsWith('bass-master-') && k !== CACHE).map((k) => caches.delete(k))))
			.then(() => self.clients.claim()),
	);
});

self.addEventListener('fetch', (e) => {
	const req = e.request;
	const url = new URL(req.url);
	if (req.method !== 'GET' || url.origin !== location.origin) return;
	const put = (res) => {
		if (res && res.ok) {
			const copy = res.clone();
			caches.open(CACHE).then((c) => c.put(req, copy));
		}
		return res;
	};
	// Page et données : le réseau d'abord (toujours la dernière version), le cache sans connexion.
	if (req.mode === 'navigate' || url.pathname.includes('/data/')) {
		e.respondWith(fetch(req).then(put).catch(() => caches.match(req, { ignoreSearch: true })
			.then((hit) => hit || (req.mode === 'navigate' ? caches.match('./') : undefined))));
		return;
	}
	// Code, sons, polices, icônes : le cache d'abord (ces fichiers ne changent pas sans changer de nom).
	e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then(put)));
});
